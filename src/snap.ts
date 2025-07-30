import type { SheetSnapPoint } from './types';
import { isAscendingOrder } from './utils';

/**
 * Convert negative / percentage snap points to absolute values
 *
 * Example output:
 *
 * ```json
 * [
 *     {
 *         "snapIndex": 0, // <-- bottom snap point
 *         "snapValue": 0,
 *         "snapValueY": 810
 *     },
 *     {
 *         "snapIndex": 1,
 *         "snapValue": 170,
 *         "snapValueY": 640
 *     },
 *     {
 *         "snapIndex": 2,
 *         "snapValue": 405,
 *         "snapValueY": 405
 *     },
 *     {
 *         "snapIndex": 3,
 *         "snapValue": 760,
 *         "snapValueY": 50
 *     },
 *     {
 *         "snapIndex": 4, // <-- top snap point
 *         "snapValue": 810,
 *         "snapValueY": 0
 *     }
 * ]
 * ```
 */
export function computeSnapPoints({
  snapPointsProp,
  sheetHeight,
}: {
  snapPointsProp: number[];
  sheetHeight: number;
}): SheetSnapPoint[] {
  if (sheetHeight <= 0) {
    console.warn(
      `Sheet height is ${sheetHeight}, cannot compute snap points. ` +
        'Make sure the sheet is mounted and has a valid height.'
    );
    return [];
  }

  const snapPointValues = snapPointsProp.map((point) => {
    // Percentage values e.g. between 0.0 and 1.0
    if (point > 0 && point <= 1) {
      return Math.round(point * sheetHeight);
    }

    return point < 0 ? sheetHeight + point : point; // negative values
  });

  console.assert(
    isAscendingOrder(snapPointValues),
    `Snap points need to be in ascending order got: [${snapPointsProp.join(', ')}]`
  );

  // Make sure all snap points are within the sheet height
  snapPointValues.forEach((snap) => {
    if (snap < 0 || snap > sheetHeight) {
      console.warn(
        `Snap point ${snap} is outside of the sheet height ${sheetHeight}. ` +
          'This can cause unexpected behavior. Consider adjusting your snap points.'
      );
    }
  });

  if (!snapPointValues.includes(sheetHeight)) {
    console.warn(
      'Snap points do not include the sheet height.' +
        'Please include `1` as the last snap point or it will be included automatically.' +
        'This is to ensure the sheet can be fully opened.'
    );
    snapPointValues.push(sheetHeight);
  }

  return snapPointValues.map((snap, index) => ({
    snapIndex: index,
    snapValue: snap, // Absolute value from the bottom of the sheet
    snapValueY: sheetHeight - snap, // Y value is inverted as `y = 0` means sheet is at the top
  }));
}

function findClosestSnapPoint(snapPoints: SheetSnapPoint[], currentY: number) {
  return snapPoints.reduce((closest, snap) =>
    Math.abs(snap.snapValueY - currentY) <
    Math.abs(closest.snapValueY - currentY)
      ? snap
      : closest
  );
}

export function handleFastDownwardFlick({
  dragDirection,
  dragDistance,
  currentY,
  snapPoints,
  sheetHeight,
}: {
  dragDirection: 'up' | 'down';
  dragDistance: number;
  currentY: number;
  snapPoints: SheetSnapPoint[];
  sheetHeight: number;
}) {
  if (dragDirection === 'down') {
    // Check if we should close based on distance
    const draggedSignificantDistance = dragDistance > sheetHeight * 0.3;

    if (draggedSignificantDistance) {
      // Close the sheet if dragged far enough
      return {
        yTo: sheetHeight,
        snapIndex: undefined,
      };
    }

    // Find the next snap point down (higher Y value)
    const closestSnapDown = snapPoints
      .slice()
      .reverse()
      .find((s) => s.snapValueY > currentY);

    if (closestSnapDown) {
      // Go to next snap point
      return {
        yTo: closestSnapDown.snapValueY,
        snapIndex: closestSnapDown.snapIndex,
      };
    } else {
      // No snap point below, close
      return {
        yTo: sheetHeight,
        snapIndex: undefined,
      };
    }
  } else {
    // Flicked down but net movement was up, go to closest snap point in either direction
    const closestSnap = findClosestSnapPoint(snapPoints, currentY);

    return {
      yTo: closestSnap.snapValueY,
      snapIndex: closestSnap.snapIndex,
    };
  }
}

export function handleFastUpwardFlick({
  dragDirection,
  currentY,
  snapPoints,
}: {
  dragDirection: 'up' | 'down';
  currentY: number;
  snapPoints: SheetSnapPoint[];
}) {
  if (dragDirection === 'up') {
    // Find the next snap point up (lower Y means higher in the sheet position)
    const closestSnapUp = snapPoints.find((s) => s.snapValueY < currentY);

    if (closestSnapUp) {
      return {
        yTo: closestSnapUp.snapValueY,
        snapIndex: closestSnapUp.snapIndex,
      };
    } else {
      // Already at top, stay there
      return {
        yTo: snapPoints[snapPoints.length - 1].snapValueY,
        snapIndex: snapPoints.length - 1,
      };
    }
  } else {
    // Flicked up but net movement was down, go to closest snap point in either direction
    const closestSnap = findClosestSnapPoint(snapPoints, currentY);

    return {
      yTo: closestSnap.snapValueY,
      snapIndex: closestSnap.snapIndex,
    };
  }
}

export function handleLowVelocityDragDown({
  currentY,
  currentSnapY,
  snapPoints,
  sheetHeight,
  dragCloseThreshold,
}: {
  currentY: number;
  currentSnapY: number;
  snapPoints: SheetSnapPoint[];
  sheetHeight: number;
  dragCloseThreshold: number;
}) {
  // Find the closest snap point down (higher Y value)
  const closestSnapDown = snapPoints
    .slice()
    .reverse()
    .find((s) => s.snapValueY > currentSnapY);

  if (closestSnapDown) {
    const midpoint =
      currentSnapY + (closestSnapDown.snapValueY - currentSnapY) * 0.5;

    if (currentY > midpoint) {
      // Past midpoint, go to next snap point
      return {
        yTo: closestSnapDown.snapValueY,
        snapIndex: closestSnapDown.snapIndex,
      };
    } else {
      // Stay at current snap point
      return {
        yTo: currentSnapY,
        snapIndex: undefined,
      };
    }
  } else {
    // No snap point below, check if we should close
    if (currentY > sheetHeight * dragCloseThreshold) {
      // Close the sheet if dragged far enough
      return {
        yTo: sheetHeight,
        snapIndex: undefined,
      };
    }
    // Otherwise, stay at current snap point
    return {
      yTo: currentSnapY,
      snapIndex: undefined,
    };
  }
}

export function handleLowVelocityDragUp({
  currentY,
  currentSnapY,
  snapPoints,
}: {
  currentY: number;
  currentSnapY: number;
  snapPoints: SheetSnapPoint[];
}) {
  const nextSnapUp = snapPoints.find((s) => s.snapValueY < currentSnapY);

  if (nextSnapUp) {
    const midpoint =
      currentSnapY - (currentSnapY - nextSnapUp.snapValueY) * 0.5;

    if (currentY < midpoint) {
      // Past midpoint, go to next snap point
      return {
        yTo: nextSnapUp.snapValueY,
        snapIndex: nextSnapUp.snapIndex,
      };
    } else {
      // Stay at current snap point
      return {
        yTo: currentSnapY,
        snapIndex: undefined,
      };
    }
  } else {
    // Already at top
    return {
      yTo: snapPoints[snapPoints.length - 1].snapValueY,
      snapIndex: 0,
    };
  }
}

export function handleLowVelocityDrag({
  dragDirection,
  currentY,
  snapPoints,
  sheetHeight,
  currentSnap,
  dragCloseThreshold,
}: {
  dragDirection: 'up' | 'down';
  currentY: number;
  snapPoints: SheetSnapPoint[];
  sheetHeight: number;
  currentSnap?: number;
  dragCloseThreshold: number;
}) {
  // Find the two closest snap points
  const sortedByDistance = snapPoints
    .map((snap, index) => ({
      snapY: snap.snapValueY,
      index,
      distance: Math.abs(snap.snapValueY - currentY),
    }))
    .sort((a, b) => a.distance - b.distance);

  const closest = sortedByDistance[0];
  const secondClosest = sortedByDistance[1];

  if (secondClosest) {
    // Check if we're past the midpoint between current snap and the next one
    const currentSnapY =
      currentSnap !== undefined ? snapPoints[currentSnap].snapValueY : null;

    if (currentSnapY !== null) {
      if (dragDirection === 'down') {
        return handleLowVelocityDragDown({
          currentY,
          currentSnapY,
          snapPoints,
          sheetHeight,
          dragCloseThreshold,
        });
      } else {
        return handleLowVelocityDragUp({
          currentY,
          currentSnapY,
          snapPoints,
        });
      }
    } else {
      // Fallback to closest snap point
      return {
        yTo: closest.snapY,
        snapIndex: closest.index,
      };
    }
  } else {
    // Only one snap point or fallback
    return {
      yTo: closest.snapY,
      snapIndex: closest.index,
    };
  }
}

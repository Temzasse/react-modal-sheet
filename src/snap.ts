import type { SheetDetent } from './types';
import { getClosest, inDescendingOrder } from './utils';

/**
 * Make sure the snap point is not out of bounds.
 * Snap points cannot be negative - `0` means the sheet is fully open.
 */
export function validateSnapTo({
  snapTo,
  sheetHeight,
}: {
  snapTo: number;
  sheetHeight: number;
}) {
  if (snapTo < 0) {
    console.warn(
      `Snap point is out of bounds. Sheet height is ${sheetHeight} but snap point is ${sheetHeight + Math.abs(snapTo)}.`
    );
  }

  return Math.max(Math.round(snapTo), 0);
}

/**
 * Get the Y value of the given snap point. This can be passed to the `animate`
 * function to animate the sheet to the given snap point.
 */
export function getSnapY({
  sheetHeight,
  snapPoints,
  snapIndex,
}: {
  sheetHeight: number;
  snapPoints: number[];
  snapIndex: number;
}) {
  const snapPoint = snapPoints[snapIndex];

  if (snapPoint === undefined) {
    console.warn(
      `Invalid snap index ${snapIndex}. Snap points are: [${snapPoints.join(', ')}]`
    );
    return null;
  }

  const y = validateSnapTo({ snapTo: sheetHeight - snapPoint, sheetHeight });

  return y;
}

/**
 * Convert negative / percentage snap points to absolute values
 */
export function computeSnapPoints({
  snapPointsProp,
  sheetHeight,
}: {
  snapPointsProp: number[];
  sheetHeight: number;
}) {
  const snapPointValues = snapPointsProp.map((point) => {
    // Percentage values e.g. between 0.0 and 1.0
    if (point > 0 && point <= 1) {
      return Math.round(point * sheetHeight);
    }

    return point < 0 ? sheetHeight + point : point; // negative values
  });

  console.assert(
    inDescendingOrder(snapPointValues) || sheetHeight === 0,
    `Snap points need to be in descending order got: [${snapPointsProp.join(', ')}]`
  );

  return snapPointValues;
}

function findClosestSnapPoint(snapYValues: number[], currentY: number) {
  return snapYValues.reduce((closest, snapY) =>
    Math.abs(snapY - currentY) < Math.abs(closest - currentY) ? snapY : closest
  );
}

export function handleFastDownwardFlick({
  dragDirection,
  dragDistance,
  currentY,
  snapYValues,
  sheetHeight,
}: {
  dragDirection: 'up' | 'down';
  dragDistance: number;
  currentY: number;
  snapYValues: number[];
  sheetHeight: number;
}) {
  if (dragDirection === 'down') {
    // Find the next snap point in the direction of the flick
    const nextSnapIndex = snapYValues.findIndex((y) => y > currentY);

    if (nextSnapIndex !== -1) {
      // Check if we should close based on distance
      const draggedSignificantDistance = dragDistance > sheetHeight * 0.3;

      if (draggedSignificantDistance) {
        // Close the sheet if dragged far enough
        return { yTo: sheetHeight, snapIndex: undefined };
      } else {
        // Go to next snap point
        const nextSnapY = snapYValues[nextSnapIndex];
        return { yTo: nextSnapY, snapIndex: snapYValues.indexOf(nextSnapY) };
      }
    } else {
      // No snap point below, close
      return { yTo: sheetHeight, snapIndex: undefined };
    }
  } else {
    // Flicked down but net movement was up, go to closest snap point
    const closestSnapY = findClosestSnapPoint(snapYValues, currentY);
    return { yTo: closestSnapY, snapIndex: snapYValues.indexOf(closestSnapY) };
  }
}

export function handleFastUpwardFlick({
  dragDirection,
  currentY,
  snapYValues,
}: {
  dragDirection: 'up' | 'down';
  currentY: number;
  snapYValues: number[];
}) {
  if (dragDirection === 'up') {
    // Find the previous snap point in the direction of the flick
    const prevSnapIndex = [...snapYValues]
      .reverse()
      .findIndex((y) => y < currentY);

    if (prevSnapIndex !== -1) {
      // Return the Y value of the previous snap point
      const actualIndex = snapYValues.length - 1 - prevSnapIndex;
      return { yTo: snapYValues[actualIndex], snapIndex: actualIndex };
    } else {
      // Already at top, stay there
      return { yTo: snapYValues[0], snapIndex: 0 };
    }
  } else {
    // Flicked up but net movement was down, go to closest snap point
    const closestSnapY = findClosestSnapPoint(snapYValues, currentY);
    return { yTo: closestSnapY, snapIndex: snapYValues.indexOf(closestSnapY) };
  }
}

export function handleLowVelocityDragDown({
  currentY,
  currentSnapY,
  snapYValues,
  sheetHeight,
  dragCloseThreshold,
}: {
  currentY: number;
  currentSnapY: number;
  snapYValues: number[];
  sheetHeight: number;
  dragCloseThreshold: number;
}) {
  const midpointThreshold = 0.5;
  const nextSnapDownY = snapYValues.find((y) => y > currentSnapY);

  if (nextSnapDownY) {
    const midpoint =
      currentSnapY + (nextSnapDownY - currentSnapY) * midpointThreshold;

    if (currentY > midpoint) {
      // Past midpoint, go to next snap point
      return {
        yTo: nextSnapDownY,
        snapIndex: snapYValues.indexOf(nextSnapDownY),
      };
    } else {
      // Stay at current snap point
      return { yTo: currentSnapY, snapIndex: undefined };
    }
  } else {
    // No snap point below, check if should close
    const lastSnapY = snapYValues[snapYValues.length - 1];
    const distanceFromLast = currentY - lastSnapY;
    const shouldClose = distanceFromLast > sheetHeight * dragCloseThreshold;

    if (shouldClose) {
      return { yTo: sheetHeight, snapIndex: undefined };
    } else {
      return { yTo: lastSnapY, snapIndex: snapYValues.length - 1 };
    }
  }
}

export function handleLowVelocityDragUp({
  currentY,
  currentSnapY,
  snapYValues,
}: {
  currentY: number;
  currentSnapY: number;
  snapYValues: number[];
}) {
  const midpointThreshold = 0.5;
  const nextSnapUpY = [...snapYValues].reverse().find((y) => y < currentSnapY);

  if (nextSnapUpY) {
    const midpoint =
      currentSnapY - (currentSnapY - nextSnapUpY) * midpointThreshold;

    if (currentY < midpoint) {
      // Past midpoint, go to next snap point
      return { yTo: nextSnapUpY, snapIndex: snapYValues.indexOf(nextSnapUpY) };
    } else {
      // Stay at current snap point
      return { yTo: currentSnapY, snapIndex: undefined };
    }
  } else {
    // Already at top
    return { yTo: snapYValues[0], snapIndex: 0 };
  }
}

export function handleLowVelocityDrag({
  dragDirection,
  currentY,
  snapYValues,
  sheetHeight,
  snapPoints,
  currentSnap,
  dragCloseThreshold,
}: {
  dragDirection: 'up' | 'down';
  currentY: number;
  snapYValues: number[];
  sheetHeight: number;
  snapPoints: number[];
  currentSnap: number;
  dragCloseThreshold: number;
}) {
  // Find the two closest snap points
  const sortedByDistance = snapYValues
    .map((y, index) => ({ snapY: y, index, distance: Math.abs(y - currentY) }))
    .sort((a, b) => a.distance - b.distance);

  const closest = sortedByDistance[0];
  const secondClosest = sortedByDistance[1];

  if (secondClosest) {
    // Check if we're past the midpoint between current snap and the next one
    const currentSnapY = getSnapY({
      sheetHeight,
      snapPoints,
      snapIndex: currentSnap,
    });

    if (currentSnapY !== null) {
      if (dragDirection === 'down') {
        return handleLowVelocityDragDown({
          currentY,
          currentSnapY,
          snapYValues,
          sheetHeight,
          dragCloseThreshold,
        });
      } else {
        return handleLowVelocityDragUp({
          currentY,
          currentSnapY,
          snapYValues,
        });
      }
    } else {
      // Fallback to closest snap point
      return { yTo: closest.snapY, snapIndex: closest.index };
    }
  } else {
    // Only one snap point or fallback
    return { yTo: closest.snapY, snapIndex: closest.index };
  }
}

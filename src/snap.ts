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
  if (snapPointsProp[0] !== 0) {
    console.error(
      'First snap point should be 0 to ensure the sheet can be fully closed. ' +
        `Got: [${snapPointsProp.join(', ')}]`
    );
    snapPointsProp.unshift(0);
  }

  if (snapPointsProp[snapPointsProp.length - 1] !== 1) {
    console.error(
      'Last snap point should be 1 to ensure the sheet can be fully opened. ' +
        `Got: [${snapPointsProp.join(', ')}]`
    );
    snapPointsProp.push(1);
  }

  if (sheetHeight <= 0) {
    console.error(
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

function findClosestSnapPoint({
  snapPoints,
  currentY,
}: {
  snapPoints: SheetSnapPoint[];
  currentY: number;
}) {
  return snapPoints.reduce((closest, snap) =>
    Math.abs(snap.snapValueY - currentY) <
    Math.abs(closest.snapValueY - currentY)
      ? snap
      : closest
  );
}

function findNextSnapPointInDirection({
  y,
  snapPoints,
  dragDirection,
}: {
  y: number;
  snapPoints: SheetSnapPoint[];
  dragDirection: 'up' | 'down';
}) {
  // NOTE: lower Y means higher in the sheet position!
  if (dragDirection === 'down') {
    /**
     * Example:
     *
     * [
     *   { snapIndex: 0, snapValueY: 810 },
     *   { snapIndex: 1, snapValueY: 640 },
     *   { snapIndex: 2, snapValueY: 405 }, <-- next down
     *   ------------- Y = 60 ------------
     *   { snapIndex: 3, snapValueY: 50 },
     *   { snapIndex: 4, snapValueY: 0 },
     * ]
     */
    return snapPoints
      .slice()
      .reverse()
      .find((s) => s.snapValueY > y);
  } else {
    /**
     * Example:
     * [
     *   { snapIndex: 0, snapValueY: 810 },
     *   { snapIndex: 1, snapValueY: 640 },
     *   { snapIndex: 2, snapValueY: 405 },
     *   ------------- Y = 60 ------------
     *   { snapIndex: 3, snapValueY: 50 }, <-- next up
     *   { snapIndex: 4, snapValueY: 0 },
     * ]
     */
    return snapPoints.find((s) => s.snapValueY < y);
  }
}
export function handleHighVelocityDrag({
  dragDirection,
  snapPoints,
}: {
  dragDirection: 'up' | 'down';
  snapPoints: SheetSnapPoint[];
}) {
  // Go to either the last or the first snap point depending on the direction
  const bottomSnapPoint = snapPoints[0];
  const topSnapPoint = snapPoints[snapPoints.length - 1];

  if (dragDirection === 'down') {
    return {
      yTo: bottomSnapPoint.snapValueY,
      snapIndex: bottomSnapPoint.snapIndex,
    };
  }
  return {
    yTo: topSnapPoint.snapValueY,
    snapIndex: topSnapPoint.snapIndex,
  };
}

export function handleLowVelocityDrag({
  currentSnapPoint,
  currentY,
  dragDirection,
  snapPoints,
  velocity,
}: {
  currentSnapPoint: SheetSnapPoint;
  currentY: number;
  dragDirection: 'up' | 'down';
  snapPoints: SheetSnapPoint[];
  velocity: number;
}) {
  const closestSnapRelativeToCurrentY = findClosestSnapPoint({
    snapPoints,
    currentY,
  });

  /**
   * If velocity is very low the user has stopped the sheet to a specific
   * position and we should snap to the closest snap point as there is no
   * "momentum" that would push the sheet further to the given direction
   */
  if (Math.abs(velocity) < 20) {
    return {
      yTo: closestSnapRelativeToCurrentY.snapValueY,
      snapIndex: closestSnapRelativeToCurrentY.snapIndex,
    };
  }

  /**
   * If the dragging has a bit more velocity, we instead want to go to
   * the next snap point in the given direction if it exists
   */
  const nextSnapInDirectionRelativeToCurrentY = findNextSnapPointInDirection({
    y: currentY,
    snapPoints,
    dragDirection,
  });

  if (nextSnapInDirectionRelativeToCurrentY) {
    return {
      yTo: nextSnapInDirectionRelativeToCurrentY.snapValueY,
      snapIndex: nextSnapInDirectionRelativeToCurrentY.snapIndex,
    };
  }

  // No snap point down, stay at current
  return {
    yTo: currentSnapPoint.snapValueY,
    snapIndex: currentSnapPoint.snapIndex,
  };
}

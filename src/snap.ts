import type { PanInfo } from 'motion';
import type { SheetSnapPoint } from './types';
import { clamp, isAscendingOrder } from './utils';

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

function sign(value: number) {
  if (value > 0) return 1;
  if (value < 0) return -1;
  return 0;
}

function toAscendingYSnaps(snapPoints: SheetSnapPoint[]) {
  return snapPoints.slice().sort((a, b) => a.snapValueY - b.snapValueY);
}

function findNearestSnapByY(snapPoints: SheetSnapPoint[], y: number) {
  return snapPoints.reduce((closest, snap) =>
    Math.abs(snap.snapValueY - y) < Math.abs(closest.snapValueY - y)
      ? snap
      : closest
  );
}

function findNearestSnapAboveY(snapPoints: SheetSnapPoint[], y: number) {
  const snaps = toAscendingYSnaps(snapPoints);

  for (let i = snaps.length - 1; i >= 0; i--) {
    if (snaps[i].snapValueY < y) {
      return snaps[i];
    }
  }

  return null;
}

function findNearestSnapBelowY(snapPoints: SheetSnapPoint[], y: number) {
  const snaps = toAscendingYSnaps(snapPoints);

  for (let i = 0; i < snaps.length; i++) {
    if (snaps[i].snapValueY > y) {
      return snaps[i];
    }
  }

  return null;
}

function resolveDirection({
  offsetY,
  velocityY,
  deltaY,
}: {
  offsetY: number;
  velocityY: number;
  deltaY: number;
}) {
  if (Math.abs(velocityY) > 50) return sign(velocityY);

  const offsetDirection = sign(offsetY);
  if (offsetDirection !== 0) return offsetDirection;

  return sign(deltaY);
}

/**
 * Classifies the final sheet position when a drag gesture ends.
 *
 * Decision flow (high level):
 * 1) Predict momentum endpoint from current position and velocity.
 * 2) Resolve drag direction (prefer velocity, fallback to offset/delta).
 * 3) Detect flick tiers:
 *    - strong flick -> jump fully open/closed
 *    - flick -> move to next snap in flick direction
 * 4) For slower drags:
 *    - tiny drag or near-snap stickiness -> snap back to nearest snap
 *    - otherwise, use progress between surrounding snaps and commit threshold
 * 5) Apply velocity-assisted bias to nearest predicted snap for natural feel.
 * 6) Fallback to nearest snap.
 *
 * Special case with no snap points:
 * - flick: open/close by direction
 * - otherwise: open/close by predicted position vs close threshold midpoint
 */
export function classifyDragEnd({
  y,
  info,
  sheetHeight,
  snapPoints,
  dragVelocityThreshold,
  dragCloseThreshold,
}: {
  y: number;
  info: PanInfo;
  sheetHeight: number;
  snapPoints: SheetSnapPoint[];
  dragVelocityThreshold: number;
  dragCloseThreshold: number;
}) {
  /**
   * Thresholds and configuration for drag classification.
   * Tweak these to adjust the feel of the sheet.
   */
  // Velocity above this is considered a flick gesture.
  const flickVelocity = dragVelocityThreshold;
  // Velocity above this is treated as a strong flick and jumps to full open/closed.
  const strongFlickVelocity = Math.max(2000, flickVelocity);
  // In slow drags, crossing this portion of the current snap region commits to the next snap.
  const distanceCommitRatio = 0.35;
  // Time horizon (in seconds) used to estimate momentum-based end position.
  const predictionTime = 0.2;
  // Very small drags below this distance snap back instead of changing snap state.
  const minDragDistance = 20;
  // If drag ends within this many pixels from a snap, stick to that snap to reduce jitter.
  const snapStickiness = 24;

  const minY = 0;
  const maxY = sheetHeight;
  const offsetY = info.offset.y;
  const deltaY = info.delta.y;
  const velocityY = info.velocity.y;

  // Step 1 — Compute predicted end position from momentum.
  const predictedY = clamp(y + velocityY * predictionTime, minY, maxY);
  const absVelocity = Math.abs(velocityY);

  // Step 2 + 3 — Flick detection and gesture direction resolution.
  const direction = resolveDirection({ offsetY, velocityY, deltaY });

  const isStrongFlick = absVelocity > strongFlickVelocity;
  const isFlick = absVelocity > flickVelocity;

  // Step 4 — No snap points: decide between open/close only.
  if (snapPoints.length === 0) {
    if (isFlick) {
      return {
        yTo: direction < 0 ? minY : maxY,
        snapIndex: undefined,
      };
    }

    const midpoint = minY + (maxY - minY) * dragCloseThreshold;

    return {
      yTo: predictedY < midpoint ? minY : maxY,
      snapIndex: undefined,
    };
  }

  const nearestSnap = findNearestSnapByY(snapPoints, y);

  // Slow-drag guard — tiny movement: snap back to nearest.
  if (!isFlick && Math.abs(offsetY) < minDragDistance) {
    return {
      yTo: nearestSnap.snapValueY,
      snapIndex: nearestSnap.snapIndex,
    };
  }

  // Hysteresis (stickiness) — avoid jitter if already close to a snap.
  if (!isFlick && Math.abs(y - nearestSnap.snapValueY) < snapStickiness) {
    return {
      yTo: nearestSnap.snapValueY,
      snapIndex: nearestSnap.snapIndex,
    };
  }

  // Step 5 — Strong flick overrides everything and goes fully open/closed.
  if (isStrongFlick) {
    const target = direction < 0 ? minY : maxY;
    const targetSnap = findNearestSnapByY(snapPoints, target);

    return {
      yTo: target,
      snapIndex: targetSnap.snapIndex,
    };
  }

  // Step 5 — Medium flick moves to the next snap in flick direction.
  if (isFlick) {
    const nextSnap =
      direction < 0
        ? findNearestSnapAboveY(snapPoints, y)
        : findNearestSnapBelowY(snapPoints, y);

    const fallbackY = direction < 0 ? minY : maxY;
    const fallbackSnap = findNearestSnapByY(snapPoints, fallbackY);
    const targetSnap = nextSnap ?? fallbackSnap;

    return {
      yTo: targetSnap.snapValueY,
      snapIndex: targetSnap.snapIndex,
    };
  }

  const firstSnap = toAscendingYSnaps(snapPoints)[0];
  const lastSnap = toAscendingYSnaps(snapPoints)[snapPoints.length - 1];
  const prevSnap = findNearestSnapAboveY(snapPoints, y) ?? firstSnap;
  const nextSnap = findNearestSnapBelowY(snapPoints, y) ?? lastSnap;

  if (prevSnap.snapIndex === nextSnap.snapIndex) {
    return {
      yTo: prevSnap.snapValueY,
      snapIndex: prevSnap.snapIndex,
    };
  }

  const range = nextSnap.snapValueY - prevSnap.snapValueY;
  const progress = range > 0 ? (y - prevSnap.snapValueY) / range : 0;

  // Step 6 — Slow drag commit based on progress within the current snap region.
  let selectedSnap = nearestSnap;

  if (direction > 0) {
    selectedSnap = progress > distanceCommitRatio ? nextSnap : prevSnap;
  } else if (direction < 0) {
    selectedSnap = progress < 1 - distanceCommitRatio ? prevSnap : nextSnap;
  }

  // Step 7 — Velocity-assisted bias toward predicted-position snap.
  if (absVelocity > 200) {
    const predictedSnap = findNearestSnapByY(snapPoints, predictedY);

    if (
      Math.abs(predictedSnap.snapValueY - y) <
      Math.abs(selectedSnap.snapValueY - y)
    ) {
      selectedSnap = predictedSnap;
    }
  }

  // Step 8 — Final fallback.
  return {
    yTo: selectedSnap.snapValueY,
    snapIndex: selectedSnap.snapIndex,
  };
}

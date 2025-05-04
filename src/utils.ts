import { type ForwardedRef, type RefCallback, type RefObject } from 'react';
import { IS_SSR } from './constants';

/**
 * Get the rounded height of the sheet element and log a warning if the
 * element is not mounted yet but the height is requested.
 */
export function getSheetHeight(sheetRef: RefObject<HTMLDivElement | null>) {
  const sheetEl = sheetRef.current;

  if (!sheetEl) {
    console.warn(
      'Sheet height is not available because the sheet element is not mounted yet.'
    );
    return 0;
  }

  return Math.round(sheetEl.getBoundingClientRect().height);
}

/**
 * Convert negative / percentage snap points to absolute values
 */
export function getSnapPoints({
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

/**
 * Get the closest number to the goal from the array of numbers.
 */
export function getClosest(nums: number[], goal: number) {
  let closest = nums[0];
  let minDifference = Math.abs(nums[0] - goal);

  for (let i = 1; i < nums.length; i++) {
    const difference = Math.abs(nums[i] - goal);
    if (difference < minDifference) {
      closest = nums[i];
      minDifference = difference;
    }
  }

  return closest;
}

/**
 * Check if the array is in descending order.
 * This is used to validate the snap points.
 */
export function inDescendingOrder(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) return false;
  }

  return true;
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

export function mergeRefs<T = any>(refs: ForwardedRef<T>[]): RefCallback<T> {
  return (value: any) => {
    refs.forEach((ref: any) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    });
  };
}

export function isTouchDevice() {
  if (IS_SSR) return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function testPlatform(re: RegExp) {
  return typeof window !== 'undefined' && window.navigator != null
    ? re.test(
        // @ts-expect-error
        window.navigator.userAgentData?.platform || window.navigator.platform
      )
    : false;
}

function cached(fn: () => boolean) {
  let res: boolean | null = null;
  return () => {
    if (res == null) {
      res = fn();
    }
    return res;
  };
}

const isMac = cached(function () {
  return testPlatform(/^Mac/i);
});

const isIPhone = cached(function () {
  return testPlatform(/^iPhone/i);
});

const isIPad = cached(function () {
  // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  return testPlatform(/^iPad/i) || (isMac() && navigator.maxTouchPoints > 1);
});

export const isIOS = cached(function () {
  return isIPhone() || isIPad();
});

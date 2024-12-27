import { type ForwardedRef, type RefCallback } from 'react';

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

export function inDescendingOrder(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) return false;
  }

  return true;
}

export function validateSnapTo({
  snapTo,
  sheetHeight,
}: {
  snapTo: number;
  sheetHeight: number;
}) {
  if (snapTo < 0) {
    console.warn(
      `Snap point is out of bounds. Sheet height is ${sheetHeight} but snap point is ${
        sheetHeight + Math.abs(snapTo)
      }.`
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
  if (typeof window === 'undefined') return false;
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
  return (
    testPlatform(/^iPad/i) ||
    // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    (isMac() && navigator.maxTouchPoints > 1)
  );
});

export const isIOS = cached(function () {
  return isIPhone() || isIPad();
});

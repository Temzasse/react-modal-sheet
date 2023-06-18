import * as React from 'react';

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

const highlightId = 'react-modal-sheet-highlight';

export function applyRootStyles(rootId: string) {
  const body = document.querySelector('body') as HTMLBodyElement;
  const root = document.querySelector(`#${rootId}`) as HTMLDivElement;

  if (root) {
    const p = 24;
    const h = window.innerHeight;
    const s = (h - p) / h;
    body.style.backgroundColor = '#000';
    root.style.overflow = 'hidden';
    root.style.willChange = 'transform';
    root.style.transition = 'transform 200ms linear';
    root.style.transform = `translateY(calc(env(safe-area-inset-top) + ${p / 2}px)) scale(${s})`; // prettier-ignore
    root.style.borderTopRightRadius = '10px';
    root.style.borderTopLeftRadius = '10px';

    // Add highlighed overlay to emphasize the modality effect
    const highlight = document.createElement('div');
    highlight.setAttribute('aria-hidden', 'true');
    highlight.id = highlightId;
    highlight.style.position = 'absolute';
    highlight.style.top = '0px';
    highlight.style.left = '0px';
    highlight.style.bottom = '0px';
    highlight.style.right = '0px';
    highlight.style.opacity = '0';
    highlight.style.transition = 'opacity 200ms linear';
    highlight.style.backgroundColor = 'rgba(150, 150, 150, 0.1)';

    root.appendChild(highlight);
    requestAnimationFrame(() => (highlight.style.opacity = '1'));
  }
}

export function cleanupRootStyles(rootId: string) {
  const body = document.querySelector('body') as HTMLBodyElement;
  const root = document.getElementById(rootId) as HTMLDivElement;
  const highlight = document.getElementById(highlightId) as HTMLDivElement;

  function onTransitionEnd() {
    root.style.removeProperty('overflow');
    root.style.removeProperty('will-change');
    root.style.removeProperty('transition');
    body.style.removeProperty('background-color');
    root.removeEventListener('transitionend', onTransitionEnd);
    highlight.parentNode?.removeChild(highlight);
  }

  if (root && highlight) {
    // Start animating back
    root.style.removeProperty('border-top-right-radius');
    root.style.removeProperty('border-top-left-radius');
    root.style.removeProperty('transform');
    highlight.style.opacity = '0';

    // Remove temp properties after animation is finished
    root.addEventListener('transitionend', onTransitionEnd);
  }
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
      `Snap point is out of bounds. Sheet height is ${sheetHeight} but snap point is ${sheetHeight +
        Math.abs(snapTo)}.`
    );
  }

  return Math.max(Math.round(snapTo), 0);
}

export function mergeRefs<T = any>(
  refs: React.ForwardedRef<T>[]
): React.RefCallback<T> {
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

import * as React from 'react';

export const usePrevious = <T>(state: T): T | undefined => {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = state;
  });

  return ref.current;
};

export const getClosest = (nums: number[], goal: number) => {
  return nums.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};

const $body = document.querySelector('body') as HTMLBodyElement;
const highlightId = 'react-modal-sheet-highlight';

export function applyRootStyles(rootId: string) {
  const root = document.querySelector(`#${rootId}`) as HTMLDivElement;

  if (root) {
    const h = window.innerHeight;
    const scale = (h - 32) / h;
    $body.style.backgroundColor = '#000';
    root.style.overflow = 'hidden';
    root.style.willChange = 'transform';
    root.style.transition = 'transform 200ms linear';
    root.style.transform = `translateY(env(safe-area-inset-top)) scale(${scale})`;
    root.style.borderRadius = '8px';

    // Add highlighed overlay to emphasize the modality effect
    const highlight = document.createElement('div');
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
  const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
  const highlight = document.getElementById(highlightId) as HTMLDivElement;

  function onTransitionEnd() {
    root.style.removeProperty('overflow');
    root.style.removeProperty('will-change');
    root.style.removeProperty('transition');
    $body.style.removeProperty('background-color');
    root.removeEventListener('transitionend', onTransitionEnd);
    root.removeChild(highlight);
  }

  if (root) {
    // Start animating back
    root.style.removeProperty('border-radius');
    root.style.removeProperty('transform');
    highlight.style.opacity = '0';

    // Remove temp properties after animation is finished
    root.addEventListener('transitionend', onTransitionEnd);
  }
}

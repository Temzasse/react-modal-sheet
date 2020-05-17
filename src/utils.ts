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

// Source: https://markus.oberlehner.net/blog/simple-solution-to-prevent-body-scrolling-on-ios/
const $body = document.querySelector('body') as HTMLBodyElement;
let scrollPosition = 0;

const scrollLock = {
  enable() {
    scrollPosition = window.pageYOffset;
    $body.style.overflow = 'hidden';
    $body.style.position = 'fixed';
    $body.style.top = `-${scrollPosition}px`;
    $body.style.width = '100%';
  },
  disable() {
    $body.style.removeProperty('overflow');
    $body.style.removeProperty('position');
    $body.style.removeProperty('top');
    $body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  },
};

export function applyRootStyles(rootId: string) {
  const body = document.getElementsByTagName('body')[0];
  const root = document.querySelector(rootId) as HTMLDivElement;

  scrollLock.enable();

  body.style.backgroundColor = '#000';
  root.style.overflow = 'hidden';
  root.style.willChange = 'transform';
  root.style.transition = 'transform 200ms 100ms linear';
  root.style.transform = 'translateY(env(safe-area-inset-top)) scale(0.95)';
  root.style.borderRadius = '8px';
}

export function cleanupRootStyles(rootId: string) {
  const body = document.getElementsByTagName('body')[0];
  const root = document.querySelector(rootId) as HTMLDivElement;

  function onTransitionEnd() {
    root.style.overflow = '';
    root.style.willChange = '';
    root.style.transition = '';
    body.style.backgroundColor = '';
    root.removeEventListener('transitionend', onTransitionEnd);
  }

  // Start animating back
  root.style.borderRadius = '';
  root.style.transform = '';

  // Remove temp properties after animation is finished
  root.addEventListener('transitionend', onTransitionEnd);
  scrollLock.disable();
}

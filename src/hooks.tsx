import * as React from 'react';

import { IS_SSR } from './constants';
import { SheetEvents } from './types';
import { applyRootStyles, cleanupRootStyles } from './utils';
import { BoundingBox } from 'framer-motion';

export const useIsomorphicLayoutEffect = IS_SSR
  ? React.useEffect
  : React.useLayoutEffect;

export function useModalEffect(isOpen: boolean, rootId?: string) {
  const prevOpen = usePrevious(isOpen);

  // Automatically apply the iOS modal effect to the body when sheet opens/closes
  React.useEffect(() => {
    if (rootId && !prevOpen && isOpen) {
      applyRootStyles(rootId);
    } else if (rootId && !isOpen && prevOpen) {
      cleanupRootStyles(rootId);
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  // Make sure to cleanup modal styles on unmount
  React.useEffect(() => {
    return () => {
      if (rootId && isOpen) cleanupRootStyles(rootId);
    };
  }, [isOpen]); // eslint-disable-line
}

export function useEventCallbacks(
  isOpen: boolean,
  callbacks: React.MutableRefObject<SheetEvents>
) {
  const prevOpen = usePrevious(isOpen);
  const didOpen = React.useRef(false);

  // Because of AnimatePrecence we don't have access to latest isOpen value
  // so we need to read and write to a ref to determine if we are
  // opening or closing the sheet
  const handleAnimationComplete = React.useCallback(() => {
    if (!didOpen.current) {
      callbacks.current.onOpenEnd?.();
      didOpen.current = true;
    } else {
      callbacks.current.onCloseEnd?.();
      didOpen.current = false;
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  React.useEffect(() => {
    if (!prevOpen && isOpen) {
      callbacks.current.onOpenStart?.();
    } else if (!isOpen && prevOpen) {
      callbacks.current.onCloseStart?.();
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  return { handleAnimationComplete };
}

export function useWindowHeight() {
  const [windowHeight, setWindowHeight] = React.useState(0);

  useIsomorphicLayoutEffect(() => {
    const updateHeight = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', updateHeight);
    updateHeight();
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return windowHeight;
}

export function usePrevious<T>(state: T): T | undefined {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}

// Userland version of the `useEvent` React hook:
// RFC: https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
export function useEvent<T extends (...args: any[]) => any>(handler: T) {
  const handlerRef = React.useRef<T>();

  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return React.useCallback((...args: any[]) => {
    const fn = handlerRef.current;
    return fn?.(...args);
  }, []) as T;
}

// This is a hacky way to fix a bug in framer-motion where the drag
// constraints are not updated when window is resized.
// https://github.com/framer/motion/issues/1659
const constraints: BoundingBox = { bottom: 0, top: 0, left: 0, right: 0 };

export function useDragConstraints() {
  const constraintsRef = React.useRef<any>(null);
  const onMeasureDragConstraints = React.useCallback(() => constraints, []);
  return { constraintsRef, onMeasureDragConstraints };
}

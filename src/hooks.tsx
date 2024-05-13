import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { type BoundingBox } from 'framer-motion';

import { IS_SSR } from './constants';
import { type SheetEvents } from './types';
import { applyRootStyles, cleanupRootStyles } from './utils';

export const useIsomorphicLayoutEffect = IS_SSR ? useEffect : useLayoutEffect;

export function useModalEffect(isOpen: boolean, rootId?: string) {
  const prevOpen = usePrevious(isOpen);

  // Automatically apply the iOS modal effect to the body when sheet opens/closes
  useEffect(() => {
    if (rootId && !prevOpen && isOpen) {
      applyRootStyles(rootId);
    } else if (rootId && !isOpen && prevOpen) {
      cleanupRootStyles(rootId);
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  // Make sure to cleanup modal styles on unmount
  useEffect(() => {
    return () => {
      if (rootId && isOpen) cleanupRootStyles(rootId);
    };
  }, [isOpen]); // eslint-disable-line
}

export function useEventCallbacks(
  isOpen: boolean,
  callbacks: MutableRefObject<SheetEvents>
) {
  const prevOpen = usePrevious(isOpen);
  const didOpen = useRef(false);

  // Because of AnimatePrecence we don't have access to latest isOpen value
  // so we need to read and write to a ref to determine if we are
  // opening or closing the sheet
  const handleAnimationComplete = useCallback(() => {
    if (!didOpen.current) {
      callbacks.current.onOpenEnd?.();
      didOpen.current = true;
    } else {
      callbacks.current.onCloseEnd?.();
      didOpen.current = false;
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  useEffect(() => {
    if (!prevOpen && isOpen) {
      callbacks.current.onOpenStart?.();
    } else if (!isOpen && prevOpen) {
      callbacks.current.onCloseStart?.();
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  return { handleAnimationComplete };
}

export function useDimensions() {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useIsomorphicLayoutEffect(() => {
    function handler() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    handler();

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return dimensions;
}

export function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}

// Userland version of the `useEffectEvent` React hook:
// RFC: https://react.dev/reference/react/experimental_useEffectEvent
export function useEffectEvent<T extends (...args: any[]) => any>(handler: T) {
  const handlerRef = useRef<T>();

  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: any[]) => {
    const fn = handlerRef.current;
    return fn?.(...args);
  }, []) as T;
}

// This is a hacky way to fix a bug in framer-motion where the drag
// constraints are not updated when window is resized.
// https://github.com/framer/motion/issues/1659
const constraints: BoundingBox = { bottom: 0, top: 0, left: 0, right: 0 };

export function useDragConstraints() {
  const constraintsRef = useRef<any>(null);
  const onMeasureDragConstraints = useCallback(() => constraints, []);
  return { constraintsRef, onMeasureDragConstraints };
}

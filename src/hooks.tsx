import {
  type RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { type MotionValue, type BoundingBox, transform } from 'motion/react';

import { IS_SSR } from './constants';
import { type SheetEvents } from './types';

export const useIsomorphicLayoutEffect = IS_SSR ? useEffect : useLayoutEffect;

export function useModalEffect({
  y,
  rootId,
  sheetRef,
  useInset = true,
}: {
  y: MotionValue<number>;
  rootId?: string;
  sheetRef: RefObject<HTMLDivElement | null>;
  useInset?: boolean;
}) {
  const heightRef = useRef(IS_SSR ? 0 : window.innerHeight);

  function setup() {
    const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
    const body = document.querySelector('body') as HTMLBodyElement;
    if (!root) return;

    body.style.backgroundColor = '#000';
    root.style.overflow = 'hidden';
    root.style.transitionTimingFunction = 'cubic-bezier(0.32, 0.72, 0, 1)';
    root.style.transitionProperty = 'transform, border-radius';
    root.style.transitionDuration = '0.5s';
    root.style.transformOrigin = 'center top';
  }

  function cleanup() {
    const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
    const body = document.querySelector('body') as HTMLBodyElement;
    if (!root) return;

    setTimeout(() => {
      body.style.removeProperty('background-color');
      root.style.removeProperty('overflow');
      root.style.removeProperty('transition-timing-function');
      root.style.removeProperty('transition-property');
      root.style.removeProperty('transition-duration');
      root.style.removeProperty('transform-origin');
      root.style.removeProperty('transform');
      root.style.removeProperty('border-top-right-radius');
      root.style.removeProperty('border-top-left-radius');
    }, 100);
  }

  useIsomorphicLayoutEffect(() => {
    return () => {
      if (rootId) cleanup();
    };
  }, []);

  useEffect(() => {
    const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
    if (!root) return;

    function onCompleted() {
      if (y.get() - 10 >= heightRef.current) cleanup();
    }

    const removeStartListener = y.on('animationStart', () => {
      heightRef.current = sheetRef.current?.offsetHeight || window.innerHeight;
      setup();
    });

    const removeChangeListener = y.on('change', (value) => {
      if (root) {
        const progress = Math.max(0, 1 - value / heightRef.current);
        const pageWidth = window.innerWidth;
        const scale = (pageWidth - 16) / pageWidth;
        const ty = transform(progress, [0, 1], [0, 24]);
        const s = transform(progress, [0, 1], [1, scale]);
        const borderRadius = transform(progress, [0, 1], [0, 10]);
        const inset = useInset
          ? `env(safe-area-inset-top) * ${progress}`
          : '0px';

        root.style.transform = `scale(${s}) translate3d(0, calc(${inset} + ${ty}px), 0)`; // prettier-ignore
        root.style.borderTopRightRadius = `${borderRadius}px`;
        root.style.borderTopLeftRadius = `${borderRadius}px`;
      }
    });

    const removeCompleteListener = y.on('animationComplete', onCompleted);
    const removeCancelListener = y.on('animationCancel', onCompleted);

    return () => {
      removeStartListener();
      removeChangeListener();
      removeCompleteListener();
      removeCancelListener();
    };
  }, [y, rootId]);
}

export function useEventCallbacks(
  isOpen: boolean,
  callbacks: RefObject<SheetEvents>
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
  }, [isOpen, prevOpen]);

  useEffect(() => {
    if (!prevOpen && isOpen) {
      callbacks.current.onOpenStart?.();
    } else if (!isOpen && prevOpen) {
      callbacks.current.onCloseStart?.();
    }
  }, [isOpen, prevOpen]);

  return { handleAnimationComplete };
}

export function useDimensions() {
  const [dimensions, setDimensions] = useState({
    height: !IS_SSR ? window.innerHeight : 0,
    width: !IS_SSR ? window.innerWidth : 0,
  });

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
  const ref = useRef<T>(undefined);

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}

// Userland version of the `useEffectEvent` React hook:
// RFC: https://react.dev/reference/react/experimental_useEffectEvent
export function useEffectEvent<T extends (...args: any[]) => any>(handler: T) {
  const handlerRef = useRef<T>(undefined);

  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: any[]) => {
    const fn = handlerRef.current;
    return fn?.(...args);
  }, []) as T;
}

// This is a hacky way to fix a bug in motion/react where the drag
// constraints are not updated when window is resized.
// https://github.com/framer/motion/issues/1659
const constraints: BoundingBox = { bottom: 0, top: 0, left: 0, right: 0 };

export function useDragConstraints() {
  const constraintsRef = useRef<any>(null);
  const onMeasureDragConstraints = useCallback(() => constraints, []);
  return { constraintsRef, onMeasureDragConstraints };
}

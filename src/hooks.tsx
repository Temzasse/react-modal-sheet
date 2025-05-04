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
  snapPoints,
  startThreshold,
}: {
  y: MotionValue<number>;
  rootId?: string;
  sheetRef: RefObject<HTMLDivElement | null>;
  snapPoints?: number[];
  startThreshold?: number;
}) {
  const heightRef = useRef(IS_SSR ? 0 : window.innerHeight);
  const insetTop = useSafeAreaInsetTop();

  /**
   * Start the effect only if we have dragged over the second snap point
   * to make the effect more natural as the sheet will reach it's final
   * position when the user drags it over the second snap point.
   */
  const snapThresholdPoint =
    snapPoints && snapPoints.length > 1 ? snapPoints[1] : undefined;

  // Cleanup on unmount
  useIsomorphicLayoutEffect(() => {
    return () => {
      if (rootId) cleanupModalEffect(rootId);
    };
  }, []);

  useEffect(() => {
    if (!rootId) return;

    const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
    if (!root) return;

    function onCompleted() {
      // -5 just to take into account some inprecision to ensure the cleanup is done
      if (y.get() - 5 >= heightRef.current) {
        // biome-ignore lint/style/noNonNullAssertion: root is always defined here
        cleanupModalEffect(rootId!);
      }
    }

    const removeStartListener = y.on('animationStart', () => {
      heightRef.current = sheetRef.current?.offsetHeight || window.innerHeight;
      // biome-ignore lint/style/noNonNullAssertion: root is always defined here
      setupModalEffect(rootId!);
    });

    /**
     * NOTE: The `y` value gets smaller when the sheet is opened and larger
     * when the sheet is being closed.
     */
    const removeChangeListener = y.on('change', (yValue) => {
      if (!root) return;

      const sheetHeight = heightRef.current;
      const pageWidth = window.innerWidth;

      let progress = Math.max(0, 1 - yValue / sheetHeight);

      /**
       * If we have snap points, we need to calculate the progress percentage
       * based on the snap point threshold. Note that the maximum value is also
       * different in this case as the range between the start of the effect
       * and its end is different.
       */
      if (snapThresholdPoint !== undefined) {
        const snapThresholdPointValue =
          sheetHeight - Math.min(snapThresholdPoint, sheetHeight);

        if (yValue <= snapThresholdPointValue) {
          progress =
            (snapThresholdPointValue - yValue) / snapThresholdPointValue;
        } else {
          progress = 0;
        }
      }

      /**
       * If we have a start threshold, we need to calculate the progress
       * percentage based on the start threshold (0 to 1). For example,
       * if the start threshold is 0.5, the progress will be 0 until the sheet
       * is dragged over 50% of the complete drag distance.
       */
      if (startThreshold !== undefined) {
        const startThresholdValue =
          sheetHeight -
          Math.min(Math.floor(startThreshold * sheetHeight), sheetHeight);

        if (yValue <= startThresholdValue) {
          progress = (startThresholdValue - yValue) / startThresholdValue;
        } else {
          progress = 0;
        }
      }

      // Make sure progress is between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      const ty = transform(progress, [0, 1], [0, 24 + insetTop]);
      const s = transform(progress, [0, 1], [1, (pageWidth - 16) / pageWidth]);
      const borderRadius = transform(progress, [0, 1], [0, 10]);

      root.style.transform = `scale(${s}) translate3d(0, ${ty}px, 0)`;
      root.style.borderTopRightRadius = `${borderRadius}px`;
      root.style.borderTopLeftRadius = `${borderRadius}px`;
    });

    const removeCompleteListener = y.on('animationComplete', onCompleted);
    const removeCancelListener = y.on('animationCancel', onCompleted);

    return () => {
      removeStartListener();
      removeChangeListener();
      removeCompleteListener();
      removeCancelListener();
    };
  }, [y, rootId, insetTop, startThreshold, snapThresholdPoint]);
}

function useSafeAreaInsetTop() {
  const [safeAreaInsetTop] = useState(() => {
    if (IS_SSR) return 0;

    const root = document.querySelector<HTMLElement>(':root');
    if (!root) return 0;

    root.style.setProperty('--rms-sat', 'env(safe-area-inset-top)');

    const safeAreaInsetTopStr = getComputedStyle(root)
      .getPropertyValue('--rms-sat')
      .replace('px', '')
      .trim();

    const safeAreaInsetTop = parseInt(safeAreaInsetTopStr, 10) || 0;

    root.style.removeProperty('--rms-sat');

    return safeAreaInsetTop;
  });

  return safeAreaInsetTop;
}

function setupModalEffect(rootId: string) {
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

function cleanupModalEffect(rootId: string) {
  const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
  const body = document.querySelector('body') as HTMLBodyElement;
  if (!root) return;

  body.style.removeProperty('background-color');
  root.style.removeProperty('overflow');
  root.style.removeProperty('transition-timing-function');
  root.style.removeProperty('transition-property');
  root.style.removeProperty('transition-duration');
  root.style.removeProperty('transform-origin');
  root.style.removeProperty('transform');
  root.style.removeProperty('border-top-right-radius');
  root.style.removeProperty('border-top-left-radius');
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
  const [dimensions, setDimensions] = useState(() => ({
    height: !IS_SSR ? window.innerHeight : 0,
    width: !IS_SSR ? window.innerWidth : 0,
  }));

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

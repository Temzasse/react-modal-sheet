import { transform, type MotionValue } from 'motion';
import { useEffect, useRef, type RefObject } from 'react';

import { IS_SSR } from '../constants';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';
import { useSafeAreaInsets } from './use-safe-area-insets';

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
  const insetTop = useSafeAreaInsets().top;

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

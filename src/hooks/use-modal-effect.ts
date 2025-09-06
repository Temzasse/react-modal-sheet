import { type MotionValue, transform } from 'motion';
import { type RefObject } from 'react';

import type { SheetDetent, SheetSnapPoint } from '../types';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';
import { useSafeAreaInsets } from './use-safe-area-insets';

export function useModalEffect({
  y,
  detent,
  rootId: _rootId,
  sheetHeight,
  snapPoints,
  startThreshold,
}: {
  y: MotionValue<number>;
  detent: SheetDetent;
  rootId?: string;
  sheetHeight: number;
  snapPoints: SheetSnapPoint[];
  startThreshold?: number;
}) {
  const insetTop = useSafeAreaInsets().top;

  let rootId: string | undefined = _rootId;

  if (rootId && detent === 'full') {
    console.warn('Using "full" detent with modal effect is not supported.');
    rootId = undefined;
  }

  // Cleanup on unmount
  useIsomorphicLayoutEffect(() => {
    return () => {
      if (rootId) cleanupModalEffect(rootId);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!rootId) return;

    const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
    if (!root) return;

    const removeStartListener = y.on('animationStart', () => {
      // biome-ignore lint/style/noNonNullAssertion: root is always defined here
      setupModalEffect(rootId!);
    });

    /**
     * NOTE: The `y` value gets smaller when the sheet is opened and larger
     * when the sheet is being closed.
     */
    const removeChangeListener = y.on('change', (yValue) => {
      if (!root) return;

      let progress = Math.max(0, 1 - yValue / sheetHeight);

      /**
       * Start the effect only if we have dragged over the second snap point
       * to make the effect more natural as the sheet will reach it's final
       * position when the user drags it over the second snap point.
       */
      const snapThresholdPoint =
        snapPoints.length > 1 ? snapPoints[snapPoints.length - 2] : undefined;

      /**
       * If we have snap points, we need to calculate the progress percentage
       * based on the snap point threshold. Note that the maximum value is also
       * different in this case as the range between the start of the effect
       * and its end is different.
       */
      if (snapThresholdPoint !== undefined) {
        const snapThresholdValue = snapThresholdPoint.snapValueY;

        if (yValue <= snapThresholdValue) {
          progress = (snapThresholdValue - yValue) / snapThresholdValue;
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

      const pageWidth = window.innerWidth;
      const ty = transform(progress, [0, 1], [0, 24 + insetTop]);
      const s = transform(progress, [0, 1], [1, (pageWidth - 16) / pageWidth]);
      const borderRadius = transform(progress, [0, 1], [0, 10]);

      root.style.transform = `scale(${s}) translate3d(0, ${ty}px, 0)`;
      root.style.borderTopRightRadius = `${borderRadius}px`;
      root.style.borderTopLeftRadius = `${borderRadius}px`;
    });

    function onCompleted() {
      // -5 just to take into account some inprecision to ensure the cleanup is done
      if (y.get() - 5 >= sheetHeight) {
        // biome-ignore lint/style/noNonNullAssertion: root is always defined here
        cleanupModalEffect(rootId!);
      }
    }

    const removeCompleteListener = y.on('animationComplete', onCompleted);
    const removeCancelListener = y.on('animationCancel', onCompleted);

    return () => {
      removeStartListener();
      removeChangeListener();
      removeCompleteListener();
      removeCancelListener();
    };
  }, [y, rootId, insetTop, startThreshold, sheetHeight]);
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

import { type MotionValue, transform } from 'motion';
import { useEffect } from 'react';

import type { SheetDetent, SheetSnapPoint } from '../types';
import { useSafeAreaInsets } from './use-safe-area-insets';
import { useStableCallback } from './use-stable-callback';

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

  const handleYChange = useStableCallback((yValue: number) => {
    if (!rootId) return;

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

    updateModalEffect(rootId, {
      scale: transform(progress, [0, 1], [1, (pageWidth - 16) / pageWidth]),
      translateY: transform(progress, [0, 1], [0, 24 + insetTop]),
      borderRadius: transform(progress, [0, 1], [0, 10]),
    });
  });

  const handleYComplete = useStableCallback(() => {
    if (!rootId) return;

    // +5 just to take into account some inprecision to ensure the cleanup is done
    if (y.get() + 5 >= sheetHeight) {
      cleanupModalEffect(rootId);
    }
  });

  useEffect(() => {
    if (!rootId) return;

    const removeStartListener = y.on('animationStart', () => {
      if (rootId) setupModalEffect(rootId);
    });

    const removeChangeListener = y.on('change', (yValue) => {
      handleYChange(yValue);
    });

    const removeCompleteListener = y.on('animationComplete', handleYComplete);
    const removeCancelListener = y.on('animationCancel', handleYComplete);

    return () => {
      if (rootId) cleanupModalEffect(rootId);
      removeStartListener();
      removeChangeListener();
      removeCompleteListener();
      removeCancelListener();
    };
  }, [rootId]);
}

function setupModalEffect(rootId: string) {
  const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
  if (!root) return;

  const body = document.querySelector('body') as HTMLBodyElement;

  body.style.backgroundColor = '#000000';
  root.style.overflow = 'hidden';
  root.style.transitionTimingFunction = 'cubic-bezier(0.32, 0.72, 0, 1)';
  root.style.transitionProperty = 'transform, border-radius';
  root.style.transitionDuration = '0.5s';
  root.style.transformOrigin = 'center top';
}

function updateModalEffect(
  rootId: string,
  opts: { scale: number; translateY: number; borderRadius: number }
) {
  const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
  if (!root) return;

  const { scale, translateY, borderRadius } = opts;
  root.style.transform = `scale(${scale}) translate3d(0, ${translateY}px, 0)`;
  root.style.borderTopRightRadius = `${borderRadius}px`;
  root.style.borderTopLeftRadius = `${borderRadius}px`;
}

function cleanupModalEffect(rootId: string) {
  const root = document.querySelector(`#${rootId}`) as HTMLDivElement;
  if (!root) return;

  const body = document.querySelector('body') as HTMLBodyElement;

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

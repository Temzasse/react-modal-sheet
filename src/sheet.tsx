import { createPortal } from 'react-dom';

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {
  type DragHandler,
  type Transition,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react';

import {
  DEFAULT_DRAG_CLOSE_THRESHOLD,
  DEFAULT_DRAG_VELOCITY_THRESHOLD,
  DEFAULT_TWEEN_CONFIG,
  IS_SSR,
  REDUCED_MOTION_TWEEN_CONFIG,
} from './constants';
import { SheetContext } from './context';
import { useDimensions } from './hooks/use-dimensions';
import { useModalEffect } from './hooks/use-modal-effect';
import { usePreventScroll } from './hooks/use-prevent-scroll';
import { useSheetState } from './hooks/use-sheet-state';
import { useStableCallback } from './hooks/use-stable-callback';
import {
  computeSnapPoints,
  computeSnapY,
  handleFastDownwardFlick,
  handleFastUpwardFlick,
  handleLowVelocityDrag,
} from './snap';
import { styles } from './styles';
import { type SheetContextType, type SheetProps } from './types';
import { getSheetHeight } from './utils';

export const Sheet = forwardRef<any, SheetProps>(
  (
    {
      children,
      className = '',
      detent = 'full-height',
      disableDrag = false,
      disableScrollLocking = false,
      disableDismiss = false,
      dragCloseThreshold = DEFAULT_DRAG_CLOSE_THRESHOLD,
      dragVelocityThreshold = DEFAULT_DRAG_VELOCITY_THRESHOLD,
      ensureContentReachability = true,
      initialSnap = 0,
      isOpen,
      modalEffectRootId,
      modalEffectThreshold,
      mountPoint,
      prefersReducedMotion = false,
      snapPoints: snapPointsProp,
      style,
      tweenConfig = DEFAULT_TWEEN_CONFIG,
      onOpenStart,
      onOpenEnd,
      onClose,
      onCloseStart,
      onCloseEnd,
      onSnap,
      onDrag: onDragProp,
      onDragStart: onDragStartProp,
      onDragEnd: onDragEndProp,
      ...rest
    },
    ref
  ) => {
    const sheetRef = useRef<HTMLDivElement>(null);
    const { windowHeight } = useDimensions();
    const y = useMotionValue(windowHeight);
    const indicatorRotation = useMotionValue(0);
    const shouldReduceMotion = useReducedMotion();
    const [currentSnap, setCurrentSnap] = useState(initialSnap);

    const reduceMotion = Boolean(prefersReducedMotion || shouldReduceMotion);
    const animationOptions: Transition = {
      type: 'tween',
      ...(reduceMotion ? REDUCED_MOTION_TWEEN_CONFIG : tweenConfig),
    };

    // +2 for tolerance in case the animated value is slightly off
    const zIndex = useTransform(y, (value) =>
      value + 2 >= windowHeight ? -1 : (style?.zIndex ?? 9999)
    );
    const visibility = useTransform(y, (value) =>
      value + 2 >= windowHeight ? 'hidden' : 'visible'
    );

    function getSnapY(snapIndex: number) {
      if (snapPointsProp) {
        const sheetHeight = getSheetHeight(sheetRef);
        const snapPoints = computeSnapPoints({ snapPointsProp, sheetHeight });
        const snapY = computeSnapY({ sheetHeight, snapPoints, snapIndex });
        return snapY;
      }
      return null;
    }

    function updateSnap(snapIndex: number) {
      setCurrentSnap(snapIndex);
      onSnap?.(snapIndex);
    }

    const onDrag = useStableCallback<DragHandler>((event, info) => {
      onDragProp?.(event, info);

      const currentY = y.get();

      /**
       * Make sure the user cannot drag the sheet beyond the upmost snap point
       * if the `snapPoints` prop is provided.
       */
      if (snapPointsProp) {
        const sheetHeight = getSheetHeight(sheetRef);
        const snapPoints = computeSnapPoints({ snapPointsProp, sheetHeight });
        const topSnapPoint = sheetHeight - snapPoints[0];

        if (info.delta.y < 0 && currentY <= topSnapPoint) {
          y.set(topSnapPoint);
          return;
        }
      }

      // Update drag indicator rotation based on drag velocity
      const velocity = y.getVelocity();

      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);

      // Make sure user cannot drag beyond the top of the sheet
      y.set(Math.max(currentY + info.delta.y, 0));
    });

    const onDragStart = useStableCallback<DragHandler>((event, info) => {
      onDragStartProp?.(event, info);

      // Find focused input inside the sheet and blur it when dragging starts
      // to prevent a weird ghost caret "bug" on mobile
      const focusedElement = document.activeElement as HTMLElement | null;
      if (!focusedElement || !sheetRef.current) return;

      const isInput =
        focusedElement.tagName === 'INPUT' ||
        focusedElement.tagName === 'TEXTAREA';

      // Only blur the focused element if it's inside the sheet
      if (isInput && sheetRef.current.contains(focusedElement)) {
        focusedElement.blur();
      }
    });

    const onDragEnd = useStableCallback<DragHandler>((event, info) => {
      onDragEndProp?.(event, info);

      const sheetHeight = getSheetHeight(sheetRef);
      const currentY = y.get();

      let yTo = 0;

      if (snapPointsProp) {
        const dragDirection = info.offset.y > 0 ? 'down' : 'up';
        const dragDistance = Math.abs(info.offset.y);
        const isFlick = Math.abs(info.velocity.y) > dragVelocityThreshold;

        // Calculate all snap point Y values for easier comparison
        const snapPoints = computeSnapPoints({ snapPointsProp, sheetHeight });
        const snapYValues = snapPoints
          .map((_, i) =>
            computeSnapY({ sheetHeight, snapPoints, snapIndex: i })
          )
          .filter((snapY): snapY is number => snapY !== null);

        let result: { yTo: number; snapIndex: number | undefined };

        if (isFlick) {
          if (info.velocity.y > 0) {
            result = handleFastDownwardFlick({
              dragDirection,
              dragDistance,
              currentY,
              snapYValues,
              sheetHeight,
            });
          } else {
            result = handleFastUpwardFlick({
              dragDirection,
              currentY,
              snapYValues,
            });
          }
        } else {
          result = handleLowVelocityDrag({
            dragDirection,
            currentY,
            snapYValues,
            sheetHeight,
            snapPoints,
            currentSnap,
            dragCloseThreshold,
          });
        }

        yTo = result.yTo;

        // If disableDismiss is true, prevent closing via gesture
        if (disableDismiss && yTo + 1 >= sheetHeight) {
          // Use the bottom-most open snap point
          const bottomSnapIndex = snapYValues.length - 1;
          const bottomSnapY = snapYValues[bottomSnapIndex];

          if (bottomSnapY !== undefined && bottomSnapY > 0) {
            yTo = bottomSnapY;
            if (bottomSnapIndex) updateSnap(bottomSnapIndex);
          } else {
            // If no open snap points available, stay at current position
            yTo = currentY;
          }
        } else if (result.snapIndex !== undefined) {
          updateSnap(result.snapIndex);
        }
      } else if (
        info.velocity.y > dragVelocityThreshold ||
        currentY > sheetHeight * dragCloseThreshold
      ) {
        // Close the sheet if dragged past the threshold or if the velocity is high enough
        // But only if disableDismiss is false
        if (disableDismiss) {
          // If disableDismiss, snap back to the open position
          yTo = 0;
        } else {
          yTo = sheetHeight;
        }
      }

      // Update the spring value so that the sheet is animated to the snap point
      animate(y, yTo, animationOptions);

      // +1px for imprecision tolerance
      // Only call onClose if disableDismiss is false or if we're actually closing
      if (yTo + 1 >= sheetHeight && !disableDismiss) {
        onClose();
      }

      // Reset indicator rotation after dragging
      indicatorRotation.set(0);
    });

    useImperativeHandle(ref, () => ({
      y,
      snapTo: async (snapIndex: number) => {
        if (!snapPointsProp) {
          console.warn('Snapping is not possible without `snapPoints` prop.');
          return;
        }

        const snapY = getSnapY(snapIndex);

        if (snapY === null) {
          console.warn(`Invalid snap index ${snapIndex}.`);
          return;
        }

        await animate(y, snapY, {
          ...animationOptions,
          onComplete: () => {
            updateSnap(snapIndex);
            if (snapPointsProp[snapIndex] === 0) onClose();
          },
        });
      },
      getSnapY: (snapIndex: number) => {
        if (!snapPointsProp) {
          console.warn('Snapping is not possible without `snapPoints` prop.');
          return null;
        }

        return getSnapY(snapIndex);
      },
    }));

    useModalEffect({
      y,
      sheetRef,
      snapPointsProp,
      rootId: modalEffectRootId,
      startThreshold: modalEffectThreshold,
    });

    // Motion should handle body scroll locking but it's not working
    // properly on iOS. Scroll locking from React Aria seems to work much better.
    usePreventScroll({
      isDisabled: disableScrollLocking || !isOpen,
    });

    // Sheet state machine
    const state = useSheetState({
      isOpen,
      onOpen: async () => {
        onOpenStart?.();
        const yTo = getSnapY(initialSnap) ?? 0;
        await animate(y, yTo, animationOptions);
        updateSnap(initialSnap);
        onOpenEnd?.();
      },
      onClosing: async () => {
        onCloseStart?.();
        await animate(y, windowHeight, animationOptions);
        onCloseEnd?.();
      },
    });

    const dragProps: SheetContextType['dragProps'] = {
      drag: 'y',
      dragElastic: 0,
      dragMomentum: false,
      dragPropagation: false,
      onDrag,
      onDragStart,
      onDragEnd,
    };

    const context: SheetContextType = {
      animationOptions,
      currentSnap,
      detent,
      disableDrag,
      disableDismiss,
      dragProps,
      ensureContentReachability,
      indicatorRotation,
      initialSnap,
      isOpen,
      reduceMotion,
      sheetRef,
      snapPoints: snapPointsProp,
      windowHeight,
      y,
    };

    const sheet = (
      <SheetContext.Provider value={context}>
        <motion.div
          {...rest}
          ref={ref}
          data-sheet-state={state}
          className={`react-modal-sheet ${className}`}
          style={{ ...styles.wrapper, zIndex, visibility, ...style }}
        >
          {state !== 'closed' ? children : null}
        </motion.div>
      </SheetContext.Provider>
    );

    if (IS_SSR) return sheet;

    return createPortal(sheet, mountPoint ?? document.body);
  }
);

Sheet.displayName = 'Sheet';

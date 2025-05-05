import { createPortal } from 'react-dom';

import React, {
  Children,
  cloneElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

import {
  animate,
  AnimatePresence,
  motion,
  type PanInfo,
  type Transition,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react';

import {
  REDUCED_MOTION_TWEEN_CONFIG,
  DEFAULT_TWEEN_CONFIG,
  DEFAULT_DRAG_CLOSE_THRESHOLD,
  DEFAULT_DRAG_VELOCITY_THRESHOLD,
  IS_SSR,
} from './constants';

import {
  getSheetHeight,
  getSnapY,
  getSnapPoints,
  getClosestSnapPoint,
} from './utils';

import { type SheetContextType, type SheetProps } from './types';
import { SheetScrollerContextProvider, SheetContext } from './context';
import { styles } from './styles';
import { useModalEffect } from './hooks/use-modal-effect';
import { useDimensions } from './hooks/use-dimensions';
import { useIsomorphicLayoutEffect } from './hooks/use-isomorphic-layout-effect';
import { useStableCallback } from './hooks/use-stable-callback';
import { usePreventScroll } from './hooks/use-prevent-scroll';

export const Sheet = forwardRef<any, SheetProps>(
  (
    {
      onOpenStart,
      onOpenEnd,
      onClose,
      onCloseStart,
      onCloseEnd,
      onSnap,
      children,
      disableScrollLocking = false,
      isOpen,
      snapPoints: snapPointsProp,
      rootId,
      modalEffectRootId,
      mountPoint,
      style,
      detent = 'full-height',
      initialSnap = 0,
      disableDrag = false,
      prefersReducedMotion = false,
      tweenConfig = DEFAULT_TWEEN_CONFIG,
      dragVelocityThreshold = DEFAULT_DRAG_VELOCITY_THRESHOLD,
      dragCloseThreshold = DEFAULT_DRAG_CLOSE_THRESHOLD,
      modalEffectThreshold,
      ...rest
    },
    ref
  ) => {
    const sheetRef = useRef<HTMLDivElement>(null);
    const indicatorRotation = useMotionValue(0);
    const { height: windowHeight } = useDimensions();
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(prefersReducedMotion || shouldReduceMotion);
    const animationOptions: Transition = {
      type: 'tween',
      ...(reduceMotion ? REDUCED_MOTION_TWEEN_CONFIG : tweenConfig),
    };

    // NOTE: the inital value for `y` doesn't matter since it is overwritten by
    // the value driven by the `AnimatePresence` component when the sheet is opened
    // and after that it is driven by the gestures and/or snapping
    const y = useMotionValue(windowHeight);

    // +2 for tolerance in case the animated value is slightly off
    const zIndex = useTransform(y, (value) =>
      value + 2 >= windowHeight ? -1 : (style?.zIndex ?? 9999)
    );
    const visibility = useTransform(y, (value) =>
      value + 2 >= windowHeight ? 'hidden' : 'visible'
    );

    // Keep the callback fns up-to-date so that they can be accessed inside
    // the effect without including them to the dependencies array
    const callbacks = useRef({
      onOpenStart,
      onOpenEnd,
      onCloseStart,
      onCloseEnd,
    });

    useIsomorphicLayoutEffect(() => {
      callbacks.current = {
        onOpenStart,
        onOpenEnd,
        onCloseStart,
        onCloseEnd,
      };
    });

    const onDrag = useStableCallback((_: PointerEvent, info: PanInfo) => {
      const currentY = y.get();

      /**
       * Make sure the user cannot drag the sheet beyond the upmost snap point
       * if the `snapPoints` prop is provided.
       */
      if (snapPointsProp) {
        const sheetHeight = getSheetHeight(sheetRef);
        const snapPoints = getSnapPoints({ snapPointsProp, sheetHeight });
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

    const onDragStart = useStableCallback(() => {
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

    const onDragEnd = useStableCallback((_, { velocity }: PanInfo) => {
      if (velocity.y > dragVelocityThreshold) {
        // User flicked the sheet down
        onClose();
      } else {
        const sheetHeight = getSheetHeight(sheetRef);
        const currentY = y.get();

        let yTo = 0;

        const snapPoints = snapPointsProp
          ? getSnapPoints({ snapPointsProp, sheetHeight })
          : undefined;

        if (snapPoints) {
          const { snapY, snapIndex } = getClosestSnapPoint({
            snapPoints,
            currentY,
            sheetHeight,
            detent,
          });

          yTo = snapY;

          // This happens before calling `animate` but it doesn't really matter
          onSnap?.(snapIndex);
        } else if (currentY / sheetHeight > dragCloseThreshold) {
          // Close if dragged over enough far
          yTo = sheetHeight;
        }

        // Update the spring value so that the sheet is animated to the snap point
        animate(y, yTo, animationOptions);

        // +1px for imprecision tolerance
        if (yTo + 1 >= sheetHeight) {
          onClose();
        }
      }

      // Reset indicator rotation after dragging
      indicatorRotation.set(0);
    });

    // Trigger onSnap callback when sheet is opened or closed
    useEffect(() => {
      if (snapPointsProp && onSnap) {
        onSnap(isOpen ? initialSnap : snapPointsProp.length - 1);
      }
    }, [isOpen]);

    // Animate the sheet open
    useEffect(() => {
      if (!isOpen) return; // let `AnimatePresence` handle the exit animation

      let yTo = 0;

      if (snapPointsProp) {
        const snapIndex = initialSnap;
        const sheetHeight = getSheetHeight(sheetRef);
        const snapPoints = getSnapPoints({ snapPointsProp, sheetHeight });
        const snapY = getSnapY({ sheetHeight, snapPoints, snapIndex });

        if (snapY !== null) {
          yTo = snapY;
        }
      }

      animate(y, yTo, animationOptions);
    }, [isOpen]);

    useImperativeHandle(ref, () => ({
      y,
      snapTo: (snapIndex: number) => {
        if (!snapPointsProp) {
          console.warn('Snapping is not possible without `snapPoints` prop.');
          return;
        }

        const sheetHeight = getSheetHeight(sheetRef);
        const snapPoints = getSnapPoints({ snapPointsProp, sheetHeight });
        const snapY = getSnapY({ sheetHeight, snapPoints, snapIndex });

        if (snapY !== null) {
          animate(y, snapY, animationOptions);
          onSnap?.(snapIndex);

          // +1px for imprecision tolerance
          if (snapY + 1 >= sheetHeight) {
            onClose();
          }
        }
      },
    }));

    if (rootId) {
      console.warn(
        'The `rootId` prop is deprecated and will be removed in the next major version. Use `modalEffectRootId` instead.'
      );
    }

    useModalEffect({
      y,
      sheetRef,
      snapPointsProp,
      rootId: rootId || modalEffectRootId,
      startThreshold: modalEffectThreshold,
    });

    // Motion should handle body scroll locking but it's not working
    // properly on iOS. Scroll locking from React Aria seems to work much better.
    usePreventScroll({
      isDisabled: disableScrollLocking || !isOpen,
    });

    const dragProps = useMemo(() => {
      const dragProps: SheetContextType['dragProps'] = {
        drag: 'y',
        dragElastic: 0,
        dragMomentum: false,
        dragPropagation: false,
        onDrag,
        onDragStart,
        onDragEnd,
      };

      return disableDrag ? undefined : dragProps;
    }, [disableDrag, windowHeight]);

    const context: SheetContextType = {
      y,
      sheetRef,
      isOpen,
      initialSnap,
      detent,
      indicatorRotation,
      callbacks,
      dragProps,
      windowHeight,
      animationOptions,
      reduceMotion,
      disableDrag,
    };

    const sheet = (
      <SheetContext.Provider value={context}>
        <motion.div
          {...rest}
          ref={ref}
          style={{ ...styles.wrapper, zIndex, visibility, ...style }}
        >
          <AnimatePresence>
            {/* NOTE: AnimatePresence requires us to set keys to children */}
            {isOpen ? (
              <SheetScrollerContextProvider>
                {Children.map(children, (child: any, i) =>
                  cloneElement(child, { key: `sheet-child-${i}` })
                )}
              </SheetScrollerContextProvider>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </SheetContext.Provider>
    );

    if (IS_SSR) return sheet;

    return createPortal(sheet, mountPoint ?? document.body);
  }
);

Sheet.displayName = 'Sheet';

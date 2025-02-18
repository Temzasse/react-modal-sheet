import React, {
  Children,
  cloneElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

import { createPortal } from 'react-dom';

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
  useModalEffect,
  useDimensions,
  useIsomorphicLayoutEffect,
  useEffectEvent,
} from './hooks';

import {
  REDUCED_MOTION_TWEEN_CONFIG,
  DEFAULT_TWEEN_CONFIG,
  DEFAULT_DRAG_CLOSE_THRESHOLD,
  DEFAULT_DRAG_VELOCITY_THRESHOLD,
  IS_SSR,
} from './constants';

import { type SheetContextType, type SheetProps } from './types';
import { SheetScrollerContextProvider, SheetContext } from './context';
import { getClosest, inDescendingOrder, validateSnapTo } from './utils';
import { usePreventScroll } from './use-prevent-scroll';
import { styles } from './styles';

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
      mountPoint,
      style,
      detent = 'full-height',
      initialSnap = 0,
      disableDrag = false,
      prefersReducedMotion = false,
      tweenConfig = DEFAULT_TWEEN_CONFIG,
      dragVelocityThreshold = DEFAULT_DRAG_VELOCITY_THRESHOLD,
      dragCloseThreshold = DEFAULT_DRAG_CLOSE_THRESHOLD,
      useInset,
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

    let snapPoints: number[] | undefined = snapPointsProp;

    if (snapPoints) {
      // Convert negative / percentage snap points to absolute values
      snapPoints = snapPoints.map((point) => {
        // Percentage values e.g. between 0.0 and 1.0
        if (point > 0 && point <= 1) return Math.round(point * windowHeight);
        return point < 0 ? windowHeight + point : point; // negative values
      });

      console.assert(
        inDescendingOrder(snapPoints) || windowHeight === 0,
        `Snap points need to be in descending order got: [${snapPoints.join(
          ', '
        )}]`
      );
    }

    const onDrag = useEffectEvent((_, { delta }: PanInfo) => {
      // Update drag indicator rotation based on drag velocity
      const velocity = y.getVelocity();

      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);

      // Make sure user cannot drag beyond the top of the sheet
      y.set(Math.max(y.get() + delta.y, 0));
    });

    const onDragStart = useEffectEvent(() => {
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

    const onDragEnd = useEffectEvent((_, { velocity }: PanInfo) => {
      if (velocity.y > dragVelocityThreshold) {
        // User flicked the sheet down
        onClose();
      } else {
        // biome-ignore lint/style/noNonNullAssertion: ref should be defined here
        const sheetHeight = sheetRef.current!.getBoundingClientRect().height;
        const currentY = y.get();

        let snapTo = 0;

        if (snapPoints) {
          const snapToValues = snapPoints.map(
            (p) => sheetHeight - Math.min(p, sheetHeight)
          );

          // Allow snapping to the top of the sheet if detent is set to `content-height`
          if (detent === 'content-height' && !snapToValues.includes(0)) {
            snapToValues.unshift(0);
          }

          // Get the closest snap point
          snapTo = getClosest(snapToValues, currentY);
        } else if (currentY / sheetHeight > dragCloseThreshold) {
          // Close if dragged over enough far
          snapTo = sheetHeight;
        }

        snapTo = validateSnapTo({ snapTo, sheetHeight });

        // Update the spring value so that the sheet is animated to the snap point
        animate(y, snapTo, animationOptions);

        if (snapPoints && onSnap) {
          const snapValue = Math.abs(Math.round(snapPoints[0] - snapTo));
          const snapIndex = snapPoints.indexOf(
            getClosest(snapPoints, snapValue)
          );
          onSnap(snapIndex);
        }

        const roundedSheetHeight = Math.round(sheetHeight);
        const shouldClose = snapTo + 2 >= roundedSheetHeight; // 2px tolerance

        if (shouldClose) onClose();
      }

      // Reset indicator rotation after dragging
      indicatorRotation.set(0);
    });

    // Trigger onSnap callback when sheet is opened or closed
    useEffect(() => {
      if (!snapPoints || !onSnap) return;
      const snapIndex = isOpen ? initialSnap : snapPoints.length - 1;
      onSnap(snapIndex);
    }, [isOpen]);

    useImperativeHandle(ref, () => ({
      y,
      snapTo: (snapIndex: number) => {
        const sheetEl = sheetRef.current;

        if (snapPoints?.[snapIndex] !== undefined && sheetEl) {
          const sheetHeight = sheetEl.getBoundingClientRect().height;
          const snapPoint = snapPoints[snapIndex];
          const snapTo = validateSnapTo({
            snapTo: sheetHeight - snapPoint,
            sheetHeight,
          });

          animate(y, snapTo, animationOptions);
          if (onSnap) onSnap(snapIndex);
          if (snapTo >= sheetHeight) onClose();
        }
      },
    }));

    useModalEffect({
      y,
      rootId,
      sheetRef,
      useInset,
    });

    // Framer Motion should handle body scroll locking but it's not working
    // properly on iOS. Scroll locking from React Aria seems to work much better.
    usePreventScroll({ isDisabled: disableScrollLocking || !isOpen });

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
      snapPoints,
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

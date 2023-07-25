import * as React from 'react';

import {
  animate,
  AnimatePresence,
  motion,
  PanInfo,
  Transition,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';

import { useElementHeight, useIsomorphicLayoutEffect, useEvent } from './hooks';

import {
  REDUCED_MOTION_TWEEN_CONFIG,
  DEFAULT_TWEEN_CONFIG,
  DRAG_CLOSE_THRESHOLD,
  DRAG_VELOCITY_THRESHOLD,
} from './constants';

import { SplitContextType, SplitProps } from './types';
import { SheetScrollerContextProvider, SheetContext } from './context';
import {
  getClosest,
  inDescendingOrder,
  validateSnapTo,
  mergeRefs,
} from './utils';
import { usePreventScroll } from './use-prevent-scroll';
import styles from './styles';

const Sheet = React.forwardRef<any, SplitProps>(
  (
    {
      onOpenStart,
      onOpenEnd,
      onClose,
      onCloseStart,
      onCloseEnd,
      onSnap,
      children,
      isOpen,
      snapPoints,
      style,
      detent = 'full-height',
      initialSnap = 0,
      disableDrag = false,
      prefersReducedMotion = false,
      tweenConfig = DEFAULT_TWEEN_CONFIG,
      extraSpace = false,
      ...rest
    },
    ref
  ) => {
    const [windowHeight, thisRef] = useElementHeight();
    const sheetRef = React.useRef<any>(null);
    const indicatorRotation = useMotionValue(0);
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(prefersReducedMotion || shouldReduceMotion);
    const animationOptions: Transition = {
      type: 'tween',
      ...(reduceMotion ? REDUCED_MOTION_TWEEN_CONFIG : tweenConfig),
    };

    // NOTE: the inital value for `y` doesn't matter since it is overwritten by
    // the value driven by the `AnimatePresence` component when the sheet is opened
    // and after that it is driven by the gestures and/or snapping
    const y = useMotionValue(0);

    // Keep the callback fns up-to-date so that they can be accessed inside
    // the effect without including them to the dependencies array
    const callbacks = React.useRef({
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

    if (snapPoints) {
      // Convert negative / percentage snap points to absolute values
      snapPoints = snapPoints.map(point => {
        // Percentage values e.g. between 0.0 and 1.0
        if (point > 0 && point <= 1) return Math.round(point * windowHeight);
        return point < 0 ? windowHeight + point : point; // negative values
      });

      console.assert(
        inDescendingOrder(snapPoints) || windowHeight === 0,
        `Snap points need to be in descending order got: [${snapPoints}]`
      );
    }

    const onDrag = useEvent((_, { delta }: PanInfo) => {
      // Update drag indicator rotation based on drag velocity
      const velocity = y.getVelocity();

      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);

      // Make sure user cannot drag beyond the top of the sheet
      y.set(Math.max(y.get() + delta.y, 0));
    });

    const onDragEnd = useEvent((_, { velocity }: PanInfo) => {
      if (velocity.y > DRAG_VELOCITY_THRESHOLD) {
        // User flicked the sheet down
        onClose();
      } else {
        const currentY = y.get();

        let snapTo = 0;

        if (snapPoints) {
          const snapToValues = snapPoints.map(
            p => windowHeight - Math.min(p, windowHeight)
          );

          // Allow snapping to the top of the sheet if detent is set to `content-height`
          if (detent === 'content-height' && !snapToValues.includes(0)) {
            snapToValues.unshift(0);
          }

          // Get the closest snap point
          snapTo = getClosest(snapToValues, currentY);
        } else if (currentY / windowHeight > DRAG_CLOSE_THRESHOLD) {
          // Close if dragged over enough far
          snapTo = windowHeight;
        }

        snapTo = validateSnapTo({ snapTo, sheetHeight: windowHeight });

        // Update the spring value so that the sheet is animated to the snap point
        animate(y, snapTo, animationOptions);

        if (snapPoints && onSnap) {
          const snapValue = Math.abs(Math.round(snapPoints[0] - snapTo));
          const snapIndex = snapPoints.indexOf(getClosest(snapPoints, snapValue)); // prettier-ignore
          onSnap(snapIndex);
        }

        const roundedSheetHeight = Math.round(windowHeight);
        const shouldClose = snapTo >= roundedSheetHeight;

        if (shouldClose) onClose();
      }

      // Reset indicator rotation after dragging
      indicatorRotation.set(0);
    });

    // Trigger onSnap callback when sheet is opened or closed
    React.useEffect(() => {
      if (isOpen) {
        if (snapPoints && snapPoints[initialSnap] !== undefined) {
          const snapPoint = snapPoints[initialSnap];
          const snapTo = validateSnapTo({
            snapTo: windowHeight - snapPoint,
            sheetHeight: windowHeight,
          });

          animate(y, snapTo, animationOptions);
        } else {
          animate(y, windowHeight / 2, animationOptions);
        }
      } else {
        animate(y, windowHeight, animationOptions);
      }

      if (!snapPoints || !onSnap) return;
      const snapIndex = isOpen ? initialSnap : snapPoints.length - 1;
      onSnap(snapIndex);
    }, [isOpen]); // eslint-disable-line

    React.useImperativeHandle(ref, () => ({
      y,
      snapTo: (snapIndex: number) => {
        if (snapPoints && snapPoints[snapIndex] !== undefined) {
          const snapPoint = snapPoints[snapIndex];
          const snapTo = validateSnapTo({
            snapTo: windowHeight - snapPoint,
            sheetHeight: windowHeight,
          });

          animate(y, snapTo, animationOptions);
          if (onSnap) onSnap(snapIndex);
          if (snapTo < 0) onClose();
        }
      },
    }));

    // useModalEffect(isOpen, rootId);

    // Framer Motion should handle body scroll locking but it's not working
    // properly on iOS. Scroll locking from React Aria seems to work much better.
    usePreventScroll({ isDisabled: !isOpen });

    const dragProps = React.useMemo(() => {
      const dragProps: SplitContextType['dragProps'] = {
        drag: 'y',
        dragElastic: 0,
        dragConstraints: { top: 0, bottom: 0 },
        dragMomentum: false,
        dragPropagation: false,
        onDrag,
        onDragEnd,
      };

      return disableDrag ? undefined : dragProps;
    }, [disableDrag]); // eslint-disable-line

    const context: SplitContextType = {
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
      extraSpace,
    };

    const sheet = (
      <SheetContext.Provider value={context}>
        <motion.div
          {...rest}
          ref={mergeRefs([thisRef, ref])}
          style={{ ...styles.splitPane, ...styles.splitHorizontal, ...style }}
        >
          <AnimatePresence>
            <SheetScrollerContextProvider>
              {React.Children.map(children, (child: any, i) =>
                React.cloneElement(child, { key: `sheet-child-${i}` })
              )}
            </SheetScrollerContextProvider>
          </AnimatePresence>
        </motion.div>
      </SheetContext.Provider>
    );

    return sheet;
  }
);

export default Sheet;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  animate,
  AnimatePresence,
  motion,
  PanInfo,
  Transition,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

import {
  useModalEffect,
  useWindowHeight,
  useIsomorphicLayoutEffect,
  useEvent,
} from './hooks';

import {
  REDUCED_MOTION_TWEEN_CONFIG,
  DEFAULT_TWEEN_CONFIG,
  DRAG_CLOSE_THRESHOLD,
  DRAG_VELOCITY_THRESHOLD,
  IS_SSR,
} from './constants';

import { SheetContextType, SheetProps } from './types';
import { SheetScrollerContextProvider, SheetContext } from './context';
import { getClosest, inDescendingOrder, validateSnapTo } from './utils';
import { usePreventScroll } from './use-prevent-scroll';
import styles from './styles';

const Sheet = React.forwardRef<any, SheetProps>(
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
      snapPoints,
      rootId,
      mountPoint,
      style,
      detent = 'full-height',
      initialSnap = 0,
      disableDrag = false,
      prefersReducedMotion = false,
      tweenConfig = DEFAULT_TWEEN_CONFIG,
      ...rest
    },
    ref
  ) => {
    const sheetRef = React.useRef<any>(null);
    const indicatorRotation = useMotionValue(0);
    const windowHeight = useWindowHeight();
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

    const zIndex = useTransform(y, value =>
      value >= windowHeight ? -1 : 9999999
    );

    const visibility = useTransform(y, value =>
      value >= windowHeight ? 'hidden' : 'visible'
    );

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
        const sheetEl = sheetRef.current as HTMLDivElement;
        const sheetHeight = sheetEl.getBoundingClientRect().height;
        const currentY = y.get();

        let snapTo = 0;

        if (snapPoints) {
          const snapToValues = snapPoints.map(
            p => sheetHeight - Math.min(p, sheetHeight)
          );

          // Allow snapping to the top of the sheet if detent is set to `content-height`
          if (detent === 'content-height' && !snapToValues.includes(0)) {
            snapToValues.unshift(0);
          }

          // Get the closest snap point
          snapTo = getClosest(snapToValues, currentY);
        } else if (currentY / sheetHeight > DRAG_CLOSE_THRESHOLD) {
          // Close if dragged over enough far
          snapTo = sheetHeight;
        }

        snapTo = validateSnapTo({ snapTo, sheetHeight });

        // Update the spring value so that the sheet is animated to the snap point
        animate(y, snapTo, animationOptions);

        if (snapPoints && onSnap) {
          const snapValue = Math.abs(Math.round(snapPoints[0] - snapTo));
          const snapIndex = snapPoints.indexOf(getClosest(snapPoints, snapValue)); // prettier-ignore
          onSnap(snapIndex);
        }

        const roundedSheetHeight = Math.round(sheetHeight);
        const shouldClose = snapTo >= roundedSheetHeight;

        if (shouldClose) onClose();
      }

      // Reset indicator rotation after dragging
      indicatorRotation.set(0);
    });

    // Trigger onSnap callback when sheet is opened or closed
    React.useEffect(() => {
      if (!snapPoints || !onSnap) return;
      const snapIndex = isOpen ? initialSnap : snapPoints.length - 1;
      onSnap(snapIndex);
    }, [isOpen]); // eslint-disable-line

    React.useImperativeHandle(ref, () => ({
      y,
      snapTo: (snapIndex: number) => {
        const sheetEl = sheetRef.current as HTMLDivElement | null;

        if (
          snapPoints &&
          snapPoints[snapIndex] !== undefined &&
          sheetEl !== null
        ) {
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

    useModalEffect(isOpen, rootId);

    // Framer Motion should handle body scroll locking but it's not working
    // properly on iOS. Scroll locking from React Aria seems to work much better.
    usePreventScroll({ isDisabled: disableScrollLocking === true || !isOpen });

    const dragProps = React.useMemo(() => {
      const dragProps: SheetContextType['dragProps'] = {
        drag: 'y',
        dragElastic: 0,
        dragMomentum: false,
        dragPropagation: false,
        onDrag,
        onDragEnd,
      };

      return disableDrag ? undefined : dragProps;
    }, [disableDrag]); // eslint-disable-line

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
                {React.Children.map(children, (child: any, i) =>
                  React.cloneElement(child, { key: `sheet-child-${i}` })
                )}
              </SheetScrollerContextProvider>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </SheetContext.Provider>
    );

    if (IS_SSR) return sheet;

    return ReactDOM.createPortal(sheet, mountPoint ?? document.body);
  }
);

export default Sheet;

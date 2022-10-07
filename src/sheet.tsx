import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  animate,
  useMotionValue,
  PanInfo,
  AnimatePresence,
} from 'framer-motion';

import { SheetContextType, SheetProps } from './types';
import { getClosest, inDescendingOrder, isSSR, useWindowHeight } from './utils';
import { SheetContext } from './context';
import { useModalEffect } from './hooks';
import styles from './styles';

const Sheet = React.forwardRef<any, SheetProps>(
  (
    {
      children,
      isOpen,
      onClose,
      onOpenStart,
      onOpenEnd,
      onCloseStart,
      onCloseEnd,
      onSnap,
      snapPoints,
      initialSnap = 0,
      rootId,
      mountPoint,
      springConfig = { stiffness: 300, damping: 30, mass: 0.2 },
      disableDrag = false,
      style,
      ...rest
    },
    ref
  ) => {
    const sheetRef = React.useRef<any>(null);
    const callbacks = React.useRef({ onOpenStart, onOpenEnd, onCloseStart, onCloseEnd }); // prettier-ignore
    const indicatorRotation = useMotionValue(0);
    const windowHeight = useWindowHeight();

    // NOTE: the inital value for `y` doesn't matter since it is overwritten by
    // the value driven by the `AnimatePresence` component when the sheet is opened
    // and after that it is driven by the gestures and/or snapping
    const y = useMotionValue(0);

    if (snapPoints) {
      // Convert negative / percentage snap points to absolute values
      snapPoints = snapPoints.map(point => {
        if (point > 0 && point <= 1) return point * windowHeight; // percentage values e.g. between 0.0 and 1.0
        return point < 0 ? windowHeight + point : point; // negative values
      });

      console.assert(
        inDescendingOrder(snapPoints) || windowHeight === 0,
        `Snap points need to be in descending order got: [${snapPoints}]`
      );
    }

    const handleDrag = React.useCallback((_, { delta }: PanInfo) => {
      // Update drag indicator rotation based on drag velocity
      const velocity = y.getVelocity();
      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);

      // Make sure user cannot drag beyond the top of the sheet
      y.set(Math.max(y.get() + delta.y, 0));
    }, []); // eslint-disable-line

    const handleDragEnd = React.useCallback(
      (_, { velocity }: PanInfo) => {
        if (velocity.y > 500) {
          // User flicked the sheet down
          onClose();
        } else {
          const sheetEl = sheetRef.current as HTMLDivElement;
          const contentHeight = sheetEl.getBoundingClientRect().height;
          const snapTo = snapPoints
            ? getClosest(snapPoints.map(p => contentHeight - p), y.get()) // prettier-ignore
            : y.get() / contentHeight > 0.6 // Close if dragged over 60%
            ? contentHeight
            : 0;

          // Update the spring value so that the sheet is animated to the snap point
          animate(y, snapTo, { type: 'spring', ...springConfig });

          if (snapPoints && onSnap) {
            const snapValue = Math.abs(Math.round(snapPoints[0] - snapTo));
            const snapIndex = snapPoints.indexOf(snapValue);
            onSnap(snapIndex);
          }

          if (snapTo >= contentHeight) onClose();
        }

        // Reset indicator rotation after dragging
        indicatorRotation.set(0);
      },
      [onClose, onSnap] // eslint-disable-line
    );

    // Keep the callback fns up-to-date so that they can be accessed inside
    // the effect without including them to the dependencies array
    React.useEffect(() => {
      callbacks.current = { onOpenStart, onOpenEnd, onCloseStart, onCloseEnd };
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
          const contentHeight = sheetEl.getBoundingClientRect().height;
          const snapTo = contentHeight - snapPoints[snapIndex];
          animate(y, snapTo, { type: 'spring', ...springConfig });
          if (onSnap) onSnap(snapIndex);
          if (snapTo >= contentHeight) onClose();
        }
      },
    }));

    useModalEffect(isOpen, rootId);

    const dragProps = disableDrag
      ? ({} as any)
      : {
          drag: 'y' as const,
          dragElastic: 0,
          dragConstraints: { top: 0, bottom: 0 },
          dragMomentum: false,
          onDrag: handleDrag,
          onDragEnd: handleDragEnd,
        };

    const context: SheetContextType = {
      y,
      sheetRef,
      isOpen,
      initialSnap,
      snapPoints,
      indicatorRotation,
      callbacks,
      dragProps,
      windowHeight,
      springConfig,
    };

    const wrapperProps = {
      ...rest,
      ref,
      style: { ...styles.wrapper, ...style },
    };

    const sheet = (
      <SheetContext.Provider value={context}>
        <div {...wrapperProps}>
          <AnimatePresence>
            {/* NOTE: AnimatePresence requires us to set keys to children */}
            {isOpen
              ? React.Children.map(children, (child: any, i) =>
                  React.cloneElement(child, { key: `sheet-child-${i}` })
                )
              : null}
          </AnimatePresence>
        </div>
      </SheetContext.Provider>
    );

    if (isSSR) return sheet;

    return ReactDOM.createPortal(sheet, mountPoint ?? document.body);
  }
);

export default Sheet;

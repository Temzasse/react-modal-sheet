import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  useSpring,
  useMotionValue,
  AnimatePresence,
  PanInfo,
} from 'framer-motion';

import { SheetProps } from './types';
import { getClosest, isBrowser } from './utils';
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
      snapPoints,
      initialSnap = 0,
      rootId,
      springConfig = { stiffness: 300, damping: 30, mass: 0.2 },
      ...rest
    },
    ref
  ) => {
    const [isDragging, setDragging] = React.useState(false);
    const sheetRef = React.useRef<any>(null);
    const callbacks = React.useRef({ onOpenStart, onOpenEnd, onCloseStart, onCloseEnd }); // prettier-ignore
    const indicatorRotation = useMotionValue(0);
    const sheetDragY = useMotionValue(window.innerHeight);
    const sheetSpringY = useSpring(sheetDragY, springConfig);
    const y = isDragging ? sheetDragY : sheetSpringY;
    const pointerEvents = isOpen ? 'auto' : 'none';

    const handleDrag = React.useCallback((_, { delta }: PanInfo) => {
      // Update drag indicator rotation based on drag velocity
      const velocity = sheetDragY.getVelocity();
      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);

      // Make sure user cannot drag beyond the top of the sheet
      sheetDragY.set(Math.max(sheetDragY.get() + delta.y, 0));
    }, []); // eslint-disable-line

    const handleDragStart = React.useCallback(() => {
      // Sync the drag value with the spring value so that dragging start at the correct y position
      sheetDragY.set(sheetSpringY.get());
      setDragging(true);
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
            ? getClosest(
                snapPoints.map(p => contentHeight - p),
                sheetDragY.get()
              )
            : sheetDragY.get() / contentHeight > 0.6 // Close if dragged over 60%
            ? contentHeight
            : 0;

          // Update the spring value so that the sheet is animated to the snap point
          sheetSpringY.set(snapTo);

          if (snapTo >= contentHeight) onClose();
          setDragging(false);
        }

        // Reset indicator rotation after dragging
        indicatorRotation.set(0);
      },
      [onClose] // eslint-disable-line
    );

    // Keep the callback fns up-to-date so that they can be accessed inside
    // the effect without including them to the dependencies array
    React.useEffect(() => {
      callbacks.current = { onOpenStart, onOpenEnd, onCloseStart, onCloseEnd };
    });

    React.useImperativeHandle(ref, () => ({
      snapTo: (snapIndex: number) => {
        if (snapPoints && snapPoints[snapIndex] !== undefined) {
          const sheetEl = sheetRef.current as HTMLDivElement;
          const contentHeight = sheetEl.getBoundingClientRect().height;
          const snapTo = contentHeight - snapPoints[snapIndex];

          sheetSpringY.set(snapTo);
          if (snapTo >= contentHeight) onClose();
        }
      },
    }));

    useModalEffect(isOpen, rootId);

    const context = {
      y,
      sheetRef,
      isOpen,
      isDragging,
      initialSnap,
      snapPoints,
      handleDrag,
      handleDragStart,
      handleDragEnd,
      indicatorRotation,
      callbacks,
    };

    const comp = (
      <SheetContext.Provider value={context}>
        <div {...rest} ref={ref} style={{ ...styles.wrapper, pointerEvents }}>
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

    return isBrowser ? ReactDOM.createPortal(comp, document.body) : null;
  }
);

export default Sheet;

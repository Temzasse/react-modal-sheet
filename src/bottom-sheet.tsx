import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as CSS from 'csstype';

import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  AnimatePresence,
  PanInfo,
} from 'framer-motion';

import {
  applyRootStyles,
  cleanupRootStyles,
  getClosest,
  usePrevious,
} from './utils';

type Props = {
  isOpen: boolean;
  onClose: () => any;
  children: React.ReactNode;
  header?: React.ReactNode;
  rootId?: string;
  snapPoints?: number[];
  initialSnap?: number; // index of snap points array
};

const BottomSheet = React.forwardRef<any, Props>(
  (
    {
      header,
      children,
      isOpen,
      onClose,
      snapPoints,
      initialSnap,
      rootId,
      ...rest
    },
    ref
  ) => {
    const [isDragging, setDragging] = React.useState(false);
    const sheetRef = React.useRef<any>(null);
    const prevOpen = usePrevious(isOpen);
    const sheetDragY = useMotionValue(window.innerHeight);
    const sheetSpringY = useSpring(sheetDragY, { stiffness: 300, damping: 30, mass: 0.2 }); // prettier-ignore
    const dragY = useMotionValue(0);
    const rot = useMotionValue(0);
    const i1Transform = useTransform(rot, r => `translateX(2px) rotate(${r}deg)`); // prettier-ignore
    const i2Transform = useTransform(rot, r => `translateX(-2px) rotate(${-1 * r}deg)`); // prettier-ignore

    const initialY = snapPoints && initialSnap ? snapPoints[0] - snapPoints[initialSnap] : 0; // prettier-ignore
    const sheetY = isDragging ? sheetDragY : sheetSpringY;
    const h = snapPoints ? snapPoints[0] : null;
    const maxHeight = 'calc(100% - env(safe-area-inset-top) - 32px)';
    const sheetHeight = h ? `min(${h}px, ${maxHeight})` : maxHeight;

    const handleDrag = React.useCallback((_, { delta }: PanInfo) => {
      // Update drag indicator rotation based on drag velocity
      const velocity = sheetDragY.getVelocity();
      if (velocity > 0) rot.set(10);
      if (velocity < 0) rot.set(-10);

      // Make sure user cannot drag beyond the top of the sheet
      sheetDragY.set(Math.max(sheetDragY.get() + delta.y, 0));
    }, []);

    const handleDragStart = React.useCallback(() => {
      // Sync the drag value with the spring value so that dragging starts
      // at the correct y position
      sheetDragY.set(sheetSpringY.get());
      setDragging(true);
    }, []);

    const handleDragEnd = React.useCallback((_, { velocity }: PanInfo) => {
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

      rot.set(0);
    }, []);

    React.useEffect(() => {
      if (!rootId) return;

      if (!prevOpen && isOpen) {
        applyRootStyles(rootId);
      } else if (!isOpen && prevOpen) {
        cleanupRootStyles(rootId);
      }
    }, [isOpen, prevOpen]);

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

    return (
      <div
        {...rest}
        style={{ ...styles.wrapper, pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="backdrop"
              style={styles.backdrop}
              className="bottom-sheet-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
          )}

          {/**
           * We need to switch between the regular motion and spring value
           * in order to have the sheet animate properly between snap points
           */}
          {isOpen && (
            <motion.div
              key="sheet"
              className="bottom-sheet-container"
              ref={sheetRef}
              style={{ ...styles.sheet, height: sheetHeight, y: sheetY }}
              initial={{ y: window.innerHeight }}
              animate={{ y: initialY, transition: { type: 'tween' } }}
              exit={{ y: window.innerHeight }}
            >
              <motion.div
                style={{ ...styles.draggable, y: dragY }}
                drag="y"
                dragElastic={0}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragMomentum={false}
                onDrag={handleDrag}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                {header || (
                  <div style={styles.header} className="bottom-sheet-header">
                    <motion.span
                      className="bottom-sheet-drag-indicator"
                      style={{ ...styles.indicator, transform: i1Transform }}
                    />
                    <motion.span
                      className="bottom-sheet-drag-indicator"
                      style={{ ...styles.indicator, transform: i2Transform }}
                    />
                  </div>
                )}
              </motion.div>

              <div style={styles.content} className="bottom-sheet-content">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export const BottomSheetPortal = React.forwardRef<any, Props>(
  ({ children, ...rest }, ref) => {
    const portalRef = React.useRef<any>(null);
    const [portalCreated, setPortalCreated] = React.useState(false);

    React.useEffect(() => {
      let el = document.getElementById('#bottom-sheet-portal');

      if (!el) {
        el = document.createElement('div');
        el.id = 'bottom-sheet-portal';
        document.body.appendChild(el);
      }

      portalRef.current = el;
      setPortalCreated(true);
    }, []);

    if (!portalCreated) return null;

    const bottomSheet = (
      <BottomSheet ref={ref} {...rest}>
        {children}
      </BottomSheet>
    );

    return ReactDOM.createPortal(bottomSheet, portalRef.current);
  }
);

const fit: CSS.Properties = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const styles: { [key: string]: CSS.Properties } = {
  wrapper: {
    ...fit,
    zIndex: 9999999,
    overflow: 'hidden',
  },
  backdrop: {
    ...fit,
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    touchAction: 'none', // Disable iOS body scrolling
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    boxShadow: '0px -2px 16px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    height: '40px',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: '18px',
    height: '4px',
    borderRadius: '99px',
    backgroundColor: '#ddd',
  },
  content: {
    flex: 1,
    overflow: 'auto',
    position: 'relative',
    touchAction: 'none', // Disable iOS body scrolling
  },
  draggable: {
    width: '100%',
  },
};

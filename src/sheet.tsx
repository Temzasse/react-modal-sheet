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

type EventCallbacks = {
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
};

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  header?: React.ReactNode;
  rootId?: string;
  snapPoints?: number[];
  initialSnap?: number; // index of snap points array
  springConfig?: Parameters<typeof useSpring>[1];
} & EventCallbacks;

const Sheet = React.forwardRef<any, Props>(
  (
    {
      header,
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

    // Drag motion values
    const sheetDragY = useMotionValue(window.innerHeight);
    const sheetSpringY = useSpring(sheetDragY, springConfig);
    const dragY = useMotionValue(0);
    const sheetY = isDragging ? sheetDragY : sheetSpringY;

    // Drag indicator rotation
    const rot = useMotionValue(0);
    const i1Transform = useTransform(rot, r => `translateX(2px) rotate(${r}deg)`); // prettier-ignore
    const i2Transform = useTransform(rot, r => `translateX(-2px) rotate(${-1 * r}deg)`); // prettier-ignore

    // Sheet position and height values
    const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
    const h = snapPoints ? snapPoints[0] : null;
    const maxHeight = 'calc(100% - env(safe-area-inset-top) - 34px)';
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
      // Sync the drag value with the spring value so that dragging start at the correct y position
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

      // Reset indicator rotation after dragging
      rot.set(0);
    }, []);

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

    const { handleAnimationComplete } = useEventCallbacks(isOpen, {
      onOpenStart,
      onOpenEnd,
      onCloseStart,
      onCloseEnd,
    });

    useModalEffect(isOpen, rootId);

    return (
      <div
        {...rest}
        style={{ ...styles.wrapper, pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="backdrop"
              className="react-modal-sheet-backdrop"
              style={styles.backdrop}
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
              className="react-modal-sheet-container"
              ref={sheetRef}
              style={{ ...styles.sheet, height: sheetHeight, y: sheetY }}
              initial={{ y: window.innerHeight }}
              animate={{ y: initialY, transition: { type: 'tween' } }}
              exit={{ y: window.innerHeight }}
              onAnimationComplete={handleAnimationComplete}
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
                  <div
                    className="react-modal-sheet-header"
                    style={styles.header}
                  >
                    <motion.span
                      className="react-modal-sheet-drag-indicator"
                      style={{ ...styles.indicator, transform: i1Transform }}
                    />
                    <motion.span
                      className="react-modal-sheet-drag-indicator"
                      style={{ ...styles.indicator, transform: i2Transform }}
                    />
                  </div>
                )}
              </motion.div>

              <div className="react-modal-sheet-content" style={styles.content}>
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

const useModalEffect = (isOpen: boolean, rootId?: string) => {
  const prevOpen = usePrevious(isOpen);

  // Automatically apply the iOS modal effect to the body when sheet opens/closes
  React.useEffect(() => {
    if (!rootId) return;
    if (!prevOpen && isOpen) {
      applyRootStyles(rootId);
    } else if (!isOpen && prevOpen) {
      cleanupRootStyles(rootId);
    }
  }, [isOpen, prevOpen]);

  // Make sure to cleanup modal styles on unmount
  React.useEffect(() => {
    return () => {
      if (rootId && isOpen) cleanupRootStyles(rootId);
    };
  }, [isOpen]);
};

const useEventCallbacks = (isOpen: boolean, callbacks: EventCallbacks) => {
  const prevOpen = usePrevious(isOpen);
  const didOpen = React.useRef(false);
  const callbacksRef = React.useRef(callbacks);

  // Because of AnimatePrecence we don't have access to latest isOpen value
  // so we need to read and write to a ref to determine if we are
  // opening or closing the sheet
  const handleAnimationComplete = React.useCallback(() => {
    if (!didOpen.current) {
      callbacksRef.current.onOpenEnd?.();
      didOpen.current = true;
    } else {
      callbacksRef.current.onCloseEnd?.();
      didOpen.current = false;
    }
  }, [isOpen, prevOpen]);

  // Keep the callback fns up-to-date so that they can be accessed inside
  // the effect without including them to the dependencies array
  React.useEffect(() => {
    callbacksRef.current = callbacks;
  }, [callbacks]);

  React.useEffect(() => {
    if (!prevOpen && isOpen) {
      callbacksRef.current.onOpenStart?.();
    } else if (!isOpen && prevOpen) {
      callbacksRef.current.onCloseStart?.();
    }
  }, [isOpen, prevOpen]);

  return { handleAnimationComplete };
};

export const SheetPortal = React.forwardRef<any, Props>(
  ({ children, ...rest }, ref) => {
    const portalRef = React.useRef<any>(null);
    const [portalCreated, setPortalCreated] = React.useState(false);

    // Automatically create portal root if it doesn't exist yet
    React.useEffect(() => {
      let el = document.getElementById('react-modal-sheet-portal');

      if (!el) {
        el = document.createElement('div');
        el.id = 'react-modal-sheet-portal';
        document.body.appendChild(el);
      }

      portalRef.current = el;
      setPortalCreated(true);
    }, []);

    if (!portalCreated) return null;

    return ReactDOM.createPortal(
      <Sheet ref={ref} {...rest}>
        {children}
      </Sheet>,
      portalRef.current
    );
  }
);

// Exposed types -------------------------------------------------------------

export type SheetRef = {
  snapTo: (index: number) => void;
};

// Styles --------------------------------------------------------------------

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

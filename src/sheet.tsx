import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as CSS from 'csstype';
import mergeRefs from 'react-merge-refs';

import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  AnimatePresence,
  PanInfo,
  MotionValue,
  DragHandlers,
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
  rootId?: string;
  snapPoints?: number[];
  initialSnap?: number; // index of snap points array
  springConfig?: Parameters<typeof useSpring>[1];
} & EventCallbacks;

const Sheet = React.forwardRef<any, Props>(
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
      indicatorRotation.set(0);
    }, []);

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

    return ReactDOM.createPortal(comp, document.body);
  }
);

// Compound components --------------------------------------------------------

// TODO: fix props typing

const SheetContainer = React.forwardRef<any, any>(
  ({ children, ...rest }, ref) => {
    const {
      y,
      isOpen,
      callbacks,
      snapPoints,
      initialSnap = 0,
      sheetRef,
    } = useSheetContext();

    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
    const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
    const h = snapPoints ? snapPoints[0] : null;
    const maxHeight = 'calc(100% - env(safe-area-inset-top) - 34px)';
    const sheetHeight = h ? `min(${h}px, ${maxHeight})` : maxHeight;

    return (
      <motion.div
        ref={mergeRefs([sheetRef, ref])}
        className="react-modal-sheet-container"
        style={{ ...styles.container, height: sheetHeight, y }}
        initial={{ y: window.innerHeight }}
        animate={{ y: initialY, transition: { type: 'tween' } }}
        exit={{ y: window.innerHeight }}
        onAnimationComplete={handleAnimationComplete}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

const SheetHeader = React.forwardRef<any, any>(
  ({ children, style = {}, ...rest }, ref) => {
    const {
      indicatorRotation,
      handleDrag,
      handleDragStart,
      handleDragEnd,
    } = useSheetContext();

    const dragY = useMotionValue(0);

    const indicator1Transform = useTransform(
      indicatorRotation,
      r => `translateX(2px) rotate(${r}deg)`
    );

    const indicator2Transform = useTransform(
      indicatorRotation,
      r => `translateX(-2px) rotate(${-1 * r}deg)`
    );

    return (
      <motion.div
        ref={ref}
        style={{ ...styles.draggable, ...style, y: dragY }}
        drag="y"
        dragElastic={0}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragMomentum={false}
        onDrag={handleDrag}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...rest}
      >
        {children || (
          <div className="react-modal-sheet-header" style={styles.header}>
            <motion.span
              className="react-modal-sheet-drag-indicator"
              style={{ ...styles.indicator, transform: indicator1Transform }}
            />
            <motion.span
              className="react-modal-sheet-drag-indicator"
              style={{ ...styles.indicator, transform: indicator2Transform }}
            />
          </div>
        )}
      </motion.div>
    );
  }
);

const SheetContent = React.forwardRef<any, any>(
  ({ children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="react-modal-sheet-content"
        style={styles.content}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

const SheetBackdrop = React.forwardRef<any, any>((props, ref) => {
  const Comp = props.onClick ? motion.button : motion.div;

  return (
    <Comp
      ref={ref}
      className="react-modal-sheet-backdrop"
      style={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    />
  );
});

// Context --------------------------------------------------------------------

type SheetContextType = {
  y: MotionValue<any>;
  sheetRef: React.MutableRefObject<any>;
  isDragging: boolean;
  isOpen: boolean;
  snapPoints: Props['snapPoints'];
  initialSnap: Props['initialSnap'];
  handleDrag: DragHandlers['onDrag'];
  handleDragStart: DragHandlers['onDragStart'];
  handleDragEnd: DragHandlers['onDragEnd'];
  indicatorRotation: MotionValue<number>;
  callbacks: React.MutableRefObject<EventCallbacks>;
};

const SheetContext = React.createContext<SheetContextType | undefined>(
  undefined
);

const useSheetContext = () => {
  const context = React.useContext(SheetContext);
  if (!context) throw Error('Sheet context error');
  return context;
};

// Hooks ---------------------------------------------------------------------

const useModalEffect = (isOpen: boolean, rootId?: string) => {
  const prevOpen = usePrevious(isOpen);

  // Automatically apply the iOS modal effect to the body when sheet opens/closes
  React.useEffect(() => {
    if (rootId && !prevOpen && isOpen) {
      applyRootStyles(rootId);
    } else if (rootId && !isOpen && prevOpen) {
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

const useEventCallbacks = (
  isOpen: boolean,
  callbacks: React.MutableRefObject<EventCallbacks>
) => {
  const prevOpen = usePrevious(isOpen);
  const didOpen = React.useRef(false);

  // Because of AnimatePrecence we don't have access to latest isOpen value
  // so we need to read and write to a ref to determine if we are
  // opening or closing the sheet
  const handleAnimationComplete = React.useCallback(() => {
    if (!didOpen.current) {
      callbacks.current.onOpenEnd?.();
      didOpen.current = true;
    } else {
      callbacks.current.onCloseEnd?.();
      didOpen.current = false;
    }
  }, [isOpen, prevOpen]);

  React.useEffect(() => {
    if (!prevOpen && isOpen) {
      callbacks.current.onOpenStart?.();
    } else if (!isOpen && prevOpen) {
      callbacks.current.onCloseStart?.();
    }
  }, [isOpen, prevOpen]);

  return { handleAnimationComplete };
};

// Exported  ------------------------------------------------------------------

export type SheetRef = {
  snapTo: (index: number) => void;
};

type SheetCompoundComponent = {
  Container: typeof SheetContainer;
  Header: typeof SheetHeader;
  Content: typeof SheetContent;
  Backdrop: typeof SheetBackdrop;
};

// HACK: this is needed to get the typing to work properly...
const _Sheet: any = Sheet;
_Sheet.Container = SheetContainer;
_Sheet.Header = SheetHeader;
_Sheet.Content = SheetContent;
_Sheet.Backdrop = SheetBackdrop;

export const SheetCompound: typeof Sheet & SheetCompoundComponent = _Sheet;

/*
<Sheet>
  <Sheet.Container>
    <Sheet.Header>
      ...optional custom header here..
    </Sheet.Header>

    <Sheet.Content>
      <div>Sheet content here</div>
    </Sheet.Content>
  </Sheet.Container>

  <Sheet.Backdrop />
</Sheet>
*/

// Styles --------------------------------------------------------------------

const styles: { [key: string]: CSS.Properties } = {
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999999,
    overflow: 'hidden',
  },
  backdrop: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    touchAction: 'none', // Disable iOS body scrolling
  },
  container: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    boxShadow: '0px -2px 16px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
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

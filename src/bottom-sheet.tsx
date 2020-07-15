import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import {
  motion,
  useMotionValue,
  useSpring,
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
  rootId?: string;
  snapPoints?: number[];
  initialSnap?: number; // index of snap points array
  onClose: () => any;
  children: React.ReactNode;
  header?: React.ReactNode;
};

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.2 };

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
    const prevOpen = usePrevious(isOpen);
    const sheetRef = React.useRef<any>(null);
    const sheetDragY = useMotionValue(window.innerHeight);
    const sheetSpringY = useSpring(sheetDragY, SPRING_CONFIG);
    const dragY = useMotionValue(0);
    const [isDragging, setDragging] = React.useState(false);
    const initialY =
      snapPoints && initialSnap ? snapPoints[0] - snapPoints[initialSnap] : 0;

    const handleDrag = React.useCallback((_, { delta }: PanInfo) => {
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
      <Wrapper isOpen={isOpen} {...rest}>
        <AnimatePresence>
          {isOpen && (
            <Backdrop
              key="backdrop"
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
            <Sheet
              key="sheet"
              className="bottom-sheet-container"
              ref={sheetRef}
              style={{ y: isDragging ? sheetDragY : sheetSpringY }}
              initial={{ y: window.innerHeight }}
              animate={{ y: initialY, transition: { type: 'tween' } }}
              exit={{ y: window.innerHeight }}
              h={snapPoints ? snapPoints[0] : null}
            >
              <SheetDragHandler
                style={{ y: dragY }}
                drag="y"
                dragElastic={0}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragMomentum={false}
                onDrag={handleDrag}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                {header || <SheetHeader className="bottom-sheet-header" />}
              </SheetDragHandler>

              <SheetContent className="bottom-sheet-content">
                {children}
              </SheetContent>
            </Sheet>
          )}
        </AnimatePresence>
      </Wrapper>
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

const fit = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  ${fit}
  z-index: 9999999;
  overflow: hidden;
  pointer-events: ${p => (p.isOpen ? 'auto' : 'none')};
`;

const Backdrop = styled(motion.div)`
  ${fit}
  background-color: rgba(51, 51, 51, 0.5);
`;

const maxHeight = `calc(100% - env(safe-area-inset-top) - 32px)`;

const Sheet = styled(motion.div)<{ h: number | null }>`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  box-shadow: 0px -2px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${p => (p.h ? `min(${p.h}px, ${maxHeight})` : maxHeight)};

  &::after {
    content: '';
    z-index: 1;
    position: absolute;
    bottom: calc(-1px * env(safe-area-inset-bottom));
    left: 0;
    right: 0;
    height: env(safe-area-inset-bottom);
    background-color: inherit;
  }
`;

const SheetContent = styled.div`
  flex: 1;
  overflow: auto;
  position: relative;
`;

const SheetHeader = styled.div`
  height: 40px;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    width: 40px;
    height: 5px;
    border-radius: 99px;
    background-color: #ddd;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SheetDragHandler = styled(motion.div)`
  width: 100%;
`;

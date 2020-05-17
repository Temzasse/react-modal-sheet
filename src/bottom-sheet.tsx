import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  PanInfo,
} from 'framer-motion';

import {
  usePrevious,
  applyRootStyles,
  cleanupRootStyles,
  getClosest,
} from './utils';

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.2 };
const TOP_OFFSET = 32;

export const BottomSheet = ({
  rootId,
  snapPoints, // = [600, 400, 100, 0],
}: {
  rootId?: string;
  snapPoints?: number[];
}) => {
  const { isOpen, el } = useBottomSheetState();
  const dispatch = useBottomSheetDispatch();
  const prevOpen = usePrevious(isOpen);
  const sheetRef = React.useRef<any>(null);
  const sheetDragY = useMotionValue(window.innerHeight);
  const sheetSpringY = useSpring(sheetDragY, SPRING_CONFIG);
  const dragY = useMotionValue(0);
  const [isDragging, setDragging] = React.useState(false);

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

  const handleDragEnd = React.useCallback(
    (_, { velocity }: PanInfo) => {
      if (velocity.y > 500) {
        // User flicked the sheet down
        dispatch({ type: 'close' });
      } else {
        const sheetEl = sheetRef.current as HTMLDivElement;
        const contentHeight = sheetEl.getBoundingClientRect().height;
        const snapTo = snapPoints
          ? getClosest(
              snapPoints.map(p => Math.abs(p - contentHeight)),
              sheetDragY.get()
            )
          : sheetDragY.get() / contentHeight > 0.6 // Close if dragged over 60%
          ? contentHeight
          : 0;

        // Update the spring value so that the sheet is animated to the snap point
        sheetSpringY.set(snapTo);

        if (snapTo >= contentHeight) dispatch({ type: 'close' });
        setDragging(false);
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    if (prevOpen && !isOpen) dispatch({ type: 'close' });
  }, [dispatch, isOpen, prevOpen]);

  React.useEffect(() => {
    if (rootId) {
      isOpen ? applyRootStyles(rootId) : cleanupRootStyles(rootId);
    }
  }, [isOpen]);

  return (
    <Wrapper isOpen={isOpen}>
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'close' })}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/**
         * We need to switch between the regular motion and spring value
         * in order to have the sheet animate properly between snap points
         */}
        {isOpen && (
          <Sheet
            key="sheet"
            ref={sheetRef}
            style={{ y: isDragging ? sheetDragY : sheetSpringY }}
            initial={{ y: window.innerHeight }}
            animate={{ y: 0, transition: { type: 'tween' } }}
            exit={{ y: window.innerHeight }}
            h={snapPoints ? snapPoints[0] : null}
          >
            <SheetDragTarget />
            <SheetDragHandler
              style={{ y: dragY }}
              drag="y"
              dragElastic={0}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragMomentum={false}
              onDrag={handleDrag}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
            <SheetContent>{el}</SheetContent>
          </Sheet>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean }>`
  z-index: 9999999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  pointer-events: ${p => (p.isOpen ? 'auto' : 'none')};
`;

const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(51, 51, 51, 0.5);
`;

const maxHeight = `calc(100% - env(safe-area-inset-top) - ${TOP_OFFSET}px)`;

const Sheet = styled(motion.div)<{ h: number | null }>`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  box-shadow: 0px -2px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${p => (p.h ? `min(${p.h}px, ${maxHeight})` : maxHeight)};
`;

const SheetContent = styled.div`
  position: absolute;
  top: 32px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
`;

const SheetDragTarget = styled.div`
  height: 32px;
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
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

interface State {
  isOpen: boolean;
  el: null | React.ReactNode;
}

type Action = { type: 'open'; payload: React.ReactNode } | { type: 'close' };
type Dispatch = (action: Action) => void;

const StateContext = React.createContext<State | undefined>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined);

function bottomSheetReducer(state: State, action: Action) {
  switch (action.type) {
    case 'open': {
      return { ...state, isOpen: true, el: action.payload };
    }
    case 'close': {
      return { ...state, isOpen: false, el: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

export function BottomSheetProvider({
  children,
  rootId,
}: {
  children: React.ReactNode;
  rootId?: string;
}) {
  const [state, dispatch] = React.useReducer(bottomSheetReducer, {
    isOpen: false,
    el: null,
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
        <BottomSheetPortal rootId={rootId} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function BottomSheetPortal(props: { rootId?: string }) {
  const portalRef = React.useRef<any>(null);

  React.useEffect(() => {
    let el = document.getElementById('#bottom-sheet-portal');

    if (!el) {
      el = document.createElement('div');
      el.id = 'bottom-sheet-portal';
      document.body.appendChild(el);
    }

    portalRef.current = el;
  }, []);

  if (!portalRef.current) return null;

  const bottomSheet = <BottomSheet {...props} />;
  return ReactDOM.createPortal(bottomSheet, portalRef.current);
}

export function useBottomSheetDispatch() {
  const dispatch = React.useContext(DispatchContext);
  if (dispatch === undefined) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }
  return dispatch;
}

export function useBottomSheetState() {
  const state = React.useContext(StateContext);
  if (state === undefined) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }
  return state;
}

export function useBottomSheet() {
  const dispatch = useBottomSheetDispatch();

  return React.useMemo(
    () => ({
      open: (payload: React.ReactNode) => dispatch({ type: 'open', payload }),
      close: () => dispatch({ type: 'close' }),
    }),
    [dispatch]
  );
}

export default BottomSheet;

import * as React from 'react';
import { motion } from 'framer-motion';
import mergeRefs from 'react-merge-refs';

import { useSheetContext } from './context';
import { useEventCallbacks } from './hooks';
import styles from './styles';

const MAX_HEIGHT = 'calc(100% - env(safe-area-inset-top) - 34px)';

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
    const sheetHeight = h ? `min(${h}px, ${MAX_HEIGHT})` : MAX_HEIGHT;

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

export default SheetContainer;

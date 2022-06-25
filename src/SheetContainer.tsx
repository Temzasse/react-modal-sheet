import * as React from 'react';
import { motion } from 'framer-motion';
import mergeRefs from 'react-merge-refs';

import { SheetContainerProps } from './types';
import { useSheetContext } from './context';
import { useEventCallbacks } from './hooks';
import styles from './styles';

const MAX_HEIGHT = 'calc(100% - env(safe-area-inset-top) - 34px)';

const SheetContainer = React.forwardRef<any, SheetContainerProps>(
  ({ children, style = {}, ...rest }, ref) => {
    const {
      y,
      isOpen,
      callbacks,
      snapPoints,
      initialSnap = 0,
      sheetRef,
      windowHeight,
      springConfig,
      useContentHeight,
    } = useSheetContext();

    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
    const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
    const h = snapPoints ? snapPoints[0] : null;
    const sheetHeight = h ? `min(${h}px, ${MAX_HEIGHT})` : MAX_HEIGHT;
    return (
      <>
        <motion.div
          {...rest}
          ref={mergeRefs([sheetRef, ref])}
          className="react-modal-sheet-container"
          style={{
            ...styles.container,
            ...(!useContentHeight && { height: sheetHeight }),
            ...(useContentHeight && { maxHeight: sheetHeight }),
            ...style,
            y,
          }}
          initial={{ y: windowHeight }}
          animate={{
            y: initialY,
            transition: { type: 'spring', ...springConfig },
          }}
          exit={{ y: windowHeight }}
          onAnimationComplete={handleAnimationComplete}
        >
          {children}
        </motion.div>
      </>
    );
  }
);

export default SheetContainer;

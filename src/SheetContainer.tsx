import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import mergeRefs from 'react-merge-refs';

import { SheetContainerProps } from './types';
import { useSheetContext } from './context';
import { useEventCallbacks } from './hooks';
import { MAX_HEIGHT } from './constants';
import styles from './styles';

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
      detent = 'full-height',
      prefersReducedMotion,
    } = useSheetContext();

    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
    const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
    const maxSnapHeight = snapPoints ? snapPoints[0] : null;
    const shouldReduceMotion = useReducedMotion();
    const initial =
      prefersReducedMotion || shouldReduceMotion ? false : { y: windowHeight };
    const transition =
      prefersReducedMotion || shouldReduceMotion
        ? { type: 'tween', duration: 0.01 }
        : { type: 'spring', ...springConfig };

    const height =
      maxSnapHeight !== null
        ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})`
        : MAX_HEIGHT;

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className="react-modal-sheet-container"
        style={{
          ...styles.container,
          ...style,
          ...(detent === 'full-height' && { height }),
          ...(detent === 'content-height' && { maxHeight: height }),
          y,
        }}
        initial={initial}
        animate={{
          y: initialY,
          transition,
        }}
        exit={{ y: windowHeight, transition }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    );
  }
);

export default SheetContainer;

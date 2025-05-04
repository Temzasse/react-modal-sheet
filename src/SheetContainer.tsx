import React, { forwardRef } from 'react';
import { motion } from 'motion/react';

import { type SheetContainerProps } from './types';
import { useSheetContext } from './context';
import { useEventCallbacks } from './hooks/use-event-callbacks';
import { MAX_HEIGHT } from './constants';
import { mergeRefs } from './utils';
import { styles } from './styles';

export const SheetContainer = forwardRef<any, SheetContainerProps>(
  ({ children, style, className = '', ...rest }, ref) => {
    const {
      y,
      isOpen,
      callbacks,
      sheetRef,
      windowHeight,
      detent,
      animationOptions,
    } = useSheetContext();

    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className={`react-modal-sheet-container ${className}`}
        style={{
          ...styles.container,
          ...style,
          ...(detent === 'full-height' && { height: MAX_HEIGHT }),
          ...(detent === 'content-height' && { maxHeight: MAX_HEIGHT }),
          y,
        }}
        initial={{ y: windowHeight }}
        exit={{ y: windowHeight, transition: animationOptions }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    );
  }
);

SheetContainer.displayName = 'SheetContainer';

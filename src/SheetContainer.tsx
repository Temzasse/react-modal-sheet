import { motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { MAX_HEIGHT } from './constants';
import { useSheetContext } from './context';
import { useEventCallbacks } from './hooks/use-event-callbacks';
import { styles } from './styles';
import { type SheetContainerProps } from './types';
import { mergeRefs } from './utils';

export const SheetContainer = forwardRef<any, SheetContainerProps>(
  (
    {
      children,
      style,
      className = '',
      ensureContentReachability = true,
      ...rest
    },
    ref
  ) => {
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

    const containerStyle = {
      ...styles.container,
      height: detent === 'full-height' ? MAX_HEIGHT : undefined,
      maxHeight: detent === 'content-height' ? MAX_HEIGHT : undefined,
      ...style,
      y,
    };

    if (ensureContentReachability) {
      containerStyle.paddingBottom = y;
    }

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className={`react-modal-sheet-container ${className}`}
        style={containerStyle}
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

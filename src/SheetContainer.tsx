import { type MotionStyle, motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { DEFAULT_HEIGHT } from './constants';
import { useSheetContext } from './context';
import { styles } from './styles';
import { type SheetContainerProps } from './types';
import { mergeRefs } from './utils';

export const SheetContainer = forwardRef<any, SheetContainerProps>(
  ({ children, style, className = '', ...rest }, ref) => {
    const { y, sheetRef, sheetBoundsRef, detent } = useSheetContext();

    const containerStyle: MotionStyle = {
      ...styles.container,
      ...style,
      y,
    };

    if (detent === 'default') {
      containerStyle.height = DEFAULT_HEIGHT;
    }

    if (detent === 'full') {
      containerStyle.height = '100%';
      containerStyle.maxHeight = '100%';
    }

    if (detent === 'content') {
      containerStyle.height = 'auto';
      containerStyle.maxHeight = DEFAULT_HEIGHT;
    }

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, sheetRef, sheetBoundsRef])}
        className={`react-modal-sheet-container ${className}`}
        style={containerStyle}
      >
        {children}
      </motion.div>
    );
  }
);

SheetContainer.displayName = 'SheetContainer';

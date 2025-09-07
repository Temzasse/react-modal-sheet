import { type MotionStyle, motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { DEFAULT_HEIGHT } from './constants';
import { useSheetContext } from './context';
import { styles } from './styles';
import { type SheetContainerProps } from './types';
import { applyStyles, mergeRefs } from './utils';

export const SheetContainer = forwardRef<any, SheetContainerProps>(
  ({ children, style, className = '', unstyled, ...rest }, ref) => {
    const sheetContext = useSheetContext();

    const isUnstyled = unstyled ?? sheetContext.unstyled;

    const containerStyle: MotionStyle = {
      ...applyStyles(styles.container, isUnstyled),
      ...style,
      y: sheetContext.y,
    };

    if (sheetContext.detent === 'default') {
      containerStyle.height = DEFAULT_HEIGHT;
    }

    if (sheetContext.detent === 'full') {
      containerStyle.height = '100%';
      containerStyle.maxHeight = '100%';
    }

    if (sheetContext.detent === 'content') {
      containerStyle.height = 'auto';
      containerStyle.maxHeight = DEFAULT_HEIGHT;
    }

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([
          ref,
          sheetContext.sheetRef,
          sheetContext.sheetBoundsRef,
        ])}
        className={`react-modal-sheet-container ${className}`}
        style={containerStyle}
      >
        {children}
      </motion.div>
    );
  }
);

SheetContainer.displayName = 'SheetContainer';

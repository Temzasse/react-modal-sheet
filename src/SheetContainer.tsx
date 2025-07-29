import { motion, useTransform } from 'motion/react';
import React, { forwardRef } from 'react';

import { MAX_HEIGHT, REACHABILITY_PADDING_VAR } from './constants';
import { useSheetContext } from './context';
import { styles } from './styles';
import { type SheetContainerProps } from './types';
import { mergeRefs } from './utils';

export const SheetContainer = forwardRef<any, SheetContainerProps>(
  ({ children, style, className = '', ...rest }, ref) => {
    const { y, sheetRef, detent, ensureContentReachability } =
      useSheetContext();

    const paddingBottomVar = useTransform(() => y.get() + 'px');

    const containerStyle = {
      // Use CSS variable for padding bottom to ensure content reachability
      [REACHABILITY_PADDING_VAR]: ensureContentReachability
        ? paddingBottomVar
        : undefined,
      ...styles.container,
      height: detent === 'full-height' ? MAX_HEIGHT : undefined,
      maxHeight: detent === 'content-height' ? MAX_HEIGHT : undefined,
      paddingBottom: `var(${REACHABILITY_PADDING_VAR}, 0px)`,
      ...style,
      y,
    };

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className={`react-modal-sheet-container ${className}`}
        style={containerStyle}
      >
        {children}
      </motion.div>
    );
  }
);

SheetContainer.displayName = 'SheetContainer';

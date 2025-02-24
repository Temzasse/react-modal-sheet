import React, { forwardRef } from 'react';
import { motion } from 'motion/react';

import { type SheetContainerProps } from './types';
import { useSheetContext } from './context';
import { useEventCallbacks } from './hooks';
import { getMaxHeightConstraint, mergeRefs } from './utils';
import { styles } from './styles';

export const SheetContainer = forwardRef<any, SheetContainerProps>(
  ({ children, style = {}, className = '', forcedInset, ...rest }, ref) => {
    const {
      y,
      isOpen,
      callbacks,
      snapPoints,
      initialSnap = 0,
      sheetRef,
      windowHeight,
      detent,
      animationOptions,
      reduceMotion,
    } = useSheetContext();

    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
    const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
    const maxSnapHeight = snapPoints ? snapPoints[0] : null;

    const maxHeightConstraint = getMaxHeightConstraint(forcedInset);

    const height =
      maxSnapHeight !== null
        ? `min(${maxSnapHeight}px, ${maxHeightConstraint})`
        : maxHeightConstraint;

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className={`react-modal-sheet-container ${className}`}
        style={{
          ...styles.container,
          ...style,
          ...(detent === 'full-height' && { height }),
          ...(detent === 'content-height' && { maxHeight: height }),
          y,
        }}
        initial={reduceMotion ? false : { y: windowHeight }}
        animate={{ y: initialY, transition: animationOptions }}
        exit={{ y: windowHeight, transition: animationOptions }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    );
  }
);

SheetContainer.displayName = 'SheetContainer';

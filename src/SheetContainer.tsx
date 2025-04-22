import React, { forwardRef } from 'react';
import { motion } from 'motion/react';

import { type SheetContainerProps } from './types';
import { useSheetContext } from './context';
import { useEventCallbacks } from './hooks';
import {
  MAX_HEIGHT,
  SHEET_POSITIONS,
  REDUCED_MOTION_TRANSITION_CONFIG,
} from './constants';
import { mergeRefs } from './utils';
import { styles } from './styles';

export const SheetContainer = forwardRef<any, SheetContainerProps>(
  ({ children, style = {}, className = '', ...rest }, ref) => {
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

    const height =
      maxSnapHeight !== null
        ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})`
        : MAX_HEIGHT;

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
        // Sử dụng các hằng số để đảm bảo sheet luôn xuất hiện từ dưới lên
        initial={SHEET_POSITIONS.INITIAL(windowHeight)}
        // Sử dụng transition phù hợp với trạng thái reduced motion
        animate={{
          y: initialY,
          transition: reduceMotion
            ? REDUCED_MOTION_TRANSITION_CONFIG
            : animationOptions,
        }}
        // Giữ exit animation bình thường
        exit={{
          ...SHEET_POSITIONS.EXIT(windowHeight),
          transition: animationOptions,
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    );
  }
);

SheetContainer.displayName = 'SheetContainer';

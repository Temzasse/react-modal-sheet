import * as React from 'react';
import { motion, useTransform } from 'framer-motion';

import { SheetContainerProps } from './types';
import { useSheetContext } from './context';
import { useEventCallbacks } from './hooks';
import { MAX_HEIGHT } from './constants';
import { mergeRefs } from './utils';
import styles from './styles';

const SheetContainer = React.forwardRef<any, SheetContainerProps>(
  ({ children, style = {}, className = '', ...rest }, ref) => {
    const context = useSheetContext();
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
    } = context;
    const extraSpace = 'extraSpace' in context ? context.extraSpace : false;

    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
    const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
    const maxSnapHeight = snapPoints ? snapPoints[0] : null;

    const _height =
      maxSnapHeight !== null
        ? extraSpace
          ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})`
          : `calc(100% - env(safe-area-inset-top))`
        : extraSpace
        ? MAX_HEIGHT
        : `calc(100% - env(safe-area-inset-top))`;

    const getHeight = (size: number) => {
      return extraSpace
        ? `min(${maxSnapHeight}px, calc(100% - env(safe-area-inset-top) - ${size}px))`
        : `calc(100% - env(safe-area-inset-top) - ${size}px)`;
    };

    const height = useTransform(y, getHeight);

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className={`react-split-sheet-container ${className}`}
        style={{
          ...styles.pane,
          ...styles.panePrimary,
          ...style,
          ...(detent === 'full-height' && { _height }),
          ...(detent === 'content-height' && { maxHeight: _height }),
          height,
        }}
        initial={reduceMotion ? false : { height: windowHeight }}
        animate={{ height: getHeight(initialY), transition: animationOptions }}
        exit={{ height: getHeight(windowHeight), transition: animationOptions }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    );
  }
);

export default SheetContainer;

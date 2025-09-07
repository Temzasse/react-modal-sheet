import { type MotionStyle, motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { useSheetContext } from './context';
import { styles } from './styles';
import { type SheetBackdropProps } from './types';
import { applyStyles } from './utils';

const isClickable = (props: any) => !!props.onClick || !!props.onTap;

export const SheetBackdrop = forwardRef<any, SheetBackdropProps>(
  ({ style, className = '', unstyled, ...rest }, ref) => {
    const sheetContext = useSheetContext();
    const clickable = isClickable(rest);
    const Comp = clickable ? motion.button : motion.div;
    const pointerEvents = clickable ? 'auto' : 'none';

    const isUnstyled = unstyled ?? sheetContext.unstyled;

    const backdropStyle: MotionStyle = {
      ...applyStyles(styles.backdrop, isUnstyled),
      ...style,
      pointerEvents,
    };

    return (
      <Comp
        {...rest}
        ref={ref}
        className={`react-modal-sheet-backdrop ${className}`}
        style={backdropStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    );
  }
);

SheetBackdrop.displayName = 'SheetBackdrop';

import { motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { styles } from './styles';
import { type SheetBackdropProps } from './types';

const isClickable = (props: any) => !!props.onClick || !!props.onTap;

export const SheetBackdrop = forwardRef<any, SheetBackdropProps>(
  ({ style, className = '', ...rest }, ref) => {
    const clickable = isClickable(rest);
    const Comp = clickable ? motion.button : motion.div;
    const pointerEvents = clickable ? 'auto' : 'none';

    return (
      <Comp
        {...rest}
        ref={ref}
        className={`react-modal-sheet-backdrop ${className}`}
        style={{ ...styles.backdrop, ...style, pointerEvents }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    );
  }
);

SheetBackdrop.displayName = 'SheetBackdrop';

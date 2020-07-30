import * as React from 'react';
import { motion } from 'framer-motion';

import { SheetBackdropProps } from './types';
import styles from './styles';

const isClickable = (props: any) => !!props.onClick || !!props.onTap;

const SheetBackdrop = React.forwardRef<any, SheetBackdropProps>(
  ({ style = {}, ...rest }, ref) => {
    const Comp = isClickable(rest) ? motion.button : motion.div;

    return (
      <Comp
        {...rest}
        ref={ref}
        className="react-modal-sheet-backdrop"
        style={{ ...styles.backdrop, ...style }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    );
  }
);

export default SheetBackdrop;

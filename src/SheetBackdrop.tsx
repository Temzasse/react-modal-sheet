import * as React from 'react';
import { motion } from 'framer-motion';

import styles from './styles';

const SheetBackdrop = React.forwardRef<any, any>((props, ref) => {
  const Comp = props.onClick ? motion.button : motion.div;

  return (
    <Comp
      ref={ref}
      className="react-modal-sheet-backdrop"
      style={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    />
  );
});

export default SheetBackdrop;

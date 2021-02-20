import * as React from 'react';
import { motion } from 'framer-motion';

import { SheetDraggableProps } from './types';
import styles from './styles';
import { useSheetContext } from './context';

const SheetContent = React.forwardRef<any, SheetDraggableProps>(
  ({ children, disableDrag = false, style = {}, ...rest }, ref) => {
    const { dragProps } = useSheetContext();

    return (
      <motion.div
        {...rest}
        ref={ref}
        className="react-modal-sheet-content"
        style={{ ...styles.content, ...style }}
        {...(disableDrag ? {} : dragProps)}
      >
        {children}
      </motion.div>
    );
  }
);

export default SheetContent;

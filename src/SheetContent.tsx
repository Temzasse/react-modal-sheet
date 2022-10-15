import * as React from 'react';
import { motion } from 'framer-motion';

import { SheetDraggableProps } from './types';
import { useSheetContext } from './context';
import styles from './styles';

const SheetContent = React.forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, ...rest }, ref) => {
    const { dragProps } = useSheetContext();
    const _dragProps = disableDrag ? undefined : dragProps;

    return (
      <motion.div
        {...rest}
        ref={ref}
        className="react-modal-sheet-content"
        style={{ ...styles.content, ...style }}
        {..._dragProps}
      >
        {children}
      </motion.div>
    );
  }
);

export default SheetContent;

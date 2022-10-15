import * as React from 'react';
import { motion } from 'framer-motion';

import { SheetDraggableProps } from './types';
import { useSheetContext } from './context';
import styles from './styles';

const SheetContent = React.forwardRef<any, SheetDraggableProps>(
  ({ children, style, ...rest }, ref) => {
    const { windowHeight, dragProps } = useSheetContext();

    return (
      <React.Fragment key={windowHeight}>
        <motion.div
          {...rest}
          ref={ref}
          className="react-modal-sheet-content"
          style={{ ...styles.content, ...style }}
          {...dragProps}
        >
          {children}
        </motion.div>
      </React.Fragment>
    );
  }
);

export default SheetContent;

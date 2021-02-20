import * as React from 'react';
import { motion, useTransform } from 'framer-motion';

import { SheetDraggableProps } from './types';
import { useSheetContext } from './context';
import styles from './styles';

const SheetHeader = React.forwardRef<any, SheetDraggableProps>(
  ({ children, disableDrag = false, style = {}, ...rest }, ref) => {
    const { indicatorRotation, dragProps } = useSheetContext();

    const indicator1Transform = useTransform(
      indicatorRotation,
      r => `translateX(2px) rotate(${r}deg)`
    );

    const indicator2Transform = useTransform(
      indicatorRotation,
      r => `translateX(-2px) rotate(${-1 * r}deg)`
    );

    return (
      <motion.div
        {...rest}
        ref={ref}
        style={{ ...styles.headerWrapper, ...style }}
        {...(disableDrag ? {} : dragProps)}
      >
        {children || (
          <div className="react-modal-sheet-header" style={styles.header}>
            <motion.span
              className="react-modal-sheet-drag-indicator"
              style={{ ...styles.indicator, transform: indicator1Transform }}
            />
            <motion.span
              className="react-modal-sheet-drag-indicator"
              style={{ ...styles.indicator, transform: indicator2Transform }}
            />
          </div>
        )}
      </motion.div>
    );
  }
);

export default SheetHeader;

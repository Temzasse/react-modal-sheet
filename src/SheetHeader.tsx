import * as React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import { useSheetContext } from './context';
import styles from './styles';

const SheetHeader = React.forwardRef<any, any>(
  ({ children, style = {}, ...rest }, ref) => {
    const {
      indicatorRotation,
      handleDrag,
      handleDragStart,
      handleDragEnd,
    } = useSheetContext();

    const dragY = useMotionValue(0);

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
        ref={ref}
        style={{ ...styles.draggable, ...style, y: dragY }}
        drag="y"
        dragElastic={0}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragMomentum={false}
        onDrag={handleDrag}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...rest}
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

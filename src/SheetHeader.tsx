import React, { forwardRef } from 'react';
import { motion, useTransform } from 'framer-motion';

import { type SheetDraggableProps } from './types';
import { useSheetContext } from './context';
import { useDragConstraints } from './hooks';
import { mergeRefs } from './utils';
import styles from './styles';

const SheetHeader = forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, ...rest }, ref) => {
    const { indicatorRotation, dragProps } = useSheetContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();
    const _dragProps = disableDrag ? undefined : dragProps;

    const indicator1Transform = useTransform(
      indicatorRotation,
      (r) => `translateX(2px) rotate(${r}deg)`
    );

    const indicator2Transform = useTransform(
      indicatorRotation,
      (r) => `translateX(-2px) rotate(${-1 * r}deg)`
    );

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, constraintsRef])}
        style={{ ...styles.headerWrapper, ...style }}
        {..._dragProps}
        dragConstraints={constraintsRef}
        onMeasureDragConstraints={onMeasureDragConstraints}
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

SheetHeader.displayName = 'SheetHeader';

export default SheetHeader;

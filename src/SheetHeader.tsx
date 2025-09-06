import { motion, useTransform } from 'motion/react';
import React, { forwardRef } from 'react';

import { useSheetContext } from './context';
import { useDragConstraints } from './hooks/use-drag-constraints';
import { styles } from './styles';
import { type SheetDraggableProps } from './types';
import { mergeRefs } from './utils';

export const SheetHeader = forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, ...rest }, ref) => {
    const sheetContext = useSheetContext();
    const dragConstraints = useDragConstraints();
    const dragProps =
      disableDrag || sheetContext.disableDrag
        ? undefined
        : sheetContext.dragProps;

    const indicator1Transform = useTransform(
      sheetContext.indicatorRotation,
      (r) => `translateX(2px) rotate(${r}deg)`
    );

    const indicator2Transform = useTransform(
      sheetContext.indicatorRotation,
      (r) => `translateX(-2px) rotate(${-1 * r}deg)`
    );

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, dragConstraints.ref])}
        style={{ ...styles.headerWrapper, ...style }}
        {...dragProps}
        dragConstraints={dragConstraints.ref}
        onMeasureDragConstraints={dragConstraints.onMeasure}
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

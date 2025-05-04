import React, { forwardRef } from 'react';
import { motion } from 'motion/react';

import { type SheetDraggableProps } from './types';
import { useSheetScrollerContext, useSheetContext } from './context';
import { useDragConstraints } from './hooks/use-drag-constraints';
import { mergeRefs } from './utils';
import { styles } from './styles';

export const SheetContent = forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, className = '', ...rest }, ref) => {
    const sheetContext = useSheetContext();
    const sheetScrollerContext = useSheetScrollerContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();

    const dragProps =
      disableDrag || sheetScrollerContext.disableDrag
        ? undefined
        : sheetContext.dragProps;

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, constraintsRef])}
        className={`react-modal-sheet-content ${className}`}
        style={{ ...styles.content, ...style }}
        {...dragProps}
        dragConstraints={constraintsRef}
        onMeasureDragConstraints={onMeasureDragConstraints}
      >
        {children}
      </motion.div>
    );
  }
);

SheetContent.displayName = 'SheetContent';

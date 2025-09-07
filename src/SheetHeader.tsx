import { motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { SheetDragIndicator } from './SheetDragIndicator';
import { useSheetContext } from './context';
import { useDragConstraints } from './hooks/use-drag-constraints';
import { styles } from './styles';
import { type SheetHeaderProps } from './types';
import { applyStyles, mergeRefs } from './utils';

export const SheetHeader = forwardRef<any, SheetHeaderProps>(
  (
    { children, style, disableDrag, unstyled, className = '', ...rest },
    ref
  ) => {
    const sheetContext = useSheetContext();
    const dragConstraints = useDragConstraints();
    const dragProps =
      disableDrag || sheetContext.disableDrag
        ? undefined
        : sheetContext.dragProps;

    const isUnstyled = unstyled ?? sheetContext.unstyled;

    const headerWrapperStyle = {
      ...applyStyles(styles.headerWrapper, isUnstyled),
      ...style,
    };

    const headerStyle = applyStyles(styles.header, isUnstyled);

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, dragConstraints.ref])}
        style={headerWrapperStyle}
        className={`react-modal-sheet-header-container ${className}`}
        {...dragProps}
        dragConstraints={dragConstraints.ref}
        onMeasureDragConstraints={dragConstraints.onMeasure}
      >
        {children || (
          <div className="react-modal-sheet-header" style={headerStyle}>
            <SheetDragIndicator />
          </div>
        )}
      </motion.div>
    );
  }
);

SheetHeader.displayName = 'SheetHeader';

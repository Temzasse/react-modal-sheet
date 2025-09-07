import { motion, useTransform } from 'motion/react';
import React from 'react';

import { useSheetContext } from './context';
import { styles } from './styles';
import type { SheetDragIndicatorProps } from './types';
import { applyStyles } from './utils';

export function SheetDragIndicator({
  style,
  className = '',
  unstyled,
  ...rest
}: SheetDragIndicatorProps) {
  const sheetContext = useSheetContext();

  const indicator1Transform = useTransform(
    sheetContext.indicatorRotation,
    (r) => `translateX(2px) rotate(${r}deg)`
  );

  const indicator2Transform = useTransform(
    sheetContext.indicatorRotation,
    (r) => `translateX(-2px) rotate(${-1 * r}deg)`
  );

  const isUnstyled = unstyled ?? sheetContext.unstyled;

  const indicatorStyle = {
    ...styles.indicator,
    ...applyStyles(styles.indicator, isUnstyled),
    ...style,
  };

  return (
    <>
      <motion.span
        className={`react-modal-sheet-drag-indicator ${className}`}
        style={{ ...indicatorStyle, transform: indicator1Transform }}
        {...rest}
      />
      <motion.span
        className={`react-modal-sheet-drag-indicator ${className}`}
        style={{ ...indicatorStyle, transform: indicator2Transform }}
        {...rest}
      />
    </>
  );
}

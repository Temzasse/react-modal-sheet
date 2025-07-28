import { type MotionStyle, motion } from 'motion/react';
import React, { type TouchEvent, type UIEvent, forwardRef } from 'react';

import { useSheetContext, useSheetScrollerContext } from './context';
import { styles } from './styles';
import { type SheetScrollerProps } from './types';
import { isTouchDevice } from './utils';

export const SheetScroller = forwardRef<any, SheetScrollerProps>(
  (
    {
      autoPadding = true,
      disableScroll = false,
      draggableAt = 'top',
      children,
      style: styleProp,
      className = '',
      ...rest
    },
    ref
  ) => {
    const { y } = useSheetContext();
    const { setDragEnabled, setDragDisabled } = useSheetScrollerContext();

    function determineDragState(element: HTMLDivElement) {
      /**
       * If the caller is managing the scrollability of the element,
       * enable the dragging of the sheet content.
       */
      if (disableScroll) {
        setDragEnabled();
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = element;
      const isScrollable = scrollHeight > clientHeight;

      if (!isScrollable) return;

      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollHeight - scrollTop === clientHeight;

      const shouldEnable =
        (draggableAt === 'top' && isAtTop) ||
        (draggableAt === 'bottom' && isAtBottom) ||
        (draggableAt === 'both' && (isAtTop || isAtBottom));

      if (shouldEnable) {
        setDragEnabled();
      } else {
        setDragDisabled();
      }
    }

    function onScroll(event: UIEvent<HTMLDivElement>) {
      determineDragState(event.currentTarget);
      if (rest.onScroll) rest.onScroll(event);
    }

    function onTouchStart(event: TouchEvent<HTMLDivElement>) {
      determineDragState(event.currentTarget);
      if (rest.onTouchStart) rest.onTouchStart(event);
    }

    const scrollProps = isTouchDevice()
      ? { onScroll, onTouchStart }
      : undefined;

    const style: MotionStyle = {
      ...styles.scroller,
      ...styleProp,
    };

    if (autoPadding) {
      style.paddingBottom = y;
    }

    if (disableScroll) {
      style.overflowY = 'hidden';
    }

    return (
      <motion.div
        {...rest}
        ref={ref}
        className={`react-modal-sheet-scroller ${className}`}
        style={style}
        {...scrollProps}
      >
        {children}
      </motion.div>
    );
  }
);

SheetScroller.displayName = 'SheetScroller';

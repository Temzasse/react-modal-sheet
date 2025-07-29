import { type MotionStyle, motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { useSheetContext } from './context';
import { useDragConstraints } from './hooks/use-drag-constraints';
import { useScrollPosition } from './hooks/use-scroll-position';
import { styles } from './styles';
import { type SheetContentScrollableProps } from './types';
import { mergeRefs } from './utils';

export const SheetContent = forwardRef<any, SheetContentScrollableProps>(
  (
    {
      disableScroll: disableScrollProp,
      disableDrag: disableDragProp,
      children,
      style: styleProp,
      className = '',
      scrollRef: scrollRefProp = null,
      ...rest
    },
    ref
  ) => {
    const sheetContext = useSheetContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();
    const { scrollPosition, scrollRef } = useScrollPosition();

    const disableDragDueToScroll = scrollPosition && scrollPosition !== 'top';

    const disableDragDueToProp =
      typeof disableDragProp === 'function'
        ? disableDragProp({
            scrollPosition,
            currentSnap: sheetContext.currentSnap,
          })
        : disableDragProp;

    const disableDrag =
      disableDragDueToProp ||
      disableDragDueToScroll ||
      sheetContext.disableDrag;

    const disableScroll =
      typeof disableScrollProp === 'function'
        ? disableScrollProp({
            scrollPosition,
            currentSnap: sheetContext.currentSnap,
          })
        : Boolean(disableScrollProp);

    const dragProps =
      disableDrag || sheetContext.disableDrag
        ? undefined
        : sheetContext.dragProps;

    const contentStyle: MotionStyle = {
      ...styles.content,
      ...styleProp,
    };

    const scrollStyle: MotionStyle = {
      ...styles.scroller,
    };

    if (disableScroll) {
      scrollStyle.overflowY = 'hidden';
    }

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, constraintsRef])}
        className={`react-modal-sheet-content ${className}`}
        style={contentStyle}
        {...dragProps}
        dragConstraints={constraintsRef}
        onMeasureDragConstraints={onMeasureDragConstraints}
      >
        <motion.div
          ref={mergeRefs([scrollRef, scrollRefProp])}
          style={scrollStyle}
          className="react-modal-sheet-content-scroller"
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }
);

SheetContent.displayName = 'SheetContentScrollable';

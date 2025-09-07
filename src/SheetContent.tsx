import { type MotionStyle, motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { useSheetContext } from './context';
import { useDragConstraints } from './hooks/use-drag-constraints';
import { useScrollPosition } from './hooks/use-scroll-position';
import { styles } from './styles';
import { type SheetContentProps } from './types';
import { applyStyles, mergeRefs } from './utils';

export const SheetContent = forwardRef<any, SheetContentProps>(
  (
    {
      disableScroll: disableScrollProp,
      disableDrag: disableDragProp,
      children,
      style: styleProp,
      className = '',
      scrollRef: scrollRefProp = null,
      unstyled,
      ...rest
    },
    ref
  ) => {
    const sheetContext = useSheetContext();
    const dragConstraints = useDragConstraints();
    const scroll = useScrollPosition();

    const disableScroll =
      typeof disableScrollProp === 'function'
        ? disableScrollProp({
            scrollPosition: scroll.scrollPosition,
            currentSnap: sheetContext.currentSnap,
          })
        : Boolean(disableScrollProp);

    const disableDragDueToScroll =
      !disableScroll &&
      scroll.scrollPosition &&
      scroll.scrollPosition !== 'top';

    const disableDragDueToProp =
      typeof disableDragProp === 'function'
        ? disableDragProp({
            scrollPosition: scroll.scrollPosition,
            currentSnap: sheetContext.currentSnap,
          })
        : Boolean(disableDragProp);

    const disableDrag =
      disableDragDueToProp ||
      disableDragDueToScroll ||
      sheetContext.disableDrag;

    const dragProps =
      disableDrag || sheetContext.disableDrag
        ? undefined
        : sheetContext.dragProps;

    const isUnstyled = unstyled ?? sheetContext.unstyled;

    const contentStyle: MotionStyle = {
      ...applyStyles(styles.content, isUnstyled),
      ...styleProp,
    };

    const scrollStyle: MotionStyle = applyStyles(styles.scroller, isUnstyled);

    if (sheetContext.avoidKeyboard) {
      scrollStyle.paddingBottom =
        'env(keyboard-inset-height, var(--keyboard-inset-height, 0px))';
    }

    if (disableScroll) {
      scrollStyle.overflowY = 'hidden';
    }

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, dragConstraints.ref])}
        className={`react-modal-sheet-content ${className}`}
        style={contentStyle}
        {...dragProps}
        dragConstraints={dragConstraints.ref}
        onMeasureDragConstraints={dragConstraints.onMeasure}
      >
        <motion.div
          ref={mergeRefs([scroll.ref, scrollRefProp])}
          style={scrollStyle}
          className="react-modal-sheet-content-scroller"
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }
);

SheetContent.displayName = 'SheetContent';

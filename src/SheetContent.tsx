import { type MotionStyle, motion } from 'motion/react';
import React, { forwardRef } from 'react';

import { useInternalContext } from './context';
import { useDragConstraints } from './hooks/use-drag-constraints';
import { useScrollPosition } from './hooks/use-scroll-position';
import { styles } from './styles';
import { type SheetContentProps } from './types';
import { applyStyles, isHTTPS, mergeRefs } from './utils';

export const SheetContent = forwardRef<any, SheetContentProps>(
  (
    {
      disableScroll: disableScrollProp,
      disableDrag: disableDragProp,
      children,
      style: styleProp,
      className = '',
      scrollClassName = '',
      scrollStyle: scrollStyleProp,
      scrollRef: scrollRefProp = null,
      unstyled,
      ...rest
    },
    ref
  ) => {
    const sheetContext = useInternalContext();
    const dragConstraints = useDragConstraints();

    const scroll = useScrollPosition({
      isEnabled:
        typeof disableScrollProp === 'function' ? true : !disableScrollProp,
    });

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
      /**
       * Virtual Keyboard API is only available in secure context (https)
       * and it will have 0px height in insecure context,
       * which causes issues when developing and testing on localhost (http).
       */
      scrollStyle.paddingBottom = isHTTPS()
        ? 'env(keyboard-inset-height, var(--keyboard-inset-height, 0px))'
        : 'var(--keyboard-inset-height, 0px)';
    }

    if (disableScroll) {
      /**
       * NOTE: use `clip` to avoid glitchy behavior where using `hidden`
       * would actually allow scrolling but just not show the scroll content.
       * Using `hidden` seems to work fine on iOS but on Android it causes
       * the up drag gesture to cancel occasionally causing bad UX.
       */
      scrollStyle.overflowY = 'clip';
    }

    if (dragProps !== undefined) {
      // Let browser only handle downward pan gestures (scrolling content up)
      scrollStyle.touchAction = 'pan-down';
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
          ref={mergeRefs([scroll.scrollRef, scrollRefProp])}
          style={{ ...scrollStyle, ...scrollStyleProp }}
          className={`react-modal-sheet-content-scroller ${scrollClassName}`}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }
);

SheetContent.displayName = 'SheetContent';

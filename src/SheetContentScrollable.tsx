import { type MotionStyle, motion } from 'motion/react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { useSheetContext } from './context';
import { useDragConstraints } from './hooks/use-drag-constraints';
import { styles } from './styles';
import { type SheetContentScrollableProps } from './types';
import { mergeRefs } from './utils';

export const SheetContentScrollable = forwardRef<
  any,
  SheetContentScrollableProps
>(
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

    const disableDrag =
      typeof disableDragProp === 'function'
        ? disableDragProp({
            scrollPosition,
            currentSnap: sheetContext.currentSnap,
          })
        : disableDragProp || sheetContext.disableDrag;

    const disableScroll =
      typeof disableScrollProp === 'function'
        ? disableScrollProp({
            scrollPosition,
            currentSnap: sheetContext.currentSnap,
          })
        : !!disableScrollProp;

    const dragProps = disableDrag ? undefined : sheetContext.dragProps;

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

function useScrollPosition() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<
    'top' | 'bottom' | 'middle' | undefined
  >(undefined);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    let scrollTimeout: number | null = null;

    function determineScrollPosition(element: HTMLDivElement) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const isScrollable = scrollHeight > clientHeight;

      if (!isScrollable) {
        // Reset scroll position if the content is not scrollable anymore
        if (scrollPosition) setScrollPosition(undefined);
        return;
      }

      const isAtTop = scrollTop <= 0;
      const isAtBottom =
        Math.ceil(scrollHeight) - Math.ceil(scrollTop) ===
        Math.ceil(clientHeight);

      let position: 'top' | 'bottom' | 'middle';

      if (isAtTop) {
        position = 'top';
      } else if (isAtBottom) {
        position = 'bottom';
      } else {
        position = 'middle';
      }

      if (position === scrollPosition) return;
      setScrollPosition(position);
    }

    function onScroll(event: Event) {
      if (event.currentTarget instanceof HTMLDivElement) {
        const el = event.currentTarget;
        if (scrollTimeout) clearTimeout(scrollTimeout);
        // Debounce the scroll handler
        scrollTimeout = setTimeout(() => determineScrollPosition(el), 32);
      }
    }

    function onTouchStart(event: Event) {
      if (event.currentTarget instanceof HTMLDivElement) {
        determineScrollPosition(event.currentTarget);
      }
    }

    determineScrollPosition(element);

    element.addEventListener('scroll', onScroll);
    element.addEventListener('touchstart', onTouchStart);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      element.removeEventListener('scroll', onScroll);
      element.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  return { scrollRef, scrollPosition };
}

SheetContentScrollable.displayName = 'SheetContentScrollable';

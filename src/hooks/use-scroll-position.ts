import { useEffect, useRef, useState } from 'react';

export function useScrollPosition() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<
    'top' | 'bottom' | 'middle' | undefined
  >(undefined);

  useEffect(() => {
    const element = ref.current;
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

  return { ref, scrollPosition };
}

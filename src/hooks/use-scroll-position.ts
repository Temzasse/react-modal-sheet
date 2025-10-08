import { useEffect, useState } from 'react';

type UseScrollPositionOptions = {
  /**
   * Debounce delay in ms for scroll event handling.
   * @default 32
   */
  debounceDelay?: number;
  /**
   * Enable or disable the hook entirely.
   * @default true
   */
  isEnabled?: boolean;
};

/**
 * Hook to track the scroll position of an element.
 *
 * The scroll position can be 'top', 'bottom', 'middle', or undefined if the content is not scrollable.
 * The hook provides a `scrollRef` callback to assign to the scrollable element.
 *
 * Note that the scroll position is only updated when the user stops scrolling
 * for a short moment (debounced). You can set `debounceDelay` to `0` to disable debouncing entirely.
 *
 * @param options Configuration options for the hook.
 * @returns An object containing the `scrollRef` callback and the current `scrollPosition`.
 *
 * @example
 * ```tsx
 * import { useScrollPosition } from 'react-modal-sheet';
 *
 * function MyComponent() {
 *   const { scrollRef, scrollPosition } = useScrollPosition();
 *
 *   return (
 *     <div>
 *       <p>Scroll position: {scrollPosition}</p>
 *       <div ref={scrollRef} style={{ overflowY: 'auto', maxHeight: '300px' }}>
 *         ...long content...
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
export function useScrollPosition(options: UseScrollPositionOptions = {}) {
  const { debounceDelay = 32, isEnabled = true } = options;

  const [element, setElement] = useState<HTMLElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState<
    'top' | 'bottom' | 'middle' | undefined
  >(undefined);

  useEffect(() => {
    if (!element || !isEnabled) return;

    let scrollTimeout: number | null = null;

    function determineScrollPosition(element: HTMLElement) {
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
      if (event.currentTarget instanceof HTMLElement) {
        const el = event.currentTarget;

        if (scrollTimeout) clearTimeout(scrollTimeout);

        if (debounceDelay === 0) {
          determineScrollPosition(el);
        } else {
          // Debounce the scroll handler
          scrollTimeout = setTimeout(
            () => determineScrollPosition(el),
            debounceDelay
          );
        }
      }
    }

    function onTouchStart(event: Event) {
      if (event.currentTarget instanceof HTMLElement) {
        determineScrollPosition(event.currentTarget);
      }
    }

    // Determine initial scroll position
    determineScrollPosition(element);

    element.addEventListener('scroll', onScroll);
    element.addEventListener('touchstart', onTouchStart);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      element.removeEventListener('scroll', onScroll);
      element.removeEventListener('touchstart', onTouchStart);
    };
  }, [element, isEnabled]);

  return {
    scrollRef: (element: HTMLElement | null) => setElement(element),
    scrollPosition,
  };
}

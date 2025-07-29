import { useEffect, useRef } from 'react';
import { useStableCallback } from './use-stable-callback';

export function useResizeObserver<T extends Element = HTMLDivElement>(
  callback: ResizeObserverCallback
) {
  const observeRef = useRef<T | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedCallback: ResizeObserverCallback = useStableCallback(
    (entries, observer) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => callback(entries, observer), 32);
    }
  );

  useEffect(() => {
    const element = observeRef.current;
    if (!element) return;

    const observer = new ResizeObserver(debouncedCallback);
    observer.observe(element, { box: 'border-box' });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { observeRef };
}

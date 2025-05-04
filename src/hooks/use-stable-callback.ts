import { useCallback, useRef } from 'react';

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export function useStableCallback<T extends (...args: any[]) => any>(
  handler: T
) {
  const handlerRef = useRef<T>(undefined);

  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: any[]) => {
    const fn = handlerRef.current;
    return fn?.(...args);
  }, []) as T;
}

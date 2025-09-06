import { useState } from 'react';

import { IS_SSR } from '../constants';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export function useDimensions() {
  const [dimensions, setDimensions] = useState(() => ({
    windowHeight: !IS_SSR ? window.innerHeight : 0,
    windowWidth: !IS_SSR ? window.innerWidth : 0,
  }));

  useIsomorphicLayoutEffect(() => {
    function handler() {
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    }

    handler();

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return dimensions;
}

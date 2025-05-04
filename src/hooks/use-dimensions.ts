import { useState } from 'react';

import { IS_SSR } from '../constants';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export function useDimensions() {
  const [dimensions, setDimensions] = useState(() => ({
    height: !IS_SSR ? window.innerHeight : 0,
    width: !IS_SSR ? window.innerWidth : 0,
  }));

  useIsomorphicLayoutEffect(() => {
    function handler() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
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

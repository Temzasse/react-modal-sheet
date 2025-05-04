import { useEffect, useLayoutEffect } from 'react';

import { IS_SSR } from '../constants';

export const useIsomorphicLayoutEffect = IS_SSR ? useEffect : useLayoutEffect;

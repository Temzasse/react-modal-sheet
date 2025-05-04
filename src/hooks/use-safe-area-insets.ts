import { useState } from 'react';

import { IS_SSR } from '../constants';

export function useSafeAreaInsets() {
  const [insets] = useState(() => {
    const fallback = { top: 0, left: 0, right: 0, bottom: 0 };

    if (IS_SSR) return fallback;

    const root = document.querySelector<HTMLElement>(':root');

    if (!root) return fallback;

    root.style.setProperty('--rms-sat', 'env(safe-area-inset-top)');
    root.style.setProperty('--rms-sal', 'env(safe-area-inset-left)');
    root.style.setProperty('--rms-sar', 'env(safe-area-inset-right)');
    root.style.setProperty('--rms-sab', 'env(safe-area-inset-bottom)');

    const computedStyle = getComputedStyle(root);
    const sat = getComputedValue(computedStyle, '--rms-sat');
    const sal = getComputedValue(computedStyle, '--rms-sal');
    const sar = getComputedValue(computedStyle, '--rms-sar');
    const sab = getComputedValue(computedStyle, '--rms-sab');

    root.style.removeProperty('--rms-sat');
    root.style.removeProperty('--rms-sal');
    root.style.removeProperty('--rms-sar');
    root.style.removeProperty('--rms-sab');

    return { top: sat, left: sal, right: sar, bottom: sab };
  });

  return insets;
}

function getComputedValue(computed: CSSStyleDeclaration, property: string) {
  const strValue = computed.getPropertyValue(property).replace('px', '').trim();
  return parseInt(strValue, 10) || 0;
}

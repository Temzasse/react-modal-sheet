import { useState } from 'react';

const isSSR = typeof window === 'undefined';

export function useSafeAreaInsets() {
  const [insets] = useState(() => {
    const fallback = { top: 0, left: 0, right: 0, bottom: 0 };

    if (isSSR) return fallback;

    const root = document.querySelector<HTMLElement>(':root');

    if (!root) return fallback;

    root.style.setProperty('--sat', 'env(safe-area-inset-top)');
    root.style.setProperty('--sal', 'env(safe-area-inset-left)');
    root.style.setProperty('--sar', 'env(safe-area-inset-right)');
    root.style.setProperty('--sab', 'env(safe-area-inset-bottom)');

    const computedStyle = getComputedStyle(root);
    const sat = getComputedValue(computedStyle, '--sat');
    const sal = getComputedValue(computedStyle, '--sal');
    const sar = getComputedValue(computedStyle, '--sar');
    const sab = getComputedValue(computedStyle, '--sab');

    root.style.removeProperty('--sat');
    root.style.removeProperty('--sal');
    root.style.removeProperty('--sar');
    root.style.removeProperty('--sab');

    return { top: sat, left: sal, right: sar, bottom: sab };
  });

  return insets;
}

function getComputedValue(computed: CSSStyleDeclaration, property: string) {
  const strValue = computed.getPropertyValue(property).replace('px', '').trim();
  return parseInt(strValue, 10) || 0;
}

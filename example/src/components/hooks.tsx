import { useLayoutEffect } from 'react';

export function useMetaThemeColor({
  when = true,
  from,
  to,
}: {
  when?: boolean;
  from?: string;
  to: string;
}) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: It was here before Biome 2
  useLayoutEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    const current = from || (meta.getAttribute('content') as string);

    if (when) {
      meta.setAttribute('content', to);

      return () => {
        meta.setAttribute('content', current);
      };
    }
  }, [when]);
}

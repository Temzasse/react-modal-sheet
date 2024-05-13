import { useEffect, useLayoutEffect, useState } from 'react';

export function useMetaThemeColor({
  when = true,
  from,
  to,
}: {
  when?: boolean;
  from?: string;
  to: string;
}) {
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
  }, [when]); // eslint-disable-line react-hooks/exhaustive-deps
}

}

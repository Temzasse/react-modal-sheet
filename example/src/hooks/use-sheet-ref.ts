import { useCallback, useState } from 'react';
import type { SheetRef } from 'react-modal-sheet';

export function useSheetRef() {
  const [ref, setRef] = useState<SheetRef | null>(null);

  const refCallback = useCallback(
    (r: SheetRef | null) => {
      if (!ref && r !== null) setRef(r);
    },
    [ref]
  );

  return [ref, refCallback] as const;
}

import { type RefObject, useEffect, useState } from 'react';

export function useFocusedInput({
  isEnabled,
  sheetRef,
}: {
  isEnabled: boolean;
  sheetRef: RefObject<HTMLElement | null>;
}) {
  const [focusedInput, setFocusedInput] = useState<HTMLElement | null>(null);

  // Keep track of the currently focused input within the sheet
  useEffect(() => {
    if (!isEnabled) return;

    const handleFocusIn = (event: FocusEvent) => {
      const focusedElement = event.target as HTMLElement;

      const isInput =
        focusedElement?.tagName === 'INPUT' ||
        focusedElement?.tagName === 'TEXTAREA';

      if (isInput && sheetRef.current?.contains(focusedElement)) {
        setFocusedInput(focusedElement);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const focusedElement = event.target as HTMLElement;

      if (focusedElement === focusedInput) {
        setFocusedInput(null);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [isEnabled, focusedInput]);

  return focusedInput;
}

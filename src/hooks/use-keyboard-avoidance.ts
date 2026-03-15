import { type RefObject, useEffect, useState } from 'react';

import { willOpenKeyboard } from '../utils';
import { useStableCallback } from './use-stable-callback';
import { useVirtualKeyboard } from './use-virtual-keyboard';

export function useKeyboardAvoidance({
  isEnabled,
  containerRef,
  onWillOpenKeyboard,
  onDidOpenKeyboard,
}: {
  isEnabled: boolean;
  containerRef: RefObject<HTMLDivElement | null>;
  onWillOpenKeyboard?: (event: FocusEvent) => Promise<void>;
  onDidOpenKeyboard?: (focusedElement: HTMLElement) => void;
}) {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(
    null
  );

  const keyboard = useVirtualKeyboard({
    isEnabled,
    containerRef,
  });

  const handleFocusIn = useStableCallback(async (event: FocusEvent) => {
    const element = event.target as HTMLElement;

    if (willOpenKeyboard(element) && containerRef.current?.contains(element)) {
      await onWillOpenKeyboard?.(event);
      setFocusedElement(element);
    }
  });

  const handleFocusOut = useStableCallback((event: FocusEvent) => {
    const element = event.target as HTMLElement;

    if (focusedElement === element) {
      setFocusedElement(null);
    }
  });

  // Keep track of the currently focused input within the container
  useEffect(() => {
    if (!isEnabled) return;

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [isEnabled]);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (
      !isEnabled ||
      !focusedElement ||
      !containerElement ||
      !keyboard.isKeyboardOpen
    ) {
      return;
    }

    requestAnimationFrame(() => {
      onDidOpenKeyboard?.(focusedElement);
    });
  }, [isEnabled, keyboard.isKeyboardOpen, focusedElement]);

  return keyboard;
}

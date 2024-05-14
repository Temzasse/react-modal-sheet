import { animate, useMotionValue } from 'framer-motion';
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

export function useVirtualKeyboard() {
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const visualViewport = window.visualViewport;

    if (visualViewport) {
      const onResize = () => {
        const focusedElement = document.activeElement as HTMLElement | null;

        // Bail if no element is focused as that also means no input is focused
        if (!focusedElement) return;

        const isInputFocused =
          focusedElement.tagName === 'INPUT' ||
          focusedElement.tagName === 'TEXTAREA';

        // Virtual keyboard should only be visible if an input is focused
        if (isInputFocused && visualViewport.height < window.innerHeight) {
          setKeyboardOpen(true);
          setKeyboardHeight(window.innerHeight - visualViewport.height);
        } else if (isKeyboardOpen) {
          // Reset keyboard height if it was open
          setKeyboardOpen(false);
          setKeyboardHeight(0);
        }
      };

      visualViewport.addEventListener('resize', onResize);

      return () => {
        visualViewport.removeEventListener('resize', onResize);
      };
    }
  }, [isKeyboardOpen]);

  return { keyboardHeight, isKeyboardOpen };
}

export function useAnimatedVirtualKeyboard() {
  const { isKeyboardOpen, keyboardHeight } = useVirtualKeyboard();
  const animatedKeyboardHeight = useMotionValue(keyboardHeight);

  useEffect(() => {
    if (isKeyboardOpen) {
      void animate(animatedKeyboardHeight, keyboardHeight);
    } else {
      void animate(animatedKeyboardHeight, 0);
    }
  }, [isKeyboardOpen, keyboardHeight]); // eslint-disable-line react-hooks/exhaustive-deps

  return { keyboardHeight: animatedKeyboardHeight, isKeyboardOpen };
}

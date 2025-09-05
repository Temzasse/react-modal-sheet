import { type RefObject, useEffect, useRef, useState } from 'react';
import { useStableCallback } from './use-stable-callback';

type VirtualKeyboardState = {
  isVisible: boolean;
  height: number;
};

type UseVirtualKeyboardOptions = {
  /**
   * Ref to the container element to apply `keyboard-inset-height` CSS variable updates (required)
   */
  containerRef: RefObject<HTMLDivElement | null>;
  /**
   * Enable or disable the hook entirely (default: true)
   */
  isEnabled?: boolean;
  /**
   * Minimum pixel height difference to consider the keyboard visible (default: 100px)
   */
  visualViewportThreshold?: number;
  /**
   * Whether to treat contenteditable elements as text inputs (default: true)
   */
  includeContentEditable?: boolean;
  /**
   * Delay in ms for debouncing viewport changes (default: 100ms)
   */
  debounceDelay?: number;
};

export function useVirtualKeyboard({
  containerRef,
  isEnabled = true,
  debounceDelay = 100,
  includeContentEditable = true,
  visualViewportThreshold = 100,
}: UseVirtualKeyboardOptions) {
  const [state, setState] = useState<VirtualKeyboardState>({
    isVisible: false,
    height: 0,
  });

  const focusedElementRef = useRef<HTMLElement | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isTextInput = useStableCallback((el: Element | null) => {
    return (
      el?.tagName === 'INPUT' ||
      el?.tagName === 'TEXTAREA' ||
      (includeContentEditable &&
        el instanceof HTMLElement &&
        el.isContentEditable)
    );
  });

  useEffect(() => {
    if (!isEnabled) return;

    const vv = window.visualViewport;
    const vk = (navigator as any).virtualKeyboard;

    function setKeyboardInsetHeightEnv(height: number) {
      containerRef.current?.style.setProperty(
        '--keyboard-inset-height',
        `${height}px`
      );
    }

    function handleFocusIn(e: FocusEvent) {
      if (e.target instanceof HTMLElement && isTextInput(e.target)) {
        focusedElementRef.current = e.target;
        updateKeyboardState();
      }
    }

    function handleFocusOut() {
      focusedElementRef.current = null;
      updateKeyboardState();
    }

    function updateKeyboardState() {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = setTimeout(() => {
        const active = focusedElementRef.current;
        const inputIsFocused = isTextInput(active);

        if (!inputIsFocused) {
          setKeyboardInsetHeightEnv(0);
          setState({ isVisible: false, height: 0 });
          return;
        }

        if (vv) {
          const heightDiff = window.innerHeight - vv.height;

          if (heightDiff > visualViewportThreshold) {
            setKeyboardInsetHeightEnv(heightDiff);
            setState({ isVisible: true, height: heightDiff });
          } else {
            setKeyboardInsetHeightEnv(0);
            setState({ isVisible: false, height: 0 });
          }
        }
      }, debounceDelay);
    }

    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);

    if (vv) {
      vv.addEventListener('resize', updateKeyboardState);
      vv.addEventListener('scroll', updateKeyboardState);
    }

    let currentOverlaysContent = false;

    if (vk) {
      currentOverlaysContent = vk.overlaysContent;
      vk.overlaysContent = true;
    }

    return () => {
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);

      if (vv) {
        vv.removeEventListener('resize', updateKeyboardState);
        vv.removeEventListener('scroll', updateKeyboardState);
      }

      if (vk) {
        vk.overlaysContent = currentOverlaysContent;
      }

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [
    debounceDelay,
    includeContentEditable,
    isEnabled,
    visualViewportThreshold,
  ]);

  return {
    keyboardHeight: state.height,
    isKeyboardOpen: state.isVisible,
  };
}

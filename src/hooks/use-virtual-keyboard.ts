import { type RefObject, useEffect, useRef, useState } from 'react';
import { useStableCallback } from './use-stable-callback';

type VirtualKeyboardState = {
  isVisible: boolean;
  height: number;
};

type UseVirtualKeyboardOptions = {
  /**
   * Ref to the container element to apply `keyboard-inset-height` CSS variable updates.
   * @default document.documentElement
   */
  containerRef?: RefObject<HTMLElement | null>;
  /**
   * Enable or disable the hook entirely.
   * @default true
   */
  isEnabled?: boolean;
  /**
   * Minimum pixel height difference to consider the keyboard visible.
   * @default 100
   */
  visualViewportThreshold?: number;
  /**
   * Whether to treat contenteditable elements as text inputs.
   * @default true
   */
  includeContentEditable?: boolean;
  /**
   * Delay in ms for debouncing viewport changes.
   * @default 100
   */
  debounceDelay?: number;
};

/**
 * A hook that detects virtual keyboard visibility and height.
 * It listens to focus events and visual viewport changes to determine
 * if a text input is focused and the keyboard is likely visible.
 *
 * It also sets the `--keyboard-inset-height` CSS variable on the specified container
 * (or `:root` by default) to allow for easy styling adjustments when the keyboard is open.
 *
 * @param options Configuration options for the hook.
 * @returns An object containing `isKeyboardOpen` and `keyboardHeight`.
 *
 * @example
 * ```tsx
 * import { useVirtualKeyboard } from 'react-modal-sheet';
 *
 * function MyComponent() {
 *   const { isKeyboardOpen, keyboardHeight } = useVirtualKeyboard();
 *
 *   return (
 *     <div>
 *       <p>Keyboard is {isKeyboardOpen ? 'open' : 'closed'}</p>
 *       <p>Keyboard height: {keyboardHeight}px</p>
 *    </div>
 *  );
 * }
 * ```
 */
export function useVirtualKeyboard(options: UseVirtualKeyboardOptions = {}) {
  const {
    containerRef,
    isEnabled = true,
    debounceDelay = 100,
    includeContentEditable = true,
    visualViewportThreshold = 100,
  } = options;

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
      const element = containerRef?.current || document.documentElement;

      // Virtual Keyboard API is only available in secure context
      if (window.isSecureContext) {
        element.style.setProperty(
          '--keyboard-inset-height',
          `env(keyboard-inset-height, ${height}px)`
        );
      } else {
        element.style.setProperty('--keyboard-inset-height', `${height}px`);
      }
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

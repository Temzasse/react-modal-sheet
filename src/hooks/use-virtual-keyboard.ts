import { type RefObject, useEffect, useRef, useState } from 'react';
import { isHTTPS, willOpenKeyboard } from '../utils';

type VirtualKeyboardApi = {
  overlaysContent: boolean;
  boundingRect: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  addEventListener: (
    type: 'geometrychange',
    listener: EventListenerOrEventListenerObject
  ) => void;
  removeEventListener: (
    type: 'geometrychange',
    listener: EventListenerOrEventListenerObject
  ) => void;
};

type VirtualKeyboardState = {
  isVisible: boolean;
  height: number;
};

/**
 * Keep track of how many components are using the virtual keyboard API
 * to avoid conflicts when toggling `overlaysContent` which is a global setting.
 */
let virtualKeyboardOverlayUsers = 0;
let initialVirtualKeyboardOverlaysContent: boolean | null = null;

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
    visualViewportThreshold = 100,
  } = options;

  const [state, setState] = useState<VirtualKeyboardState>({
    isVisible: false,
    height: 0,
  });

  const focusedElementRef = useRef<HTMLElement | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const vv = window.visualViewport;
    const vk = getVirtualKeyboardApi();

    function setKeyboardInsetHeightEnv(height: number) {
      const element = containerRef?.current || document.documentElement;

      if (vk) {
        element.style.setProperty(
          '--keyboard-inset-height',
          `env(keyboard-inset-height, ${height}px)`
        );
      } else {
        element.style.setProperty('--keyboard-inset-height', `${height}px`);
      }
    }

    function setKeyboardState(nextState: VirtualKeyboardState) {
      setState((prevState) =>
        prevState.isVisible === nextState.isVisible &&
        prevState.height === nextState.height
          ? prevState
          : nextState
      );
    }

    function resetKeyboardState() {
      focusedElementRef.current = null;
      setKeyboardInsetHeightEnv(0);
      setKeyboardState({ isVisible: false, height: 0 });
    }

    if (!isEnabled) {
      resetKeyboardState();
      return;
    }

    function updateKeyboardState() {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        const active = getActiveElement() ?? focusedElementRef.current;
        const inputIsFocused = active ? willOpenKeyboard(active) : false;

        if (!inputIsFocused) {
          resetKeyboardState();
          return;
        }

        focusedElementRef.current = active as HTMLElement;

        if (vk?.overlaysContent) {
          const keyboardHeight = vk.boundingRect.height;
          setKeyboardInsetHeightEnv(keyboardHeight);
          setKeyboardState({ isVisible: true, height: keyboardHeight });
          return;
        }

        if (vv) {
          const heightDiff = window.innerHeight - vv.height;

          if (heightDiff > visualViewportThreshold) {
            setKeyboardInsetHeightEnv(heightDiff);
            setKeyboardState({ isVisible: true, height: heightDiff });
            return;
          }
        }

        resetKeyboardState();
      }, debounceDelay);
    }

    function handleFocusIn(e: FocusEvent) {
      if (e.target instanceof HTMLElement && willOpenKeyboard(e.target)) {
        focusedElementRef.current = e.target;
        updateKeyboardState();
      }
    }

    function handleFocusOut() {
      requestAnimationFrame(() => {
        focusedElementRef.current = getActiveElement();
        updateKeyboardState();
      });
    }

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    if (vv) {
      vv.addEventListener('resize', updateKeyboardState);
      vv.addEventListener('scroll', updateKeyboardState);
    }

    if (vk) {
      if (virtualKeyboardOverlayUsers === 0) {
        initialVirtualKeyboardOverlaysContent = vk.overlaysContent;
        vk.overlaysContent = true;
      }

      virtualKeyboardOverlayUsers++;
      vk.addEventListener('geometrychange', updateKeyboardState);
    }

    focusedElementRef.current = getActiveElement();
    updateKeyboardState();

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);

      if (vv) {
        vv.removeEventListener('resize', updateKeyboardState);
        vv.removeEventListener('scroll', updateKeyboardState);
      }

      if (vk) {
        vk.removeEventListener('geometrychange', updateKeyboardState);

        virtualKeyboardOverlayUsers = Math.max(
          0,
          virtualKeyboardOverlayUsers - 1
        );

        if (virtualKeyboardOverlayUsers === 0) {
          vk.overlaysContent = initialVirtualKeyboardOverlaysContent ?? false;
          initialVirtualKeyboardOverlaysContent = null;
        }
      }

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      resetKeyboardState();
    };
  }, [debounceDelay, isEnabled, visualViewportThreshold]);

  return {
    keyboardHeight: state.height,
    isKeyboardOpen: state.isVisible,
  };
}

/**
 * Virtual Keyboard API is only available in secure contexts (HTTPS)
 * and may not be supported in all browsers.
 */
function getVirtualKeyboardApi() {
  return isHTTPS() && 'virtualKeyboard' in navigator
    ? (navigator.virtualKeyboard as VirtualKeyboardApi)
    : null;
}

function getActiveElement() {
  let activeElement: Element | null = document.activeElement;

  while (
    activeElement instanceof HTMLElement &&
    activeElement.shadowRoot?.activeElement
  ) {
    activeElement = activeElement.shadowRoot.activeElement;
  }

  return activeElement && willOpenKeyboard(activeElement)
    ? (activeElement as HTMLElement)
    : null;
}

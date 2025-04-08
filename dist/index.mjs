import React2, { createContext, forwardRef, useRef, useEffect, useLayoutEffect, useImperativeHandle, useMemo, Children, cloneElement, useState, useCallback, useContext } from 'react';
import { createPortal } from 'react-dom';
import { useMotionValue, useReducedMotion, useTransform, animate, motion, AnimatePresence, transform } from 'motion/react';

// src/sheet.tsx

// src/constants.ts
var MAX_HEIGHT = "calc(100% - env(safe-area-inset-top) - 34px)";
var IS_SSR = typeof window === "undefined";
var DEFAULT_TWEEN_CONFIG = {
  ease: "easeOut",
  duration: 0.2
};
var REDUCED_MOTION_TWEEN_CONFIG = {
  ease: "linear",
  duration: 0.01
};
var DEFAULT_DRAG_CLOSE_THRESHOLD = 0.6;
var DEFAULT_DRAG_VELOCITY_THRESHOLD = 500;

// src/hooks.tsx
var useIsomorphicLayoutEffect = IS_SSR ? useEffect : useLayoutEffect;
function useModalEffect({
  y,
  rootId,
  sheetRef,
  useInset = true
}) {
  const heightRef = useRef(IS_SSR ? 0 : window.innerHeight);
  function setup() {
    const root = document.querySelector(`#${rootId}`);
    const body = document.querySelector("body");
    if (!root) return;
    body.style.backgroundColor = "#000";
    root.style.overflow = "hidden";
    root.style.transitionTimingFunction = "cubic-bezier(0.32, 0.72, 0, 1)";
    root.style.transitionProperty = "transform, border-radius";
    root.style.transitionDuration = "0.5s";
    root.style.transformOrigin = "center top";
  }
  function cleanup() {
    const root = document.querySelector(`#${rootId}`);
    const body = document.querySelector("body");
    if (!root) return;
    setTimeout(() => {
      body.style.removeProperty("background-color");
      root.style.removeProperty("overflow");
      root.style.removeProperty("transition-timing-function");
      root.style.removeProperty("transition-property");
      root.style.removeProperty("transition-duration");
      root.style.removeProperty("transform-origin");
      root.style.removeProperty("transform");
      root.style.removeProperty("border-top-right-radius");
      root.style.removeProperty("border-top-left-radius");
    }, 100);
  }
  useIsomorphicLayoutEffect(() => {
    return () => {
      if (rootId) cleanup();
    };
  }, []);
  useEffect(() => {
    const root = document.querySelector(`#${rootId}`);
    if (!root) return;
    function onCompleted() {
      if (y.get() - 10 >= heightRef.current) cleanup();
    }
    const removeStartListener = y.on("animationStart", () => {
      var _a;
      heightRef.current = ((_a = sheetRef.current) == null ? void 0 : _a.offsetHeight) || window.innerHeight;
      setup();
    });
    const removeChangeListener = y.on("change", (value) => {
      if (root) {
        const progress = Math.max(0, 1 - value / heightRef.current);
        const pageWidth = window.innerWidth;
        const scale = (pageWidth - 16) / pageWidth;
        const ty = transform(progress, [0, 1], [0, 24]);
        const s = transform(progress, [0, 1], [1, scale]);
        const borderRadius = transform(progress, [0, 1], [0, 10]);
        const inset = useInset ? `env(safe-area-inset-top) * ${progress}` : "0px";
        root.style.transform = `scale(${s}) translate3d(0, calc(${inset} + ${ty}px), 0)`;
        root.style.borderTopRightRadius = `${borderRadius}px`;
        root.style.borderTopLeftRadius = `${borderRadius}px`;
      }
    });
    const removeCompleteListener = y.on("animationComplete", onCompleted);
    const removeCancelListener = y.on("animationCancel", onCompleted);
    return () => {
      removeStartListener();
      removeChangeListener();
      removeCompleteListener();
      removeCancelListener();
    };
  }, [y, rootId]);
}
function useEventCallbacks(isOpen, callbacks) {
  const prevOpen = usePrevious(isOpen);
  const didOpen = useRef(false);
  const handleAnimationComplete = useCallback(() => {
    var _a, _b, _c, _d;
    if (!didOpen.current) {
      (_b = (_a = callbacks.current).onOpenEnd) == null ? void 0 : _b.call(_a);
      didOpen.current = true;
    } else {
      (_d = (_c = callbacks.current).onCloseEnd) == null ? void 0 : _d.call(_c);
      didOpen.current = false;
    }
  }, [isOpen, prevOpen]);
  useEffect(() => {
    var _a, _b, _c, _d;
    if (!prevOpen && isOpen) {
      (_b = (_a = callbacks.current).onOpenStart) == null ? void 0 : _b.call(_a);
    } else if (!isOpen && prevOpen) {
      (_d = (_c = callbacks.current).onCloseStart) == null ? void 0 : _d.call(_c);
    }
  }, [isOpen, prevOpen]);
  return { handleAnimationComplete };
}
function useDimensions() {
  const [dimensions, setDimensions] = useState({
    height: !IS_SSR ? window.innerHeight : 0,
    width: !IS_SSR ? window.innerWidth : 0
  });
  useIsomorphicLayoutEffect(() => {
    function handler() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
  return dimensions;
}
function usePrevious(state) {
  const ref = useRef(void 0);
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
}
function useEffectEvent(handler) {
  const handlerRef = useRef(void 0);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return useCallback((...args) => {
    const fn = handlerRef.current;
    return fn == null ? void 0 : fn(...args);
  }, []);
}
var constraints = { bottom: 0, top: 0, left: 0, right: 0 };
function useDragConstraints() {
  const constraintsRef = useRef(null);
  const onMeasureDragConstraints = useCallback(() => constraints, []);
  return { constraintsRef, onMeasureDragConstraints };
}
var SheetContext = createContext(
  void 0
);
var useSheetContext = () => {
  const context = useContext(SheetContext);
  if (!context) throw new Error("Sheet context error");
  return context;
};
var SheetScrollerContext = createContext(void 0);
function SheetScrollerContextProvider({
  children
}) {
  const sheetContext = useSheetContext();
  const [disableDrag, setDisableDrag] = useState(!!sheetContext.disableDrag);
  function setDragEnabled() {
    if (!sheetContext.disableDrag) setDisableDrag(false);
  }
  function setDragDisabled() {
    if (!disableDrag) setDisableDrag(true);
  }
  return /* @__PURE__ */ React2.createElement(
    SheetScrollerContext.Provider,
    {
      value: { disableDrag, setDragEnabled, setDragDisabled }
    },
    children
  );
}
var useSheetScrollerContext = () => {
  const context = useContext(SheetScrollerContext);
  if (!context) throw new Error("Sheet scroller context error");
  return context;
};

// src/utils.ts
function getClosest(nums, goal) {
  let closest = nums[0];
  let minDifference = Math.abs(nums[0] - goal);
  for (let i = 1; i < nums.length; i++) {
    const difference = Math.abs(nums[i] - goal);
    if (difference < minDifference) {
      closest = nums[i];
      minDifference = difference;
    }
  }
  return closest;
}
function inDescendingOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) return false;
  }
  return true;
}
function validateSnapTo({
  snapTo,
  sheetHeight
}) {
  if (snapTo < 0) {
    console.warn(
      `Snap point is out of bounds. Sheet height is ${sheetHeight} but snap point is ${sheetHeight + Math.abs(snapTo)}.`
    );
  }
  return Math.max(Math.round(snapTo), 0);
}
function mergeRefs(refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    });
  };
}
function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
function testPlatform(re) {
  var _a;
  return typeof window !== "undefined" && window.navigator != null ? re.test(
    // @ts-expect-error
    ((_a = window.navigator.userAgentData) == null ? void 0 : _a.platform) || window.navigator.platform
  ) : false;
}
function cached(fn) {
  let res = null;
  return () => {
    if (res == null) {
      res = fn();
    }
    return res;
  };
}
var isMac = cached(function() {
  return testPlatform(/^Mac/i);
});
var isIPhone = cached(function() {
  return testPlatform(/^iPhone/i);
});
var isIPad = cached(function() {
  return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
});
var isIOS = cached(function() {
  return isIPhone() || isIPad();
});

// src/use-prevent-scroll.ts
var KEYBOARD_BUFFER = 24;
function chain(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
var visualViewport = typeof document !== "undefined" && window.visualViewport;
function isScrollable(node, checkForOverflow) {
  if (!node) {
    return false;
  }
  const style = window.getComputedStyle(node);
  let isScrollable2 = /(auto|scroll)/.test(
    style.overflow + style.overflowX + style.overflowY
  );
  if (isScrollable2 && checkForOverflow) {
    isScrollable2 = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
  }
  return isScrollable2;
}
function getScrollParent(node, checkForOverflow) {
  let scrollableNode = node;
  if (isScrollable(scrollableNode, checkForOverflow)) {
    scrollableNode = scrollableNode.parentElement;
  }
  while (scrollableNode && !isScrollable(scrollableNode, checkForOverflow)) {
    scrollableNode = scrollableNode.parentElement;
  }
  return scrollableNode || document.scrollingElement || document.documentElement;
}
var nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
var preventScrollCount = 0;
var restore;
function usePreventScroll(options = {}) {
  const { isDisabled } = options;
  useIsomorphicLayoutEffect(() => {
    if (isDisabled) {
      return;
    }
    preventScrollCount++;
    if (preventScrollCount === 1) {
      if (isIOS()) {
        restore = preventScrollMobileSafari();
      } else {
        restore = preventScrollStandard();
      }
    }
    return () => {
      preventScrollCount--;
      if (preventScrollCount === 0) {
        restore == null ? void 0 : restore();
      }
    };
  }, [isDisabled]);
}
function preventScrollStandard() {
  return chain(
    setStyle(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    setStyle(document.documentElement, "overflow", "hidden")
  );
}
function preventScrollMobileSafari() {
  let scrollable;
  let lastY = 0;
  const onTouchStart = (e) => {
    var _a;
    const target = (_a = e.composedPath()) == null ? void 0 : _a[0];
    scrollable = getScrollParent(target, true);
    if (scrollable === document.documentElement && scrollable === document.body) {
      return;
    }
    lastY = e.changedTouches[0].pageY;
  };
  const onTouchMove = (e) => {
    if (scrollable === void 0) {
      return;
    }
    if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
      e.preventDefault();
      return;
    }
    const y = e.changedTouches[0].pageY;
    const scrollTop = scrollable.scrollTop;
    const bottom = scrollable.scrollHeight - scrollable.clientHeight;
    if (bottom === 0) {
      return;
    }
    if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) {
      e.preventDefault();
    }
    lastY = y;
  };
  const onTouchEnd = (e) => {
    var _a;
    const target = (_a = e.composedPath()) == null ? void 0 : _a[0];
    if (willOpenKeyboard(target) && target !== document.activeElement) {
      e.preventDefault();
      target.style.transform = "translateY(-2000px)";
      target.focus();
      requestAnimationFrame(() => {
        target.style.transform = "";
      });
    }
  };
  const onFocus = (e) => {
    var _a;
    const target = (_a = e.composedPath()) == null ? void 0 : _a[0];
    if (willOpenKeyboard(target)) {
      target.style.transform = "translateY(-2000px)";
      requestAnimationFrame(() => {
        target.style.transform = "";
        if (visualViewport) {
          if (visualViewport.height < window.innerHeight) {
            requestAnimationFrame(() => {
              scrollIntoView(target);
            });
          } else {
            visualViewport.addEventListener(
              "resize",
              () => scrollIntoView(target),
              { once: true }
            );
          }
        }
      });
    }
  };
  const onWindowScroll = () => {
    window.scrollTo(0, 0);
  };
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
  const restoreStyles = chain(
    setStyle(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    setStyle(document.documentElement, "overflow", "hidden"),
    setStyle(document.body, "marginTop", `-${scrollY}px`)
  );
  window.scrollTo(0, 0);
  const removeEvents = chain(
    addEvent(document, "touchstart", onTouchStart, {
      passive: false,
      capture: true
    }),
    addEvent(document, "touchmove", onTouchMove, {
      passive: false,
      capture: true
    }),
    addEvent(document, "touchend", onTouchEnd, {
      passive: false,
      capture: true
    }),
    addEvent(document, "focus", onFocus, true),
    addEvent(window, "scroll", onWindowScroll)
  );
  return () => {
    restoreStyles();
    removeEvents();
    window.scrollTo(scrollX, scrollY);
  };
}
function setStyle(element, style, value) {
  const cur = element.style[style];
  element.style[style] = value;
  return () => {
    element.style[style] = cur;
  };
}
function addEvent(target, event, handler, options) {
  target.addEventListener(event, handler, options);
  return () => {
    target.removeEventListener(event, handler, options);
  };
}
function scrollIntoView(target) {
  const root = document.scrollingElement || document.documentElement;
  while (target && target !== root) {
    const scrollable = getScrollParent(target);
    if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
      const scrollableTop = scrollable.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      const targetBottom = target.getBoundingClientRect().bottom;
      const keyboardHeight = scrollable.getBoundingClientRect().bottom + KEYBOARD_BUFFER;
      if (targetBottom > keyboardHeight) {
        scrollable.scrollTop += targetTop - scrollableTop;
      }
    }
    target = scrollable.parentElement;
  }
}
function willOpenKeyboard(target) {
  return target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}

// src/styles.ts
var styles = {
  wrapper: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    pointerEvents: "none"
  },
  backdrop: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    touchAction: "none",
    // Disable iOS body scrolling
    border: "none",
    WebkitTapHighlightColor: "transparent"
  },
  container: {
    zIndex: 2,
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    boxShadow: "0px -2px 16px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  },
  headerWrapper: {
    width: "100%"
  },
  header: {
    height: "40px",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  indicator: {
    width: "18px",
    height: "4px",
    borderRadius: "99px",
    backgroundColor: "#ddd"
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "0px",
    position: "relative"
  },
  scroller: {
    height: "100%",
    overflowY: "auto"
  }
};

// src/sheet.tsx
var Sheet = forwardRef(
  ({
    onOpenStart,
    onOpenEnd,
    onClose,
    onCloseStart,
    onCloseEnd,
    onSnap,
    children,
    disableScrollLocking = false,
    isOpen,
    snapPoints: snapPointsProp,
    rootId,
    mountPoint,
    style,
    detent = "full-height",
    initialSnap = 0,
    disableDrag = false,
    prefersReducedMotion = false,
    tweenConfig = DEFAULT_TWEEN_CONFIG,
    dragVelocityThreshold = DEFAULT_DRAG_VELOCITY_THRESHOLD,
    dragCloseThreshold = DEFAULT_DRAG_CLOSE_THRESHOLD,
    useInset,
    ...rest
  }, ref) => {
    const sheetRef = useRef(null);
    const indicatorRotation = useMotionValue(0);
    const { height: windowHeight } = useDimensions();
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(prefersReducedMotion || shouldReduceMotion);
    const animationOptions = {
      type: "tween",
      ...reduceMotion ? REDUCED_MOTION_TWEEN_CONFIG : tweenConfig
    };
    const y = useMotionValue(windowHeight);
    const zIndex = useTransform(
      y,
      (value) => value + 2 >= windowHeight ? -1 : (style == null ? void 0 : style.zIndex) ?? 9999
    );
    const visibility = useTransform(
      y,
      (value) => value + 2 >= windowHeight ? "hidden" : "visible"
    );
    const callbacks = useRef({
      onOpenStart,
      onOpenEnd,
      onCloseStart,
      onCloseEnd
    });
    useIsomorphicLayoutEffect(() => {
      callbacks.current = {
        onOpenStart,
        onOpenEnd,
        onCloseStart,
        onCloseEnd
      };
    });
    let snapPoints = snapPointsProp;
    if (snapPoints) {
      snapPoints = snapPoints.map((point) => {
        if (point > 0 && point <= 1) return Math.round(point * windowHeight);
        return point < 0 ? windowHeight + point : point;
      });
      console.assert(
        inDescendingOrder(snapPoints) || windowHeight === 0,
        `Snap points need to be in descending order got: [${snapPoints.join(
          ", "
        )}]`
      );
    }
    const onDrag = useEffectEvent((_, { delta }) => {
      const velocity = y.getVelocity();
      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);
      y.set(Math.max(y.get() + delta.y, 0));
    });
    const onDragStart = useEffectEvent(() => {
      const focusedElement = document.activeElement;
      if (!focusedElement || !sheetRef.current) return;
      const isInput = focusedElement.tagName === "INPUT" || focusedElement.tagName === "TEXTAREA";
      if (isInput && sheetRef.current.contains(focusedElement)) {
        focusedElement.blur();
      }
    });
    const onDragEnd = useEffectEvent((_, { velocity }) => {
      if (velocity.y > dragVelocityThreshold) {
        onClose();
      } else {
        const sheetHeight = sheetRef.current.getBoundingClientRect().height;
        const currentY = y.get();
        let snapTo = 0;
        if (snapPoints) {
          const snapToValues = snapPoints.map(
            (p) => sheetHeight - Math.min(p, sheetHeight)
          );
          if (detent === "content-height" && !snapToValues.includes(0)) {
            snapToValues.unshift(0);
          }
          snapTo = getClosest(snapToValues, currentY);
        } else if (currentY / sheetHeight > dragCloseThreshold) {
          snapTo = sheetHeight;
        }
        snapTo = validateSnapTo({ snapTo, sheetHeight });
        animate(y, snapTo, animationOptions);
        if (snapPoints && onSnap) {
          const snapValue = Math.abs(Math.round(snapPoints[0] - snapTo));
          const snapIndex = snapPoints.indexOf(
            getClosest(snapPoints, snapValue)
          );
          onSnap(snapIndex);
        }
        const roundedSheetHeight = Math.round(sheetHeight);
        const shouldClose = snapTo + 2 >= roundedSheetHeight;
        if (shouldClose) onClose();
      }
      indicatorRotation.set(0);
    });
    useEffect(() => {
      if (!snapPoints || !onSnap) return;
      const snapIndex = isOpen ? initialSnap : snapPoints.length - 1;
      onSnap(snapIndex);
    }, [isOpen]);
    useImperativeHandle(ref, () => ({
      y,
      snapTo: (snapIndex) => {
        const sheetEl = sheetRef.current;
        if ((snapPoints == null ? void 0 : snapPoints[snapIndex]) !== void 0 && sheetEl) {
          const sheetHeight = sheetEl.getBoundingClientRect().height;
          const snapPoint = snapPoints[snapIndex];
          const snapTo = validateSnapTo({
            snapTo: sheetHeight - snapPoint,
            sheetHeight
          });
          animate(y, snapTo, animationOptions);
          if (onSnap) onSnap(snapIndex);
          if (snapTo >= sheetHeight) onClose();
        }
      }
    }));
    useModalEffect({
      y,
      rootId,
      sheetRef,
      useInset
    });
    usePreventScroll({ isDisabled: disableScrollLocking || !isOpen });
    const dragProps = useMemo(() => {
      const dragProps2 = {
        drag: "y",
        dragElastic: 0,
        dragMomentum: false,
        dragPropagation: false,
        onDrag,
        onDragStart,
        onDragEnd
      };
      return disableDrag ? void 0 : dragProps2;
    }, [disableDrag, windowHeight]);
    const context = {
      y,
      sheetRef,
      isOpen,
      initialSnap,
      snapPoints,
      detent,
      indicatorRotation,
      callbacks,
      dragProps,
      windowHeight,
      animationOptions,
      reduceMotion,
      disableDrag
    };
    const sheet = /* @__PURE__ */ React2.createElement(SheetContext.Provider, { value: context }, /* @__PURE__ */ React2.createElement(
      motion.div,
      {
        ...rest,
        ref,
        style: { ...styles.wrapper, zIndex, visibility, ...style }
      },
      /* @__PURE__ */ React2.createElement(AnimatePresence, null, isOpen ? /* @__PURE__ */ React2.createElement(SheetScrollerContextProvider, null, Children.map(
        children,
        (child, i) => cloneElement(child, { key: `sheet-child-${i}` })
      )) : null)
    ));
    if (IS_SSR) return sheet;
    return createPortal(sheet, mountPoint ?? document.body);
  }
);
Sheet.displayName = "Sheet";
var SheetContainer = forwardRef(
  ({ children, style = {}, className = "", ...rest }, ref) => {
    const {
      y,
      isOpen,
      callbacks,
      snapPoints,
      initialSnap = 0,
      sheetRef,
      windowHeight,
      detent,
      animationOptions,
      reduceMotion
    } = useSheetContext();
    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
    const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
    const maxSnapHeight = snapPoints ? snapPoints[0] : null;
    const height = maxSnapHeight !== null ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})` : MAX_HEIGHT;
    return /* @__PURE__ */ React2.createElement(
      motion.div,
      {
        ...rest,
        ref: mergeRefs([sheetRef, ref]),
        className: `react-modal-sheet-container ${className}`,
        style: {
          ...styles.container,
          ...style,
          ...detent === "full-height" && { height },
          ...detent === "content-height" && { maxHeight: height },
          y
        },
        initial: reduceMotion ? false : { y: windowHeight },
        animate: { y: initialY, transition: animationOptions },
        exit: { y: windowHeight, transition: animationOptions },
        onAnimationComplete: handleAnimationComplete
      },
      children
    );
  }
);
SheetContainer.displayName = "SheetContainer";
var SheetContent = forwardRef(
  ({ children, style, disableDrag, className = "", ...rest }, ref) => {
    const sheetContext = useSheetContext();
    const sheetScrollerContext = useSheetScrollerContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();
    const dragProps = disableDrag || sheetScrollerContext.disableDrag ? void 0 : sheetContext.dragProps;
    return /* @__PURE__ */ React2.createElement(
      motion.div,
      {
        ...rest,
        ref: mergeRefs([ref, constraintsRef]),
        className: `react-modal-sheet-content ${className}`,
        style: { ...styles.content, ...style },
        ...dragProps,
        dragConstraints: constraintsRef,
        onMeasureDragConstraints
      },
      children
    );
  }
);
SheetContent.displayName = "SheetContent";
var SheetHeader = forwardRef(
  ({ children, style, disableDrag, ...rest }, ref) => {
    const { indicatorRotation, dragProps } = useSheetContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();
    const _dragProps = disableDrag ? void 0 : dragProps;
    const indicator1Transform = useTransform(
      indicatorRotation,
      (r) => `translateX(2px) rotate(${r}deg)`
    );
    const indicator2Transform = useTransform(
      indicatorRotation,
      (r) => `translateX(-2px) rotate(${ -1 * r}deg)`
    );
    return /* @__PURE__ */ React2.createElement(
      motion.div,
      {
        ...rest,
        ref: mergeRefs([ref, constraintsRef]),
        style: { ...styles.headerWrapper, ...style },
        ..._dragProps,
        dragConstraints: constraintsRef,
        onMeasureDragConstraints
      },
      children || /* @__PURE__ */ React2.createElement("div", { className: "react-modal-sheet-header", style: styles.header }, /* @__PURE__ */ React2.createElement(
        motion.span,
        {
          className: "react-modal-sheet-drag-indicator",
          style: { ...styles.indicator, transform: indicator1Transform }
        }
      ), /* @__PURE__ */ React2.createElement(
        motion.span,
        {
          className: "react-modal-sheet-drag-indicator",
          style: { ...styles.indicator, transform: indicator2Transform }
        }
      ))
    );
  }
);
SheetHeader.displayName = "SheetHeader";
var isClickable = (props) => !!props.onClick || !!props.onTap;
var SheetBackdrop = forwardRef(
  ({ style = {}, className = "", ...rest }, ref) => {
    const Comp = isClickable(rest) ? motion.button : motion.div;
    const pointerEvents = isClickable(rest) ? "auto" : "none";
    return /* @__PURE__ */ React2.createElement(
      Comp,
      {
        ...rest,
        ref,
        className: `react-modal-sheet-backdrop ${className}`,
        style: { ...styles.backdrop, ...style, pointerEvents },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      }
    );
  }
);
SheetBackdrop.displayName = "SheetBackdrop";
var SheetScroller = forwardRef(
  ({ draggableAt = "top", children, style, className = "", ...rest }, ref) => {
    const sheetScrollerContext = useSheetScrollerContext();
    function determineDragState(element) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const isScrollable2 = scrollHeight > clientHeight;
      if (!isScrollable2) return;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollHeight - scrollTop === clientHeight;
      const shouldEnable = draggableAt === "top" && isAtTop || draggableAt === "bottom" && isAtBottom || draggableAt === "both" && (isAtTop || isAtBottom);
      if (shouldEnable) {
        sheetScrollerContext.setDragEnabled();
      } else {
        sheetScrollerContext.setDragDisabled();
      }
    }
    function onScroll(e) {
      determineDragState(e.currentTarget);
      if (rest.onScroll) {
        rest.onScroll(e);
      }
    }
    function onTouchStart(e) {
      determineDragState(e.currentTarget);
      if (rest.onTouchStart) {
        rest.onTouchStart(e);
      }
    }
    const scrollProps = isTouchDevice() ? { onScroll, onTouchStart } : void 0;
    return /* @__PURE__ */ React2.createElement(
      "div",
      {
        ...rest,
        ref,
        className: `react-modal-sheet-scroller ${className}`,
        style: { ...styles.scroller, ...style },
        ...scrollProps
      },
      children
    );
  }
);
SheetScroller.displayName = "SheetScroller";

// src/index.tsx
var Sheet2 = Object.assign(Sheet, {
  Container: SheetContainer,
  Header: SheetHeader,
  Content: SheetContent,
  Backdrop: SheetBackdrop,
  Scroller: SheetScroller
});

export { Sheet2 as Sheet };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
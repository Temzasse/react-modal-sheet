'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var ReactDOM = require('react-dom');
var framerMotion = require('framer-motion');
var mergeRefs = _interopDefault(require('react-merge-refs'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var isBrowser = typeof window !== 'undefined';
var getClosest = function getClosest(nums, goal) {
  return nums.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};
var highlightId = 'react-modal-sheet-highlight';
function applyRootStyles(rootId) {
  var body = document.querySelector('body');
  var root = document.querySelector("#" + rootId);

  if (root) {
    var p = 24;
    var h = window.innerHeight;
    var s = (h - p) / h;
    body.style.backgroundColor = '#000';
    root.style.overflow = 'hidden';
    root.style.willChange = 'transform';
    root.style.transition = 'transform 200ms linear';
    root.style.transform = "translateY(calc(env(safe-area-inset-top) + " + p / 2 + "px)) scale(" + s + ")"; // prettier-ignore

    root.style.borderTopRightRadius = '10px';
    root.style.borderTopLeftRadius = '10px'; // Add highlighed overlay to emphasize the modality effect

    var highlight = document.createElement('div');
    highlight.setAttribute('aria-hidden', 'true');
    highlight.id = highlightId;
    highlight.style.position = 'absolute';
    highlight.style.top = '0px';
    highlight.style.left = '0px';
    highlight.style.bottom = '0px';
    highlight.style.right = '0px';
    highlight.style.opacity = '0';
    highlight.style.transition = 'opacity 200ms linear';
    highlight.style.backgroundColor = 'rgba(150, 150, 150, 0.1)';
    root.appendChild(highlight);
    requestAnimationFrame(function () {
      return highlight.style.opacity = '1';
    });
  }
}
function cleanupRootStyles(rootId) {
  var body = document.querySelector('body');
  var root = document.getElementById(rootId);
  var highlight = document.getElementById(highlightId);

  function onTransitionEnd() {
    var _highlight$parentNode;

    root.style.removeProperty('overflow');
    root.style.removeProperty('will-change');
    root.style.removeProperty('transition');
    body.style.removeProperty('background-color');
    root.removeEventListener('transitionend', onTransitionEnd);
    (_highlight$parentNode = highlight.parentNode) == null ? void 0 : _highlight$parentNode.removeChild(highlight);
  }

  if (root && highlight) {
    // Start animating back
    root.style.removeProperty('border-top-right-radius');
    root.style.removeProperty('border-top-left-radius');
    root.style.removeProperty('transform');
    highlight.style.opacity = '0'; // Remove temp properties after animation is finished

    root.addEventListener('transitionend', onTransitionEnd);
  }
}

var SheetContext = /*#__PURE__*/React.createContext(undefined);
var useSheetContext = function useSheetContext() {
  var context = React.useContext(SheetContext);
  if (!context) throw Error('Sheet context error');
  return context;
};

var useModalEffect = function useModalEffect(isOpen, rootId) {
  var prevOpen = usePrevious(isOpen); // Automatically apply the iOS modal effect to the body when sheet opens/closes

  React.useEffect(function () {
    if (rootId && !prevOpen && isOpen) {
      applyRootStyles(rootId);
    } else if (rootId && !isOpen && prevOpen) {
      cleanupRootStyles(rootId);
    }
  }, [isOpen, prevOpen]); // eslint-disable-line
  // Make sure to cleanup modal styles on unmount

  React.useEffect(function () {
    return function () {
      if (rootId && isOpen) cleanupRootStyles(rootId);
    };
  }, [isOpen]); // eslint-disable-line
};
var useEventCallbacks = function useEventCallbacks(isOpen, callbacks) {
  var prevOpen = usePrevious(isOpen);
  var didOpen = React.useRef(false); // Because of AnimatePrecence we don't have access to latest isOpen value
  // so we need to read and write to a ref to determine if we are
  // opening or closing the sheet

  var handleAnimationComplete = React.useCallback(function () {
    if (!didOpen.current) {
      callbacks.current.onOpenEnd == null ? void 0 : callbacks.current.onOpenEnd();
      didOpen.current = true;
    } else {
      callbacks.current.onCloseEnd == null ? void 0 : callbacks.current.onCloseEnd();
      didOpen.current = false;
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  React.useEffect(function () {
    if (!prevOpen && isOpen) {
      callbacks.current.onOpenStart == null ? void 0 : callbacks.current.onOpenStart();
    } else if (!isOpen && prevOpen) {
      callbacks.current.onCloseStart == null ? void 0 : callbacks.current.onCloseStart();
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  return {
    handleAnimationComplete: handleAnimationComplete
  };
};

var usePrevious = function usePrevious(state) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = state;
  });
  return ref.current;
};

var styles = {
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999999,
    overflow: 'hidden'
  },
  backdrop: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    touchAction: 'none'
  },
  container: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    boxShadow: '0px -2px 16px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column'
  },
  headerWrapper: {
    width: '100%'
  },
  header: {
    height: '40px',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    width: '18px',
    height: '4px',
    borderRadius: '99px',
    backgroundColor: '#ddd'
  },
  content: {
    flex: 1,
    overflow: 'auto',
    position: 'relative'
  }
};

var Sheet = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onOpenStart = _ref.onOpenStart,
      onOpenEnd = _ref.onOpenEnd,
      onCloseStart = _ref.onCloseStart,
      onCloseEnd = _ref.onCloseEnd,
      onSnap = _ref.onSnap,
      snapPoints = _ref.snapPoints,
      _ref$initialSnap = _ref.initialSnap,
      initialSnap = _ref$initialSnap === void 0 ? 0 : _ref$initialSnap,
      rootId = _ref.rootId,
      _ref$springConfig = _ref.springConfig,
      springConfig = _ref$springConfig === void 0 ? {
    stiffness: 300,
    damping: 30,
    mass: 0.2
  } : _ref$springConfig,
      _ref$disableDrag = _ref.disableDrag,
      disableDrag = _ref$disableDrag === void 0 ? false : _ref$disableDrag,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "isOpen", "onClose", "onOpenStart", "onOpenEnd", "onCloseStart", "onCloseEnd", "onSnap", "snapPoints", "initialSnap", "rootId", "springConfig", "disableDrag"]);

  var _React$useState = React.useState(false),
      mounted = _React$useState[0],
      setMounted = _React$useState[1];

  var _React$useState2 = React.useState(false),
      isDragging = _React$useState2[0],
      setDragging = _React$useState2[1];

  var sheetRef = React.useRef(null);
  var callbacks = React.useRef({
    onOpenStart: onOpenStart,
    onOpenEnd: onOpenEnd,
    onCloseStart: onCloseStart,
    onCloseEnd: onCloseEnd
  }); // prettier-ignore

  var indicatorRotation = framerMotion.useMotionValue(0);
  var sheetDragY = framerMotion.useMotionValue(isBrowser ? window.innerHeight : 0);
  var sheetSpringY = framerMotion.useSpring(sheetDragY, springConfig);
  var y = isDragging ? sheetDragY : sheetSpringY;
  var pointerEvents = isOpen ? 'auto' : 'none';
  var handleDrag = React.useCallback(function (_, _ref2) {
    var delta = _ref2.delta;
    // Update drag indicator rotation based on drag velocity
    var velocity = sheetDragY.getVelocity();
    if (velocity > 0) indicatorRotation.set(10);
    if (velocity < 0) indicatorRotation.set(-10); // Make sure user cannot drag beyond the top of the sheet

    sheetDragY.set(Math.max(sheetDragY.get() + delta.y, 0));
  }, []); // eslint-disable-line

  var handleDragStart = React.useCallback(function () {
    // Sync the drag value with the spring value so that dragging start at the correct y position
    sheetDragY.set(sheetSpringY.get());
    setDragging(true);
  }, []); // eslint-disable-line

  var handleDragEnd = React.useCallback(function (_, _ref3) {
    var velocity = _ref3.velocity;

    if (velocity.y > 500) {
      // User flicked the sheet down
      onClose();
    } else {
      var sheetEl = sheetRef.current;
      var contentHeight = sheetEl.getBoundingClientRect().height;
      var snapTo = snapPoints ? getClosest(snapPoints.map(function (p) {
        return contentHeight - p;
      }), sheetDragY.get()) : sheetDragY.get() / contentHeight > 0.6 // Close if dragged over 60%
      ? contentHeight : 0; // Update the spring value so that the sheet is animated to the snap point

      sheetSpringY.set(snapTo);

      if (snapPoints && onSnap) {
        var snapValue = Math.abs(Math.round(snapPoints[0] - snapTo));
        var snapIndex = snapPoints.indexOf(snapValue);
        onSnap(snapIndex);
      }

      if (snapTo >= contentHeight) onClose();
      setDragging(false);
    } // Reset indicator rotation after dragging


    indicatorRotation.set(0);
  }, [onClose, onSnap] // eslint-disable-line
  ); // Keep the callback fns up-to-date so that they can be accessed inside
  // the effect without including them to the dependencies array

  React.useEffect(function () {
    callbacks.current = {
      onOpenStart: onOpenStart,
      onOpenEnd: onOpenEnd,
      onCloseStart: onCloseStart,
      onCloseEnd: onCloseEnd
    };
  });
  React.useEffect(function () {
    setMounted(true);
  }, []); // Trigger onSnap callback when sheet is opened or closed

  React.useEffect(function () {
    if (!snapPoints || !onSnap || !mounted) return;
    var snapIndex = isOpen ? initialSnap : snapPoints.length - 1;
    onSnap(snapIndex);
  }, [isOpen]);
  React.useImperativeHandle(ref, function () {
    return {
      snapTo: function snapTo(snapIndex) {
        if (snapPoints && snapPoints[snapIndex] !== undefined) {
          var sheetEl = sheetRef.current;
          var contentHeight = sheetEl.getBoundingClientRect().height;
          var snapTo = contentHeight - snapPoints[snapIndex];
          sheetSpringY.set(snapTo);
          if (onSnap) onSnap(snapIndex);
          if (snapTo >= contentHeight) onClose();
        }
      }
    };
  });
  useModalEffect(isOpen, rootId);
  var dragProps = disableDrag ? {} : {
    drag: 'y',
    dragElastic: 0,
    dragConstraints: {
      top: 0,
      bottom: 0
    },
    dragMomentum: false,
    onDrag: handleDrag,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd
  };
  var context = {
    y: y,
    sheetRef: sheetRef,
    isOpen: isOpen,
    isDragging: isDragging,
    initialSnap: initialSnap,
    snapPoints: snapPoints,
    indicatorRotation: indicatorRotation,
    callbacks: callbacks,
    dragProps: dragProps
  };

  var wrapperProps = _extends({}, rest, {
    ref: ref,
    style: _extends({}, styles.wrapper, {
      pointerEvents: pointerEvents
    })
  });

  return mounted ? ReactDOM.createPortal(React.createElement(SheetContext.Provider, {
    value: context
  }, React.createElement("div", Object.assign({}, wrapperProps), React.createElement(framerMotion.AnimatePresence, null, isOpen ? React.Children.map(children, function (child, i) {
    return React.cloneElement(child, {
      key: "sheet-child-" + i
    });
  }) : null))), document.body) : // NOTE: return the wrapper div so that SSR frameworks don't get confused
  // with the HTML structure ("Expected server HTML to contain a matching <div>...")
  React.createElement("div", Object.assign({}, wrapperProps));
});

var MAX_HEIGHT = 'calc(100% - env(safe-area-inset-top) - 34px)';
var SheetContainer = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "style"]);

  var _useSheetContext = useSheetContext(),
      y = _useSheetContext.y,
      isOpen = _useSheetContext.isOpen,
      callbacks = _useSheetContext.callbacks,
      snapPoints = _useSheetContext.snapPoints,
      _useSheetContext$init = _useSheetContext.initialSnap,
      initialSnap = _useSheetContext$init === void 0 ? 0 : _useSheetContext$init,
      sheetRef = _useSheetContext.sheetRef;

  var _useEventCallbacks = useEventCallbacks(isOpen, callbacks),
      handleAnimationComplete = _useEventCallbacks.handleAnimationComplete;

  var initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
  var h = snapPoints ? snapPoints[0] : null;
  var sheetHeight = h ? "min(" + h + "px, " + MAX_HEIGHT + ")" : MAX_HEIGHT;
  return React.createElement(framerMotion.motion.div, Object.assign({}, rest, {
    ref: mergeRefs([sheetRef, ref]),
    className: "react-modal-sheet-container",
    style: _extends({}, styles.container, {
      height: sheetHeight
    }, style, {
      y: y
    }),
    initial: {
      y: window.innerHeight
    },
    animate: {
      y: initialY,
      transition: {
        type: 'tween'
      }
    },
    exit: {
      y: window.innerHeight
    },
    onAnimationComplete: handleAnimationComplete
  }), children);
});

var SheetContent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$disableDrag = _ref.disableDrag,
      disableDrag = _ref$disableDrag === void 0 ? false : _ref$disableDrag,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "disableDrag", "style"]);

  var _useSheetContext = useSheetContext(),
      dragProps = _useSheetContext.dragProps;

  return React.createElement(framerMotion.motion.div, Object.assign({}, rest, {
    ref: ref,
    className: "react-modal-sheet-content",
    style: _extends({}, styles.content, style)
  }, disableDrag ? {} : dragProps), children);
});

var SheetHeader = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$disableDrag = _ref.disableDrag,
      disableDrag = _ref$disableDrag === void 0 ? false : _ref$disableDrag,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "disableDrag", "style"]);

  var _useSheetContext = useSheetContext(),
      indicatorRotation = _useSheetContext.indicatorRotation,
      dragProps = _useSheetContext.dragProps;

  var indicator1Transform = framerMotion.useTransform(indicatorRotation, function (r) {
    return "translateX(2px) rotate(" + r + "deg)";
  });
  var indicator2Transform = framerMotion.useTransform(indicatorRotation, function (r) {
    return "translateX(-2px) rotate(" + -1 * r + "deg)";
  });
  return React.createElement(framerMotion.motion.div, Object.assign({}, rest, {
    ref: ref,
    style: _extends({}, styles.headerWrapper, style)
  }, disableDrag ? {} : dragProps), children || React.createElement("div", {
    className: "react-modal-sheet-header",
    style: styles.header
  }, React.createElement(framerMotion.motion.span, {
    className: "react-modal-sheet-drag-indicator",
    style: _extends({}, styles.indicator, {
      transform: indicator1Transform
    })
  }), React.createElement(framerMotion.motion.span, {
    className: "react-modal-sheet-drag-indicator",
    style: _extends({}, styles.indicator, {
      transform: indicator2Transform
    })
  })));
});

var isClickable = function isClickable(props) {
  return !!props.onClick || !!props.onTap;
};

var SheetBackdrop = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = _objectWithoutPropertiesLoose(_ref, ["style"]);

  var Comp = isClickable(rest) ? framerMotion.motion.button : framerMotion.motion.div;
  return React.createElement(Comp, Object.assign({}, rest, {
    ref: ref,
    className: "react-modal-sheet-backdrop",
    style: _extends({}, styles.backdrop, style),
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }));
});

var _Sheet = Sheet;
_Sheet.Container = SheetContainer;
_Sheet.Header = SheetHeader;
_Sheet.Content = SheetContent;
_Sheet.Backdrop = SheetBackdrop;
var SheetCompound = _Sheet;

exports.default = SheetCompound;
//# sourceMappingURL=react-modal-sheet.cjs.development.js.map

import {
  animate,
  type DragHandler,
  motion,
  type Transition,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import useMeasure from 'react-use-measure';

import {
  DEFAULT_DRAG_CLOSE_THRESHOLD,
  DEFAULT_DRAG_VELOCITY_THRESHOLD,
  DEFAULT_TWEEN_CONFIG,
  IS_SSR,
  REDUCED_MOTION_TWEEN_CONFIG,
} from './constants';
import { SheetContext } from './context';
import { useDimensions } from './hooks/use-dimensions';
import { useFocusedInput } from './hooks/use-focused-input';
import { useModalEffect } from './hooks/use-modal-effect';
import { usePreventScroll } from './hooks/use-prevent-scroll';
import { useSheetState } from './hooks/use-sheet-state';
import { useStableCallback } from './hooks/use-stable-callback';
import { useVirtualKeyboard } from './hooks/use-virtual-keyboard';
import {
  computeSnapPoints,
  handleHighVelocityDrag,
  handleLowVelocityDrag,
} from './snap';
import { styles } from './styles';
import { type SheetContextType, type SheetProps } from './types';
import { applyStyles, waitForElement } from './utils';

export const Sheet = forwardRef<any, SheetProps>(
  (
    {
      avoidKeyboard = true,
      children,
      className = '',
      detent = 'default',
      disableDismiss = false,
      disableDrag: disableDragProp = false,
      disableScrollLocking = false,
      dragCloseThreshold = DEFAULT_DRAG_CLOSE_THRESHOLD,
      dragVelocityThreshold = DEFAULT_DRAG_VELOCITY_THRESHOLD,
      initialSnap,
      isOpen,
      modalEffectRootId,
      modalEffectThreshold,
      mountPoint,
      prefersReducedMotion = false,
      snapPoints: snapPointsProp,
      style,
      tweenConfig = DEFAULT_TWEEN_CONFIG,
      unstyled = false,
      onOpenStart,
      onOpenEnd,
      onClose,
      onCloseStart,
      onCloseEnd,
      onSnap,
      onDrag: onDragProp,
      onDragStart: onDragStartProp,
      onDragEnd: onDragEndProp,
      ...rest
    },
    ref
  ) => {
    const [sheetBoundsRef, sheetBounds] = useMeasure();
    const sheetRef = useRef<HTMLDivElement>(null);
    const sheetHeight = Math.round(sheetBounds.height);
    const [currentSnap, setCurrentSnap] = useState(initialSnap);
    const snapPoints =
      snapPointsProp && sheetHeight > 0
        ? computeSnapPoints({ sheetHeight, snapPointsProp })
        : [];

    const { windowHeight } = useDimensions();
    const closedY = sheetHeight > 0 ? sheetHeight : windowHeight;
    const y = useMotionValue(closedY);
    const yInverted = useTransform(y, (val) => Math.max(sheetHeight - val, 0));
    const indicatorRotation = useMotionValue(0);

    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(prefersReducedMotion || shouldReduceMotion);
    const animationOptions: Transition = {
      type: 'tween',
      ...(reduceMotion ? REDUCED_MOTION_TWEEN_CONFIG : tweenConfig),
    };

    const keyboard = useVirtualKeyboard({
      isEnabled: isOpen && avoidKeyboard,
      containerRef: sheetRef,
    });

    // Disable drag if the keyboard is open to avoid weird behavior
    const disableDrag = keyboard.isKeyboardOpen || disableDragProp;

    // +2 for tolerance in case the animated value is slightly off
    const zIndex = useTransform(y, (val) =>
      val + 2 >= closedY ? -1 : (style?.zIndex ?? 9999)
    );
    const visibility = useTransform(y, (val) =>
      val + 2 >= closedY ? 'hidden' : 'visible'
    );

    const updateSnap = useStableCallback((snapIndex: number) => {
      setCurrentSnap(snapIndex);
      onSnap?.(snapIndex);
    });

    const getSnapPoint = useStableCallback((snapIndex: number) => {
      if (snapPointsProp && snapPoints) {
        if (snapIndex < 0 || snapIndex >= snapPoints.length) {
          console.warn(
            `Invalid snap index ${snapIndex}. Snap points are: [${snapPointsProp.join(', ')}] and their computed values are: [${snapPoints
              .map((point) => point.snapValue)
              .join(', ')}]`
          );
          return null;
        }
        return snapPoints[snapIndex];
      }
      return null;
    });

    const snapTo = useStableCallback(async (snapIndex: number) => {
      if (!snapPointsProp) {
        console.warn('Snapping is not possible without `snapPoints` prop.');
        return;
      }

      const snapPoint = getSnapPoint(snapIndex);

      if (snapPoint === null) {
        console.warn(`Invalid snap index ${snapIndex}.`);
        return;
      }

      if (snapIndex === 0) {
        onClose();
        return;
      }

      await animate(y, snapPoint.snapValueY, {
        ...animationOptions,
        onComplete: () => updateSnap(snapIndex),
      });
    });

    const blurActiveInput = useStableCallback(() => {
      // Find focused input inside the sheet and blur it when dragging starts
      // to prevent a weird ghost caret "bug" on mobile
      const focusedElement = document.activeElement as HTMLElement | null;
      if (!focusedElement || !sheetRef.current) return;

      const isInput =
        focusedElement.tagName === 'INPUT' ||
        focusedElement.tagName === 'TEXTAREA';

      // Only blur the focused element if it's inside the sheet
      if (isInput && sheetRef.current.contains(focusedElement)) {
        focusedElement.blur();
      }
    });

    const onDrag = useStableCallback<DragHandler>((event, info) => {
      onDragProp?.(event, info);

      const currentY = y.get();

      // Update drag indicator rotation based on drag velocity
      const velocity = y.getVelocity();
      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);

      // Make sure user cannot drag beyond the top of the sheet
      y.set(Math.max(currentY + info.delta.y, 0));
    });

    const onDragStart = useStableCallback<DragHandler>((event, info) => {
      blurActiveInput();
      onDragStartProp?.(event, info);
    });

    const onDragEnd = useStableCallback<DragHandler>((event, info) => {
      blurActiveInput();
      onDragEndProp?.(event, info);

      const currentY = y.get();

      let yTo = 0;

      const currentSnapPoint =
        currentSnap !== undefined ? getSnapPoint(currentSnap) : null;

      if (currentSnapPoint) {
        const dragOffsetDirection = info.offset.y > 0 ? 'down' : 'up';
        const dragVelocityDirection = info.velocity.y > 0 ? 'down' : 'up';
        const isHighVelocity =
          Math.abs(info.velocity.y) > dragVelocityThreshold;

        let result: { yTo: number; snapIndex: number | undefined };

        if (isHighVelocity) {
          result = handleHighVelocityDrag({
            snapPoints,
            dragDirection: dragVelocityDirection,
          });
        } else {
          result = handleLowVelocityDrag({
            currentSnapPoint,
            currentY,
            dragDirection: dragOffsetDirection,
            snapPoints,
            velocity: info.velocity.y,
          });
        }

        yTo = result.yTo;

        // If disableDismiss is true, prevent closing via gesture
        if (disableDismiss && yTo + 1 >= sheetHeight) {
          // Use the bottom-most open snap point
          const bottomSnapPoint = snapPoints.find((s) => s.snapValue > 0);

          if (bottomSnapPoint) {
            yTo = bottomSnapPoint.snapValueY;
            updateSnap(bottomSnapPoint.snapIndex);
          } else {
            // If no open snap points available, stay at current position
            yTo = currentY;
          }
        } else if (result.snapIndex !== undefined) {
          updateSnap(result.snapIndex);
        }
      } else if (
        info.velocity.y > dragVelocityThreshold ||
        currentY > sheetHeight * dragCloseThreshold
      ) {
        // Close the sheet if dragged past the threshold or if the velocity is high enough
        // But only if disableDismiss is false
        if (disableDismiss) {
          // If disableDismiss, snap back to the open position
          yTo = 0;
        } else {
          yTo = closedY;
        }
      }

      // Update the spring value so that the sheet is animated to the snap point
      animate(y, yTo, animationOptions);

      // +1px for imprecision tolerance
      // Only call onClose if disableDismiss is false or if we're actually closing
      if (yTo + 1 >= sheetHeight && !disableDismiss) {
        onClose();
      }

      // Reset indicator rotation after dragging
      indicatorRotation.set(0);
    });

    useImperativeHandle(ref, () => ({
      y,
      yInverted,
      height: sheetHeight,
      snapTo,
    }));

    useModalEffect({
      y,
      detent,
      sheetHeight,
      snapPoints,
      rootId: modalEffectRootId,
      startThreshold: modalEffectThreshold,
    });

    /**
     * Motion should handle body scroll locking but it's not working properly on iOS.
     * Scroll locking from React Aria seems to work much better 🤷‍♂️
     */
    usePreventScroll({
      isDisabled: disableScrollLocking || !isOpen,
    });

    const focusedInput = useFocusedInput({
      isEnabled: isOpen && avoidKeyboard,
      sheetRef,
    });

    /**
     * Keyboard avoidance.
     *
     * Move the sheet up when the keyboard opens if the sheet has snap points,
     * and then scroll the focused input into view to make sure it's not covered
     * by the keyboard.
     */
    useEffect(() => {
      if (!isOpen || !avoidKeyboard) {
        return;
      }

      async function adjustSheetForKeyboard() {
        const sheetElement = sheetRef.current;

        if (!sheetElement || !focusedInput || !keyboard.isKeyboardOpen) {
          return;
        }

        /**
         * If we have snap points and the sheet is currently snapped to a point
         * that is being covered by the keyboard, we want to move the sheet up
         * to reveal it.
         */
        const lastSnapPoint = snapPoints[snapPoints.length - 1];

        if (lastSnapPoint) {
          await animate(y, lastSnapPoint.snapValueY, animationOptions);
          updateSnap(lastSnapPoint.snapIndex);
        }

        // Then scroll the focused input into view if it's covered by the keyboard
        requestAnimationFrame(() => {
          const inputRect = focusedInput.getBoundingClientRect();
          const sheetRect = sheetElement.getBoundingClientRect();
          const scroller = sheetElement.querySelector(
            '.react-modal-sheet-content-scroller'
          ) as HTMLElement;

          const scrollTarget = Math.max(
            inputRect.top -
              sheetRect.top +
              scroller.scrollTop -
              inputRect.height,
            0
          );

          requestAnimationFrame(() => {
            scroller.scrollTo({ top: scrollTarget, behavior: 'smooth' });
          });
        });
      }

      adjustSheetForKeyboard();
    }, [isOpen, avoidKeyboard, keyboard.isKeyboardOpen, focusedInput]);

    const state = useSheetState({
      isOpen,
      onOpen: async () => {
        onOpenStart?.();

        /**
         * This is not very React-y but we need to wait for the sheet
         * but we need to wait for the sheet to be rendered and visible
         * before we can measure it and animate it to the initial snap point.
         */
        await waitForElement('react-modal-sheet-container');

        const initialSnapPoint =
          initialSnap !== undefined ? getSnapPoint(initialSnap) : null;

        const yTo = initialSnapPoint?.snapValueY ?? 0;

        await animate(y, yTo, animationOptions);

        if (initialSnap !== undefined) {
          updateSnap(initialSnap);
        }

        onOpenEnd?.();
      },
      onClosing: async () => {
        onCloseStart?.();

        await animate(y, closedY, animationOptions);

        onCloseEnd?.();
      },
    });

    const dragProps: SheetContextType['dragProps'] = {
      drag: 'y',
      dragElastic: 0,
      dragMomentum: false,
      dragPropagation: false,
      onDrag,
      onDragStart,
      onDragEnd,
    };

    const context: SheetContextType = {
      currentSnap,
      detent,
      disableDrag,
      dragProps,
      indicatorRotation,
      avoidKeyboard,
      prefersReducedMotion,
      sheetBoundsRef,
      sheetRef,
      unstyled,
      y,
    };

    const sheet = (
      <SheetContext.Provider value={context}>
        <motion.div
          {...rest}
          ref={ref}
          data-sheet-state={state}
          className={`react-modal-sheet-root ${className}`}
          style={{
            ...applyStyles(styles.root, unstyled),
            zIndex,
            visibility,
            ...style,
          }}
        >
          {state !== 'closed' ? children : null}
        </motion.div>
      </SheetContext.Provider>
    );

    if (IS_SSR) return sheet;

    return createPortal(sheet, mountPoint ?? document.body);
  }
);

Sheet.displayName = 'Sheet';

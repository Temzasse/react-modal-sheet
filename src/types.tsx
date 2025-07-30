import {
  type ComponentPropsWithoutRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
  type RefObject,
} from 'react';

import {
  type DragHandler,
  type EasingDefinition,
  type MotionProps,
  type MotionValue,
  type Transition,
  type motion,
} from 'motion/react';
import type { RectReadOnly } from 'react-use-measure';

export type SheetDetent = 'default' | 'full' | 'content';

type CommonProps = MotionProps & {
  className?: string;
};

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

export interface SheetTweenConfig {
  ease: EasingDefinition;
  duration: number;
}

export type SheetProps = {
  children: ReactNode;
  detent?: SheetDetent;
  disableDismiss?: boolean;
  disableDrag?: boolean;
  disableScrollLocking?: boolean;
  dragCloseThreshold?: number;
  dragVelocityThreshold?: number;
  initialSnap?: number; // index of snap points array
  isOpen: boolean;
  modalEffectRootId?: string;
  modalEffectThreshold?: number;
  mountPoint?: Element;
  prefersReducedMotion?: boolean;
  snapPoints?: number[];
  tweenConfig?: SheetTweenConfig;
  onClose: () => void;
  onCloseEnd?: () => void;
  onCloseStart?: () => void;
  onOpenEnd?: () => void;
  onOpenStart?: () => void;
  onSnap?: (index: number) => void;
} & MotionDivProps;

export type SheetContainerProps = Omit<
  CommonProps,
  'initial' | 'animate' | 'exit' | 'onAnimationComplete'
> & {
  children: ReactNode;
};

export type SheetDraggableProps = MotionDivProps & {
  children?: ReactNode;
  disableDrag?: boolean;
};

export type SheetBackdropProps = Omit<
  CommonProps,
  'initial' | 'animate' | 'exit'
>;

export interface SheetDragProps {
  drag: 'y';
  dragElastic: number;
  dragMomentum: boolean;
  dragPropagation: boolean;
  onDrag: DragHandler;
  onDragStart: DragHandler;
  onDragEnd: DragHandler;
}

export type SheetStateInfo = {
  scrollPosition?: 'top' | 'bottom' | 'middle';
  currentSnap?: number;
};

export type SheetContentScrollableProps = MotionDivProps & {
  disableDrag?: boolean | ((args: SheetStateInfo) => boolean);
  disableScroll?: boolean | ((args: SheetStateInfo) => boolean);
  scrollRef?: RefObject<HTMLDivElement | null>;
};

export type SheetSnapPoint = {
  snapIndex: number;
  snapValue: number; // Absolute value from the bottom of the sheet
  snapValueY: number; // Y value is inverted as `y = 0` means sheet is at the top
};

export interface SheetContextType {
  currentSnap?: number;
  detent: SheetDetent;
  disableDrag: boolean;
  dragProps?: SheetDragProps;
  indicatorRotation: MotionValue<number>;
  sheetBoundsRef: (node: HTMLDivElement | null) => void;
  sheetRef: RefObject<any>;
  y: MotionValue<any>;
}

export interface SheetScrollerContextType {
  disableDrag: boolean;
  setDragDisabled: () => void;
  setDragEnabled: () => void;
}

type ContainerComponent = ForwardRefExoticComponent<
  SheetContainerProps & RefAttributes<any>
>;

type DraggableComponent = ForwardRefExoticComponent<
  SheetDraggableProps & RefAttributes<any>
>;

type BackdropComponent = ForwardRefExoticComponent<
  SheetBackdropProps & RefAttributes<any>
>;

type SheetComponent = ForwardRefExoticComponent<
  SheetProps & RefAttributes<any>
>;

type ContentScrollableComponent = ForwardRefExoticComponent<
  SheetContentScrollableProps & RefAttributes<any>
>;

interface SheetCompoundComponent {
  Container: ContainerComponent;
  Header: DraggableComponent;
  Content: ContentScrollableComponent;
  Backdrop: BackdropComponent;
}

export type SheetCompound = SheetComponent & SheetCompoundComponent;

import {
  type ComponentPropsWithoutRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
  type RefObject,
} from 'react';

import {
  type DragHandlers,
  type EasingDefinition,
  type MotionProps,
  type MotionValue,
  type Transition,
  type motion,
} from 'motion/react';

export interface SheetEvents {
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
  onSnap?: (index: number) => void;
}

export type SheetDetent = 'full-height' | 'content-height';

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
  disableDrag?: boolean;
  disableScrollLocking?: boolean;
  disableDismiss?: boolean;
  dragCloseThreshold?: number;
  dragVelocityThreshold?: number;
  initialSnap?: number; // index of snap points array
  isOpen: boolean;
  modalEffectRootId?: string;
  modalEffectThreshold?: number;
  mountPoint?: Element;
  onClose: () => void;
  prefersReducedMotion?: boolean;
  snapPoints?: number[];
  tweenConfig?: SheetTweenConfig;
} & SheetEvents &
  MotionDivProps;

export type SheetContainerProps = Omit<
  CommonProps,
  'initial' | 'animate' | 'exit' | 'onAnimationComplete'
> & {
  children: ReactNode;
  ensureContentReachability?: boolean;
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
  onDrag: DragHandlers['onDrag'];
  onDragStart: DragHandlers['onDragStart'];
  onDragEnd: DragHandlers['onDragEnd'];
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

export interface SheetContextType {
  animationOptions: Transition;
  callbacks: RefObject<SheetEvents>;
  currentSnap: number;
  detent: SheetDetent;
  disableDrag: boolean;
  disableDismiss: boolean;
  dragProps?: SheetDragProps;
  indicatorRotation: MotionValue<number>;
  initialSnap: SheetProps['initialSnap'];
  isOpen: boolean;
  reduceMotion: boolean;
  sheetRef: RefObject<any>;
  snapPoints?: number[];
  windowHeight: number;
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

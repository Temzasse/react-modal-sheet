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
  disableDismiss?: boolean;
  disableDrag?: boolean;
  disableScrollLocking?: boolean;
  dragCloseThreshold?: number;
  dragVelocityThreshold?: number;
  ensureContentReachability?: boolean;
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

export interface SheetContextType {
  animationOptions: Transition;
  currentSnap: number;
  detent: SheetDetent;
  disableDrag: boolean;
  disableDismiss: boolean;
  dragProps?: SheetDragProps;
  ensureContentReachability: boolean;
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

import {
  type ComponentPropsWithoutRef,
  type ForwardRefExoticComponent,
  type HTMLAttributes,
  type MutableRefObject,
  type ReactNode,
  type RefAttributes,
} from 'react';

import {
  type DragHandlers,
  type MotionValue,
  type MotionProps,
  type motion,
  type EasingDefinition,
  type Transition,
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

export interface SheetTweenConfig {
  ease: EasingDefinition;
  duration: number;
}

export type SheetProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  rootId?: string;
  mountPoint?: Element;
  snapPoints?: number[];
  detent?: SheetDetent;
  initialSnap?: number; // index of snap points array
  tweenConfig?: SheetTweenConfig;
  disableDrag?: boolean;
  disableScrollLocking?: boolean;
  prefersReducedMotion?: boolean;
  dragVelocityThreshold?: number;
  dragCloseThreshold?: number;
  useInset?: boolean;
} & SheetEvents &
  ComponentPropsWithoutRef<typeof motion.div>;

export type SheetContainerProps = Omit<
  CommonProps,
  'initial' | 'animate' | 'exit' | 'onAnimationComplete'
> & {
  children: ReactNode;
};

export type SheetDraggableProps = Omit<
  CommonProps,
  | 'drag'
  | 'dragElastic'
  | 'dragConstraints'
  | 'dragMomentum'
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
> & {
  children?: ReactNode;
  disableDrag?: boolean;
};

export type SheetBackdropProps = Omit<
  CommonProps,
  'initial' | 'animate' | 'exit'
>;

export type SheetScrollerProps = HTMLAttributes<HTMLDivElement> & {
  draggableAt?: 'top' | 'bottom' | 'both';
};

export interface SheetDragProps {
  drag: 'y';
  dragElastic: number;
  dragMomentum: boolean;
  dragPropagation: boolean;
  onDrag: DragHandlers['onDrag'];
  onDragStart: DragHandlers['onDragStart'];
  onDragEnd: DragHandlers['onDragEnd'];
}

export interface SheetContextType {
  y: MotionValue<any>;
  sheetRef: MutableRefObject<any>;
  isOpen: boolean;
  snapPoints: SheetProps['snapPoints'];
  detent: SheetDetent;
  initialSnap: SheetProps['initialSnap'];
  indicatorRotation: MotionValue<number>;
  callbacks: MutableRefObject<SheetEvents>;
  dragProps?: SheetDragProps;
  windowHeight: number;
  animationOptions: Transition;
  reduceMotion: boolean;
  disableDrag: boolean;
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

type ScrollerComponent = ForwardRefExoticComponent<
  SheetScrollerProps & RefAttributes<any>
>;

interface SheetCompoundComponent {
  Container: ContainerComponent;
  Header: DraggableComponent;
  Content: DraggableComponent;
  Backdrop: BackdropComponent;
  Scroller: ScrollerComponent;
}

export type SheetCompound = SheetComponent & SheetCompoundComponent;

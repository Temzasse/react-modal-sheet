import {
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ForwardRefExoticComponent,
  type FunctionComponent,
  type ReactNode,
  type RefAttributes,
  type RefObject,
} from 'react';

import {
  type DragHandler,
  type EasingDefinition,
  type MotionProps,
  type MotionValue,
  type motion,
} from 'motion/react';

export type SheetDetent = 'default' | 'full' | 'content';

type CommonProps = {
  className?: string;
  style?: CSSProperties;
  unstyled?: boolean;
};

type MotionCommonProps = Omit<MotionProps, 'initial' | 'animate' | 'exit'> &
  CommonProps;

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

export interface SheetTweenConfig {
  ease: EasingDefinition;
  duration: number;
}

export type SheetProps = {
  unstyled?: boolean;
  avoidKeyboard?: boolean;
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

export type SheetContainerProps = MotionCommonProps &
  CommonProps & {
    children: ReactNode;
  };

export type SheetHeaderProps = MotionDivProps &
  CommonProps & {
    children?: ReactNode;
    disableDrag?: boolean;
  };

export type SheetContentProps = MotionDivProps &
  CommonProps & {
    disableDrag?: boolean | ((args: SheetStateInfo) => boolean);
    disableScroll?: boolean | ((args: SheetStateInfo) => boolean);
    scrollRef?: RefObject<HTMLDivElement | null>;
  };

export type SheetBackdropProps = MotionCommonProps & CommonProps;

export type SheetDragIndicatorProps = MotionCommonProps & CommonProps;

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
  avoidKeyboard: boolean;
  sheetBoundsRef: (node: HTMLDivElement | null) => void;
  sheetRef: RefObject<any>;
  unstyled: boolean;
  y: MotionValue<any>;
}

export interface SheetScrollerContextType {
  disableDrag: boolean;
  setDragDisabled: () => void;
  setDragEnabled: () => void;
}

type SheetComponent = ForwardRefExoticComponent<
  SheetProps & RefAttributes<any>
>;

type ContainerComponent = ForwardRefExoticComponent<
  SheetContainerProps & RefAttributes<any>
>;

type HeaderComponent = ForwardRefExoticComponent<
  SheetHeaderProps & RefAttributes<any>
>;

type BackdropComponent = ForwardRefExoticComponent<
  SheetBackdropProps & RefAttributes<any>
>;

type ContentComponent = ForwardRefExoticComponent<
  SheetContentProps & RefAttributes<any>
>;

interface SheetCompoundComponent {
  Container: ContainerComponent;
  Header: HeaderComponent;
  Content: ContentComponent;
  Backdrop: BackdropComponent;
}

export type SheetCompound = SheetComponent & SheetCompoundComponent;

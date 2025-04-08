import { EasingDefinition, motion, MotionProps, MotionValue } from 'motion/react';
import { ForwardRefExoticComponent, ReactNode, ComponentPropsWithoutRef, RefAttributes, HTMLAttributes } from 'react';

interface SheetEvents {
    onOpenStart?: () => void;
    onOpenEnd?: () => void;
    onCloseStart?: () => void;
    onCloseEnd?: () => void;
    onSnap?: (index: number) => void;
}
type SheetDetent = 'full-height' | 'content-height';
type CommonProps = MotionProps & {
    className?: string;
};
interface SheetTweenConfig {
    ease: EasingDefinition;
    duration: number;
}
type SheetProps = {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
    rootId?: string;
    mountPoint?: Element;
    snapPoints?: number[];
    detent?: SheetDetent;
    initialSnap?: number;
    tweenConfig?: SheetTweenConfig;
    disableDrag?: boolean;
    disableScrollLocking?: boolean;
    prefersReducedMotion?: boolean;
    dragVelocityThreshold?: number;
    dragCloseThreshold?: number;
    useInset?: boolean;
} & SheetEvents & ComponentPropsWithoutRef<typeof motion.div>;
type SheetContainerProps = Omit<CommonProps, 'initial' | 'animate' | 'exit' | 'onAnimationComplete'> & {
    children: ReactNode;
};
type SheetDraggableProps = Omit<CommonProps, 'drag' | 'dragElastic' | 'dragConstraints' | 'dragMomentum' | 'onDrag' | 'onDragStart' | 'onDragEnd'> & {
    children?: ReactNode;
    disableDrag?: boolean;
};
type SheetBackdropProps = Omit<CommonProps, 'initial' | 'animate' | 'exit'>;
type SheetScrollerProps = HTMLAttributes<HTMLDivElement> & {
    draggableAt?: 'top' | 'bottom' | 'both';
};
type ContainerComponent = ForwardRefExoticComponent<SheetContainerProps & RefAttributes<any>>;
type DraggableComponent = ForwardRefExoticComponent<SheetDraggableProps & RefAttributes<any>>;
type BackdropComponent = ForwardRefExoticComponent<SheetBackdropProps & RefAttributes<any>>;
type SheetComponent = ForwardRefExoticComponent<SheetProps & RefAttributes<any>>;
type ScrollerComponent = ForwardRefExoticComponent<SheetScrollerProps & RefAttributes<any>>;
interface SheetCompoundComponent {
    Container: ContainerComponent;
    Header: DraggableComponent;
    Content: DraggableComponent;
    Backdrop: BackdropComponent;
    Scroller: ScrollerComponent;
}
type SheetCompound = SheetComponent & SheetCompoundComponent;

interface SheetRef {
    y: MotionValue<number>;
    snapTo: (index: number) => void;
}
declare const Sheet: SheetCompound;
type SheetHeaderProps = SheetDraggableProps;
type SheetContentProps = SheetDraggableProps;

export { Sheet, type SheetBackdropProps, type SheetContainerProps, type SheetContentProps, type SheetHeaderProps, type SheetProps, type SheetRef, type SheetScrollerProps };

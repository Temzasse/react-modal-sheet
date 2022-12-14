import {
  DragHandlers,
  MotionValue,
  useSpring,
  MotionProps,
  AnimationOptions,
} from 'framer-motion';

export type SheetEvents = {
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
  onSnap?: (index: number) => void;
};

export type SheetDetent = 'full-height' | 'content-height';

type CommonProps = MotionProps & {
  className?: string;
};

export type SheetProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  rootId?: string;
  mountPoint?: Element;
  snapPoints?: number[];
  detent?: SheetDetent;
  initialSnap?: number; // index of snap points array
  springConfig?: Parameters<typeof useSpring>[1];
  disableDrag?: boolean;
  prefersReducedMotion?: boolean;
} & SheetEvents &
  React.HTMLAttributes<HTMLDivElement>;

export type SheetContainerProps = Omit<
  CommonProps,
  'initial' | 'animate' | 'exit' | 'onAnimationComplete'
> & {
  children: React.ReactNode;
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
  children?: React.ReactNode;
  disableDrag?: boolean;
};

export type SheetBackdropProps = Omit<
  CommonProps,
  'initial' | 'animate' | 'exit'
>;

export type SheetDragProps = {
  drag: 'y';
  dragElastic: number;
  dragConstraints: any;
  dragMomentum: boolean;
  onDrag: DragHandlers['onDrag'];
  onDragEnd: DragHandlers['onDragEnd'];
};

export type SheetContextType = {
  y: MotionValue<any>;
  sheetRef: React.MutableRefObject<any>;
  isOpen: boolean;
  snapPoints: SheetProps['snapPoints'];
  detent: SheetDetent;
  initialSnap: SheetProps['initialSnap'];
  indicatorRotation: MotionValue<number>;
  callbacks: React.MutableRefObject<SheetEvents>;
  dragProps?: SheetDragProps;
  windowHeight: number;
  animationOptions: AnimationOptions<number>;
  reduceMotion: boolean;
};

type ContainerComponent = React.ForwardRefExoticComponent<
  SheetContainerProps & React.RefAttributes<any>
>;

type DraggableComponent = React.ForwardRefExoticComponent<
  SheetDraggableProps & React.RefAttributes<any>
>;

type BackdropComponent = React.ForwardRefExoticComponent<
  SheetBackdropProps & React.RefAttributes<any>
>;

type SheetComponent = React.ForwardRefExoticComponent<
  SheetProps & React.RefAttributes<any>
>;

type SheetCompoundComponent = {
  Container: ContainerComponent;
  Header: DraggableComponent;
  Content: DraggableComponent;
  Backdrop: BackdropComponent;
};

export type SheetCompound = SheetComponent & SheetCompoundComponent;

import {
  DragHandlers,
  MotionValue,
  useSpring,
  MotionProps,
} from 'framer-motion';

export type SheetEvents = {
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
  onSnap?: (index: number) => void;
};

export type SheetProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  rootId?: string;
  snapPoints?: number[];
  initialSnap?: number; // index of snap points array
  springConfig?: Parameters<typeof useSpring>[1];
  disableDrag?: boolean;
} & SheetEvents &
  React.HTMLAttributes<HTMLDivElement>;

export type SheetContainerProps = Omit<
  MotionProps,
  'initial' | 'animate' | 'exit' | 'onAnimationComplete'
> & { children: React.ReactNode };

export type SheetDraggableProps = Omit<
  MotionProps,
  | 'drag'
  | 'dragElastic'
  | 'dragConstraints'
  | 'dragMomentum'
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
> & { children?: React.ReactNode; disableDrag?: boolean };

export type SheetBackdropProps = Omit<
  MotionProps,
  'initial' | 'animate' | 'exit'
>;

export type SheetDragProps = {
  drag: 'y';
  dragElastic: number;
  dragConstraints: any;
  dragMomentum: boolean;
  onDrag: DragHandlers['onDrag'];
  onDragStart: DragHandlers['onDragStart'];
  onDragEnd: DragHandlers['onDragEnd'];
};

export type SheetContextType = {
  y: MotionValue<any>;
  sheetRef: React.MutableRefObject<any>;
  isDragging: boolean;
  isOpen: boolean;
  snapPoints: SheetProps['snapPoints'];
  initialSnap: SheetProps['initialSnap'];
  indicatorRotation: MotionValue<number>;
  callbacks: React.MutableRefObject<SheetEvents>;
  dragProps: SheetDragProps;
};

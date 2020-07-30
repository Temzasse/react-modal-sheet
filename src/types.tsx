import { DragHandlers, MotionValue, useSpring } from 'framer-motion';

export type SheetEvents = {
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
};

export type SheetProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  rootId?: string;
  snapPoints?: number[];
  initialSnap?: number; // index of snap points array
  springConfig?: Parameters<typeof useSpring>[1];
} & SheetEvents;

export type SheetContextType = {
  y: MotionValue<any>;
  sheetRef: React.MutableRefObject<any>;
  isDragging: boolean;
  isOpen: boolean;
  snapPoints: SheetProps['snapPoints'];
  initialSnap: SheetProps['initialSnap'];
  handleDrag: DragHandlers['onDrag'];
  handleDragStart: DragHandlers['onDragStart'];
  handleDragEnd: DragHandlers['onDragEnd'];
  indicatorRotation: MotionValue<number>;
  callbacks: React.MutableRefObject<SheetEvents>;
};

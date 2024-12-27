import type { MotionValue } from 'motion/react';

import type { SheetCompound, SheetDraggableProps } from './types';
import { Sheet as SheetBase } from './sheet';
import { SheetContainer } from './SheetContainer';
import { SheetContent } from './SheetContent';
import { SheetHeader } from './SheetHeader';
import { SheetBackdrop } from './SheetBackdrop';
import { SheetScroller } from './SheetScroller';

export interface SheetRef {
  y: MotionValue<number>;
  snapTo: (index: number) => void;
}

export const Sheet: SheetCompound = Object.assign(SheetBase, {
  Container: SheetContainer,
  Header: SheetHeader,
  Content: SheetContent,
  Backdrop: SheetBackdrop,
  Scroller: SheetScroller,
});

// Export types
export type SheetHeaderProps = SheetDraggableProps;
export type SheetContentProps = SheetDraggableProps;
export type {
  SheetProps,
  SheetBackdropProps,
  SheetScrollerProps,
  SheetContainerProps,
} from './types';

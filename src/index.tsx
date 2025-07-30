import type { MotionValue } from 'motion/react';

import { SheetBackdrop } from './SheetBackdrop';
import { SheetContainer } from './SheetContainer';
import { SheetContent } from './SheetContent';
import { SheetHeader } from './SheetHeader';
import { Sheet as SheetBase } from './sheet';
import type {
  SheetCompound,
  SheetDraggableProps,
  SheetSnapPoint,
} from './types';

export interface SheetRef {
  y: MotionValue<number>;
  yInverted: MotionValue<number>;
  height: number;
  snapTo: (index: number) => Promise<void>;
  getSnapPoint: (snapIndex: number) => SheetSnapPoint | null;
}

export const Sheet: SheetCompound = Object.assign(SheetBase, {
  Container: SheetContainer,
  Header: SheetHeader,
  Content: SheetContent,
  Backdrop: SheetBackdrop,
});

// Export types
export type SheetHeaderProps = SheetDraggableProps;
export type SheetContentProps = SheetDraggableProps;
export type {
  SheetProps,
  SheetBackdropProps,
  SheetContainerProps,
  SheetStateInfo,
  SheetSnapPoint,
} from './types';

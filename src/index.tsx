import type { MotionValue } from 'motion/react';

import { SheetBackdrop } from './SheetBackdrop';
import { SheetContainer } from './SheetContainer';
import { SheetContent } from './SheetContent';
import { SheetHeader } from './SheetHeader';
import { Sheet as SheetBase } from './sheet';
import type { SheetCompound } from './types';

export interface SheetRef {
  y: MotionValue<number>;
  yInverted: MotionValue<number>;
  height: number;
  snapTo: (index: number) => Promise<void>;
}

export const Sheet: SheetCompound = Object.assign(SheetBase, {
  Container: SheetContainer,
  Header: SheetHeader,
  Content: SheetContent,
  Backdrop: SheetBackdrop,
});

// Export types
export type {
  SheetHeaderProps,
  SheetContentProps,
  SheetBackdropProps,
  SheetContainerProps,
  SheetProps,
  SheetSnapPoint,
  SheetStateInfo,
} from './types';

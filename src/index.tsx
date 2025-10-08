import type { MotionValue } from 'motion/react';

import { SheetBackdrop } from './SheetBackdrop';
import { SheetContainer } from './SheetContainer';
import { SheetContent } from './SheetContent';
import { SheetDragIndicator } from './SheetDragIndicator';
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
  DragIndicator: SheetDragIndicator,
  Content: SheetContent,
  Backdrop: SheetBackdrop,
});

export { useScrollPosition } from './hooks/use-scroll-position';
export { useVirtualKeyboard } from './hooks/use-virtual-keyboard';

// Export types
export type {
  SheetBackdropProps,
  SheetContainerProps,
  SheetContentProps,
  SheetDetent,
  SheetDragIndicatorProps,
  SheetHeaderProps,
  SheetProps,
  SheetSnapPoint,
  SheetStateInfo,
  SheetTweenConfig,
} from './types';

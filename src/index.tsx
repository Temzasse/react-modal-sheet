import { useExposedContext } from './context';
import { Sheet as SheetBase } from './sheet';
import { SheetBackdrop } from './sheet-backdrop';
import { SheetContainer } from './sheet-container';
import { SheetContent } from './sheet-content';
import { SheetDragIndicator } from './sheet-drag-indicator';
import { SheetHeader } from './sheet-header';
import type { ExposedContextType, SheetCompound } from './types';

export const Sheet: SheetCompound = Object.assign(SheetBase, {
  Container: SheetContainer,
  Header: SheetHeader,
  DragIndicator: SheetDragIndicator,
  Content: SheetContent,
  Backdrop: SheetBackdrop,
  useContext: useExposedContext,
});

export { useScrollPosition } from './hooks/use-scroll-position';
export { useVirtualKeyboard } from './hooks/use-virtual-keyboard';

export interface SheetContext extends ExposedContextType {}
export interface SheetRef extends ExposedContextType {}

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

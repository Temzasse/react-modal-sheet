import { useExposedContext } from './context';
import { SheetBackdrop } from './SheetBackdrop';
import { SheetContainer } from './SheetContainer';
import { SheetContent } from './SheetContent';
import { SheetDragIndicator } from './SheetDragIndicator';
import { SheetHeader } from './SheetHeader';
import { Sheet as SheetBase } from './sheet';
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

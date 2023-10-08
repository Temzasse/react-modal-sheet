import { type MotionValue } from 'framer-motion';

import _Sheet from './sheet';
import SheetContainer from './SheetContainer';
import SheetContent from './SheetContent';
import SheetHeader from './SheetHeader';
import SheetBackdrop from './SheetBackdrop';
import SheetScroller from './SheetScroller';
import { type SheetCompound } from './types';

export interface SheetRef {
  y: MotionValue<number>;
  snapTo: (index: number) => void;
}

// HACK: this is needed to get the typing to work properly...
const _SheetCompound: any = _Sheet;
_SheetCompound.Container = SheetContainer;
_SheetCompound.Header = SheetHeader;
_SheetCompound.Content = SheetContent;
_SheetCompound.Backdrop = SheetBackdrop;
_SheetCompound.Scroller = SheetScroller;

export const Sheet = _SheetCompound as SheetCompound;

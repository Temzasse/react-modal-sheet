import { MotionValue } from 'framer-motion';

import Sheet from './sheet';
import SheetContainer from './SheetContainer';
import SheetContent from './SheetContent';
import SheetHeader from './SheetHeader';
import SheetBackdrop from './SheetBackdrop';
import SheetScroller from './SheetScroller';

import SplitPane from './split';
import SplitContainer from './SplitContainer';
import SplitContent from './SplitContent';
import { SheetCompound, SplitCompound } from './types';

export type SheetRef = {
  y: MotionValue<number>;
  snapTo: (index: number) => void;
};

const _SheetCompound: SheetCompound = Object.assign(Sheet, {
  Container: SheetContainer,
  Header: SheetHeader,
  Content: SheetContent,
  Backdrop: SheetBackdrop,
  Scroller: SheetScroller,
});

export const Split: SplitCompound = Object.assign(SplitPane, {
  Container: SplitContainer,
  Header: SheetHeader,
  Content: SplitContent,
  Scroller: SheetScroller,
});

export default _SheetCompound as SheetCompound;

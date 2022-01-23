import { MotionValue } from 'framer-motion';

import Sheet from './sheet';
import SheetContainer from './SheetContainer';
import SheetContent from './SheetContent';
import SheetHeader from './SheetHeader';
import SheetBackdrop from './SheetBackdrop';

export type SheetRef = {
  y: MotionValue<number>;
  snapTo: (index: number) => void;
};

type SheetCompoundComponent = {
  Container: typeof SheetContainer;
  Header: typeof SheetHeader;
  Content: typeof SheetContent;
  Backdrop: typeof SheetBackdrop;
};

// HACK: this is needed to get the typing to work properly...
const _Sheet: any = Sheet;
_Sheet.Container = SheetContainer;
_Sheet.Header = SheetHeader;
_Sheet.Content = SheetContent;
_Sheet.Backdrop = SheetBackdrop;

const SheetCompound: typeof Sheet & SheetCompoundComponent = _Sheet;

export default SheetCompound;

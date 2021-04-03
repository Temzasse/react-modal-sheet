import Sheet from './sheet';
import SheetContainer from './SheetContainer';
import SheetContent from './SheetContent';
import SheetHeader from './SheetHeader';
import SheetBackdrop from './SheetBackdrop';
export declare type SheetRef = {
    snapTo: (index: number) => void;
};
declare type SheetCompoundComponent = {
    Container: typeof SheetContainer;
    Header: typeof SheetHeader;
    Content: typeof SheetContent;
    Backdrop: typeof SheetBackdrop;
};
declare const SheetCompound: typeof Sheet & SheetCompoundComponent;
export default SheetCompound;

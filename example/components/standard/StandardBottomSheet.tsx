import * as React from 'react';
import Sheet, { SheetRef } from '../../../src';
import { SheetProps } from '../../../src/types';

type StandardBottomSheet = SheetProps & {
  snapPoints: Exclude<SheetProps['snapPoints'], undefined>;
  closedSnapIndex: number;
  onOpen?: () => void;
};

export const StandardBottomSheet: React.FC<StandardBottomSheet> = ({
  isOpen,
  snapPoints,
  initialSnap = 0,
  closedSnapIndex,
  onOpen,
  onClose,
  onSnap,
  ...restProps
}) => {
  const ref = React.useRef<SheetRef>();
  const snapTo = (snapPoint: number) => ref.current?.snapTo(snapPoint);
  const [isOpenFlushing, setIsOpenFlushing] = React.useState<boolean>(false);

  React.useEffect(() => {
    snapTo(isOpen ? initialSnap : closedSnapIndex);
  }, [isOpen, initialSnap, closedSnapIndex]);

  const handleSnap = React.useCallback(
    (snapPoint: number) => {
      if (onSnap) onSnap(snapPoint);
      if (snapPoint === closedSnapIndex) {
        onClose();
      } else {
        if (onOpen && isOpen === false) onOpen();
      }
    },
    [onClose, onSnap, closedSnapIndex]
  );

  const handleClose = React.useCallback(() => {
    // NOTE: If you drag a header to the bottom of the window and end the drag by pushing it off-screen,
    //       the header may not come back from off-screen. This is known to be a problem caused by
    //       the internal open/close state of the Sheet component being closed.
    //       - ref: https://github.com/Temzasse/react-modal-sheet/issues/105
    //       To work around this problem, here we flush `isOpen` props to true, prompting the sheet to be rendered in an open state.
    setIsOpenFlushing(true);
    setIsOpenFlushing(false);
    if (isOpen === true) onClose();
  }, [closedSnapIndex, onClose]);

  return (
    <Sheet
      ref={ref}
      onClose={handleClose}
      isOpen={isOpenFlushing === false ? true : false}
      snapPoints={snapPoints}
      initialSnap={closedSnapIndex}
      onSnap={handleSnap}
      {...restProps}
    />
  );
};

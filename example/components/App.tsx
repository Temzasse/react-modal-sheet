import * as React from 'react';
import styled from 'styled-components';
import { BottomSheet } from '../..';
import SheetContent from './SheetContent';

const App = () => {
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const bottomSheetRef = React.useRef<any>();

  const open = () => setSheetOpen(true);
  const close = () => setSheetOpen(false);
  const snapTo = (snapPoint: number) => {
    bottomSheetRef && bottomSheetRef.current.snapTo(snapPoint);
  };

  return (
    <>
      <Wrapper>
        <button onClick={open}>Show bottom sheet</button>
      </Wrapper>

      <BottomSheet
        ref={bottomSheetRef}
        isOpen={sheetOpen}
        onClose={close}
        snapPoints={[600, 400, 100, 0]}
        initialSnap={1}
        rootId="root"
      >
        <SheetContent snapTo={snapTo} close={close} />
      </BottomSheet>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
`;

export default App;

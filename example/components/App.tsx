import * as React from 'react';
import styled from 'styled-components';
import { BottomSheet } from '../..';
import SheetContent from './SheetContent';

const App = () => {
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <>
      <Wrapper>
        <button onClick={() => setSheetOpen(true)}>Show bottom sheet</button>
      </Wrapper>

      <BottomSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        snapPoints={[600, 400, 100, 0]}
        initialSnap={1}
        rootId="root"
      >
        <SheetContent close={() => setSheetOpen(false)} />
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

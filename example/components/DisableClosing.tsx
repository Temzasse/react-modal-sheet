import * as React from 'react';
import styled from 'styled-components';

import Sheet, { SheetRef } from '../../src';
import { Button } from './common';

const snapPoints = [600, 400, 200, 100];
const initialSnap = snapPoints.length - 1;
const noop = () => {};

const SnapPoints2 = () => {
  const ref = React.useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <>
      <h1>Always open Sheet</h1>

      <Sheet
        ref={ref}
        isOpen={true}
        onClose={noop}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <SheetContentWrapper>
              <Controls>
                <Button onClick={() => snapTo(0)}>600</Button>
                <Button onClick={() => snapTo(1)}>400</Button>
                <Button onClick={() => snapTo(2)}>200</Button>
                <Button onClick={() => snapTo(3)}>100</Button>
              </Controls>
            </SheetContentWrapper>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

const SheetContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;

  h2 {
    margin-top: 0;
    text-align: center;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default SnapPoints2;

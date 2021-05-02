import * as React from 'react';
import styled from 'styled-components';

import Sheet, { SheetRef } from '../../src';
import { Button, Screen } from './common';

const snapPoints = [-50, 600, 400, 100, 0];
const startSnapPoint = snapPoints[snapPoints.length - 1];
const initialSnap = 1; // Initial snap point when sheet is opened

const SnapPoints = () => {
  const ref = React.useRef<SheetRef>();
  const [isOpen, setOpen] = React.useState(false);
  const [snapPoint, setSnapPoint] = React.useState(startSnapPoint);

  const snapTo = (i: number) => ref.current?.snapTo(i);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  React.useEffect(() => {
    console.log('> Current snap point', snapPoint);
  }, [snapPoint]);

  return (
    <Screen bg="light">
      <Button onClick={open}>Bottom Sheet with Snap Points</Button>

      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={close}
        onSnap={setSnapPoint}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
      >
        <Sheet.Container>
          <Sheet.Content>
            <SheetContentWrapper>
              <Controls>
                <Button onClick={() => snapTo(0)}>
                  Snap to
                  <br /> -50 (from top)
                </Button>
                <Button onClick={() => snapTo(1)}>
                  Snap to
                  <br /> 600
                </Button>
                <Button onClick={() => snapTo(2)}>
                  Snap to
                  <br /> 400
                </Button>
                <Button onClick={() => snapTo(3)}>
                  Snap to
                  <br /> 100
                </Button>
                <Button onClick={() => snapTo(4)}>
                  Snap to
                  <br /> 0 (close)
                </Button>
              </Controls>
            </SheetContentWrapper>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={close} />
      </Sheet>
    </Screen>
  );
};

const SheetContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default SnapPoints;

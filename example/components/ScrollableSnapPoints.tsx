import * as React from 'react';
import styled from 'styled-components';
import { Sheet, SheetRef } from 'react-modal-sheet';

import { Button } from './common';

const snapPoints = [-50, 0.5, 200, 0];
const initialSnap = 1;

const ScrollableSnapPoints = () => {
  const ref = React.useRef<SheetRef>();
  const [isOpen, setOpen] = React.useState(false);

  const snapTo = (i: number) => ref.current?.snapTo(i);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={open}>Scrollable + Snap points</Button>

      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={close}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
      >
        <Sheet.Container>
          <Sheet.Header />

          <Sheet.Content style={{ paddingBottom: ref.current?.y }}>
            <Sheet.Scroller draggableAt="both">
              <BoxList>
                <Controls>
                  <Button onClick={() => snapTo(0)}>
                    Snap to -50 (from top)
                  </Button>
                  <Button onClick={() => snapTo(1)}>Snap to 50%</Button>
                  <Button onClick={() => snapTo(2)}>Snap to 200</Button>
                  <Button onClick={() => snapTo(3)}>Snap to 0 (close)</Button>
                </Controls>

                {Array.from({ length: 20 })
                  .fill(1)
                  .map((_, i) => (
                    <Box key={i}>{i + 1}</Box>
                  ))}
              </BoxList>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`;

const Box = styled.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`;

export default ScrollableSnapPoints;

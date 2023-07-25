import * as React from 'react';
import styled from 'styled-components';

import { Split, SheetRef } from '../../src';
import { Button } from './common';

const snapPoints = [-50, 0.5, 200, 0];
const initialSnap = 1; // Initial snap point when sheet is opened

const ContentHeight = () => {
  const ref = React.useRef<SheetRef>();
  const [isOpen, setOpen] = React.useState(true);
  const [snapPoint, setSnapPoint] = React.useState(initialSnap);
  const [boxes, setBoxes] = React.useState([0, 1]);

  const snapTo = (i: number) => ref.current?.snapTo(i);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  React.useEffect(() => {
    console.log('> Current snap point', snapPoint);
  }, [snapPoint]);

  return (
    <>
      <Split
        ref={ref}
        isOpen={isOpen}
        onClose={close}
        onSnap={setSnapPoint}
        initialSnap={initialSnap}
        snapPoints={snapPoints}
        detent="full-height"
        extraSpace={false}
      >
        <Split.Content style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
            <BoxList>
              <Button onClick={open}>Open</Button>
              <Button onClick={close}>Close</Button>
            </BoxList>
        </Split.Content>

        <Split.Container>
          <Split.Header />

          <Split.Content>
            <Split.Scroller>
              <BoxList>
                <Button onClick={() => snapTo(0)}>Snap to top</Button>
                <Button onClick={() => snapTo(1)}>Snap to 50%</Button>
                <Button onClick={() => snapTo(2)}>Snap to 200</Button>
                <Button onClick={() => snapTo(3)}>Snap to 0 (close)</Button>

                {boxes.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setBoxes(prev => [...prev, i + 1])}
                  >
                    {i} (click to create new boxes )
                  </Box>
                ))}
              </BoxList>
            </Split.Scroller>
          </Split.Content>
        </Split.Container>

      </Split>
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
  font-size: 16px;
`;

export default ContentHeight;

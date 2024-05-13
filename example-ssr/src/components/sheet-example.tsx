'use client';

import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { Sheet, SheetRef } from 'react-modal-sheet';

const snapPoints = [-50, 0.5, 200, 0];
const initialSnap = 1;

export function SheetExample() {
  const ref = useRef<SheetRef>();
  const [isOpen, setOpen] = useState(false);

  const snapTo = (i: number) => ref.current?.snapTo(i);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={open}>Open sheet</Button>

      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={close}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
        rootId="root"
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

        <Sheet.Backdrop onTap={() => setOpen(false)} />
      </Sheet>
    </>
  );
}

const Button = styled.button`
  padding: 8px 16px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

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
  color: #000;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  gap: 16px;
`;

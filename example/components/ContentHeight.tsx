import { useState, useRef } from 'react';
import { styled } from 'styled-components';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { Button } from './common';

export function ContentHeight() {
  const [isOpen, setOpen] = useState(false);
  const [boxes, setBoxes] = useState(2);
  const ref = useRef<SheetRef>();
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <>
      <Button onClick={open}>Bottom Sheet Height of Content</Button>

      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={close}
        initialSnap={0}
        snapPoints={[-50, 100, 0]}
        detent="content-height"
      >
        <Sheet.Container layout>
          <Sheet.Header />

          <Sheet.Content layout="position">
            <Sheet.Scroller>
              <BoxList>
                <Button onClick={() => snapTo(0)}>Snap to top</Button>
                <Button onClick={() => snapTo(1)}>Snap to bottom</Button>
                <Button onClick={() => setBoxes((prev) => prev + 1)}>
                  Add box
                </Button>
                <Button
                  onClick={() => setBoxes((prev) => Math.max(0, prev - 1))}
                >
                  Remove box
                </Button>

                {Array.from({ length: boxes }).map((_, i) => (
                  <Box key={i}>{i}</Box>
                ))}
              </BoxList>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={close} />
      </Sheet>
    </>
  );
}

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

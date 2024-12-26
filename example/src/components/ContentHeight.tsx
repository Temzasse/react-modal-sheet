import { useState, useRef } from 'react';
import { styled } from 'styled-components';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { Button } from './common';
import { ExampleLayout } from './ExampleLayout';

export function ContentHeight() {
  const [boxes, setBoxes] = useState(2);
  const sheetRef = useRef<SheetRef>(null);
  const snapTo = (i: number) => sheetRef.current?.snapTo(i);

  return (
    <ExampleLayout
      title="Content height"
      description="Sheet that has a dynamic content height."
    >
      {({ isOpen, close }) => (
        <Sheet
          ref={sheetRef}
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
                  <Button onPress={() => snapTo(0)}>Snap to top</Button>
                  <Button onPress={() => snapTo(1)}>Snap to bottom</Button>
                  <Button onPress={() => setBoxes((prev) => prev + 1)}>
                    Add box
                  </Button>
                  <Button
                    onPress={() => setBoxes((prev) => Math.max(0, prev - 1))}
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
      )}
    </ExampleLayout>
  );
}

const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  padding-top: 0px;
  gap: 16px;
`;

const Box = styled.div`
  width: 100%;
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
`;

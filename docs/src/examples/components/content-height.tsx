import { useRef, useState } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { styled } from '../../../styled-system/jsx';
import { Button } from './common';
import { ExampleLayout } from './example-layout';

const snapPoints = [0, 200, 1];
const lastSnap = snapPoints.length - 1;

export function ContentHeight() {
  const [boxes, setBoxes] = useState(1);
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
          initialSnap={1}
          snapPoints={snapPoints}
          detent="content"
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content // Only scroll when at the upmost snap point
              disableScroll={(state) => state.currentSnap !== lastSnap}
            >
              <BoxList>
                <Button onPress={() => snapTo(2)}>Snap to top</Button>
                <Button onPress={() => snapTo(1)}>Snap to bottom</Button>
                <Button onPress={() => snapTo(0)}>Close</Button>
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
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onTap={close} />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

const BoxList = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    paddingTop: '0px',
    gap: '16px',
  },
});

const Box = styled('div', {
  base: {
    width: '100%',
    backgroundColor: 'var(--example-card-bg)',
    borderRadius: '12px',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '16px',
  },
});

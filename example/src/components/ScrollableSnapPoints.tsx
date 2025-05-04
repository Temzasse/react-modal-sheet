import { useRef } from 'react';
import { styled } from 'styled-components';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { Button } from './common';
import { ExampleLayout } from './ExampleLayout';
import { BoxList } from './BoxList';

const snapPoints = [-50, 0.5, 200, 0];
const initialSnap = 1;

export function ScrollableSnapPoints() {
  const sheetRef = useRef<SheetRef>(null);
  const snapTo = (i: number) => sheetRef.current?.snapTo(i);

  return (
    <ExampleLayout
      title="Scrollable + snap points"
      description="A combination of scrollable content inside the sheet with snap points."
    >
      {({ isOpen, close }) => (
        <Sheet
          ref={sheetRef}
          isOpen={isOpen}
          onClose={close}
          snapPoints={snapPoints}
          initialSnap={initialSnap}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content style={{ paddingBottom: sheetRef.current?.y }}>
              <Sheet.Scroller draggableAt="both">
                <Content>
                  <Controls>
                    <Button onPress={() => snapTo(0)}>
                      Snap to -50 (from top)
                    </Button>
                    <Button onPress={() => snapTo(1)}>Snap to 50%</Button>
                    <Button onPress={() => snapTo(2)}>Snap to 200</Button>
                    <Button onPress={() => snapTo(3)}>Snap to 0 (close)</Button>
                  </Controls>
                </Content>

                <BoxList count={20} />
              </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

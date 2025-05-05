import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { Button } from './common';
import { ExampleLayout } from './ExampleLayout';
import { BoxList } from './BoxList';

const snapPoints = [-50, 0.5, 100, 0];
const initialSnap = 1;

export function ScrollableSnapPoints() {
  const [currentSnap, setCurrentSnap] = useState(initialSnap);
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
          onSnap={setCurrentSnap}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content style={{ paddingBottom: sheetRef.current?.y }}>
              <Sheet.Scroller
                draggableAt="top"
                disableScroll={currentSnap !== 0}
              >
                <Content>
                  <CurrentSnapText>
                    <span>Current snap point: {currentSnap}</span>
                    <span>Content is only scrollable at the upmost snap point</span>
                  </CurrentSnapText>

                  <Controls>
                    <Button onPress={() => snapTo(0)}>
                      Snap to -50 (from top)
                    </Button>
                    <Button onPress={() => snapTo(1)}>Snap to 50%</Button>
                    <Button onPress={() => snapTo(2)}>Snap to 100</Button>
                    <Button onPress={() => snapTo(3)}>Close</Button>
                  </Controls>
                </Content>

                <BoxList count={20} />
              </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onTap={close} />
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
  gap: 12px;
`;

const CurrentSnapText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  & > span:first-child {
    font-weight: 600;
    font-size: 16px;
  }

  & > span:last-child {
    font-size: 14px;
    color: #666;
  }
`;

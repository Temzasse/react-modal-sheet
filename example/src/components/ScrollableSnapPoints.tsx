import { useRef, useState } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { styled } from 'styled-components';

import { BoxList } from './BoxList';
import { ExampleLayout } from './ExampleLayout';
import { Button } from './common';

const snapPoints = [0, 170, 0.5, -200, 1];
const initialSnap = 1;
const lastSnap = snapPoints.length - 1;

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

            <Sheet.Content
              // Only scroll when at the upmost snap point
              disableScroll={(state) => state.currentSnap !== lastSnap}
            >
              <Header>
                <CurrentSnapText>
                  <span>Current snap point: {currentSnap}</span>
                  <span>
                    Content is only scrollable at the upmost snap point
                  </span>
                </CurrentSnapText>
              </Header>

              <BoxList count={20} />
            </Sheet.Content>

            <Footer>
              <Controls>
                <Button onPress={() => snapTo(0)}>0</Button>
                <Button onPress={() => snapTo(1)}>1</Button>
                <Button onPress={() => snapTo(2)}>2</Button>
                <Button onPress={() => snapTo(3)}>3</Button>
                <Button onPress={() => snapTo(4)}>4</Button>
              </Controls>
            </Footer>
          </Sheet.Container>
          <Sheet.Backdrop onTap={close} />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

const Header = styled.div`
  padding-bottom: 16px;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const CurrentSnapText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > span:first-child {
    font-weight: 600;
    font-size: 16px;
  }

  & > span:last-child {
    font-size: 14px;
    color: #666;
  }
`;

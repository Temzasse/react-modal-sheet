import { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { Button } from './common';
import { ExampleLayout } from './ExampleLayout';

const snapPoints = [1, 0.5, 200, 0];
const initialSnap = 1; // Initial snap point when sheet is opened

export function SnapPoints() {
  const sheetRef = useRef<SheetRef>(null);
  const [snapPoint, setSnapPoint] = useState(initialSnap);
  const snapTo = (i: number) => sheetRef.current?.snapTo(i);

  useEffect(() => {
    console.log('> Current snap point is', snapPoint);
  }, [snapPoint]);

  return (
    <ExampleLayout title="Snap points" description="Sheet with snap points.">
      {({ isOpen, close }) => (
        <Sheet
          ref={sheetRef}
          isOpen={isOpen}
          onClose={close}
          onSnap={setSnapPoint}
          snapPoints={snapPoints}
          initialSnap={initialSnap}
          rootId="root"
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <SheetContentWrapper>
                <Controls>
                  <Button onPress={() => snapTo(0)}>
                    Snap to -50 (from top)
                  </Button>
                  <Button onPress={() => snapTo(1)}>Snap to 50%</Button>
                  <Button onPress={() => snapTo(2)}>Snap to 200</Button>
                  <Button onPress={() => snapTo(3)}>Snap to 0 (close)</Button>
                </Controls>
              </SheetContentWrapper>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onTap={close} />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

const SheetContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

import * as React from 'react';
import styled from 'styled-components';

import Sheet, { SheetRef } from '../../src';
import { Button } from './common';

const Simple = () => {
  const [isOpen, setOpen] = React.useState(false);
  const ref = React.useRef<SheetRef>();

  const snapTo = (i: number) => ref.current?.snapTo(i);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={open}>Simple Bottom Sheet</Button>

      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={close}
        snapPoints={[600, 400, 100, 0]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Content>
            <SheetContentWrapper>
              <h2>Sheet with snap points ✨</h2>

              <Controls>
                <Button onClick={close}>Close</Button>
                <Button onClick={() => snapTo(0)}>Snap to 600</Button>
                <Button onClick={() => snapTo(1)}>Snap to 400</Button>
                <Button onClick={() => snapTo(2)}>Snap to 100</Button>
                <Button onClick={() => snapTo(3)}>Snap to 0 (close)</Button>
              </Controls>
            </SheetContentWrapper>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onClick={close} />
      </Sheet>
    </>
  );
};

const SheetContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;

  h2 {
    margin-top: 0;
    text-align: center;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Simple;

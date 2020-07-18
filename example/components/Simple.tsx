import * as React from 'react';
import styled from 'styled-components';

import { Button } from './Uikit';
import { Sheet } from '../../src';

const Simple = () => {
  const [isOpen, setOpen] = React.useState(false);
  const ref = React.useRef<any>();

  const snapTo = (point: number) => ref && ref.current.snapTo(point);
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
        <SheetContent snapTo={snapTo} close={close} />
      </Sheet>
    </>
  );
};

const SheetContent = ({
  close,
  snapTo,
}: {
  close: () => void;
  snapTo: (i: number) => void;
}) => {
  return (
    <SheetContentWrapper>
      <h2>Sheet</h2>
      <p>This is the bottom sheet ✨</p>

      <Controls>
        <Button onClick={close}>Close</Button>
        <Button onClick={() => snapTo(0)}>Snap to 600</Button>
        <Button onClick={() => snapTo(1)}>Snap to 400</Button>
        <Button onClick={() => snapTo(2)}>Snap to 100</Button>
        <Button onClick={() => snapTo(3)}>Snap to 0 (close)</Button>
      </Controls>
    </SheetContentWrapper>
  );
};

const SheetContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;

  h2 {
    margin: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Simple;

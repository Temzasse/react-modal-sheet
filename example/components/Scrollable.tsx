import * as React from 'react';
import styled from 'styled-components';

import Sheet from '../../src';
import { Button } from './common';

const Scrollable = () => {
  const [isOpen, setOpen] = React.useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={open}>Scrollable Bottom Sheet</Button>

      <Sheet
        isOpen={isOpen}
        onClose={close}
        springConfig={{ stiffness: 150, damping: 20, mass: 1 }}
      >
        <Sheet.Container>
          <Sheet.Header />

          <Sheet.Content>
            <Sheet.Scroller>
              <BoxList>
                {Array.from({ length: 50 })
                  .fill(1)
                  .map((_, i) => (
                    <Box key={i}>{i}</Box>
                  ))}
              </BoxList>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

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
`;

export default Scrollable;

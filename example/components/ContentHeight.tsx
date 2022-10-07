import * as React from 'react';
import styled from 'styled-components';

import Sheet from '../../src';
import { Button } from './common';

const ContentHeight = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [boxes, setBoxes] = React.useState([0, 1]);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={open}>Bottom Sheet Height of Content</Button>

      <Sheet
        isOpen={isOpen}
        onClose={close}
        springConfig={{ stiffness: 150, damping: 20, mass: 1 }}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header />

          <Sheet.Content>
            <BoxList>
              {boxes.map((_, i) => (
                <Box key={i} onClick={() => setBoxes(prev => [...prev, i + 1])}>
                  {i} (click to create new boxes )
                </Box>
              ))}
            </BoxList>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={close} />
      </Sheet>
    </>
  );
};

const BoxList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
  overflow: auto;
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

export default ContentHeight;

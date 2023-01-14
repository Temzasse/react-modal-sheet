import * as React from 'react';
import styled from 'styled-components';

import Sheet from '../../src';
import { Button } from './common';

const DisableDrag = () => {
  const { isScrolling, onScroll } = useScrolling();
  const [isOpen, setOpen] = React.useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={open}>Disable drag for horizontal scroll</Button>

      <Sheet isOpen={isOpen} onClose={close}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content disableDrag={isScrolling}>
            <Content>
              <div>
                {isScrolling
                  ? 'Scrolling (drag disabled)'
                  : 'Not scrolling (drag enabled)'}
              </div>

              <BoxList onScroll={onScroll}>
                {Array.from({ length: 20 })
                  .fill(1)
                  .map((_, i) => (
                    <Box key={i}>{i}</Box>
                  ))}
              </BoxList>
            </Content>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

const useScrolling = () => {
  const [isScrolling, setScrolling] = React.useState<boolean>(false);
  const timeout = React.useRef<any>();

  const onScroll = () => {
    setScrolling(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setScrolling(false), 150);
  };

  return { onScroll, isScrolling };
};

const Content = styled.div`
  padding: 16px;
`;

const BoxList = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 0px;
  overflow: auto;
`;

const Box = styled.div`
  flex-shrink: 0;
  background-color: #eee;
  border-radius: 12px;
  width: 200px;
  height: 200px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;

export default DisableDrag;

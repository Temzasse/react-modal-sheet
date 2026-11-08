import { useRef, useState } from 'react';
import { Sheet } from 'react-modal-sheet';

import { styled } from '../../../styled-system/jsx';
import { ExampleLayout } from './example-layout';

export function DisableDrag() {
  const { isScrolling, onScroll } = useScrolling();

  return (
    <ExampleLayout
      title="Disable drag"
      description="Disable drag for horizontal scrolling inside the sheet."
    >
      {({ isOpen, close }) => (
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
      )}
    </ExampleLayout>
  );
}

function useScrolling() {
  const [isScrolling, setScrolling] = useState<boolean>(false);
  const timeout = useRef<any>(undefined);

  const onScroll = () => {
    setScrolling(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setScrolling(false), 150);
  };

  return { onScroll, isScrolling };
}

const Content = styled('div', {
  base: {
    padding: '16px',
  },
});

const BoxList = styled('div', {
  base: {
    width: '100%',
    display: 'flex',
    padding: '24px 0px',
    overflowX: 'auto',
  },
});

const Box = styled('div', {
  base: {
    flexShrink: '0',
    backgroundColor: 'var(--example-card-bg)',
    borderRadius: '12px',
    width: '200px',
    height: '200px',
    marginRight: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '24px',
  },
});

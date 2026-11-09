import { Sheet } from 'react-modal-sheet';

import { styled } from '../../../styled-system/jsx';
import { ExampleLayout } from './example-layout';

export function ReducedMotion() {
  return (
    <ExampleLayout
      title="Reduced Motion"
      description="Sheet that has reduced motion."
    >
      {({ isOpen, close }) => (
        <Sheet isOpen={isOpen} onClose={close} prefersReducedMotion>
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <BoxList>
                {Array.from({ length: 50 })
                  .fill(1)
                  .map((_, i) => (
                    <Box key={i}>{i}</Box>
                  ))}
              </BoxList>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onTap={() => close()} />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

const BoxList = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '$4',
    paddingTop: '0px',
  },
});

const Box = styled('div', {
  base: {
    backgroundColor: '$surface.card',
    borderRadius: '$lg',
    minHeight: '200px',
    marginBottom: '$4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textStyle: '$example.display',
  },
});

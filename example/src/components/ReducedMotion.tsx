import { Sheet } from 'react-modal-sheet';
import { styled } from 'styled-components';

import { ExampleLayout } from './ExampleLayout';

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
                    <Box
                      key={
                        // biome-ignore lint/suspicious/noArrayIndexKey: It was here before Biome 2
                        i
                      }
                    >
                      {i}
                    </Box>
                  ))}
              </BoxList>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

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

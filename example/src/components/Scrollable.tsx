import { styled } from 'styled-components';
import { Sheet } from 'react-modal-sheet';

import { ExampleLayout } from './ExampleLayout';

export function Scrollable() {
  return (
    <ExampleLayout
      title="Scrollable"
      description="Sheet that has scrollable content inside it."
    >
      {({ isOpen, close }) => (
        <Sheet isOpen={isOpen} onClose={close}>
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

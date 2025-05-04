import { styled } from 'styled-components';
import { Sheet } from 'react-modal-sheet';

import { ExampleLayout } from './ExampleLayout';
import { BoxList } from './BoxList';

export function FullScreen() {
  return (
    <ExampleLayout
      title="FullScreen"
      description="Sheet that fills the entire screen."
    >
      {({ isOpen, close }) => (
        <Sheet isOpen={isOpen} onClose={close}>
          <SheetContainer>
            <Sheet.Header />
            <Sheet.Content>
              <Sheet.Scroller>
                <BoxList count={50} />
              </Sheet.Scroller>
            </Sheet.Content>
          </SheetContainer>
        </Sheet>
      )}
    </ExampleLayout>
  );
}

const SheetContainer = styled(Sheet.Container)`
  height: 100vh !important;
  border-radius: 0 !important;
`;

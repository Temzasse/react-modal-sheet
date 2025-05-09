import { Sheet } from 'react-modal-sheet';

import { ExampleLayout } from './ExampleLayout';
import { BoxList } from './BoxList';

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
                <BoxList count={50} />
              </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

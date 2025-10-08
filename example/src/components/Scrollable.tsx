import { Sheet } from 'react-modal-sheet';

import { BoxList } from './BoxList';
import { ExampleLayout } from './ExampleLayout';

export function Scrollable() {
  return (
    <ExampleLayout
      title="Scrollable"
      description="Sheet that has scrollable content inside it."
    >
      {({ isOpen, close }) => (
        <Sheet
          isOpen={isOpen}
          onClose={close}
          snapPoints={[0, 170, 0.5, -50, 1]}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <BoxList count={50} />
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

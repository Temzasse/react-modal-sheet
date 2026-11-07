import { useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import { styled } from 'styled-components';
import { Button } from './common';
import { ExampleLayout } from './example-layout';

const maxLevel = 4;

export function StackedSheets() {
  return (
    <ExampleLayout
      title="Stacked sheets"
      description="Sheets that are stacked on top of each other."
    >
      {({ isOpen, close }) => (
        <Sheet
          id="stacked-sheet-1"
          isOpen={isOpen}
          onClose={close}
          modalEffectRootId="root"
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <SheetContentWrapper>
                <p>This is sheet 1 of {maxLevel}.</p>
                <NestedSheet level={2} />
                <Button onPress={close}>Close</Button>
              </SheetContentWrapper>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onTap={close} />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

// Rendered inside the sheet underneath so it unmounts together with it
function NestedSheet({ level }: { level: number }) {
  const [isOpen, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open sheet {level}</Button>

      <Sheet
        id={`stacked-sheet-${level}`}
        isOpen={isOpen}
        onClose={close}
        modalEffectRootId={`stacked-sheet-${level - 1}`}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <SheetContentWrapper>
              <p>
                This is sheet {level} of {maxLevel}.
              </p>
              {level < maxLevel && <NestedSheet level={level + 1} />}
              <Button onPress={close}>Close</Button>
            </SheetContentWrapper>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={close} />
      </Sheet>
    </>
  );
}

const SheetContentWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

import { useRef } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { styled } from 'styled-components';

import { ExampleLayout } from './ExampleLayout';
import { Button } from './common';
import { useAnimatedVirtualKeyboard } from './hooks';

export function AvoidKeyboard() {
  const sheetRef = useRef<SheetRef>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { keyboardHeight, isKeyboardOpen } = useAnimatedVirtualKeyboard();

  return (
    <ExampleLayout
      title="Avoid keyboard"
      description="Note that keyboard avoidance only works on mobile devices!"
    >
      {({ isOpen, close }) => (
        <Sheet
          ref={sheetRef}
          isOpen={isOpen}
          onClose={close}
          detent="content-height"
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content style={{ paddingBottom: keyboardHeight }}>
              <Content>
                <p>Focus input to show virtual keyboard</p>

                <Input ref={inputRef} />

                {isKeyboardOpen ? (
                  <strong>Virtual keyboard is open!</strong>
                ) : (
                  <Button onPress={close}>Close</Button>
                )}
              </Content>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      )}
    </ExampleLayout>
  );
}
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  outline: none;

  &:focus {
    border-color: #0070f3;
  }
`;

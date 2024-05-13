import { styled } from 'styled-components';
import { useState, useRef } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { Button } from './common';
import { useAnimatedVirtualKeyboard } from './hooks';

export function AvoidKeyboard() {
  const [isOpen, setOpen] = useState(false);
  const sheetRef = useRef<SheetRef>();
  const inputRef = useRef<HTMLInputElement>(null);

  const { keyboardHeight, isKeyboardOpen } = useAnimatedVirtualKeyboard();

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={open}>Avoid Keyboard</Button>

      <NoteText>
        Note that keyboard avoidance only works on mobile devices!
      </NoteText>

      <Sheet
        ref={sheetRef}
        isOpen={isOpen}
        onClose={close}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header />

          <Sheet.Content style={{ paddingBottom: keyboardHeight }}>
            <Sheet.Scroller>
              <Content>
                <p>Focus input to show virtual keyboard</p>

                <Input ref={inputRef} />

                {isKeyboardOpen ? (
                  <strong>Virtual keyboard is open!</strong>
                ) : (
                  <Button onClick={close}>Close</Button>
                )}
              </Content>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

const NoteText = styled.strong`
  text-align: center;
  padding: 32px;
  line-height: 1.5;
  font-size: 14px;
`;

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

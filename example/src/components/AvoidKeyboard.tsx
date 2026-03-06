import { useRef } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { styled } from 'styled-components';

import { Button } from './common';
import { ExampleLayout } from './ExampleLayout';

export function AvoidKeyboard() {
  const sheetRef = useRef<SheetRef>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

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
          snapPoints={[0, 100, 300, 500, 1]}
          initialSnap={1}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <Content>
                <Form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Form submitted!');
                  }}
                >
                  <Input
                    name="firstName"
                    placeholder="First name"
                    enterKeyHint="next"
                  />
                  <Input
                    name="lastName"
                    placeholder="Last name"
                    enterKeyHint="next"
                  />
                  <Input
                    name="profession"
                    placeholder="Profession"
                    enterKeyHint="next"
                  />
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    enterKeyHint="next"
                  />
                  <Input
                    name="phone"
                    placeholder="Phone number"
                    type="tel"
                    enterKeyHint="next"
                  />
                  <Input
                    name="message"
                    placeholder="Message"
                    type="text"
                    enterKeyHint="done"
                  />
                  <Button type="submit">Submit</Button>
                </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #0070f3;
  }
`;

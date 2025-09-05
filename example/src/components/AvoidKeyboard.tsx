import { useRef } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { styled } from 'styled-components';

import { ExampleLayout } from './ExampleLayout';
import { Button } from './common';

export function AvoidKeyboard() {
  const sheetRef = useRef<SheetRef>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <ExampleLayout
      title="Avoid keyboard"
      description="Note that keyboard avoidance only works on mobile devices!"
    >
      {({ isOpen, close }) => (
        <Sheet ref={sheetRef} isOpen={isOpen} onClose={close} detent="content">
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
                  <Input name="firstName" placeholder="First name" />
                  <Input name="lastName" placeholder="Last name" />
                  <Input name="profession" placeholder="Profession" />
                  <Input name="email" placeholder="Email" type="email" />
                  <Input name="phone" placeholder="Phone number" type="tel" />
                  <Input name="message" placeholder="Message" type="text" />
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

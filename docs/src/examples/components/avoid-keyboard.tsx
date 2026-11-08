import { useRef } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { styled } from '../../../styled-system/jsx';
import { Button } from './common';
import { ExampleLayout } from './example-layout';

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
                  enterKeyHint="next"
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
                    name="company"
                    placeholder="Company"
                    enterKeyHint="next"
                  />
                  <Input
                    name="website"
                    placeholder="Website"
                    type="url"
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

const Content = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    paddingTop: '0px',
  },
});

const Form = styled('form', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
});

const Input = styled('input', {
  base: {
    color: 'var(--example-text)',
    backgroundColor: 'var(--example-field-bg)',
    padding: '12px',
    fontSize: '16px',
    border: '2px solid var(--example-border)',
    borderRadius: '8px',
    outline: 'none',
    '&:focus': { borderColor: 'var(--example-indicator)' },
  },
});

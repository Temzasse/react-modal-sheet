import { Sheet } from 'react-modal-sheet';

import { styled } from '../../../styled-system/jsx';
import { Button } from './common';
import { ExampleLayout } from './example-layout';

export function CustomStyles() {
  return (
    <ExampleLayout
      title="Custom styles"
      description="Sheet that has non-traditional bottom sheet styles."
    >
      {({ isOpen, close }) => (
        <Sheet isOpen={isOpen} onClose={close} detent="content" unstyled>
          <SheetContainer>
            <SheetWrapper>
              <SheetHeader>
                <HeaderImage />
                <DragIndicatorWrapper>
                  <Sheet.DragIndicator unstyled={false} />
                </DragIndicatorWrapper>
              </SheetHeader>
              <SheetContent>
                <Title>Custom styles</Title>
                <Paragraph>
                  This sheet has totally custom styles and its height is dynamic
                  based on the size of its content.
                </Paragraph>
                <Input placeholder="Input field" />
                <Buttons>
                  <Button variant="secondary" onPress={close}>
                    Cancel
                  </Button>
                  <Button onPress={close}>Confirm</Button>
                </Buttons>
              </SheetContent>
            </SheetWrapper>
          </SheetContainer>
          <Sheet.Backdrop onTap={close} unstyled={false} />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

const SheetContainer = styled(Sheet.Container, {
  base: {
    paddingInline: '16px',
    paddingTop: '16px',
    paddingBottom: 'max(env(safe-area-inset-bottom), 16px)',
  },
});

const SheetWrapper = styled('div', {
  base: {
    overflow: 'hidden',
    borderRadius: '16px',
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.1),\n    0 1px 2px rgba(0, 0, 0, 0.2),\n    0 12px 20px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'var(--example-sheet-bg)',
    color: 'var(--example-text)',
  },
});

const SheetHeader = styled(Sheet.Header, { base: { position: 'relative' } });

const HeaderImage = styled('div', {
  base: {
    backgroundImage: "url('https://picsum.photos/id/16/600/300')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '150px',
    marginBottom: '16px',
    backgroundColor: 'var(--example-card-bg)',
  },
});

const DragIndicatorWrapper = styled('div', {
  base: {
    position: 'absolute',
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

const SheetContent = styled(Sheet.Content, {
  base: { padding: '0px 16px 16px 16px' },
});

const Title = styled('h2', { base: { margin: '0', fontSize: '20px' } });

const Paragraph = styled('p', {
  base: {
    fontSize: '16px',
    lineHeight: '1.4',
    marginTop: '8px',
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
    width: '100%',
    marginBottom: '8px',
    '&:focus': { borderColor: 'var(--example-indicator)' },
  },
});

const Buttons = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    marginTop: '8px',
  },
});

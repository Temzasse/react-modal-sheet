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
    paddingInline: '$4',
    paddingTop: '$4',
    paddingBottom: 'max(env(safe-area-inset-bottom), {spacing.$4})',
  },
});

const SheetWrapper = styled('div', {
  base: {
    overflow: 'hidden',
    borderRadius: '$xl',
    boxShadow: '$sheet',
    backgroundColor: '$surface.sheet',
    color: '$surface.text',
  },
});

const SheetHeader = styled(Sheet.Header, {
  base: {
    position: 'relative',
  },
});

const HeaderImage = styled('div', {
  base: {
    backgroundImage: "url('https://picsum.photos/id/16/600/300')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '150px',
    marginBottom: '$4',
    backgroundColor: '$surface.card',
  },
});

const DragIndicatorWrapper = styled('div', {
  base: {
    position: 'absolute',
    top: '$2',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

const SheetContent = styled(Sheet.Content, {
  base: {
    padding: '0px {spacing.$4} {spacing.$4} {spacing.$4}',
  },
});

const Title = styled('h2', {
  base: {
    margin: '$0',
    textStyle: '$example.section',
  },
});

const Paragraph = styled('p', {
  base: {
    textStyle: '$example.paragraph',
    marginTop: '$2',
  },
});

const Input = styled('input', {
  base: {
    color: '$surface.text',
    backgroundColor: '$surface.field',
    padding: '$3',
    textStyle: '$example.body',
    border: '$fieldStrong',
    borderRadius: '$md',
    outline: 'none',
    width: '100%',
    marginBottom: '$2',
    '&:focus': {
      borderColor: '$surface.indicator',
    },
  },
});

const Buttons = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '$2',
    marginTop: '$2',
  },
});

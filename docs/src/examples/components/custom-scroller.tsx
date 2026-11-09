import {
  Sheet,
  useScrollPosition,
  useVirtualKeyboard,
} from 'react-modal-sheet';

import { styled } from '../../../styled-system/jsx';
import { BoxList } from './box-list';
import { ExampleLayout } from './example-layout';

export function CustomScroller() {
  const { scrollRef, scrollPosition } = useScrollPosition();

  // This assigns the `--keyboard-inset-height` CSS variable to the `:root` element
  useVirtualKeyboard();

  return (
    <ExampleLayout
      title="Custom Scroller"
      description="Sheet that has a custom scroller."
    >
      {({ isOpen, close }) => (
        /* Disable default keyboard avoidance */
        <Sheet isOpen={isOpen} onClose={close} avoidKeyboard={false}>
          <Sheet.Container>
            <Sheet.Header />

            {/* Disable default content scrolling */}
            <Sheet.Content disableScroll disableDrag={scrollPosition !== 'top'}>
              <Content>
                <ContentHeader>
                  <Input type="text" placeholder="Focus me" />
                </ContentHeader>

                <Scroller ref={scrollRef}>
                  <ScrollPosition>
                    Scroll position: {scrollPosition}
                  </ScrollPosition>
                  <BoxList count={10} />
                </Scroller>

                <ContentFooter onClick={close}>Close</ContentFooter>
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
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    transition: 'padding-bottom 100ms',
    paddingBottom: 'var(--keyboard-inset-height)',
  },
});

const ContentHeader = styled('div', {
  base: {
    padding: '$4',
    background: '$surface.sheet',
    textAlign: 'center',
    textStyle: '$example.strong',
  },
});

const Input = styled('input', {
  base: {
    color: '$surface.text',
    backgroundColor: '$surface.field',
    padding: '$2',
    textStyle: '$example.body',
    width: '100%',
    borderRadius: '$md',
    border: '$field',
    background: '$surface.field',
    '&:focus': {
      outline: 'none',
      borderColor: '$surface.indicator',
    },
  },
});

const Scroller = styled('div', {
  base: {
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    overscrollBehaviorY: 'none',
  },
});

const ScrollPosition = styled('div', {
  base: {
    padding: '$2',
    textStyle: '$example.label',
    color: '$surface.muted',
    textAlign: 'center',
    position: 'sticky',
    top: '$0',
    backdropFilter: 'blur(10px)',
  },
});

const ContentFooter = styled('button', {
  base: {
    padding: '$4',
    background: '$accent.text',
    color: '$surface.field',
    textAlign: 'center',
  },
});

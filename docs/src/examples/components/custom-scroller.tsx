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
    padding: '16px',
    background: 'var(--example-sheet-bg)',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const Input = styled('input', {
  base: {
    color: 'var(--sl-color-text)',
    backgroundColor: 'var(--sl-color-bg)',
    padding: '8px',
    fontSize: '16px',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid var(--sl-color-gray-4)',
    background: 'var(--sl-color-bg)',
    '&:focus': { outline: 'none', borderColor: 'var(--sl-color-text-accent)' },
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
    padding: '8px',
    fontSize: '14px',
    color: 'var(--sl-color-gray-3)',
    textAlign: 'center',
    position: 'sticky',
    top: '0',
    backdropFilter: 'blur(10px)',
  },
});

const ContentFooter = styled('button', {
  base: {
    padding: '16px',
    background: 'var(--sl-color-text-accent)',
    color: 'var(--sl-color-bg)',
    textAlign: 'center',
  },
});

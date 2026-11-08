import { useRef } from 'react';
import {
  FocusScope,
  OverlayProvider,
  useButton,
  useDialog,
  useModal,
  useOverlay,
} from 'react-aria';
import { FiEdit as MessageIcon, FiSearch as SearchIcon } from 'react-icons/fi';
import { Sheet } from 'react-modal-sheet';
import { useOverlayTriggerState } from 'react-stately';

import { styled } from '../../../../styled-system/jsx';
import { ScrollView } from '../common';
import { NewMessageContent } from './new-message-content';
import { NewMessageHeader } from './new-message-header';

// A11y added with React Aria: https://react-spectrum.adobe.com/react-aria/useDialog.html

export function SlackMessage() {
  const sheetState = useOverlayTriggerState({});
  const inputRef = useRef<HTMLInputElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const openButton = useButton({ onPress: sheetState.open }, openButtonRef);
  const focusInput = () => inputRef.current?.focus();

  return (
    <ScrollView>
      <Wrapper>
        <Topbar>
          <Logo />
          <WorkspaceTitle>A11y Workspace</WorkspaceTitle>
          <SearchIcon size={20} />
        </Topbar>

        <Content>
          <Fab {...openButton.buttonProps} ref={openButtonRef}>
            <MessageIcon size={20} color="currentColor" />
          </Fab>
        </Content>

        <MessageSheet
          isOpen={sheetState.isOpen}
          onOpenEnd={focusInput}
          onClose={sheetState.close}
          modalEffectRootId="root"
        >
          <OverlayProvider>
            <FocusScope contain autoFocus={false} restoreFocus>
              <MessageSheetComp sheetState={sheetState} inputRef={inputRef} />
            </FocusScope>
          </OverlayProvider>
        </MessageSheet>
      </Wrapper>
    </ScrollView>
  );
}

const MessageSheetComp = ({
  sheetState,
  inputRef,
}: {
  sheetState: any;
  inputRef: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dialog = useDialog({}, ref);
  const overlay = useOverlay(
    { onClose: sheetState.close, isOpen: true, isDismissable: true },
    ref
  );

  useModal();

  // HACK: some props from React Aria need to be cast to `any`
  // since they conflict with the Motion props
  return (
    <>
      <Sheet.Container
        {...overlay.overlayProps}
        {...(dialog.dialogProps as any)}
        ref={ref}
      >
        <Sheet.Header>
          <NewMessageHeader
            sheetState={sheetState}
            titleProps={dialog.titleProps}
          />
        </Sheet.Header>
        <Sheet.Content>
          <NewMessageContent inputRef={inputRef} />
        </Sheet.Content>
      </Sheet.Container>
    </>
  );
};

const Wrapper = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '100%',
    height: '100%',
  },
});

const Topbar = styled('div', {
  base: {
    width: '100%',
    backgroundColor: 'var(--example-app-bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    color: 'var(--example-text)',
  },
});

const Logo = styled('div', {
  base: {
    width: '32px',
    height: '32px',
    borderRadius: '12px',
    backgroundColor: 'slategray',
  },
});

const WorkspaceTitle = styled('h1', {
  base: { margin: '0', fontWeight: '700', fontSize: '16px' },
});

const Content = styled('div', {
  base: {
    flex: '1',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: 'max(16px, env(safe-area-inset-top))',
    paddingBottom: '56px',
    backgroundColor: 'var(--example-border)',
  },
});

const Fab = styled('button', {
  base: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'var(--example-app-bg)',
    color: 'var(--example-text)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MessageSheet = styled(Sheet, {
  base: {
    margin: '0 auto',
    maxWidth: '680px',
    '& .react-modal-sheet-container': {
      backgroundColor: 'var(--example-sheet-bg) !important',
    },
    '& .react-modal-sheet-backdrop': {
      backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
    },
    '& .react-modal-sheet-drag-indicator': {
      backgroundColor: 'var(--example-indicator) !important',
    },
  },
});

import { useRef } from 'react';
import { FiEdit as MessageIcon, FiSearch as SearchIcon } from 'react-icons/fi';
import { Sheet } from 'react-modal-sheet';
import { useOverlayTriggerState } from 'react-stately';
import { styled } from 'styled-components';

import {
  FocusScope,
  OverlayProvider,
  useButton,
  useDialog,
  useModal,
  useOverlay,
} from 'react-aria';

import { ScrollView } from '../common';
import { useMetaThemeColor } from '../hooks';
import { NewMessageContent } from './NewMessageContent';
import { NewMessageHeader } from './NewMessageHeader';

// A11y added with React Aria: https://react-spectrum.adobe.com/react-aria/useDialog.html

export function SlackMessage() {
  const sheetState = useOverlayTriggerState({});
  const inputRef = useRef<HTMLInputElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const openButton = useButton({ onPress: sheetState.open }, openButtonRef);
  const focusInput = () => inputRef.current?.focus();

  useMetaThemeColor({ when: sheetState.isOpen, from: '#111', to: '#000' });
  useMetaThemeColor({ to: '#111' });

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
            <MessageIcon size={20} color="#fff" />
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: max(16px, env(safe-area-inset-top));
  padding-bottom: 56px;
  background-color: #333;
`;

const Topbar = styled.div`
  width: 100%;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: #fff;
  padding-top: env(safe-area-inset-top);
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background-color: slategray;
`;

const WorkspaceTitle = styled.h1`
  font-weight: 700;
  font-size: 16px;
`;

const Fab = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageSheet = styled(Sheet)`
  margin: 0 auto;
  max-width: 680px;

  .react-modal-sheet-container {
    background-color: #222 !important;
  }

  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }

  .react-modal-sheet-drag-indicator {
    background-color: #666 !important;
  }
`;

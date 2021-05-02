import * as React from 'react';
import styled from 'styled-components';
import { FiEdit as MessageIcon, FiSearch as SearchIcon } from 'react-icons/fi';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useOverlay, useModal, OverlayProvider } from '@react-aria/overlays';
import { FocusScope } from '@react-aria/focus';
import { useButton } from '@react-aria/button';
import { useDialog } from '@react-aria/dialog';

import Sheet from '../../../src';
import NewMessageHeader from './NewMessageHeader';
import NewMessageContent from './NewMessageContent';
import { DarkMode, Screen } from '../common';

// A11y added with React Aria: https://react-spectrum.adobe.com/react-aria/useDialog.html

const SlackMessage = () => {
  const sheetState = useOverlayTriggerState({});
  const inputRef = React.useRef<HTMLInputElement>(null);
  const openButtonRef = React.useRef<HTMLButtonElement>(null);
  const openButton = useButton({ onPress: sheetState.open }, openButtonRef);

  const focusInput = () => inputRef.current?.focus();

  return (
    <Screen bg="light">
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
          rootId="__next"
        >
          <OverlayProvider>
            <FocusScope contain autoFocus={false} restoreFocus>
              <MessageSheetComp sheetState={sheetState} inputRef={inputRef} />
            </FocusScope>
          </OverlayProvider>
        </MessageSheet>
      </Wrapper>

      <DarkMode />
    </Screen>
  );
};

const MessageSheetComp = ({
  sheetState,
  inputRef,
}: {
  sheetState: any;
  inputRef: any;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dialog = useDialog({}, ref);
  const overlay = useOverlay({ onClose: sheetState.close, isOpen: true, isDismissable: true }, ref); // prettier-ignore

  useModal();

  // HACK: some props from React Aria need to be cast to `any`
  // since they conflict with the Framer Motion props
  return (
    <>
      <MessageSheet.Container
        {...overlay.overlayProps}
        {...(dialog.dialogProps as any)}
        ref={ref}
      >
        <MessageSheet.Header>
          <NewMessageHeader
            sheetState={sheetState}
            titleProps={dialog.titleProps}
          />
        </MessageSheet.Header>

        <MessageSheet.Content>
          <NewMessageContent inputRef={inputRef} />
        </MessageSheet.Content>
      </MessageSheet.Container>

      <MessageSheet.Backdrop />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  max-width: 680px;
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

export default SlackMessage;

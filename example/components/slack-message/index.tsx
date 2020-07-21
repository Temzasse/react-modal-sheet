import * as React from 'react';
import styled from 'styled-components';
import { FiEdit as MessageIcon, FiSearch as SearchIcon } from 'react-icons/fi';

import Sheet from '../../../src';
import { DarkMode } from '../Uikit';
import NewMessageHeader from './NewMessageHeader';
import NewMessageContent from './NewMessageContent';

const SlackMessage = () => {
  const [isOpen, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const focusInput = () => inputRef.current?.focus();

  return (
    <>
      <Wrapper>
        <Topbar>
          <Logo />
          <WorkspaceTitle>Workspace</WorkspaceTitle>
          <SearchIcon size={20} />
        </Topbar>

        <Content>
          <Fab onClick={open}>
            <MessageIcon size={20} color="#fff" />
          </Fab>
        </Content>

        <MessageSheet
          isOpen={isOpen}
          onClose={close}
          rootId="root"
          header={<NewMessageHeader close={close} />}
          onOpenEnd={focusInput}
        >
          <NewMessageContent inputRef={inputRef} />
        </MessageSheet>
      </Wrapper>

      <DarkMode />
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

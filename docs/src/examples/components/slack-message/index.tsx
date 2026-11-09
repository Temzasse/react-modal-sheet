import { type RefObject, useContext, useRef } from 'react';
import {
  FocusScope,
  OverlayProvider,
  useButton,
  useDialog,
  useModal,
  useOverlay,
} from 'react-aria';
import {
  FiBell,
  FiBookmark,
  FiBox,
  FiCheckCircle,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiHash,
  FiHeadphones,
  FiHome,
  FiLock,
  FiMessageCircle,
  FiMoreHorizontal,
  FiPlus,
  FiSearch,
  FiSliders,
  FiStar,
  FiUsers,
} from 'react-icons/fi';
import { Sheet } from 'react-modal-sheet';
import {
  type OverlayTriggerState,
  useOverlayTriggerState,
} from 'react-stately';

import { styled } from '../../../../styled-system/jsx';
import { EmbeddedExampleContext } from '../example-layout';
import { NewMessageContent } from './new-message-content';
import { NewMessageHeader } from './new-message-header';

export function SlackMessage() {
  const embedded = useContext(EmbeddedExampleContext);
  const sheetState = useOverlayTriggerState({});
  const inputRef = useRef<HTMLInputElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const openButton = useButton({ onPress: sheetState.open }, openButtonRef);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <Wrapper>
      <WorkspaceHeader>
        <HeaderContent>
          {!embedded && (
            <BackLink href={`${base}/examples/slack-message/`}>
              <FiChevronLeft size={14} /> Examples
            </BackLink>
          )}
          <WorkspaceRow>
            <WorkspaceLogo aria-hidden="true">
              <FiBox size={25} />
            </WorkspaceLogo>
            <WorkspaceTitle>Orbit Workshop</WorkspaceTitle>
            <ProfilePill aria-hidden="true">
              <FiSliders size={18} />
              <Profile>
                ML
                <OnlineBadge />
              </Profile>
            </ProfilePill>
          </WorkspaceRow>
        </HeaderContent>
      </WorkspaceHeader>

      <Content>
        <Shortcuts>
          <Shortcut>
            <FiMessageCircle size={20} />
            <span>Threads</span>
            <small>3 new</small>
          </Shortcut>
          <Shortcut>
            <FiHeadphones size={20} />
            <span>Huddles</span>
            <small>1 live</small>
          </Shortcut>
          <Shortcut>
            <FiCheckCircle size={20} />
            <span>To-dos</span>
            <small>4 items</small>
          </Shortcut>
          <Shortcut>
            <FiBookmark size={20} />
            <span>Saved</span>
            <small>8 items</small>
          </Shortcut>
        </Shortcuts>
        <SectionRow>
          <FiGrid size={21} />
          <SectionTitle>Connected apps</SectionTitle>
          <FiChevronRight size={18} />
          <RowEnd>
            <FiChevronDown size={21} />
          </RowEnd>
        </SectionRow>
        <SectionRow>
          <FiUsers size={21} />
          <SectionTitle>Guest spaces</SectionTitle>
          <FiChevronRight size={18} />
          <RowEnd>
            <FiChevronDown size={21} />
          </RowEnd>
        </SectionRow>

        {channelGroups.map(({ title, icon: Icon, channels }) => (
          <ChannelSection key={title}>
            <SectionHeading>
              <Icon size={22} />
              <SectionTitle>{title}</SectionTitle>
              <FiChevronRight size={18} />
              <RowEnd>
                <FiChevronDown size={21} />
              </RowEnd>
            </SectionHeading>
            <ChannelList>
              {channels.map(({ name, isPrivate, unread }) => (
                <ChannelRow
                  key={name}
                  data-unread={unread > 0 ? true : undefined}
                >
                  {isPrivate ? <FiLock size={19} /> : <FiHash size={22} />}
                  <span>{name}</span>
                  {unread > 0 && <UnreadCount>{unread}</UnreadCount>}
                </ChannelRow>
              ))}
            </ChannelList>
          </ChannelSection>
        ))}
      </Content>

      <ComposeButton
        {...openButton.buttonProps}
        ref={openButtonRef}
        aria-haspopup="dialog"
        aria-expanded={sheetState.isOpen}
        aria-label="New message"
      >
        <FiPlus size={27} />
      </ComposeButton>
      <BottomNavigation aria-label="Workspace navigation">
        <NavItem data-active aria-current="page">
          <FiHome size={24} />
          <span>Home</span>
        </NavItem>
        <NavItem>
          <FiMessageCircle size={24} />
          <span>DMs</span>
        </NavItem>
        <NavItem>
          <FiBell size={24} />
          <span>Activity</span>
        </NavItem>
        <NavItem>
          <FiMoreHorizontal size={25} />
          <span>More</span>
        </NavItem>
        <NavItem>
          <FiSearch size={25} />
          <span>Search</span>
        </NavItem>
      </BottomNavigation>

      <MessageSheet
        isOpen={sheetState.isOpen}
        onOpenEnd={() => inputRef.current?.focus({ preventScroll: true })}
        onClose={sheetState.close}
        modalEffectRootId="root"
      >
        <OverlayProvider>
          <FocusScope contain autoFocus={false} restoreFocus>
            <MessageSheetContent sheetState={sheetState} inputRef={inputRef} />
          </FocusScope>
        </OverlayProvider>
        <Sheet.Backdrop onTap={sheetState.close} />
      </MessageSheet>
    </Wrapper>
  );
}

function MessageSheetContent({
  sheetState,
  inputRef,
}: {
  sheetState: OverlayTriggerState;
  inputRef: RefObject<HTMLInputElement | null>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dialog = useDialog({}, ref);
  const overlay = useOverlay(
    { onClose: sheetState.close, isOpen: true, isDismissable: true },
    ref
  );
  useModal();

  return (
    <Sheet.Container
      ref={ref}
      role={dialog.dialogProps.role}
      aria-labelledby={dialog.dialogProps['aria-labelledby']}
      aria-describedby={dialog.dialogProps['aria-describedby']}
      tabIndex={dialog.dialogProps.tabIndex}
      onKeyDown={overlay.overlayProps.onKeyDown}
      onBlur={overlay.overlayProps.onBlur}
    >
      <Sheet.Header>
        <NewMessageHeader
          onClose={sheetState.close}
          titleId={dialog.titleProps.id}
        />
      </Sheet.Header>
      <Sheet.Content>
        <NewMessageContent inputRef={inputRef} />
      </Sheet.Content>
    </Sheet.Container>
  );
}

const channelGroups = [
  {
    title: 'Starred',
    icon: FiStar,
    channels: [
      { name: 'release-room', isPrivate: true, unread: 0 },
      { name: 'tiny-victories', isPrivate: false, unread: 2 },
      { name: 'weekend-builds', isPrivate: false, unread: 0 },
    ],
  },
  {
    title: 'Team spaces',
    icon: FiHash,
    channels: [
      { name: 'orbit-lounge', isPrivate: false, unread: 0 },
      { name: 'pixel-picnic', isPrivate: false, unread: 0 },
      { name: 'bug-safari', isPrivate: false, unread: 5 },
      { name: 'coffee-and-commits', isPrivate: false, unread: 0 },
      { name: 'rubber-duck-club', isPrivate: false, unread: 0 },
      { name: 'shipyard', isPrivate: false, unread: 0 },
    ],
  },
];

const dividerStyles = {
  position: 'relative',
  '&::after': {
    content: "''",
    position: 'absolute',
    bottom: '$0',
    left: '$0',
    right: '$0',
    height: '1px',
    background: 'var(--slack-border)',
    transform: 'scaleY(var(--slack-hairline-scale))',
    transformOrigin: 'bottom',
    pointerEvents: 'none',
  },
} as const;

const Wrapper = styled('div', {
  base: {
    minHeight: '100dvh',
    background: 'var(--slack-bg)',
    color: 'var(--slack-text)',
    paddingBottom: 'calc(110px + env(safe-area-inset-bottom))',
  },
});
const WorkspaceHeader = styled('header', {
  base: {
    background: 'linear-gradient(110deg, #48205f, #29113d)',
    color: '#fff',
  },
});
const HeaderContent = styled('div', {
  base: {
    width: '100%',
    maxWidth: '680px',
    margin: '0 auto',
    padding: 'max({spacing.$5}, env(safe-area-inset-top)) 18px {spacing.$6}',
  },
});
const BackLink = styled('a', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$0.5',
    fontSize: '12px',
    color: 'rgb(255 255 255 / 65%)',
    marginBottom: '18px',
    '&:hover': {
      color: '#fff',
    },
    '&:focus-visible': {
      outline: '2px solid #fff',
      outlineOffset: '$1',
    },
  },
});
const WorkspaceRow = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
  },
});
const WorkspaceLogo = styled('div', {
  base: {
    display: 'grid',
    placeItems: 'center',
    flexShrink: '0',
    width: '44px',
    height: '44px',
    borderRadius: '15px',
    background: 'linear-gradient(145deg, #ac79ce, #78439b)',
    border: '1px solid rgb(255 255 255 / 20%)',
    boxShadow: '0 0 0 5px rgb(255 255 255 / 5%)',
  },
});
const WorkspaceTitle = styled('h1', {
  base: {
    margin: '$0',
    minWidth: '0',
    flex: '1',
    fontWeight: '750',
    fontSize: 'clamp(20px, 4.6vw, 26px)',
    letterSpacing: '-.035em',
    lineHeight: '1.1',
  },
});
const ProfilePill = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '7px {spacing.$2} 7px 13px',
    borderRadius: '999px',
    background: 'rgb(255 255 255 / 9%)',
    border: '1px solid rgb(255 255 255 / 13%)',
    boxShadow: 'inset 0 1px 0 rgb(255 255 255 / 5%)',
  },
});
const Profile = styled('span', {
  base: {
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: '#d4a7a0',
    color: '#492f39',
    fontSize: '10px',
    fontWeight: '700',
  },
});
const OnlineBadge = styled('span', {
  base: {
    position: 'absolute',
    bottom: '-1px',
    right: '-1px',
    width: '10px',
    height: '10px',
    background: '#62c5a1',
    border: '2px solid #39204b',
    borderRadius: '50%',
  },
});
const Content = styled('main', {
  base: {
    width: '100%',
    maxWidth: '680px',
    margin: '0 auto',
  },
});
const Shortcuts = styled('div', {
  base: {
    ...dividerStyles,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    gap: '9px',
    padding: '{spacing.$4} {spacing.$4} 18px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
const Shortcut = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '$1.5',
    padding: '13px {spacing.$3}',
    border: '1px solid var(--slack-border)',
    borderRadius: '15px',
    color: 'var(--slack-muted)',
    '& span': {
      fontSize: '14px',
      marginTop: '$0.5',
    },
    '& small': {
      fontSize: '12px',
      opacity: '.75',
    },
  },
});
const SectionRow = styled('div', {
  base: {
    ...dividerStyles,
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    padding: '{spacing.$5} 18px',
  },
});
const SectionTitle = styled('h2', {
  base: {
    margin: '$0',
    fontSize: '16px',
    fontWeight: '700',
    letterSpacing: '-.01em',
  },
});
const RowEnd = styled('span', {
  base: {
    display: 'flex',
    marginLeft: 'auto',
    color: 'var(--slack-muted)',
  },
});
const ChannelSection = styled('section', {
  base: {
    ...dividerStyles,
    paddingBottom: '$3',
  },
});
const SectionHeading = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    padding: '{spacing.$5} 18px {spacing.$3}',
  },
});
const ChannelList = styled('ul', {
  base: {
    listStyle: 'none',
    padding: '$0',
    margin: '$0',
  },
});
const ChannelRow = styled('li', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '13px',
    padding: '{spacing.$3} 19px',
    minHeight: '46px',
    color: 'var(--slack-muted)',
    fontSize: '17px',
    '& svg': {
      flexShrink: '0',
      opacity: '.75',
    },
    '&[data-unread]': {
      fontWeight: '650',
      color: 'var(--slack-text)',
    },
  },
});
const UnreadCount = styled('span', {
  base: {
    display: 'grid',
    placeItems: 'center',
    marginLeft: 'auto',
    minWidth: '22px',
    height: '20px',
    padding: '0 {spacing.$1.5}',
    borderRadius: '999px',
    background: 'var(--slack-accent-soft)',
    color: 'var(--slack-accent)',
    fontSize: '11px',
    fontWeight: '700',
  },
});
const ComposeButton = styled('button', {
  base: {
    position: 'fixed',
    zIndex: '1',
    bottom: 'calc(94px + env(safe-area-inset-bottom))',
    right: 'max(22px, calc(50% - 310px))',
    display: 'grid',
    placeItems: 'center',
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    background: 'linear-gradient(145deg, #653b80, #49255f)',
    border: '1px solid rgb(211 166 239 / 35%)',
    color: '#e1c6f2',
    boxShadow: '0 4px 14px rgb(0 0 0 / 12%)',
    cursor: 'pointer',
    '&:focus-visible': {
      outline: '2px solid var(--slack-accent)',
      outlineOffset: '$1',
    },
  },
});
const BottomNavigation = styled('nav', {
  base: {
    position: 'fixed',
    zIndex: '1',
    bottom: 'max({spacing.$3}, env(safe-area-inset-bottom))',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 28px)',
    maxWidth: '640px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    padding: '5px',
    borderRadius: '999px',
    isolation: 'isolate',
    '&::before': {
      content: "''",
      position: 'absolute',
      inset: '$0',
      zIndex: '-1',
      borderRadius: 'inherit',
      background: 'var(--slack-tab-bg)',
      backdropFilter: 'blur(24px) saturate(140%)',
    },
    border: '1px solid var(--slack-border)',
    boxShadow:
      '0 8px 30px rgb(0 0 0 / 22%), inset 0 1px 0 rgb(255 255 255 / 8%)',
  },
});
const NavItem = styled('span', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$1',
    minHeight: '55px',
    padding: '5px 0',
    borderRadius: '999px',
    color: 'var(--slack-text)',
    '& span': {
      fontSize: '10px',
      fontWeight: '600',
    },
    '&[data-active]': {
      background: 'var(--slack-accent-soft)',
      color: 'var(--slack-accent)',
    },
  },
});
const MessageSheet = styled(Sheet, {
  base: {
    '& .react-modal-sheet-container': {
      maxWidth: '680px',
      left: 'max(0px, calc(50% - 340px)) !important',
      backgroundColor: 'var(--slack-bg) !important',
      color: 'var(--slack-text)',
    },
    '& .react-modal-sheet-backdrop': {
      backgroundColor: 'rgb(0 0 0 / 40%) !important',
    },
  },
});

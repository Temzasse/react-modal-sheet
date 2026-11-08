import { useState } from 'react';
import { FaForward, FaPause, FaPlay, FaRandom } from 'react-icons/fa';
import {
  FiCheck,
  FiChevronLeft,
  FiDownload,
  FiHome,
  FiMusic,
  FiRadio,
  FiSearch,
  FiShare,
} from 'react-icons/fi';

import { styled } from '../../../../styled-system/jsx';
import { MoreButton } from './common';
import type { Album as AlbumType, Song } from './data';

export function Album({
  album,
  currentSong,
  isPlaying,
  onSongClick,
  onMiniPlayerClick,
  onTogglePlaying,
  onNextSong,
  onShuffle,
}: {
  album: AlbumType;
  currentSong: Song;
  isPlaying: boolean;
  onSongClick: (index: number) => void;
  onMiniPlayerClick: () => void;
  onTogglePlaying: () => void;
  onNextSong: () => void;
  onShuffle: () => void;
}) {
  const [isSaved, setSaved] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isLinkCopied, setLinkCopied] = useState(false);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  async function copyLink() {
    await navigator.clipboard.writeText(
      `${window.location.origin}${base}/examples/apple-music/`
    );
    setLinkCopied(true);
  }

  return (
    <Wrapper>
      <Content>
        <Toolbar>
          <BackLink
            href={`${base}/examples/apple-music/`}
            target="_top"
            aria-label="Back to examples"
          >
            <FiChevronLeft size={25} />
          </BackLink>
          <ToolbarActions>
            <IconButton
              type="button"
              aria-label={isLinkCopied ? 'Link copied' : 'Copy album link'}
              onClick={copyLink}
            >
              {isLinkCopied ? <FiCheck size={23} /> : <FiShare size={23} />}
            </IconButton>
            <MoreButton
              aria-label="Album information"
              aria-expanded={showInfo}
              onClick={() => setShowInfo(!showInfo)}
            />
          </ToolbarActions>
        </Toolbar>

        <Header>
          <Artwork
            src={album.image}
            alt={`${album.name} album cover`}
            width={640}
            height={640}
          />
          <AlbumName>{album.name}</AlbumName>
          <Artist>{album.artist}</Artist>
          <AlbumInfo>
            {album.genre} · {album.year}
          </AlbumInfo>
        </Header>

        <Controls>
          <RoundButton
            type="button"
            onClick={onShuffle}
            aria-label="Shuffle album"
          >
            <FaRandom size={21} />
          </RoundButton>
          <PlayButton type="button" onClick={onTogglePlaying}>
            {isPlaying ? <FaPause size={19} /> : <FaPlay size={19} />}
            {isPlaying ? 'Pause' : 'Play'}
          </PlayButton>
          <RoundButton
            type="button"
            aria-label={
              isSaved ? 'Remove album from library' : 'Save album to library'
            }
            aria-pressed={isSaved}
            onClick={() => setSaved(!isSaved)}
          >
            {isSaved ? <FiCheck size={25} /> : <FiDownload size={25} />}
          </RoundButton>
        </Controls>

        {showInfo && (
          <AlbumNote>
            Twelve tracks. Zero breaking changes. Independently released by{' '}
            {album.artist}.
          </AlbumNote>
        )}

        <SongList>
          {album.songs.map((song, index) => (
            <SongListItem key={song.title}>
              <SongButton
                type="button"
                onClick={() => onSongClick(index)}
                aria-label={`Play ${song.title}`}
                aria-current={song === currentSong ? 'true' : undefined}
              >
                <SongNumber>
                  {song === currentSong && isPlaying ? (
                    <FiMusic size={17} />
                  ) : (
                    index + 1
                  )}
                </SongNumber>
                <SongTitle>{song.title}</SongTitle>
                <SongDots aria-hidden="true">•••</SongDots>
              </SongButton>
            </SongListItem>
          ))}
        </SongList>
        <ReleaseInfo>
          {album.songs.length} songs ·{' '}
          {Math.round(
            album.songs.reduce((total, song) => total + song.duration, 0) / 60
          )}{' '}
          minutes
          <br />℗ {album.year} Null Records. All rights reserved-ish.
        </ReleaseInfo>
      </Content>

      <FloatingDock>
        <MiniPlayer>
          <MiniOpen
            type="button"
            onClick={onMiniPlayerClick}
            aria-label={`Open player: ${currentSong.title}`}
          >
            <MiniImage src={album.image} alt="" width={44} height={44} />
            <MiniInfo>
              <MiniSong>{currentSong.title}</MiniSong>
              <MiniArtist>{album.artist}</MiniArtist>
            </MiniInfo>
          </MiniOpen>
          <MiniControl
            type="button"
            onClick={onTogglePlaying}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <FaPause size={21} /> : <FaPlay size={21} />}
          </MiniControl>
          <MiniControl
            type="button"
            onClick={onNextSong}
            aria-label="Next song"
          >
            <FaForward size={24} />
          </MiniControl>
        </MiniPlayer>
        <AppNavigation aria-label="Music navigation">
          <NavItem>
            <FiHome size={24} />
            <span>Home</span>
          </NavItem>
          <NavItem>
            <FiRadio size={24} />
            <span>Radio</span>
          </NavItem>
          <NavItem data-active>
            <FiMusic size={24} />
            <span>Library</span>
          </NavItem>
          <NavItem>
            <FiSearch size={24} />
            <span>Search</span>
          </NavItem>
        </AppNavigation>
      </FloatingDock>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  base: {
    position: 'relative',
    minHeight: '100dvh',
    background:
      'linear-gradient(165deg, #2a153f 0%, #190e2a 45%, #0d0719 100%)',
    color: '#fff',
    colorScheme: 'dark',
  },
});

const Content = styled('main', {
  base: {
    width: '100%',
    maxWidth: '680px',
    margin: '0 auto',
    padding:
      'max(16px, env(safe-area-inset-top)) 20px calc(170px + env(safe-area-inset-bottom))',
  },
});

const Toolbar = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '26px',
  },
});

const BackLink = styled('a', {
  base: {
    display: 'grid',
    placeItems: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'rgb(255 255 255 / 10%)',
    border: '1px solid rgb(255 255 255 / 12%)',
    color: '#fff',
    '&:focus-visible': {
      outline: '2px solid #fff',
      outlineOffset: '3px',
    },
  },
});

const ToolbarActions = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '3px 8px',
    borderRadius: '999px',
    background:
      'linear-gradient(150deg, rgb(255 255 255 / 15%), rgb(255 255 255 / 8%))',
    border: '1px solid rgb(255 255 255 / 15%)',
    boxShadow: 'inset 0 1px 0 rgb(255 255 255 / 8%)',
  },
});

const IconButton = styled('button', {
  base: {
    display: 'grid',
    placeItems: 'center',
    width: '36px',
    height: '36px',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '50%',
    '&:hover': {
      background: 'rgb(255 255 255 / 10%)',
    },
    '&:focus-visible': {
      outline: '2px solid #fff',
    },
  },
});

const Header = styled('header', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
});
const Artwork = styled('img', {
  base: {
    display: 'block',
    width: 'min(78%, 340px)',
    height: 'auto',
    aspectRatio: '1',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 12px 45px rgb(0 0 0 / 45%), 0 0 0 1px rgb(255 255 255 / 9%)',
    marginBottom: '23px',
  },
});
const AlbumName = styled('h1', {
  base: {
    margin: '0',
    fontSize: 'clamp(24px, 4.8vw, 30px)',
    lineHeight: '1.15',
    fontWeight: '750',
    letterSpacing: '-0.035em',
    color: '#fff',
  },
});
const Artist = styled('p', {
  base: {
    margin: '7px 0 0',
    fontSize: '21px',
    lineHeight: '1.2',
    color: '#fff',
  },
});
const AlbumInfo = styled('p', {
  base: {
    margin: '8px 0 0',
    fontSize: '13px',
    fontWeight: '500',
    color: 'rgb(255 255 255 / 58%)',
  },
});
const Controls = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    maxWidth: '390px',
    margin: '22px auto 24px',
  },
});
const RoundButton = styled('button', {
  base: {
    display: 'grid',
    placeItems: 'center',
    flexShrink: '0',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    color: '#fff',
    background: 'rgb(255 255 255 / 9%)',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgb(255 255 255 / 16%)',
    },
    '&:focus-visible': {
      outline: '2px solid #fff',
      outlineOffset: '3px',
    },
  },
});
const PlayButton = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flex: '1',
    padding: '14px 20px',
    minHeight: '48px',
    borderRadius: '999px',
    color: '#fff',
    fontSize: '17px',
    fontWeight: '650',
    background:
      'linear-gradient(150deg, rgb(255 255 255 / 23%), rgb(255 255 255 / 12%))',
    border: '1px solid rgb(255 255 255 / 18%)',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgb(255 255 255 / 28%)',
    },
    '&:focus-visible': {
      outline: '2px solid #fff',
      outlineOffset: '3px',
    },
  },
});
const AlbumNote = styled('p', {
  base: {
    fontSize: '13px',
    lineHeight: '1.6',
    color: 'rgb(255 255 255 / 70%)',
    padding: '12px 16px',
    background: 'rgb(255 255 255 / 6%)',
    borderRadius: '12px',
  },
});
const SongList = styled('ol', {
  base: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    borderTop: '1px solid rgb(255 255 255 / 15%)',
  },
});
const SongListItem = styled('li', {
  base: {
    listStyle: 'none',
    margin: '0',
  },
});
const SongButton = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '56px',
    color: '#fff',
    textAlign: 'left',
    cursor: 'pointer',
    '&:focus-visible': {
      outline: '2px solid #fff',
      outlineOffset: '-2px',
    },
  },
});
const SongNumber = styled('span', {
  base: {
    display: 'grid',
    placeItems: 'center',
    flexShrink: '0',
    width: '28px',
    marginRight: '6px',
    fontSize: '16px',
    color: 'rgb(255 255 255 / 55%)',
  },
});
const SongTitle = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: '1',
    minWidth: '0',
    padding: '15px 0',
    fontSize: '15px',
    lineHeight: '1.4',
    borderBottom: '1px solid rgb(255 255 255 / 14%)',
  },
});
const SongDots = styled('span', {
  base: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    padding: '0 5px 0 12px',
    color: 'rgb(255 255 255 / 55%)',
    fontSize: '13px',
    letterSpacing: '2px',
    borderBottom: '1px solid rgb(255 255 255 / 14%)',
  },
});
const ReleaseInfo = styled('p', {
  base: {
    color: 'rgb(255 255 255 / 45%)',
    fontSize: '12px',
    lineHeight: '1.8',
    marginTop: '24px',
  },
});
const FloatingDock = styled('div', {
  base: {
    position: 'fixed',
    zIndex: '1',
    bottom: 'max(12px, env(safe-area-inset-bottom))',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 24px)',
    maxWidth: '640px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
});
const MiniPlayer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '7px 10px 7px 8px',
    borderRadius: '999px',
    background:
      'linear-gradient(160deg, rgb(75 75 77 / 58%), rgb(40 40 42 / 44%))',
    border: '1px solid rgb(255 255 255 / 16%)',
    backdropFilter: 'blur(24px) saturate(140%)',
    boxShadow:
      '0 6px 24px rgb(0 0 0 / 25%), inset 0 1px 0 rgb(255 255 255 / 8%)',
  },
});
const MiniOpen = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    gap: '10px',
    minWidth: '0',
    textAlign: 'left',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '22px',
    '&:focus-visible': {
      outline: '2px solid #fff',
    },
  },
});
const MiniImage = styled('img', {
  base: {
    display: 'block',
    width: '40px',
    height: '40px',
    flexShrink: '0',
    borderRadius: '8px',
    objectFit: 'cover',
  },
});
const MiniInfo = styled('span', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    gap: '3px',
  },
});
const MiniSong = styled('span', {
  base: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '13px',
    fontWeight: '600',
  },
});
const MiniArtist = styled('span', {
  base: {
    fontSize: '11px',
    color: 'rgb(255 255 255 / 65%)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
});
const MiniControl = styled('button', {
  base: {
    display: 'grid',
    placeItems: 'center',
    width: '36px',
    height: '40px',
    flexShrink: '0',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '50%',
    '&:hover': {
      background: 'rgb(255 255 255 / 10%)',
    },
    '&:focus-visible': {
      outline: '2px solid #fff',
    },
  },
});
const AppNavigation = styled('nav', {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    padding: '5px',
    borderRadius: '999px',
    background:
      'linear-gradient(160deg, rgb(65 65 67 / 52%), rgb(35 35 37 / 38%))',
    border: '1px solid rgb(255 255 255 / 14%)',
    backdropFilter: 'blur(24px) saturate(140%)',
    boxShadow:
      '0 6px 24px rgb(0 0 0 / 25%), inset 0 1px 0 rgb(255 255 255 / 8%)',
  },
});
const NavItem = styled('span', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
    padding: '5px 0',
    borderRadius: '999px',
    color: 'rgb(255 255 255 / 85%)',
    '& span': {
      fontSize: '9px',
      fontWeight: '600',
    },
    '&[data-active]': {
      background: 'rgb(0 0 0 / 30%)',
      color: '#fff',
    },
  },
});

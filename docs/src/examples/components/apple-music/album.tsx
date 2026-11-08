import { motion } from 'motion/react';
import { FaForward, FaPlay, FaRandom } from 'react-icons/fa';

import { styled } from '../../../../styled-system/jsx';
import { MoreButton } from './common';
import type { Album as AlbumType } from './data';

export function Album({
  album,
  currentSong,
  isPlayerOpen,
  onSongClick,
  onMiniPlayerClick,
}: {
  album: AlbumType;
  currentSong: string;
  isPlayerOpen: boolean;
  onSongClick: (song: string) => void;
  onMiniPlayerClick: () => void;
}) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <ImageWrapper>
            <Image src={album.image} />
          </ImageWrapper>

          <Details>
            <AlbumName>{album.name}</AlbumName>
            <AlbumArtist>{album.artist}</AlbumArtist>
            <AlbumInfo>
              {album.genre} &middot; {album.year}
            </AlbumInfo>
            <div style={{ flex: 1 }} />
            <MoreButton />
          </Details>
        </Header>

        <Controls>
          <ControlButton>
            <FaPlay size={12} />
            <span>Play</span>
          </ControlButton>

          <ControlButton>
            <FaRandom size={14} />
            <span>Shuffle</span>
          </ControlButton>
        </Controls>

        <SongList>
          {album.songs.map((song, index) => (
            <SongListItem key={song} onClick={() => onSongClick(song)}>
              <span>{index + 1}</span>
              <div>{song}</div>
            </SongListItem>
          ))}
        </SongList>
      </Content>

      {!isPlayerOpen && (
        <MiniPlayer>
          <MiniPlayerButton onClick={onMiniPlayerClick}>
            <MiniImage src={album.image} />
            <MiniSongName>{currentSong}</MiniSongName>
            <FaPlay size={20} />
            <div style={{ width: 24 }} />
            <FaForward size={20} />
          </MiniPlayerButton>
        </MiniPlayer>
      )}
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  base: { position: 'relative', width: '100%', height: '100%' },
});

const Content = styled('div', {
  base: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: 'max(16px, env(safe-area-inset-top))',
    paddingBottom: '56px',
    backgroundColor: 'var(--sl-color-bg)',
  },
});

const Header = styled('div', {
  base: { display: 'flex', paddingBottom: '16px' },
});

const ImageWrapper = styled('div', {
  base: { width: '160px', height: '160px' },
});

const Image = styled('img', {
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
  },
});

const Details = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '16px',
    lineHeight: '1.6',
  },
});

const AlbumName = styled('span', {
  base: {
    fontWeight: '700',
    fontSize: '14px',
    color: 'var(--sl-color-white)',
  },
});

const AlbumArtist = styled('span', {
  base: { fontSize: '14px', color: 'var(--sl-color-text-accent)' },
});

const AlbumInfo = styled('span', {
  base: { fontSize: '14px', color: 'var(--sl-color-gray-3)' },
});

const Controls = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    margin: '0px -16px',
    borderTop: '1px solid var(--sl-color-gray-5)',
    borderBottom: '1px solid var(--sl-color-gray-5)',
    '& > button:first-of-type': { marginRight: '16px' },
  },
});

const ControlButton = styled('button', {
  base: {
    flex: '1',
    border: 'none',
    backgroundColor: 'var(--sl-color-bg-nav)',
    color: 'var(--sl-color-text-accent)',
    borderRadius: '8px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    fontSize: '14px',
    outline: 'none',
    '&:active': { backgroundColor: 'var(--sl-color-gray-5)' },
    '& > span': { marginLeft: '8px' },
  },
});

const SongList = styled('ul', {
  base: {
    padding: '0',
    margin: '0px -16px',
    flex: '1',
    overflow: 'auto',
  },
});

const SongListItem = styled('li', {
  base: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    paddingLeft: '16px',
    '& > span': {
      display: 'inline-flex',
      color: 'var(--sl-color-gray-3)',
      paddingLeft: '4px',
      paddingRight: '8px',
    },
    '& > div': {
      color: 'var(--sl-color-white)',
      flex: '1',
      borderBottom: '1px solid var(--sl-color-gray-5)',
      padding: '16px',
      paddingLeft: '0px',
    },
  },
});

const MiniPlayer = styled('div', {
  base: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

const MiniPlayerButton = styled(motion.button, {
  base: {
    maxWidth: '680px',
    outline: 'none',
    border: 'none',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
    color: 'var(--sl-color-white)',
    backgroundColor: 'var(--sl-color-bg-nav)',
    boxShadow: '-4px 0px 12px rgba(0, 0, 0, 0.5)',
    '&:active': { backgroundColor: 'var(--sl-color-gray-5)' },
  },
});

const MiniImage = styled('img', {
  base: {
    display: 'block',
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.4)',
  },
});

const MiniSongName = styled('div', {
  base: {
    flex: '1',
    margin: '0px 16px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '14px',
    textAlign: 'left',
  },
});

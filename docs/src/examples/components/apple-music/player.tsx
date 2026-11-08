import {
  FaBackward,
  FaFire,
  FaForward,
  FaListUl,
  FaPlay,
  FaPodcast,
  FaVolumeOff,
  FaVolumeUp,
} from 'react-icons/fa';

import { styled } from '../../../../styled-system/jsx';
import { MoreButton } from './common';
import type { Album as AlbumType } from './data';

export function Player({ song, album }: { song: string; album: AlbumType }) {
  return (
    <Wrapper>
      <AlbumImage>
        <ImageWrapper>
          <Image src={album.image} />
        </ImageWrapper>
      </AlbumImage>

      <MainContent>
        <SongInfoWrapper>
          <SongInfo>
            <SongName>{song}</SongName>
            <ArtistName>{album.artist}</ArtistName>
          </SongInfo>
          <MoreButton />
        </SongInfoWrapper>

        <Track>
          <TrackTimeline />
          <TrackTimeInfo>
            <span>0.00</span>
            <span>-4.00</span>
          </TrackTimeInfo>
        </Track>

        <Controls>
          <Control onClick={() => console.log('Prev song')}>
            <FaBackward size={32} />
          </Control>
          <Control onClick={() => console.log('Play / Pause')}>
            <FaPlay size={32} />
          </Control>
          <Control onClick={() => console.log('Next song')}>
            <FaForward size={32} />
          </Control>
        </Controls>

        <VolumeControl>
          <FaVolumeOff size={12} />
          <VolumeSlider type="range" />
          <FaVolumeUp size={12} />
        </VolumeControl>

        <IconButtons>
          <FaFire size={20} color="var(--sl-color-gray-5)" />
          <FaPodcast size={20} color="var(--sl-color-text-accent)" />
          <FaListUl size={20} color="var(--sl-color-text-accent)" />
        </IconButtons>
      </MainContent>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0px 24px 16px 24px',
  },
});

const AlbumImage = styled('div', {
  base: {
    position: 'relative',
    marginBottom: '40px',
    flex: '1',
  },
});

const ImageWrapper = styled('div', {
  base: {
    zIndex: '99',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Image = styled('img', {
  base: {
    display: 'block',
    height: '100%',
    maxHeight: '300px',
    width: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 0px 1px rgba(255, 255, 255, 0.3)',
    zIndex: '999',
  },
});

const MainContent = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    flex: 'none',
  },
});

const SongInfoWrapper = styled('div', {
  base: { display: 'flex', alignItems: 'center' },
});

const SongInfo = styled('span', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    lineHeight: '1.4',
  },
});

const SongName = styled('span', {
  base: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--sl-color-white)',
    lineHeight: '1.4',
  },
});

const ArtistName = styled('div', {
  base: { fontSize: '18px', color: 'var(--sl-color-text-accent)' },
});

const Track = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 0px',
  },
});

const TrackTimeline = styled('div', {
  base: {
    width: '100%',
    height: '3px',
    backgroundColor: 'var(--sl-color-gray-5)',
    marginBottom: '4px',
    position: 'relative',
    borderRadius: '1px',
    '&:before': {
      content: "' '",
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      position: 'absolute',
      left: '0',
      top: '-2px',
      backgroundColor: 'var(--sl-color-gray-3)',
    },
  },
});

const TrackTimeInfo = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'var(--sl-color-gray-3)',
    fontSize: '12px',
  },
});

const Controls = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
  },
});

const Control = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    color: 'var(--sl-color-white)',
    outline: 'none',
    '&:active': { backgroundColor: 'var(--sl-color-gray-4)' },
  },
});

const VolumeControl = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--sl-color-gray-3)',
  },
});

const VolumeSlider = styled('input', {
  base: {
    appearance: 'none',
    width: '100%',
    height: '34px',
    flex: '1',
    margin: '0px 12px',
    padding: '32px 0px',
    background: 'none',
    '&:focus': { outline: 'none' },
    '&::-webkit-slider-runnable-track': {
      width: '100%',
      height: '3px',
      background: 'var(--sl-color-gray-4)',
      borderRadius: '1px',
      cursor: 'pointer',
    },
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.2)',
      height: '20px',
      width: '20px',
      borderRadius: '50%',
      background: 'var(--sl-color-white)',
      cursor: 'pointer',
      marginTop: '-9px',
    },
  },
});

const IconButtons = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '16px',
  },
});

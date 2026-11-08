import { useState } from 'react';
import {
  FaBackward,
  FaForward,
  FaPause,
  FaPlay,
  FaVolumeOff,
  FaVolumeUp,
} from 'react-icons/fa';
import { FiAirplay, FiList, FiMessageCircle, FiStar } from 'react-icons/fi';

import { styled } from '../../../../styled-system/jsx';
import { formatTime, MoreButton } from './common';
import type { Album, Song } from './data';

export function Player({
  song,
  album,
  elapsed,
  isPlaying,
  isFavorite,
  onSeek,
  onTogglePlaying,
  onPreviousSong,
  onNextSong,
  onToggleFavorite,
}: {
  song: Song;
  album: Album;
  elapsed: number;
  isPlaying: boolean;
  isFavorite: boolean;
  onSeek: (seconds: number) => void;
  onTogglePlaying: () => void;
  onPreviousSong: () => void;
  onNextSong: () => void;
  onToggleFavorite: () => void;
}) {
  const [volume, setVolume] = useState(70);

  return (
    <Wrapper>
      <ArtworkArea>
        <Artwork
          src={album.image}
          alt={`${album.name} album cover`}
          width={640}
          height={640}
          data-playing={isPlaying}
        />
      </ArtworkArea>
      <MainContent>
        <SongInfoRow>
          <SongInfo>
            <SongName>{song.title}</SongName>
            <ArtistName>{album.artist}</ArtistName>
          </SongInfo>
          <SmallControl
            type="button"
            aria-label={
              isFavorite ? 'Remove from favorites' : 'Add to favorites'
            }
            aria-pressed={isFavorite}
            onClick={onToggleFavorite}
          >
            <FiStar size={23} fill={isFavorite ? 'currentColor' : 'none'} />
          </SmallControl>
          <MoreButton disabled />
        </SongInfoRow>

        <Track>
          <SeekSlider
            aria-label="Playback position"
            aria-valuetext={`${formatTime(elapsed)} of ${formatTime(song.duration)}`}
            type="range"
            min={0}
            max={song.duration}
            value={elapsed}
            onChange={(event) => onSeek(Number(event.target.value))}
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,.65) ${(elapsed / song.duration) * 100}%, rgba(255,255,255,.2) ${(elapsed / song.duration) * 100}%)`,
            }}
          />
          <TrackTimes>
            <span>{formatTime(elapsed)}</span>
            <span>−{formatTime(song.duration - elapsed)}</span>
          </TrackTimes>
        </Track>

        <Transport>
          <TransportButton
            type="button"
            onClick={onPreviousSong}
            aria-label="Previous song"
          >
            <FaBackward size={32} />
          </TransportButton>
          <TransportButton
            type="button"
            onClick={onTogglePlaying}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <FaPause size={37} /> : <FaPlay size={37} />}
          </TransportButton>
          <TransportButton
            type="button"
            onClick={onNextSong}
            aria-label="Next song"
          >
            <FaForward size={32} />
          </TransportButton>
        </Transport>

        <VolumeControl>
          <FaVolumeOff size={15} aria-hidden="true" />
          <VolumeSlider
            type="range"
            min={0}
            max={100}
            value={volume}
            aria-label="Volume"
            onChange={(event) => setVolume(Number(event.target.value))}
          />
          <FaVolumeUp size={15} aria-hidden="true" />
        </VolumeControl>

        <UtilityControls aria-hidden="true">
          <UtilityIcon>
            <FiMessageCircle size={24} />
          </UtilityIcon>
          <UtilityIcon>
            <FiAirplay size={24} />
          </UtilityIcon>
          <UtilityIcon>
            <FiList size={25} />
          </UtilityIcon>
        </UtilityControls>
      </MainContent>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: 'min(660px, calc(100dvh - 70px))',
    padding: '0 28px max(20px, env(safe-area-inset-bottom))',
    color: '#fff',
    colorScheme: 'dark',
  },
});
const ArtworkArea = styled('div', {
  base: {
    display: 'grid',
    placeItems: 'center',
    flex: '1',
    minHeight: '120px',
    padding: '20px 12px 30px',
  },
});
const Artwork = styled('img', {
  base: {
    display: 'block',
    width: 'min(100%, 320px)',
    height: 'auto',
    maxHeight: '100%',
    aspectRatio: '1',
    objectFit: 'contain',
    borderRadius: '10px',
    boxShadow: '0 15px 45px rgb(0 0 0 / 25%)',
    transform: 'scale(.91)',
    transition: 'transform 400ms ease',
    '&[data-playing="true"]': { transform: 'scale(1)' },
    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
  },
});
const MainContent = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '0',
    gap: '22px',
  },
});
const SongInfoRow = styled('div', {
  base: { display: 'flex', alignItems: 'center', gap: '4px' },
});
const SongInfo = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    minWidth: '0',
    gap: '3px',
  },
});
const SongName = styled('span', {
  base: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '-0.025em',
    lineHeight: '1.3',
  },
});
const ArtistName = styled('span', {
  base: { fontSize: '17px', color: 'rgb(255 255 255 / 65%)' },
});
const SmallControl = styled('button', {
  base: {
    display: 'grid',
    placeItems: 'center',
    flexShrink: '0',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    '&:hover': { background: 'rgb(255 255 255 / 10%)' },
    '&:focus-visible': { outline: '2px solid #fff', outlineOffset: '2px' },
  },
});
const Track = styled('div', {
  base: { display: 'flex', flexDirection: 'column', gap: '9px' },
});
const SeekSlider = styled('input', {
  base: {
    appearance: 'none',
    width: '100%',
    height: '5px',
    margin: '0',
    borderRadius: '999px',
    cursor: 'pointer',
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: '#fff',
    },
    '&::-moz-range-thumb': {
      width: '7px',
      height: '7px',
      border: '0',
      borderRadius: '50%',
      background: '#fff',
    },
    '&:focus-visible': { outline: '2px solid #fff', outlineOffset: '5px' },
  },
});
const TrackTimes = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'rgb(255 255 255 / 45%)',
    fontSize: '11px',
    fontVariantNumeric: 'tabular-nums',
  },
});
const Transport = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 22px',
  },
});
const TransportButton = styled('button', {
  base: {
    display: 'grid',
    placeItems: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    '&:active': {
      transform: 'scale(.93)',
      background: 'rgb(255 255 255 / 8%)',
    },
    '&:focus-visible': { outline: '2px solid #fff' },
  },
});
const VolumeControl = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'rgb(255 255 255 / 55%)',
    paddingTop: '4px',
  },
});
const VolumeSlider = styled('input', {
  base: {
    appearance: 'none',
    flex: '1',
    minWidth: '0',
    height: '4px',
    margin: '12px 0',
    borderRadius: '999px',
    background: 'rgb(255 255 255 / 25%)',
    cursor: 'pointer',
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 2px 8px rgb(0 0 0 / 20%)',
    },
    '&::-moz-range-thumb': {
      width: '20px',
      height: '20px',
      border: '0',
      borderRadius: '50%',
      background: '#fff',
    },
    '&:focus-visible': { outline: '2px solid #fff', outlineOffset: '7px' },
  },
});
const UtilityControls = styled('div', {
  base: { display: 'flex', justifyContent: 'space-between', padding: '0 20px' },
});
const UtilityIcon = styled('span', {
  base: {
    display: 'grid',
    placeItems: 'center',
    width: '48px',
    height: '40px',
    color: 'rgb(255 255 255 / 65%)',
  },
});

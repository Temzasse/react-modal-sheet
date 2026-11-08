import { useEffect, useState } from 'react';
import { Sheet } from 'react-modal-sheet';

import { styled } from '../../../../styled-system/jsx';
import { Album } from './album';
import { album } from './data';
import { Player } from './player';

export function AppleMusic() {
  const [isPlayerOpen, setPlayerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [isFavorite, setFavorite] = useState(false);
  const currentSong = album.songs[currentIndex] ?? album.songs[0];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setElapsed((seconds) => Math.min(seconds + 1, currentSong.duration));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isPlaying, currentSong.duration]);

  function selectSong(index: number) {
    setCurrentIndex(index);
    setElapsed(0);
    setPlaying(true);
  }

  function nextSong() {
    selectSong((currentIndex + 1) % album.songs.length);
  }

  function previousSong() {
    if (elapsed > 3) {
      setElapsed(0);
      return;
    }
    selectSong((currentIndex - 1 + album.songs.length) % album.songs.length);
  }

  function shuffleSongs() {
    selectSong(
      (currentIndex +
        1 +
        Math.floor(Math.random() * (album.songs.length - 1))) %
        album.songs.length
    );
  }

  return (
    <>
      <link rel="preload" as="image" href={album.image} />
      <Album
        album={album}
        currentSong={currentSong}
        isPlaying={isPlaying}
        onSongClick={selectSong}
        onMiniPlayerClick={() => setPlayerOpen(true)}
        onTogglePlaying={() => setPlaying(!isPlaying)}
        onNextSong={nextSong}
        onShuffle={shuffleSongs}
      />
      <PlayerSheet
        isOpen={isPlayerOpen}
        onClose={() => setPlayerOpen(false)}
        modalEffectRootId="root"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content disableDrag>
            <Player
              album={album}
              song={currentSong}
              elapsed={elapsed}
              isPlaying={isPlaying}
              isFavorite={isFavorite}
              onSeek={setElapsed}
              onTogglePlaying={() => setPlaying(!isPlaying)}
              onPreviousSong={previousSong}
              onNextSong={nextSong}
              onToggleFavorite={() => setFavorite(!isFavorite)}
            />
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setPlayerOpen(false)} />
      </PlayerSheet>
    </>
  );
}

const PlayerSheet = styled(Sheet, {
  base: {
    '& .react-modal-sheet-container': {
      maxWidth: '560px',
      left: 'max(0px, calc(50% - 280px)) !important',
      background:
        'linear-gradient(160deg, #3b274b 0%, #291c38 60%, #1b1228 100%) !important',
      color: '#fff',
    },
    '& .react-modal-sheet-header': { height: '32px' },
    '& .react-modal-sheet-drag-indicator': {
      backgroundColor: 'rgb(255 255 255 / 25%) !important',
    },
    '& .react-modal-sheet-backdrop': {
      backgroundColor: 'rgb(0 0 0 / 35%) !important',
    },
  },
});

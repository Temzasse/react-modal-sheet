import { useState } from 'react';
import { Sheet } from 'react-modal-sheet';

import { styled } from '../../../../styled-system/jsx';
import { Album } from './album';
import { album } from './data';
import { Player } from './player';

export function AppleMusic() {
  const [isPlayerOpen, setPlayerOpen] = useState(false);
  // oxlint-disable-next-line typescript/no-non-null-assertion -- songs are static
  const [currentSong, setCurrentSong] = useState(album.songs[0]!);

  const openPlayer = () => setPlayerOpen(true);
  const closePlayer = () => setPlayerOpen(false);

  return (
    <>
      <link rel="preload" as="image" href={album.image} />
      <Album
        album={album}
        currentSong={currentSong}
        isPlayerOpen={isPlayerOpen}
        onMiniPlayerClick={openPlayer}
        onSongClick={setCurrentSong}
      />

      <PlayerSheet
        isOpen={isPlayerOpen}
        onClose={closePlayer}
        modalEffectRootId="root"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Player album={album} song={currentSong} />
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </PlayerSheet>
    </>
  );
}

const PlayerSheet = styled(Sheet, {
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
      backgroundColor: 'var(--sl-color-gray-4) !important',
    },
  },
});

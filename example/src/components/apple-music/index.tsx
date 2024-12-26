import { useState } from 'react';
import { styled } from 'styled-components';
import { Sheet } from 'react-modal-sheet';

import { useMetaThemeColor } from '../hooks';
import { album } from './data';
import { Album } from './Album';
import { Player } from './Player';

export function AppleMusic() {
  const [isPlayerOpen, setPlayerOpen] = useState(false);
  // biome-ignore lint/style/noNonNullAssertion: songs are static
  const [currentSong, setCurrentSong] = useState(album.songs[0]!);

  const openPlayer = () => setPlayerOpen(true);
  const closePlayer = () => setPlayerOpen(false);

  useMetaThemeColor({ when: isPlayerOpen, from: '#111', to: '#000' });
  useMetaThemeColor({ to: '#111' });

  return (
    <>
      <Album
        album={album}
        currentSong={currentSong}
        isPlayerOpen={isPlayerOpen}
        onMiniPlayerClick={openPlayer}
        onSongClick={setCurrentSong}
      />

      <PlayerSheet isOpen={isPlayerOpen} onClose={closePlayer} rootId="root">
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

const PlayerSheet = styled(Sheet)`
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

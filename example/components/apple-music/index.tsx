import * as React from 'react';
import styled from 'styled-components';

import { album } from './data';
import { Sheet } from '../../..';
import Album from './Album';
import Player from './Player';

const IOSMusicPlayer = () => {
  const [isPlayerOpen, setPlayerOpen] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState<string>(album.songs[0]);

  const openPlayer = () => setPlayerOpen(true);
  const closePlayer = () => setPlayerOpen(false);

  return (
    <Wrapper>
      <Album
        album={album}
        currentSong={currentSong}
        isPlayerOpen={isPlayerOpen}
        onMiniPlayerClick={openPlayer}
        onSongClick={setCurrentSong}
      />

      <PlayerSheet isOpen={isPlayerOpen} onClose={closePlayer} rootId="root">
        <Player album={album} song={currentSong} />
      </PlayerSheet>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
`;

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

export default IOSMusicPlayer;

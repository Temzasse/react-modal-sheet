import * as React from 'react';
import styled from 'styled-components';
import { FaPlay, FaForward, FaRandom } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Album as AlbumType } from './data';
import { MoreButton } from './common';

const Album = ({
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
}) => {
  return (
    <Wrapper>
      <Content bg={isPlayerOpen ? '#222' : '#111'}>
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
          <MiniPlayerButton
            onClick={onMiniPlayerClick}
            initial={{ translateY: '100%' }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.4 }}
          >
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
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div<{ bg: string }>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: max(16px, env(safe-area-inset-top));
  padding-bottom: 56px;
  background-color: ${p => p.bg};
  transition: all 200ms ease-in-out;
`;

const Header = styled.div`
  display: flex;
  padding-bottom: 16px;
`;

const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 1.6;
`;

const AlbumName = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;

const AlbumArtist = styled.span`
  font-size: 14px;
  color: #73ffd3;
`;

const AlbumInfo = styled.span`
  font-size: 14px;
  color: #888;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin: 0px -16px;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;

  & > button:first-of-type {
    margin-right: 16px;
  }
`;

const ControlButton = styled.button`
  flex: 1;
  border: none;
  background-color: #222;
  color: #73ffd3;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  outline: none;

  &:active {
    background-color: #333;
  }

  & > span {
    margin-left: 8px;
  }
`;

const SongList = styled.ul`
  padding: 0;
  margin: 0;
  flex: 1;
  overflow: auto;
  margin: 0px -16px;
`;

const SongListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 16px;

  & > span {
    display: inline-flex;
    color: #888;
    padding-left: 4px;
    padding-right: 8px;
  }

  & > div {
    color: #fff;
    flex: 1;
    border-bottom: 1px solid #222;
    padding: 16px;
    padding-left: 0px;
  }
`;

const MiniPlayer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MiniPlayerButton = styled(motion.button)`
  max-width: 680px;
  outline: none;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  padding-bottom: max(8px, env(safe-area-inset-bottom));
  color: #fff;
  background-color: #222;
  box-shadow: -4px 0px 12px rgba(0, 0, 0, 0.5);

  &:active {
    background-color: #333;
  }
`;

const MiniImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
`;

const MiniSongName = styled.div`
  flex: 1;
  margin: 0px 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  text-align: left;
`;

export default Album;

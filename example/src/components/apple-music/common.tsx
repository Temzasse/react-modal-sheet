import { FaEllipsisH } from 'react-icons/fa';
import { styled } from 'styled-components';

export function MoreButton() {
  return (
    <AlbumMoreButton>
      <FaEllipsisH size={16} />
    </AlbumMoreButton>
  );
}

const AlbumMoreButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #135843;
  color: #73ffd3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

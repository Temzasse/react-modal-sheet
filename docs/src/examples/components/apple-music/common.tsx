import { FaEllipsisH } from 'react-icons/fa';

import { styled } from '../../../../styled-system/jsx';

export function MoreButton() {
  return (
    <AlbumMoreButton>
      <FaEllipsisH size={16} />
    </AlbumMoreButton>
  );
}

const AlbumMoreButton = styled('div', {
  base: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: 'var(--sl-color-accent-low)',
    color: 'var(--sl-color-text-accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import type { ButtonHTMLAttributes } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { styled } from '../../../../styled-system/jsx';

export function MoreButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <MoreControl type="button" aria-label="More options" {...props}>
      <FiMoreHorizontal size={22} />
    </MoreControl>
  );
}

export function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

const MoreControl = styled('button', {
  base: {
    display: 'grid',
    placeItems: 'center',
    flexShrink: '0',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    '&:hover:not(:disabled)': { background: 'rgb(255 255 255 / 10%)' },
    '&:disabled': { cursor: 'default' },
    '&:focus-visible': { outline: '2px solid #fff', outlineOffset: '3px' },
  },
});

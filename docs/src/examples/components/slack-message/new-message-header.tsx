import { useRef } from 'react';
import { useButton } from 'react-aria';
import { FiX } from 'react-icons/fi';

import { styled } from '../../../../styled-system/jsx';

export function NewMessageHeader({
  onClose,
  titleId,
}: {
  onClose: () => void;
  titleId?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const closeButton = useButton(
    { onPress: onClose, 'aria-label': 'Close new message' },
    ref
  );

  return (
    <Wrapper>
      <Handle aria-hidden="true" />
      <Title id={titleId}>New message</Title>
      <CloseButton {...closeButton.buttonProps} ref={ref}>
        <FiX size={21} />
      </CloseButton>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '{spacing.$7} {spacing.$5} 15px',
    color: 'var(--slack-text)',
  },
});
const Handle = styled('span', {
  base: {
    position: 'absolute',
    top: '9px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '34px',
    height: '4px',
    borderRadius: '99px',
    background: 'var(--slack-muted)',
    opacity: '.5',
  },
});
const Title = styled('h2', {
  base: {
    margin: '$0',
    fontSize: '24px',
    lineHeight: '1.2',
    fontWeight: '750',
    letterSpacing: '-.025em',
  },
});
const CloseButton = styled('button', {
  base: {
    display: 'grid',
    placeItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'var(--slack-surface)',
    color: 'var(--slack-muted)',
    cursor: 'pointer',
    '&:focus-visible': {
      outline: '2px solid var(--slack-accent)',
      outlineOffset: '3px',
    },
  },
});

import { useRef } from 'react';
import { useButton } from 'react-aria';
import { FiX as CloseIcon } from 'react-icons/fi';

import { styled } from '../../../../styled-system/jsx';

export function NewMessageHeader({
  sheetState,
  titleProps,
}: {
  sheetState: any;
  titleProps: any;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const closeButton = useButton(
    { onPress: sheetState.close, 'aria-label': 'Close bottom sheet' },
    ref
  ); // prettier-ignore

  return (
    <Wrapper>
      <CloseWrapper {...closeButton.buttonProps} ref={ref}>
        <CloseIcon size={24} color="var(--example-text)" />
      </CloseWrapper>

      <Title {...titleProps}>New Message</Title>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    color: 'var(--example-text)',
    position: 'relative',
  },
});

const CloseWrapper = styled('button', {
  base: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

const Title = styled('span', { base: { fontWeight: '600', fontSize: '16px' } });

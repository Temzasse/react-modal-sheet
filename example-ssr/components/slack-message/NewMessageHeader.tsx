import * as React from 'react';
import styled from 'styled-components';
import { FiX as CloseIcon } from 'react-icons/fi';
import { useButton } from '@react-aria/button';

const NewMessageHeader = ({
  sheetState,
  titleProps,
}: {
  sheetState: any;
  titleProps: any;
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const closeButton = useButton({ onPress: sheetState.close, 'aria-label': 'Close bottom sheet' }, ref); // prettier-ignore

  return (
    <Wrapper>
      <CloseWrapper {...closeButton.buttonProps} ref={ref}>
        <CloseIcon size={24} color="#fff" />
      </CloseWrapper>

      <Title {...titleProps}>New Message</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: #fff;
  position: relative;
`;

const CloseWrapper = styled.button`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export default NewMessageHeader;

import * as React from 'react';
import styled from 'styled-components';
import { useBottomSheet } from '../..';

const Sheet = () => {
  const bottomSheet = useBottomSheet();

  return (
    <Wrapper>
      <h2>Sheet</h2>
      <button onClick={bottomSheet.close}>Close</button>
      <Box />
      <p>End</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  flex: 1;
  background-color: red;
`;

export default Sheet;

import * as React from 'react';
import styled from 'styled-components';

const Sheet = ({ close }: { close: () => void }) => {
  return (
    <Wrapper>
      <h2>Sheet</h2>
      <button onClick={close}>Close</button>
      <Box />
      <p>End</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
`;

const Box = styled.div`
  flex: 1;
  background-color: #eee;
`;

export default Sheet;

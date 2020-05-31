import * as React from 'react';
import styled from 'styled-components';

const Sheet = ({
  close,
  snapTo,
}: {
  close: () => void;
  snapTo: (i: number) => void;
}) => {
  return (
    <Wrapper>
      <h2>Sheet</h2>
      <p>This is the bottom sheet ✨</p>

      <Controls>
        <button onClick={close}>Close</button>
        <button onClick={() => snapTo(0)}>Snap to 600</button>
        <button onClick={() => snapTo(1)}>Snap to 400</button>
        <button onClick={() => snapTo(2)}>Snap to 100</button>
        <button onClick={() => snapTo(3)}>Snap to 0 (close)</button>
      </Controls>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;

  h2 {
    margin: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  flex: 1;
  background-color: #eee;
`;

export default Sheet;

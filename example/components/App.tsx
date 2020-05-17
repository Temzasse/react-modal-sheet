import * as React from 'react';
import styled from 'styled-components';
import { useBottomSheet } from '../..';
import Sheet from './Sheet';

const App = () => {
  const bottomSheet = useBottomSheet();

  function showBottomSheet() {
    bottomSheet.open(<Sheet />);
  }

  return (
    <Wrapper>
      <button onClick={showBottomSheet}>Show bottom sheet</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
`;

export default App;

import * as React from 'react';
import styled from 'styled-components';

import { Button } from './Uikit';
import Simple from './Simple';
import AppleMusic from './apple-music';

const App = () => {
  const [visibleExample, setVisibleExample] = React.useState<string | null>(
    null
  );

  return (
    <Wrapper bg={visibleExample === 'apple' ? '#000' : '#fff'}>
      {visibleExample === null && (
        <>
          <Button onClick={() => setVisibleExample('simple')}>
            Show simple example
          </Button>
          <Button onClick={() => setVisibleExample('apple')}>
            Show Apple Music example
          </Button>
        </>
      )}

      {visibleExample === 'simple' && <Simple />}
      {visibleExample === 'apple' && <AppleMusic />}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-color: ${p => p.bg};

  & > button {
    margin: 16px 0px;
  }
`;

export default App;

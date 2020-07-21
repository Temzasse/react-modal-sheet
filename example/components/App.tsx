import * as React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import Simple from './Simple';
import Scrollable from './Scrollable';
import AppleMusic from './apple-music';
import SlackMessage from './slack-message';

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<ExampleSelector />} />
        <Route path="snap-points/*" element={<Simple />} />
        <Route path="scrollable/*" element={<Scrollable />} />
        <Route path="apple-music/*" element={<AppleMusic />} />
        <Route path="slack-message/*" element={<SlackMessage />} />
      </Routes>
    </Wrapper>
  );
};

const ExampleSelector = () => {
  return (
    <ExampleLinks>
      <Link to="snap-points">Snap points</Link>
      <Link to="scrollable">Scrollable</Link>
      <Link to="apple-music">Apple Music</Link>
      <Link to="slack-message">Slack Message</Link>
    </ExampleLinks>
  );
};

const ExampleLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: -webkit-fill-available;

  & > button {
    margin: 16px 0px;
  }
`;

export default App;

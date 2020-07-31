import * as React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import { Screen, DarkMode } from './common';
import SnapPoints from './SnapPoints';
import Scrollable from './Scrollable';
import AppleMusic from './apple-music';
import SlackMessage from './slack-message';
import A11y from './a11y';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Screen bg="light">
            <ExampleSelector />
          </Screen>
        }
      />
      <Route
        path="snap-points/*"
        element={
          <Screen bg="light">
            <SnapPoints />
          </Screen>
        }
      />
      <Route
        path="scrollable/*"
        element={
          <Screen bg="light">
            <Scrollable />
          </Screen>
        }
      />
      <Route
        path="apple-music/*"
        element={
          <Screen bg="light">
            <AppleMusic />
            <DarkMode />
          </Screen>
        }
      />
      <Route
        path="slack-message/*"
        element={
          <Screen bg="light">
            <SlackMessage />
            <DarkMode />
          </Screen>
        }
      />
      <Route
        path="a11y/*"
        element={
          <Screen bg="light">
            <A11y />
          </Screen>
        }
      />
    </Routes>
  );
};

const ExampleSelector = () => {
  return (
    <ExampleLinks>
      <Link to="snap-points">Snap points</Link>
      <Link to="scrollable">Scrollable</Link>
      <Link to="apple-music">Apple Music</Link>
      <Link to="slack-message">Slack Message</Link>
      <Link to="a11y">Accessible Sheet</Link>
    </ExampleLinks>
  );
};

const ExampleLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;

import * as React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import { Screen, DarkMode } from './common';
import Simple from './Simple';
import Scrollable from './Scrollable';
import AppleMusic from './apple-music';
import SlackMessage from './slack-message';

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
            <Simple />
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
    </ExampleLinks>
  );
};

const ExampleLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;

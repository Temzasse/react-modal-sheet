import { styled } from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { MdAccessibility as A11yIcon } from 'react-icons/md';

import {
  FaScroll as ScrollIcon,
  FaLock as LockIcon,
  FaKeyboard as KeyboardIcon,
} from 'react-icons/fa';

import {
  AiOutlineColumnHeight as HeightIcon,
  AiFillApple as AppleIcon,
  AiOutlineSlack as SlackIcon,
  AiOutlineControl as SnapIcon,
} from 'react-icons/ai';

import { Screen, DarkMode } from './common';
import { SnapPoints } from './SnapPoints';
import { Scrollable } from './Scrollable';
import { AppleMusic } from './apple-music';
import { SlackMessage } from './slack-message';
import { A11y } from './a11y';
import { DisableDrag } from './DisableDrag';
import { ScrollableSnapPoints } from './ScrollableSnapPoints';
import { ContentHeight } from './ContentHeight';

export function App() {
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
        path="scrollable-snap-points/*"
        element={
          <Screen bg="light">
            <ScrollableSnapPoints />
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
        path="content-height/*"
        element={
          <Screen bg="light">
            <ContentHeight />
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
      <Route
        path="disable-drag/*"
        element={
          <Screen bg="light">
            <DisableDrag />
          </Screen>
        }
      />
    </Routes>
  );
}

const ExampleSelector = () => {
  return (
    <ExampleLinks>
      <li>
        <ExampleLink to="snap-points">
          <SnapIcon size={48} />
          <span>Snap points</span>
        </ExampleLink>
      </li>

      <li>
        <ExampleLink to="content-height">
          <HeightIcon size={48} />
          <span>Use Content Height</span>
        </ExampleLink>
      </li>

      <li>
        <ExampleLink to="scrollable">
          <ScrollIcon size={48} />
          <span>Scrollable</span>
        </ExampleLink>
      </li>

      <li>
        <ExampleLink to="scrollable-snap-points">
          <ScrollIcon size={48} />
          <span>Scrollable (with snap points)</span>
        </ExampleLink>
      </li>

      <li>
        <ExampleLink to="disable-drag">
          <LockIcon size={48} />
          <span>Disable drag</span>
        </ExampleLink>
      </li>

      <li>
        <ExampleLink to="apple-music">
          <AppleIcon size={48} />
          <span>Apple Music</span>
        </ExampleLink>
      </li>

      <li>
        <ExampleLink to="slack-message">
          <SlackIcon size={48} />
          <span>Slack Message</span>
        </ExampleLink>
      </li>

      <li>
        <ExampleLink to="a11y">
          <A11yIcon size={48} />
          <span>Accessible Sheet</span>
        </ExampleLink>
      </li>
    </ExampleLinks>
  );
};

const ExampleLinks = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  width: 100%;
  max-width: 800px;
  padding: 16px;
`;

const ExampleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 48px;
  text-align: center;
  background-color: aliceblue;
  color: mediumslateblue;
  border: 1px solid mediumslateblue;
  border-radius: 12px;

  span {
    font-weight: 500;
    font-size: 18px;
  }

  & > * + * {
    margin-top: 16px;
  }
`;

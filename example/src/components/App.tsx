import { styled } from 'styled-components';
import { Routes, Route, Link } from 'react-router';
import { MdAccessibility as A11yIcon } from 'react-icons/md';

import {
  FaScroll as ScrollIcon,
  FaLock as LockIcon,
  FaKeyboard as KeyboardIcon,
  FaMoon as MoonIcon,
  FaWalking,
  FaMobile,
} from 'react-icons/fa';

import {
  AiOutlineColumnHeight as HeightIcon,
  AiFillApple as AppleIcon,
  AiOutlineSlack as SlackIcon,
  AiOutlineControl as SnapIcon,
} from 'react-icons/ai';

import { Screen, DarkMode, ScrollView } from './common';
import { SnapPoints } from './SnapPoints';
import { Scrollable } from './Scrollable';
import { AppleMusic } from './apple-music';
import { SlackMessage } from './slack-message';
import { A11y } from './a11y';
import { DisableDrag } from './DisableDrag';
import { ScrollableSnapPoints } from './ScrollableSnapPoints';
import { ContentHeight } from './ContentHeight';
import { AvoidKeyboard } from './AvoidKeyboard';
import { ShadowDOM } from './ShadowDOM';
import { ReducedMotion } from './ReducedMotion';
import { FullScreen } from './FullScreen';

export function App() {
  return (
    <ScrollView>
      <Routes>
        <Route
          path="/"
          element={
            <Screen>
              <ExampleSelector />
            </Screen>
          }
        />
        <Route
          path="snap-points/*"
          element={
            <Screen>
              <SnapPoints />
            </Screen>
          }
        />
        <Route
          path="scrollable-snap-points/*"
          element={
            <Screen>
              <ScrollableSnapPoints />
            </Screen>
          }
        />
        <Route
          path="scrollable/*"
          element={
            <Screen>
              <Scrollable />
            </Screen>
          }
        />
        <Route
          path="avoid-keyboard/*"
          element={
            <Screen>
              <AvoidKeyboard />
            </Screen>
          }
        />
        <Route
          path="content-height/*"
          element={
            <Screen>
              <ContentHeight />
            </Screen>
          }
        />
        <Route
          path="apple-music/*"
          element={
            <Screen>
              <AppleMusic />
              <DarkMode />
            </Screen>
          }
        />
        <Route
          path="slack-message/*"
          element={
            <Screen>
              <SlackMessage />
              <DarkMode />
            </Screen>
          }
        />
        <Route
          path="a11y/*"
          element={
            <Screen>
              <A11y />
            </Screen>
          }
        />
        <Route
          path="disable-drag/*"
          element={
            <Screen>
              <DisableDrag />
            </Screen>
          }
        />
        <Route
          path="reduced-motion/*"
          element={
            <Screen>
              <ReducedMotion />
            </Screen>
          }
        />
         <Route
          path="full-screen/*"
          element={
            <Screen>
              <FullScreen />
            </Screen>
          }
        />
        <Route
          path="shadow-dom/*"
          element={
            <Screen>
              <ShadowDOM />
            </Screen>
          }
        />
      </Routes>
    </ScrollView>
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
        <ExampleLink to="avoid-keyboard">
          <KeyboardIcon size={48} />
          <span>Avoid keyboard</span>
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

      <li>
        <ExampleLink to="reduced-motion">
          <FaWalking size={48} />
          <span>Reduced Motion</span>
        </ExampleLink>
      </li>

      <li>
        <ExampleLink to="full-screen">
          <FaMobile size={48} />
          <span>Full screen</span>
        </ExampleLink>
      </li>


      <li>
        <ExampleLink to="shadow-dom">
          <MoonIcon size={48} />
          <span>Shadow DOM</span>
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
  margin: 0 auto;
  padding: 16px;
`;

const ExampleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 32px 48px;
  text-align: center;
  background-color: #f5f5f5;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #eee;
  }

  span {
    font-weight: 500;
    font-size: 18px;
  }
`;

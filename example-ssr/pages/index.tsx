import * as React from 'react';
import styled from 'styled-components';
import { FaScroll as ScrollIcon, FaLock as LockIcon } from 'react-icons/fa';
import { MdAccessibility as A11yIcon } from 'react-icons/md';
import Link from 'next/link';
import {
  AiFillApple as AppleIcon,
  AiOutlineSlack as SlackIcon,
  AiOutlineControl as SnapIcon,
} from 'react-icons/ai';
import { ReactNode } from 'react';
import { Screen } from '../components/common';

const ExampleSelector = () => {
  return (
    <Screen bg="light">
      <ExampleLinks>
        <li>
          <ExampleLink to="/snap-points">
            <SnapIcon size={48} />
            <span>Snap points</span>
          </ExampleLink>
        </li>

        <li>
          <ExampleLink to="/scrollable">
            <ScrollIcon size={48} />
            <span>Scrollable</span>
          </ExampleLink>
        </li>

        <li>
          <ExampleLink to="/disable-drag">
            <LockIcon size={48} />
            <span>Disable drag</span>
          </ExampleLink>
        </li>

        <li>
          <ExampleLink to="/apple-music">
            <AppleIcon size={48} />
            <span>Apple Music</span>
          </ExampleLink>
        </li>

        <li>
          <ExampleLink to="/slack-message">
            <SlackIcon size={48} />
            <span>Slack Message</span>
          </ExampleLink>
        </li>

        <li>
          <ExampleLink to="/a11y">
            <A11yIcon size={48} />
            <span>Accessible Sheet</span>
          </ExampleLink>
        </li>
      </ExampleLinks>
    </Screen>
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

const NextLink = ({
  to,
  children,
  ...rest
}: {
  to: string;
  children: ReactNode;
  [key: string]: any;
}) => (
  <Link href={to}>
    <a {...rest}>{children}</a>
  </Link>
);

const ExampleLink = styled(NextLink)`
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

export default ExampleSelector;

import { motion, useScroll, useTransform } from 'motion/react';
import { createContext, type ReactNode, useContext, useRef } from 'react';
import {
  type OverlayTriggerState,
  useOverlayTriggerState,
} from 'react-stately';

import { styled } from '../../../styled-system/jsx';
import { Button, ScrollView } from './common';

export const EmbeddedExampleContext = createContext(false);

type Props = {
  title: string;
  description?: string;
  children: (state: OverlayTriggerState) => ReactNode;
};

export function ExampleLayout({ title, description, children }: Props) {
  const embedded = useContext(EmbeddedExampleContext);
  const state = useOverlayTriggerState({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ axis: 'y', container: scrollRef });
  const fabOpacity = useTransform(scrollY, [200, 220], [0, 1]);
  const fabTranslateY = useTransform(scrollY, [200, 220], [20, 0]);

  return (
    <ScrollView ref={scrollRef}>
      {embedded ? (
        <InlineStage>
          <Button variant="launch" onPress={state.open}>
            Open sheet
          </Button>
        </InlineStage>
      ) : (
        <Wrapper>
          <Eyebrow>Interactive example</Eyebrow>
          <PageTitle>{title}</PageTitle>
          {description && <Description>{description}</Description>}
          <Button variant="launch" onPress={state.open}>
            Open sheet
          </Button>

          <SkeletonCanvas aria-hidden="true">
            <div data-skeleton="skeleton-heading">
              <div data-skeleton="avatar" />
              <div data-skeleton="lines">
                <div data-skeleton="bar title" />
                <div data-skeleton="bar short" />
              </div>
              <div data-skeleton="pill" />
            </div>
            <div data-skeleton="feature">
              <div data-skeleton="bar title" />
              <div data-skeleton="bar" />
              <div data-skeleton="bar short" />
              <div data-skeleton="chart">
                {[38, 62, 48, 80, 58, 92, 74, 100].map((height, index) => (
                  <span
                    key={index}
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div data-skeleton="cards">
              {[0, 1, 2].map((card) => (
                <div data-skeleton="card" key={card}>
                  <div data-skeleton="icon" />
                  <div data-skeleton="bar" />
                  <div data-skeleton="bar short" />
                </div>
              ))}
            </div>
            <div data-skeleton="activity">
              <div data-skeleton="bar title" />
              {Array.from({ length: 8 }, (_, index) => (
                <div data-skeleton="row" key={index}>
                  <div data-skeleton="avatar" />
                  <div data-skeleton="lines">
                    <div data-skeleton="bar" />
                    <div data-skeleton="bar short" />
                  </div>
                  <div data-skeleton="pill" />
                </div>
              ))}
            </div>
          </SkeletonCanvas>

          <ButtonWrapper
            style={{
              opacity: fabOpacity,
              y: fabTranslateY,
            }}
          >
            <Button variant="launch" onPress={state.open}>
              Open sheet
            </Button>
          </ButtonWrapper>
        </Wrapper>
      )}

      {children(state)}
    </ScrollView>
  );
}

const InlineStage = styled('div', {
  base: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100dvh',
    padding: '24px',
  },
});

const Wrapper = styled('main', {
  base: {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: 'max(96px, calc(env(safe-area-inset-top) + 80px)) 24px 64px',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: 'var(--sl-color-white)',
  },
});

const Eyebrow = styled('p', {
  base: {
    margin: '0 0 12px',
    color: 'var(--sl-color-text-accent)',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
});

const PageTitle = styled('h1', {
  base: {
    margin: '0 0 16px',
    fontSize: 'clamp(28px, 5vw, 40px)',
    fontWeight: '650',
    letterSpacing: '-0.035em',
    lineHeight: '1.15',
  },
});

const Description = styled('p', {
  base: {
    maxWidth: '56ch',
    margin: '0 0 24px',
    color: 'var(--sl-color-gray-2)',
    fontSize: '17px',
    lineHeight: '1.6',
    textWrap: 'pretty',
  },
});

const SkeletonCanvas = styled('div', {
  base: {
    '--skeleton': 'var(--sl-color-gray-5)',
    '--skeleton-soft': 'var(--sl-color-gray-6)',
    display: 'grid',
    gap: '24px',
    marginTop: '40px',
    paddingTop: '32px',
    borderTop: '1px solid var(--sl-color-gray-5)',
    '& [data-skeleton~="bar"]': {
      width: '78%',
      height: '9px',
      borderRadius: '4px',
      background: 'var(--skeleton)',
    },
    '& [data-skeleton~="bar"] + [data-skeleton~="bar"]': {
      marginTop: '10px',
    },
    '& [data-skeleton~="bar"][data-skeleton~="title"]': {
      width: '42%',
      height: '13px',
    },
    '& [data-skeleton~="bar"][data-skeleton~="short"]': {
      width: '48%',
      background: 'var(--skeleton-soft)',
    },
    '& [data-skeleton~="avatar"]': {
      width: '38px',
      height: '38px',
      flexShrink: '0',
      borderRadius: '50%',
      background: 'var(--skeleton)',
    },
    '& [data-skeleton~="lines"]': {
      flex: '1',
    },
    '& [data-skeleton~="pill"]': {
      width: '64px',
      height: '26px',
      borderRadius: '6px',
      background: 'var(--skeleton-soft)',
    },
    '& [data-skeleton~="skeleton-heading"], & [data-skeleton~="row"]': {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    '& [data-skeleton~="feature"], & [data-skeleton~="card"], & [data-skeleton~="activity"]':
      {
        padding: '24px',
        border: '1px solid var(--sl-color-gray-5)',
        borderRadius: '12px',
      },
    '& [data-skeleton~="feature"] > [data-skeleton~="bar"]:not([data-skeleton~="title"])':
      {
        maxWidth: '260px',
      },
    '& [data-skeleton~="feature"] > [data-skeleton~="title"]': {
      marginBottom: '20px',
    },
    '& [data-skeleton~="chart"]': {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '12px',
      height: '160px',
      paddingTop: '24px',
    },
    '& [data-skeleton~="chart"] span': {
      flex: '1',
      borderRadius: '5px 5px 0 0',
      background: 'var(--skeleton-soft)',
    },
    '& [data-skeleton~="chart"] span:nth-child(3n)': {
      background: 'var(--skeleton)',
    },
    '& [data-skeleton~="cards"]': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '16px',
    },
    '& [data-skeleton~="icon"]': {
      width: '30px',
      height: '30px',
      marginBottom: '24px',
      borderRadius: '8px',
      background: 'var(--skeleton-soft)',
    },
    '& [data-skeleton~="row"]': {
      paddingBlock: '24px',
      borderBottom: '1px solid var(--sl-color-gray-6)',
    },
    '& [data-skeleton~="row"]:last-child': {
      paddingBottom: '0',
      borderBottom: '0',
    },
    '& [data-skeleton~="activity"] > [data-skeleton~="title"]': {
      marginBottom: '12px',
    },
    '@media (max-width: 480px)': {
      '& [data-skeleton~="cards"]': {
        gap: '10px',
      },
      '& [data-skeleton~="card"]': {
        padding: '16px',
      },
      '& [data-skeleton~="chart"]': {
        gap: '8px',
      },
      '& [data-skeleton~="pill"]': {
        width: '44px',
      },
    },
  },
});

const ButtonWrapper = styled(motion.div, {
  base: {
    position: 'fixed',
    bottom: 'max(24px, env(safe-area-inset-bottom))',
    right: '24px',
    '& button': {
      boxShadow: '0 4px 20px rgb(0 0 0 / 15%)',
    },
  },
});

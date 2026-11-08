import { useContext, useEffect } from 'react';

import { styled } from '../../../styled-system/jsx';
import { examples, getExample, type ExampleSlug } from '../registry';
import { Screen, ScrollView } from './common';
import { EmbeddedExampleContext } from './example-layout';

type Props = {
  exampleSlug?: ExampleSlug;
  documentationUrl: string;
  exampleBaseUrl: string;
};

export function App({ exampleSlug, documentationUrl, exampleBaseUrl }: Props) {
  const embedded = useContext(EmbeddedExampleContext);
  const example = getExample(exampleSlug);
  const customLayout = example?.customLayout ?? false;
  const Example = example?.Component;

  useEffect(() => {
    const root = document.documentElement;
    const previousLayout = root.dataset.exampleLayout;
    root.dataset.exampleLayout = customLayout ? 'custom' : 'shared';

    return () => {
      if (previousLayout === undefined) delete root.dataset.exampleLayout;
      else root.dataset.exampleLayout = previousLayout;
    };
  }, [customLayout]);

  return (
    <>
      {!embedded && (
        <Navigation aria-label="Example navigation">
          <a href={documentationUrl}>← Examples</a>
        </Navigation>
      )}
      <ScrollView>
        <Screen>
          {Example ? (
            <Example />
          ) : (
            <ExampleLinks>
              {examples.map(({ slug, title }) => (
                <li key={slug}>
                  <ExampleLink href={`${exampleBaseUrl}${slug}/`}>
                    <span>{title}</span>
                  </ExampleLink>
                </li>
              ))}
            </ExampleLinks>
          )}
        </Screen>
      </ScrollView>
    </>
  );
}

const Navigation = styled('nav', {
  base: {
    'html:is([data-example-slug="apple-music"], [data-example-slug="slack-message"]) &':
      {
        display: 'none',
      },
    position: 'fixed',
    top: 'max(16px, env(safe-area-inset-top))',
    left: 'max(24px, env(safe-area-inset-left))',
    zIndex: '1',
    font: "600 14px / 1.4 -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    sans-serif",
    '& a': {
      display: 'block',
      padding: '9px 14px',
      border: '1px solid var(--sl-color-gray-5)',
      borderRadius: '8px',
      background: 'var(--sl-color-bg-nav)',
      color: 'var(--sl-color-text-accent)',
      boxShadow: '0 1px 3px rgb(0 0 0 / 4%)',
    },
    '& a:hover': {
      background: 'var(--sl-color-gray-6)',
    },
    '& a:focus-visible': {
      outline: '3px solid var(--sl-color-accent)',
      outlineOffset: '3px',
    },
  },
});

const ExampleLinks = styled('ul', {
  base: {
    display: 'grid',
    gridGap: '16px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridTemplateRows: 'auto',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '16px',
  },
});

const ExampleLink = styled('a', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '32px 48px',
    textAlign: 'center',
    backgroundColor: 'var(--sl-color-gray-6)',
    color: 'var(--sl-color-white)',
    border: '1px solid var(--sl-color-gray-5)',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: 'var(--sl-color-gray-6)',
    },
    '& span': {
      fontWeight: '500',
      fontSize: '18px',
    },
  },
});

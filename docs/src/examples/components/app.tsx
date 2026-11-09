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
    top: 'max({spacing.$4}, env(safe-area-inset-top))',
    left: 'max({spacing.$6}, env(safe-area-inset-left))',
    zIndex: '1',
    textStyle: '$example.navigation',
    '& a': {
      display: 'block',
      padding: '9px 14px',
      border: '$default',
      borderRadius: '$md',
      background: '$bg.navigation',
      color: '$accent.text',
      boxShadow: '$subtle',
    },
    '& a:hover': {
      background: '$bg.surface',
    },
    '& a:focus-visible': {
      outline: '$focus',
      outlineOffset: '3px',
    },
  },
});

const ExampleLinks = styled('ul', {
  base: {
    display: 'grid',
    gridGap: '$4',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridTemplateRows: 'auto',
    width: '100%',
    maxWidth: '$example',
    margin: '0 auto',
    padding: '$4',
  },
});

const ExampleLink = styled('a', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$3',
    padding: '{spacing.$8} {spacing.$12}',
    textAlign: 'center',
    backgroundColor: '$bg.surface',
    color: '$text.heading',
    border: '$default',
    borderRadius: '$md',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '$bg.surface',
    },
    '& span': {
      textStyle: '$example.cardTitle',
    },
  },
});

import { OverlayProvider } from 'react-aria';

import { App } from '../examples/components/app';
import { EmbeddedExampleContext } from '../examples/components/example-layout';
import type { ExampleSlug } from '../examples/registry';

export function Playground({ slug }: { slug?: ExampleSlug }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <EmbeddedExampleContext value={window.self !== window.top}>
      <OverlayProvider>
        <App
          exampleSlug={slug}
          documentationUrl={
            slug ? `${base}/examples/${slug}/` : `${base}/examples/`
          }
          exampleBaseUrl={`${base}/playground/`}
        />
      </OverlayProvider>
    </EmbeddedExampleContext>
  );
}

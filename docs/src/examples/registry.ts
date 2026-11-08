import { A11y } from './components/a11y';
import { AppleMaps } from './components/apple-maps';
import { AppleMusic } from './components/apple-music';
import { AvoidKeyboard } from './components/avoid-keyboard';
import { ContentHeight } from './components/content-height';
import { CustomScroller } from './components/custom-scroller';
import { CustomStyles } from './components/custom-styles';
import { DisableDrag } from './components/disable-drag';
import { FullScreen } from './components/full-screen';
import { ReducedMotion } from './components/reduced-motion';
import { Scrollable } from './components/scrollable-simple';
import { ScrollableSnapPoints } from './components/scrollable-snap-points';
import { ShadowDOM } from './components/shadow-dom';
import { SlackMessage } from './components/slack-message';
import { SnapPoints } from './components/snap-points';
import { StackedSheets } from './components/stacked-sheets';

export const examples = [
  {
    slug: 'snap-points',
    title: 'Snap points',
    Component: SnapPoints,
    customLayout: false,
  },
  {
    slug: 'content-height',
    title: 'Content height',
    Component: ContentHeight,
    customLayout: false,
  },
  {
    slug: 'custom-styles',
    title: 'Custom styles',
    Component: CustomStyles,
    customLayout: false,
  },
  {
    slug: 'scrollable',
    title: 'Scrollable content',
    Component: Scrollable,
    customLayout: false,
  },
  {
    slug: 'custom-scroller',
    title: 'Custom scroller',
    Component: CustomScroller,
    customLayout: false,
  },
  {
    slug: 'avoid-keyboard',
    title: 'Keyboard avoidance',
    Component: AvoidKeyboard,
    customLayout: false,
  },
  {
    slug: 'scrollable-snap-points',
    title: 'Scrolling with snap points',
    Component: ScrollableSnapPoints,
    customLayout: false,
  },
  {
    slug: 'disable-drag',
    title: 'Disable drag',
    Component: DisableDrag,
    customLayout: false,
  },
  {
    slug: 'apple-music',
    title: 'Apple Music',
    Component: AppleMusic,
    customLayout: true,
  },
  {
    slug: 'apple-maps',
    title: 'Apple Maps',
    Component: AppleMaps,
    customLayout: true,
  },
  {
    slug: 'slack-message',
    title: 'Slack message',
    Component: SlackMessage,
    customLayout: true,
  },
  {
    slug: 'a11y',
    title: 'Accessible sheet',
    Component: A11y,
    customLayout: false,
  },
  {
    slug: 'reduced-motion',
    title: 'Reduced motion',
    Component: ReducedMotion,
    customLayout: false,
  },
  {
    slug: 'full-screen',
    title: 'Full screen',
    Component: FullScreen,
    customLayout: false,
  },
  {
    slug: 'shadow-dom',
    title: 'Shadow DOM',
    Component: ShadowDOM,
    customLayout: false,
  },
  {
    slug: 'stacked-sheets',
    title: 'Stacked sheets',
    Component: StackedSheets,
    customLayout: false,
  },
] as const;

export type ExampleSlug = (typeof examples)[number]['slug'];

export function getExample(slug: string | undefined) {
  return examples.find((example) => example.slug === slug);
}

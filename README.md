<div align="center" >
  <br/>
  <br/>
  <h1>🪐 React Modal Sheet</h1>
  &middot;
  <i>Buttery smooth bottom sheet component for your React app</i>
  &middot;
  <br/>
  <br/>
  <img alt="npm version" src="https://img.shields.io/npm/v/react-modal-sheet?style=for-the-badge">
  <img alt="npm license" src="https://img.shields.io/npm/l/react-modal-sheet?style=for-the-badge">
  <br/>
  <br/>
</div>

## Installation

```sh
npm install react-modal-sheet
```

or if you use `yarn`:

```sh
yarn add react-modal-sheet
```

### Peer dependencies

The gestures and animations are handled by the excellent [Framer Motion](https://github.com/framer/motion) library so before you can start using this library you need to install `framer-motion`:

```sh
npm install framer-motion
```

In the future there might be alternative versions of this library that support eg. `react-spring` or other popular animation libraries.

## Usage

```jsx
import React from 'react';
import Sheet from 'react-modal-sheet';

function Example() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        {/* Sheet content goes here */}
      </Sheet>
    </>
  );
}
```

## Props

| Name           | Required | Default          | Description                                                                                       |
| -------------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| `children`     | yes      |                  | React component as the children of the `Sheet`.                                                   |
| `isOpen`       | yes      |                  | Boolean that indicates whether the sheet is open or not.                                          |
| `onClose`      | yes      |                  | Callback function that is called when the sheet is closed by the user.                            |
| `header`       | no       |                  | React component that should be the header of the sheet (drag target).                             |
| `snapPoints`   | no       |                  | Eg. `[600, 400, 0]` - the distance from the bottom of the screen in px. (TODO: support % values)  |
| `initialSnap`  | no       | 0                | Initial snap point when sheet is opened (index from `snapPoints`).                                |
| `rootId`       | no       |                  | The id of the div where the app is mounted, eg. "root". Enables iOS modal effect.                 |
| `springConfig` | no       | `DEFAULT_SPRING` | Overrides the config for the [spring animation](https://www.framer.com/api/motion/types/#spring). |

**`DEFAULT_SPRING`**

```js
{
  stiffness: 300,
  damping: 30,
  mass: 0.2,
}
```

## Methods

### `snapTo(index)`

Imperative method that can be accessed via a ref for snapping to a snap point in given index.

```tsx
import React from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';

function Example() {
  const [isOpen, setOpen] = React.useState(false);
  const ref = React.useRef<SheetRef>();
  const snapTo = (i: number) => ref.current && ref.current.snapTo(i);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      {/* Opens to 400 since initial index is 1 */}
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[600, 400, 100, 0]}
        initialSnap={1}
      >
        <div>
          <button onClick={() => snapTo(0)}>Snap to index 0</button>
          <button onClick={() => snapTo(1)}>Snap to index 1</button>
          <button onClick={() => snapTo(2)}>Snap to index 2</button>
          <button onClick={() => snapTo(3)}>Snap to index 3</button>
        </div>
      </Sheet>
    </>
  );
}
```

## Advanced usage

### iOS Modal View effect

By default when the sheet is opened it will render a translucent backdrop behind the sheet to create some separation between the sheet and the content behind it. In addition to the backdrop it's possible to apply a scaling effect to the main app element to highlight the modality of the presented content. This effect mimics the [iOS Modal View](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/modality/) presentation style to bring more focus to the sheet and add some delight to the user experience.

TODO: add GIF.

To enable this effect you can provide the id of the root element where your application is mounted:

```jsx
function Example() {
  return <Sheet rootId="root">{/* Sheet content goes here */}</Sheet>;
}
```

> ⚠️ **Limitations**: Since the effect is applied to the root element it will not work as desired if the HTML body element is scrolled down at all. One way to avoid this is to use something like `height: 100vh;` and `overflow: auto;` on the root element to make it fill the whole screen and be scrollable instead of the body element.

## Customization

The default styles for the `Sheet` component somewhat follows the styles of the previously mentioned iOS Modal View. However, if these default styles are not to your liking it's easy to make changes to them: you can provide a custom header that is used as the drag target for the sheet or you can overide any style with CSS via the exposed class names.

### Custom header

Adding a custom header is a simple as providing a React component to the `header` prop:

```jsx
function Example() {
  return (
    <Sheet header={<CustomHeader />}>{/* Sheet content goes here */}</Sheet>
  );
}
```

### Custom styles

You can add your own styles or override the default sheet styles via the exposed class names. Note that you might need to use `!important` for style overrides since the inner styles are applied as inline styles which have higher specificity.

#### Vanilla CSS

```css
.react-modal-sheet-backdrop {
  /* custom styles */
}
.react-modal-sheet-container {
  /* custom styles */
}
.react-modal-sheet-header {
  /* custom styles */
}
.react-modal-sheet-drag-indicator {
  /* custom styles */
}
.react-modal-sheet-content {
  /* custom styles */
}
```

#### CSS-in-JS

```jsx
import React from 'react';
import styled from 'styled-components';
import Sheet from 'react-modal-sheeet';

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    /* custom styles */
  }
  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    /* custom styles */
  }
`;

function Example() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <CustomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
        {/* Sheet content goes here */}
      </CustomSheet>
    </>
  );
}
```

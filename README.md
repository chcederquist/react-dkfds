# React DKFDS

A React component library based on [Det Fælles Designsystem](https://designsystem.dk) (DKFDS)
This library provides React components implemented by following the guidelines for each component.
Components currently have hard-coded danish labels, which may be customisable in the future

## Demo

A demo of the components in Storybook is available [here](https://chcederquist.github.io/react-dkfds/)

## Installation

### Dependencies

Install the dependency, plus peer dependencies:

```bash
npm i dkfds react-dkfds
```

### DKFDS

This library assumes the DKFDS styling is present in the document. Add the DKFDS CSS to your application from `node_modules/dkfds/dist/css/dkfds.css" />`

### Icons

This library assumes the DKFDS SVG sprite sheet is available in the document. Insert the SVG-code into the DOM from `node_modules/dkfds/dist/img/all-svg-icons.svg`.

### Translations

Labels are Danish by default, in accordance with the official examples. To add custom label translations, create your own translation-function and pass it to the `TranslationProvider`

```typescript
// myTranslations.ts
import type { TranslationMap } from "react-dkfds";

export const translations: TranslationMap = {
  accordion_open_all: "Open all",
  accordion_close_all: "Close all",
  input_field_characters_left: ({ charactersLeft }) =>
    `You have ${charactersLeft} characters remaining`,
};
```

```tsx
// App.tsx
import { DkfdsTranslationProvider } from "react-dkfds";
import { translations } from "./myTranslations";

export default function App() {
  return (
    <DkfdsTranslationProvider translations={translations}>
      <App />
    </DkfdsTranslationProvider>
  );
}
```

Any translation not provided, or any function returning undefined, will make the component fall back to the original text. To render no text, return an empty string.
You may also wrap individual components in a DkfdsTranslationProvider to change specific elements' default texts.

## Components

The library contains almost every component listed on [Det Fælles Designsystem](https://designsystem.dk).
Every component has been tested by implementing each code example for every component, which can be seen in the storybook project.
Do not hesitate to create a pull request to expose more props or propose restructuring the props of a component

### Storybook

The Storybook project can be seen by checking out this repository and running the following command:

```bash
npm run storybook
```

These can also be used for reference when implementing your own features with these components.

### Missing components

The following components are not implemented yet, but may become available in the future:

- Tooltip using Popover API and CSS anchor positioning
- Datepicker
- Footer

If you notice any other components missing, please create an issue or submit a pull request

## Roadmap

The following is a prioritised list of features to be implemented in this library.

- Automated testing of component functionality

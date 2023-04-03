## Index

1. [About](#about)
2. [Installation](#installation)
3. [TODO](#todo)

---

## About

This project (called _Transfer Coins_) is a web application built with Next.js and tested with
Storybook.

## Installation

The build has been tested with [Node.js 19.2.0](https://nodejs.org/dist/v19.2.0/).

### Husky

Husky, Prettier and ESLint is used to automatically test the local code before committing.

```bash
npm install -g prettier
```

```bash
npm install -g ESLint
```

```bash
npm run prepare
```

### Storybook

Storybook is used to isolate and test UI components.

Run the Storybook server with:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

Then, open [http://localhost:6006](http://localhost:6006) with your browser to see the result (or
visit [https://cjxe.github.io/transfer-coins/](https://cjxe.github.io/transfer-coins/)).

### Next.js app

Run the Next.js server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

### High priority

- [x] new component: Data display > `Text area`
- [x] new component: Data display > `Accordion`

- [x] create /help
- [x] /help#FAQ
- [x] /help#contact

- [x] how to refactor navbar and footer?

  - ~~1 approach is to release the components as library~~
  - core elements go to `/components/core` meanwhile the templates/stories I create go to
    `/components/templates`
    - we don't want to import stories since stories test components **in a specific state** (source:
      Storybook docs)

- [ ] add new page: `/legal`

  - [ ] new page layout for content

- [x] Log in
- [x] Join now
  - [x] Make ToS and PP a link (`TextInput`)
- [x] diger sayfalari da yap

- [x] add husky to workflow

- [x] add "disabled" state for components
- [ ] make max width 1440px

#### New components

##### Data display

- [x] `Table`
  - [x] make table responsive like Binance's
- [x] `Chip`
  - [ ] make new proprties: `onClickIcon`, `onClick`
- [x] `Alert`
- [ ] `Loading` [s](https://nextui.org/docs/components/loading#types)
- [ ] `Avatar`
- [ ] `Tooltip`
  - [ ] make `FeatureContainer`s icons `Tooltip`
  - [ ] add href to icons in the list
- [ ] `Notification`/`Toast`[s](https://ant.design/components/notification) (low priority)
- [ ] `Progress` (low priority) [s](https://nextui.org/docs/components/progress)
- [ ] `KBD` (low priority)
- [ ] `Notification Badge` (very low priority)

##### Layout

- [ ] `Divider` > Vertical/horizontal and w/ text in the middle
- [ ] `Toast`

##### Navigation

- [x] `Navbar`
  - [ ] make one for `Logged in`
- [x] `Footer`
- [x] `Menu`
  - [ ] Add `Badge`s
- [ ] `Pagination`
- [ ] `Table of Contents`/`Anchor` [s](https://www.emgoto.com/react-table-of-contents/)
- [ ] `Stepper` (low priority)
- [ ] `Timeline` (low priority)
- [ ] `Tabs` (very low priority)
- [ ] `Breadcrumb` (very low priority)

##### Actions/Data input

- [x] `Button`
- [x] `Special button with icon`
- [x] `Checkbox`
- [x] `ToggleSwitch`
- [x] `TextInput`
- [x] `TextArea`
- [ ] `File input`
- [ ] `Dropdown`
- [ ] `Modal` [also mobile like this](https://daisyui.com/components/modal/)
- [ ] `Radio` (low priority)
- [ ] `Range` (very low priority)
- [ ] `Date picker` (very low priority)
- [ ] `Rating` i.e., 5 stars (very low priority)
- [ ] `Button group` (very low priority)

### Low priority

- [ ] clean folder structure

  - [ ] will inner components have their parent name appended to the start?
  - [ ] will text compoennts have Text at the end?
  - [ ] make all icon props start with a capital letter?

- [ ] refactor FeatureContainer (make it like <FeatureContainer.Heading> etc)

- [ ] clean styles and use themes instead
      ([this](https://github.com/themesberg/flowbite-react/blob/be78e5e748a64ee213018837c576a75ed35a4f13/src/lib/theme/default.ts)
      might help)

- [ ] make all Icon propTypes: elementType (make sure there are no errors)

#### Components

- [ ] add new prop to `Accordion`: `onlyOneIsOpen`
- [ ] add new sizes to `ToggleSwitch`: (sm, base, lg)
- [ ] make `Checkbox` like `ToggleSwitch` where it gets checked even if the label is clicked

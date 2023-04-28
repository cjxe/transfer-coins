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

- [x] Log in
- [x] Join now
  - [x] Make ToS and PP a link (`TextInput`)
- [x] diger sayfalari da yap

- [x] add husky to workflow

- [x] add "disabled" state for components
- [x] use `swiper` to make "plan cards" a carousel

- [x] test useSession() works anywhere
- [x] create test API endpoint `/protected` and show email
- [x] create a middleware for checking every req if it has a token when accessing `/dashboard`
- [ ] skip login/signup if user is already signed in
- [ ] add new page: `/legal`
  - [ ] new page layout for content
    - [ ] `/legal/terms-of-service`
    - [ ] `/legal/privacy-policy`
      - [ ] link these to footer buttons
- [ ] push changes
- [ ]

- [ ] make max width 1440px

#### New components

##### Data display

- [x] `Table`
  - [x] make table responsive like Binance's
- [x] `Chip`
- [x] `Alert`
- [x] `Loading` [s](https://nextui.org/docs/components/loading#types)
- [x] `Avatar`
- [ ] `Tooltip`
  - [ ] make `FeatureContainer`s icons `Tooltip`
  - [ ] add href to icons in the list
- [ ] `Progress` (low priority) [s](https://nextui.org/docs/components/progress)
- [ ] `KBD` (low priority)
- [ ] `Notification Badge` (very low priority)

##### Layout

- [x] `Divider` > Vertical/horizontal ~~and w/ text in the middle~~
- [x] `Notification`/`Toast`[s](https://ant.design/components/notification)
  - [ ] fix: multiple toasts override each other. Make a list instead. Potential solution: bring up
        ToastContextProvider to `<App />` and wrap it with `<ToastListContextProvider>`

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

##### Actions/Data input

- [x] `Button`
- [x] `Special button with icon`
- [x] `Checkbox`
  - [ ] `CheckboxList`
- [x] `ToggleSwitch`
- [x] `TextInput`
  - [ ] add new child tag: `FeedbackText`
- [x] `TextArea`
- [ ] `File input`
- [ ] `Dropdown`
- [ ] `Modal` [also mobile like this](https://daisyui.com/components/modal/)
- [ ] `Radio` (low priority)
  - [ ] `RadioList`
- [ ] `Range` (very low priority)
- [ ] `Date picker` (very low priority)
- [ ] `Rating` i.e., 5 stars (very low priority)
- [ ] `Button group` (very low priority)

### Low priority

- [ ] standardise all sizings to `md`

  - research result: `-base` variant is only applied to text styles. no flag (default one) is in
    between `md` and `lg`. However, for this project set the component size to `md` as if it's the
    base size

- [ ] clean folder structure

  - [ ] will inner components have their parent name appended to the start?
  - [ ] will text compoennts have Text at the end? no
  - [ ] make all icon props start with a capital letter?

- [ ] make all Icon propTypes: elementType (make sure there are no errors)

- [ ] clean styles and use themes instead
      ([this](https://github.com/themesberg/flowbite-react/blob/be78e5e748a64ee213018837c576a75ed35a4f13/src/lib/theme/default.ts)
      might help)

#### Components

- [ ] refactor `<FeatureContainer>` (make it like <FeatureContainer.Heading> etc)
- [ ] add new prop to `<Accordion>`: `onlyOneIsOpen`
- [ ] add new sizes to `<ToggleSwitch>`: (sm, base, lg)
- [ ] make `<Checkbox>` like `<ToggleSwitch>` where it gets checked even if the label is clicked
- [ ] make new proprties for `<Chip>`: `onClickIcon`, `onClick`
- [ ] Make `<Avatar>`s `onError` prop more seamingless (as soon as the image returns an error,
      broken-image icon is displayed and then gone after it is rerendered)
- [ ] add new `<Table>` component with sorting
- [ ] add new prop to `<TextInput>`: `onResponse` when text input has a text response

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

  - [ ] add new prop to `Accordion`: `onlyOneIsOpen`

- [x] create /help
- [x] /help#FAQ
- [x] /help#contact

- [x] how to refactor navbar and footer?

  - ~~1 approach is to release the components as library~~
  - core elements go to `/components/core` meanwhile the templates/stories I create go to
    `/components/templates`
    - we don't want to import stories since stories test components **in a specific state** (source:
      Storybook docs)

- [ ] `/legal`

- [x] Log in
- [x] Join now
  - [ ] Make ToS and PP a link (`TextInput`)
- [ ] diger sayfalari da yap

- [ ] new component: Data display > `File input`
- [ ] new component: Data display > `Table`
- [ ] new component: Data display > `Badge`
- [ ] new component: Data display > `Tooltip`

- [ ] new component: Layout > `Divider` > Vertical/horizontal
- [ ] new component: Layout > `Toast`

- [ ] new component: Navigation > `Pagination`

- [ ] new component: Actions > `Modal`

### Low priority

- [ ] clean folder structure
  - [ ] will inner components have their parent name appended to the start?
  - [ ] will text compoennts have Text at the end?
  - [ ] make all icon props start with a capital letter
- [ ] add "disabled" state for components
- [ ] clean styles and use themes instead
      ([this](https://github.com/themesberg/flowbite-react/blob/be78e5e748a64ee213018837c576a75ed35a4f13/src/lib/theme/default.ts)
      might help)

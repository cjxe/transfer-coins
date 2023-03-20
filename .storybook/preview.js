/** @type { import('@storybook/react').Preview } */
import { MINIMAL_VIEWPORTS, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/globals.css';

const CUSTOM_VIEWPORTS = {
  sm: {
    name: 'sm',
    styles: {
      width: '640px',
      height: '963px',
    },
  },
  md: {
    name: 'md',
    styles: {
      width: '768px',
      height: '963px',
    },
  },
  lg: {
    name: 'lg (laptop)',
    styles: {
      width: '1024px',
      height: '963px',
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1280px',
      height: '963px',
    },
  },
  xl2: {
    name: '2xl',
    styles: {
      width: '1536px',
      height: '963px',
    },
  },
};

const preview = {
  parameters: {
    darkMode: {
      current: 'dark',
      darkClass: 'dark',
      classTarget: 'html',
      stylePreview: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
        ...CUSTOM_VIEWPORTS,
      },
    },
    layout: 'fullscreen',
  },
};

export default preview;

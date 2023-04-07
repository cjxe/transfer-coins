/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blink: 'blink 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.2s cubic-bezier(.10,.8,.2,1)',
        'fade-out': 'fade-out 0.2s cubic-bezier(.1,.0,1,.30)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        'fade-in': {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'fade-out': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
      },
      screens: {
        xs: '0px',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwindcss-inner-border'),
    require('tailwindcss-animation-delay'),
  ],
};

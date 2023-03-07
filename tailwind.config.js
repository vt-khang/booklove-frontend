/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    theme: {
      screens: {
        sm: '550px',
        md: '744px',
        lg: '950px',
        xl: '1128px',
      },
    },
    colors: {
      transparent: 'transparent',
      red: {
        100: '#f69697',
        200: '#d0312d',
        300: '#8b0000',
      },
      neutral: {
        100: '#ffffff',
        200: '#efefef',
        300: '#adadad',
        400: '#212529',
        500: '#000000',
      },
      blue: {
        0: '#d0e5f0',
        100: '#58cced',
        200: '#3d4f6f',
        300: '#152238',
      },
      green: '#347d56',
      yellow: '#cc9966',
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    transitionDuration: {
      0: '0ms',
      100: '100ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      800: '800ms',
      900: '900ms',
      1000: '1000ms',
    },
    boxShadow: {
      button: 'rgb(0 0 0 / 24%) 0px 3px 8px',
      bar: 'rgb(100 100 111 / 20%) 0px 7px 29px 0px',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-last', '&:not(:last-child)');
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};

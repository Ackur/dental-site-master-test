/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      'pr-grey': {
        100: '#f9f7f3',
        200: '#efebe2',
      },
      'pr-dark': {
        200: '#2e221c',
        300: '#333',
      },
      'pr-brown': {
        50: '#f9f7f3',
        100: '#e0d8c8',
        400: '#a88a67',
        500: '#9b795b',
        600: '#6a5142',
        700: '#614939',
        800: '#2e221c',
      },
    },
    screens: {
      '2xl': { max: '1980px' },
      xl: { max: '1680px' },
      lg: { max: '1440px' },
      md: { max: '1024px' },
      sm: { max: '769px' },
      xs: { max: '480px' },
      xxs: { max: '379px' },
    },
    extend: {
      height: {
        screen: '100dvh',
      },
      fontFamily: {
        interTight: ['Inter Tight', 'sans-serif'],
      },
      padding: {
        17: '4.25rem',
      },
    },
  },
  plugins: [],
}

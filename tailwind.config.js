/** @type {import('tailwindcss').Config} */
const pxToRem = (value) => `${value / 16}rem`;

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontSize: {
        xs: [pxToRem(12), { lineHeight: pxToRem(16) }],
        sm: [pxToRem(14), { lineHeight: pxToRem(20) }],
        base: [pxToRem(16), { lineHeight: pxToRem(24) }],
        lg: [pxToRem(18), { lineHeight: pxToRem(28) }],
        xl: [pxToRem(20), { lineHeight: pxToRem(30) }],
        '2xl': [pxToRem(24), { lineHeight: pxToRem(34) }],
        '3xl': [pxToRem(30), { lineHeight: pxToRem(40) }],
        '4xl': [pxToRem(36), { lineHeight: pxToRem(46) }],
        '5xl': [pxToRem(44), { lineHeight: pxToRem(54) }],
      },
      boxShadow: {
        steel: '0 6px 14px rgba(3, 10, 20, 0.35)',
      },
    },
  },
  plugins: [],
};

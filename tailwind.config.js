/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        industrial: {
          bg: '#08131f',
          surface: '#0f2233',
          panel: '#153147',
          border: '#284661',
          text: '#e8f1fb',
          muted: '#9fb2c7',
          dim: '#728ba6',
          accent: '#3ea9f5',
          'accent-strong': '#2b8fd9',
          success: '#2bcf90',
          warning: '#e9b24c',
          danger: '#de6464',
        },
      },
      boxShadow: {
        steel: '0 6px 14px rgba(3, 10, 20, 0.35)',
      },
    },
  },
  plugins: [],
};

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
      boxShadow: {
        steel: '0 6px 14px rgba(3, 10, 20, 0.35)',
      },
    },
  },
  plugins: [],
};

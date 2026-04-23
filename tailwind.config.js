/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
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

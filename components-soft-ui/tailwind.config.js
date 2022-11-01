/** @type {import('tailwindcss').Config} */
const { softUi } = require('@nifty-chess/tailwind-presets')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [softUi],
  theme: {
    extend: {},
  },
  plugins: [],
}

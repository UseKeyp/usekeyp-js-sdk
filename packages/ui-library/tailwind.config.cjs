/** @type {import('tailwindcss').Config} */
const { softUi } = require("@usekeyp/tailwind-presets");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md}",
    "../components-soft-ui/**/*.{js,jsx}",
  ],
  presets: [softUi],
  theme: {
    extend: {},
  },
  plugins: [],
};

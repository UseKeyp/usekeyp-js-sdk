/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("./plugin")],
};

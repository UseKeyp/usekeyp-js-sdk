/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@usekeyp/ui-library/src/**/*.{js,jsx,ts,tsx,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@usekeyp/ui-library/plugin")]
}


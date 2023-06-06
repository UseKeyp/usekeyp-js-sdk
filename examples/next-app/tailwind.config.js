/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@usekeyp/ui-kit/**/*.{js,jsx,ts,tsx,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@usekeyp/ui-kit/plugin")],
}


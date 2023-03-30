/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F8F8F8",
          200: "#E9EBED",
          300: "#DCDEE0",
          400: "#C5C8CC",
          800: "#B0BBC1",
          1200: "#80858E",
          1600: "#63676F",
          2000: "#4A4D53",
          2400: "#3A3C41",
        },
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        inherit: "inherit",
        xs: ["0.56rem", { lineHeight: "1.3rem" }],
        sm: ["0.75rem", { lineHeight: "1.3rem" }],
        base: ["1rem", { lineHeight: "1.3rem" }],
        lg: ["1.25rem", { lineHeight: "1.2rem" }],
        xl: ["1.38rem", { lineHeight: "1.3rem" }],
        "2xl": ["1.5rem", { lineHeight: "1.2rem" }],
        "3xl": ["2.13rem", { lineHeight: "1.2rem" }],
      },
    },
  },
  plugins: [],
};

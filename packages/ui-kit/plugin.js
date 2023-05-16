const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase }) {
    addBase({
      ".removeFlickering": {
        "-webkit-tap-highlight-color": "transparent",
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          gray: {
            100: "#F8F8F8",
            200: "#E9EBED",
            300: "#DCDEE0",
            400: "#C5C8CC",
            800: "#B0B6C1",
            1200: "#80858E",
            1600: "#63676F",
            2000: "#4A4D53",
            2400: "#3A3C41",
          },
          blue: {
            1200: "#1499DA",
          },
          brand: {
            discord: "#5865F2",
            google: "#4285F4",
            twitter: "#1DA1F2",
            twitch: "#9146FF",
            epic_games: "#2F2D2E",
            reddit: "#FF4500",
            facebook: "#3B5998",
            microsoft: "#2F2D2E"
          },
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          serif: [
            'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            "serif",
          ],
          body: ["Roboto", "sans-serif"],
          awesome: ["FontAwesome"],
          "awesome-5-free": ["Font Awesome\\ 5 Free"],
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
  }
);

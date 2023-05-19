import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Sharpie";
      src: url("/fonts/sharpie/Sharpie-Regular.woff2") format("woff2"),
        url("/fonts/sharpie/Sharpie-Regular.woff") format("woff"),
        url("/fonts/sharpie/Sharpie-Regular.ttf") format("truetype");
      font-weight: 400;
      font-display: swap;
      font-style: normal;
    }
    @font-face {
      font-family: "Sharpie";
      src: url("/fonts/sharpie/Sharpie-Extrabold.woff2") format("woff2"),
        url("/fonts/sharpie/Sharpie-Extrabold.woff") format("woff"),
        url("/fonts/sharpie/Sharpie-Extrabold.ttf") format("truetype");
      font-weight: 800;
      font-display: swap;
      font-style: normal;
    }
  `}
  />
);

export default Fonts;

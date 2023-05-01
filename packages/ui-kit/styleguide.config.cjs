const webpack = require("webpack");
const path = require("path");

const webpackConfig = {
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /.\.md$/,
        type: "javascript/auto",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    // Rewrites the absolute paths to those two files into relative paths
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
      "react-styleguidist/lib/loaders/utils/client/requireInRuntime"
    ),
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
      "react-styleguidist/lib/loaders/utils/client/evalInContext"
    ),
  ],
};

module.exports = {
  webpackConfig,
  assetsDir: "src/public/",
  template: {
    favicon: "favicon.png",
  },
  exampleMode: "expand",
  ignore: ["**/components/Button/Button.jsx"],
  components: "src/components/**/[A-Z]*.jsx",
  require: [
    path.join(__dirname, "./dist/output.css"), // for styleguidist to work with tailwind we have to reference compiled css here
  ],
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, "src/styleguide/Heading"),
  },
  theme: {
    color: {
      link: "#1499DA",
    },
    fontFamily: {
      base: "Inter",
    },
  },
  styles: {
    Heading: {
      heading2: {
        color: "#1499DA",
        fontSize: "34px",
        fontWeight: "bold",
      },
    },
    Para: {
      para: {
        color: "#3A3C41",
        fontSize: "16px",
        lineHeight: "130%",
      },
    },
    Link: {
      link: {
        color: "#1499DA",
      },
    },
    ComponentsList: {
      item: {
        fontSize: "16px",
        lineHeight: "21px",
      },
    },
  },
};

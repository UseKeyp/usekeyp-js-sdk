module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "node 18.0",
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    // Add this plugin to automatically import React when needed
    // ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
    // [
    //   "@babel/plugin-transform-modules-commonjs",
    //   { extensions: [".js", ".jsx"] },
    // ],
  ],
};

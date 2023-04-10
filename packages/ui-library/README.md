<h1 align="center"><img width="600" style="border-radius: 30px;" src="https://raw.githubusercontent.com/UseKeyp/.github/main/Keyp-Logo-Color.svg"/></h1>
<h1 align="center">Welcome to Keyp Frontend-Components 👋</h1>
<p align="center">
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
  <a href="https://twitter.com/UseKeyp" target="_blank">
    <img alt="Twitter: UseKeyp" src="https://img.shields.io/twitter/follow/UseKeyp.svg?style=social" />
  </a>
</p>

> UI library package for various applications

## Usage 📖

1.  Add package to your project
    `yarn add @usekeyp/ui-library`

2.  Install necessary dependencies

    2.1. Configure the webpack

    - `yarn eject` to make changes to a webpack

    - Include new path for uiLibrary in webpack.config.js

    ```
        {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.uiLibrary,
            loader: require.resolve("babel-loader"),
            options: {
            customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
            ),
            presets: [
                [
                require.resolve("babel-preset-react-app"),
                {
                    runtime: hasJsxRuntime ? "automatic" : "classic",
                },
                ]
            plugins: [
                isEnvDevelopment &&
                shouldUseReactRefresh &&
                require.resolve("react-refresh/babel"),
            ].filter(Boolean),
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: isEnvProduction,
            },
        },
    ```

    - in path.js add uiLibrary path

    ```
        module.exports = {
            ...,
            uiLibrary: resolveApp("./node_modules/@usekeyp/ui-library/"),
        };
    ```

    2.2. Add Tailwind CSS

    - Ensure Tailwind CSS is properly configured in your application. Here's an example of what that should look like:

    ```
        const packageTailwindConfig = require('@usekeyp/ui-library/tailwind.config.cjs');
        const { merge } = require('lodash')
        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
            "./node_modules/@usekeyp/ui-library/src/**/*.{js,jsx,ts,tsx,md}",
        ],
        theme: merge({}, packageTailwindConfig.theme, {
            extend: {},
        }),
        plugins: packageTailwindConfig.plugins.concat([]),
        };
    ```

3.  Build the output.css file.  
    Example:  
    `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch -c tailwind.config.js`

4.  Add output.css to App.js
5.  Use components in your project

```
import { LoginPortal } from "@usekeyp/ui-library";

const LoginPage = () => {

  const onClick = (providerType) => {
   // custom auth logic depending on the app
  }

  return (<><LoginPortal onClick={onClick} /><>)
}

```

## Resources 🧑‍💻

- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [Add babel-loader to a webpack](https://webpack.js.org/loaders/babel-loader/)

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com

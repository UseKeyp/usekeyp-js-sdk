<h1 align="center"><img width="600" style="border-radius: 30px;" src="https://raw.githubusercontent.com/UseKeyp/.github/main/Keyp-Logo-Color.svg"/></h1>
<h1 align="center">Welcome to Keyp UI Library 👋</h1>
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

1.  Add package to your project:  
    `yarn add @usekeyp/ui-library`

2.  Install and configure necessary dependencies.

    2.1. Configure Webpack:

    - Run `yarn eject` to customize the Webpack configuration.

    - Update `webpack.config.js` by including the new path for the UI Library:

    ```js
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
                  ],
                ],

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

    - Add the UI Library path in `paths.js`:

    ```js
        module.exports = {
            ...,
            uiLibrary: resolveApp("./node_modules/@usekeyp/ui-library/"),
        };
    ```

    2.2. Add Tailwind CSS.

    - Install the latest version of Tailwind and add tailwind.config.js file.
    - Additionally to your own content data you should add the `@usekeyp/ui-library` source paths to apply the classes from the elements in the tailwind.config.js file.

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@usekeyp/ui-library/src/**/*.{js,jsx,ts,tsx,md}",
      ],
    };
    ```

    - Require `@usekeyp/ui-library` as a plugin inside your `tailwind.config.js` file.

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      plugins: [require("@usekeyp/ui-library/plugin")],
    };
    ```

    Here's an example of the whole `tailwind.config.js`:

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@usekeyp/ui-library/src/**/*.{js,jsx,ts,tsx,md}",
      ],
      theme: {
        extend: {},
      },
      plugins: [require("@usekeyp/ui-library/plugin")],
    };
    ```

3.  Start the Tailwind CLI build process.  
    Example:  
    `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch -c tailwind.config.js`

4.  Utilize components in your project:

```js
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

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com

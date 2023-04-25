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

## Links

Published from dev branch: https://keyp-ui-library-dev.surge.sh/  
Published from main branch: https://keyp-ui-library.surge.sh/

## Usage 📖

1.  Add package to your project:

    ```bash
    yarn add @usekeyp/ui-library
    ```

2.  Install and configure Tailwind CSS.

    2.1 Install and initialize.

    ```bash
    yarn add -D tailwindcss

    yarn tailwindcss init
    ```

    2.2 Add the Tailwind directives to your `index.css`.

    ```diff
    + @tailwind base;
    + @tailwind components;
    + @tailwind utilities;

    body {
      margin: 0;
    ```

    2.3 Update `tailwind.config.js` file:

    - Add the `@usekeyp/ui-library` to apply the appropriate classes.
    - Require `@usekeyp/ui-library` as a plugin.

      **React**

      ```js
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
          "./node_modules/@usekeyp/ui-library/lib/**/*.{js,jsx,ts,tsx,md}",
        ],
        plugins: [require("@usekeyp/ui-library/plugin")],
        // ...
      };
      ```

      **Next.js**

      ```js
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./pages/**/*.{js, jsx, ts,tsx}",
          "./public/**/*.html",
          "./node_modules/@usekeyp/ui-library/lib/**/*.{js,jsx,ts,tsx,md}",
        ],
        plugins: [require("@usekeyp/ui-library/plugin")],
        // ...
      };
      ```

      2.4 Start the Tailwind CLI build process.

      **React**

      `yarn tailwindcss -i ./src/index.css -o ./dist/output.css --watch -c tailwind.config.js`

      You can add this command to your build process `package.json` file:

      ```js
      {
        ...,
        "scripts": {
          "start": "react-scripts start",
          "tailwindcss": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
          ...
        }
      }

      ```

      **Next.js**

      `yarn tailwindcss -i ./styles/globals.css -o ./dist/output.css --watch`

      You can add this command to your build process to `package.json` file:

      ```js
      {
        ...,
        "scripts": {
          "dev": "next dev",
          "tailwindcss": "tailwindcss -i ./styles/globals.css -o ./dist/output.css --watch",
          ...
        },
      }

      ```

3.  Utilize components in your project:

```js
import { LoginPortal } from "@usekeyp/ui-library";

const LoginPage = () => {

  const onClick = (providerType) => {
  // custom auth logic depending on the app
  }

  return (<>
        <LoginPortal
          providers={["TWITTER", "GITHUB", "APPLE"]}
          additionalProviders={["DISCORD", "GOOGLE"]}
          onClick={onClick}
        /><>)
}

```

## Resources 🧑‍💻

- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com

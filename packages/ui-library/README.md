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

2.  Install and configure Tailwind CSS.

    2.1 Install the latest version of Tailwind.

    `yarn add -D tailwindcss@latest`

    2.2 Add tailwind.config.js file

    `yarn tailwindcss init --esm`

    2.3 Update tailwind.config.js file:

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

    - Here's an example of the whole `tailwind.config.js`:

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

    2.4 Start the Tailwind CLI build process. You can add this command to your build process.  
    Example:  
    `yarn tailwindcss -i ./src/index.css -o ./dist/output.css --watch -c tailwind.config.js`

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

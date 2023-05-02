# CRA Example with @usekeyp/ui-kit Integration

> This is an example of a Create React App (CRA) project with the @usekeyp/ui-kit integrated.

## Usage 📖

1. Install necessary dependencies:
   `yarn install`
2. Run the project:
   `yarn start`

## Steps to integrate @usekeyp/ui-kit

1.  Add the package to your project:

    ```bash
    yarn add @usekeyp/ui-kit
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

    - Add the `@usekeyp/ui-kit` to apply the appropriate classes.
    - Require `@usekeyp/ui-kit` as a plugin.

      ```js
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
          "./node_modules/@usekeyp/ui-kit/lib/**/**/*.{js,jsx,ts,tsx,md}",
        ],
        plugins: [require("@usekeyp/ui-kit/plugin")],
        // ...
      };
      ```

      2.4 Start the Tailwind CLI build process.

      `yarn tailwindcss -i ./src/index.css -o ./dist/output.css --watch -c tailwind.config.js`

      You can add this command to your build process to `package.json` file:

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

3.  Utilize the `LoginPortal` component in `App.js`:

```js
import { LoginPortal } from "@usekeyp/ui-kit";

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

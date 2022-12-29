<h1 align="center"><img width="600" style="border-radius: 30px;" src="https://raw.githubusercontent.com/UseKeyp/.github/main/Keyp-Logo-Color.svg"/></h1>
<h1 align="center">Welcome to @usekeyp/components-soft-ui 👋</h1>
<p align="center">
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
  <a href="https://twitter.com/UseKeyp" target="_blank">
    <img alt="Twitter: UseKeyp" src="https://img.shields.io/twitter/follow/UseKeyp.svg?style=social" />
  </a>
</p>

> Components for use in keyp-app and other Keyp projects. Uses @usekeyp/tailwind-presets for styling 

## Usage 📖

1. Install necessary dependencies

```sh
yarn add @usekeyp/components-soft-ui
```
2. Ensure Tailwind CSS is properly configured in your application. For best results, use `@usekeyp/tailwind-presets` as your base preset in your `tailwind.config.js` file. Here's an example of what that should look like:
    
    ```js
   const { softUi } = require('@usekeyp/tailwind-presets')
    module.exports = {
        content: [
            // Tailwind should always watch this path for changes
            "./src/**/*.{js,jsx,ts,tsx}",
            // Tailwind needs to watch the path of our component library to properly reflect compiled styles
            "./node_modules/@usekeyp/components-soft-ui/**/*.js",
    ],
        presets: [softUi],
    // ...
    }
    ```
3. Import the components you need into your application. Here's an example of how to import the `Button` component:
    ```js
   import { Button } from '@usekeyp/components-soft-ui'
   ```

## Resources 🧑‍💻
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com

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

1. Add package to your project
   `yarn add @usekeyp/ui-library`

2. Install necessary dependencies

- Add babel-loader to the webpack
  `yarn eject` to configure webpack

- Add Tailwind CSS
- Ensure Tailwind CSS is properly configured in your application. Here's an example of what that should look like:

```
const packageTailwindConfig = require('@usekeyp/ui-library/tailwind.config.cjs');
const { merge } = require('lodash');

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

3. Build the output.css file
   Example: `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch -c tailwind.config.js"`

4. Use it in your project

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

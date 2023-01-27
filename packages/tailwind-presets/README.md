<h1 align="center"><img width="600" style="border-radius: 30px;" src="https://raw.githubusercontent.com/UseKeyp/.github/main/Keyp-Logo-Color.svg"/></h1>
<h1 align="center">Welcome to @usekeyp/tailwind-presets 👋</h1>
<p align="center">
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
  <a href="https://twitter.com/UseKeyp" target="_blank">
    <img alt="Twitter: UseKeyp" src="https://img.shields.io/twitter/follow/UseKeyp.svg?style=social" />
  </a>
</p>

> Tailwind CSS presets for use in keyp-app and other Keyp projects

## Usage 📖

1. Install necessary dependencies

```bash
yarn add @usekeyp/tailwind-presets
```

2. Ensure Tailwind CSS is properly configured in your application. Configure your `tailwind.config.js` file to use a particular preset. Here's an example of how to use the soft-ui preset:

    ```js
   const { softUi } = require('@usekeyp/tailwind-presets')
    module.exports = {
    // ...
        presets: [softUi],
    // ...
    }
    ```
   
## Resources 🧑‍💻
- [Tailwind CSS Presets Documentation](https://tailwindcss.com/docs/presets)


## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com

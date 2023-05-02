<h1 align="center"><img width="600" style="border-radius: 30px;" src="https://raw.githubusercontent.com/UseKeyp/.github/main/Keyp-Logo-Color.svg"/></h1>
<h1 align="center">Welcome to Keyp JS SDK👋</h1>
<p align="center">
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
  <a href="https://twitter.com/UseKeyp" target="_blank">
    <img alt="Twitter: UseKeyp" src="https://img.shields.io/twitter/follow/UseKeyp.svg?style=social" />
  </a>
</p>

> Keyp JavaScript tools

This is a monorepo which includes mutliple things:

- `@usekeyp/ui-kit` frontend components
- `@usekeyp/js-sdk` wallet and making transactions 
- Examples see `/examples`
- Brand Assets see `/brand-assets`

See also [Keyp Developer Docs](https://docs.usekeyp.com/)

## ✨ UI-Kit

To use the UI components directly in your app, install the package:

```bash
yarn add @usekeyp/ui-kit
```

Components are used like this:

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

For full instructions see the README in `/packages/ui-kit` or the [Docs](https://docs.usekeyp.com/).

## ⚡ JS SDK

Coming soon!

## Contributing

Make a contribution and we'll send you USDC or USD! Check out the contributing guide `CONTRIBUTING.md`.

## Examples


## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com

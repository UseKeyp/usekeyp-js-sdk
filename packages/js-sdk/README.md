<h1 align="center"><img width="600" style="border-radius: 30px;" src="https://raw.githubusercontent.com/UseKeyp/.github/main/Keyp-Logo-Color.svg"/></h1>
<h1 align="center">Welcome to Keyp JS SDK 👋</h1>
<p align="center">
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
  <a href="https://twitter.com/UseKeyp" target="_blank">
    <img alt="Twitter: UseKeyp" src="https://img.shields.io/twitter/follow/UseKeyp.svg?style=social" />
  </a>
</p>

> Tools for building apps using Keyp

## Install 📦

```sh
npm install @usekeyp/js-sdk
```

## Usage 📖

Keyp's SDK provides a simple interface for interacting with Keyp's API. 

Currently, the SDK supports the following: 
- A Keyp plugin for integration between Keyp and NextAuth.js (keyp-auth.ts)
- Helper method for signing in using Keyp and NextAuth.js (keyp-helpers.ts)
- Helper tokenTransfer method for token transfers (token-helpers.ts)
- Helper readContract and writeContract methods for interacting with smart contracts (contract-helpers.ts)
- Helper retrieveListings method for retrieving OpenSea listings (opensea-helpers.ts)
- Axios client for easily making requests to Keyp's API (keypClient.ts)

For an example of how to use the SDK, see the Next.js example app in the `examples` directory.

For full instructions see the [Docs](https://docs.usekeyp.com/).

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com

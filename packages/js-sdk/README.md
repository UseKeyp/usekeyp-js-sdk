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

> Easily manage wallets, enable SSOs, interact with smart contracts and more with just a few lines of code

Currently, the SDK supports the following:

- Use the Keyp SDK and ui-kit to quickly set up authentication
- ERC20 and ERC721 token transfers
- Read and write smart contracts

## Install 📦

```sh
yarn add @usekeyp/js-sdk
```

## Usage 📖

### Authentication

Configure using the Keyp [NextAuth provider](https://next-auth.js.org/configuration/providers/oauth#using-a-custom-provider)

```js
// pages/api/auth/[...nextauth].js
import { KeypAuth } from "@usekeyp/js-sdk";
import NextAuth from "next-auth";

const NextAuthOptions = KeypAuth({
    clientId: process.env.KEYP_CLIENT_ID, // From dev portal
    secret: process.env.KEYP_COOKIE_SECRET, // Random string
    redirectUrl: "http://localhost:3000/api/auth/callback/keyp",
});

export default NextAuth(NextAuthOptions);
```

Trigger a login for a specific social provider using `signInKeyp()` 

```js
import { signInKeyp } from "@usekeyp/js-sdk"

export default function SignInPage() {
    return (
        <div>
        <button onClick={() => signInKeyp("GOOGLE")}>Sign in with Google</button>
        <button onClick={() => signInKeyp("DISCORD")}>Sign in with Discord</button>
        </div>
    )
}
```

### ERC20 and ERC721 token transfers

```js
import { tokenTransfer } from "@usekeyp/js-sdk";
import { useSession } from "next-auth/react";

const { data: session } = useSession();
const ACCESS_TOKEN = session.user.accessToken

const data = {
    accessToken: ACCESS_TOKEN,
    toUserUsername: "pi0neerpat#1337",
    toUserProviderType: "DISCORD",
    tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    tokenType: 'ERC20',
    amount: '.01',
}

const result = await tokenTransfer(data)
```

### Read and write smart contracts

```js
import { readContract, writeContract } from "@usekeyp/js-sdk";
import { useSession } from "next-auth/react";

const { data: session } = useSession();
const ACCESS_TOKEN = session.user.accessToken

// Read from a smart contract
const resultWrite = await readContract(
    {
        accessToken: ACCESS_TOKEN,
        address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        abi: "balanceOf(address) public view returns (uint256)",
        args: ['0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'],
    });

// Write to a smart contract
const resultRead = await writeContract(
    {
        accessToken: ACCESS_TOKEN,
        address: "0x55d4dfb578daa4d60380995fff7a706471d7c719",
        abi: "pay(uint256,uint256,address) public returns (bool success)",
        args: ['1', '10000000', '0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39'],
    });
```

## Resources 🧑‍💻

For more instructions, see the [Docs](https://docs.usekeyp.com/).

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com

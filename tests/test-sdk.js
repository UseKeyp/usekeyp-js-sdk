const { tokenTransfer, readContract, writeContract } = require("@usekeyp/js-sdk");
const dotenv = require('dotenv')

dotenv.config()

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

// ###########################
// Tokens

// POST Transfer Token

// const data = {
//   accessToken: ACCESS_TOKEN,
//   toUserUsername: "patrick@usekeyp.com",
//   toUserProviderType: "GOOGLE",
//   tokenAddress: '0x9CA6a77C8B38159fd2dA9Bd25bc3E259C33F5E39',
//   tokenType: 'ERC20',
//   amount: '.01',
// }

// tokenTransfer(data).then(response => {
//   console.log(response)
// }).catch(e => console.log(e))


// Read from a smart contract
readContract(
  {
    accessToken: ACCESS_TOKEN,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    abi: "balanceOf(address) public view returns (uint256)",
    args: ['0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'],
  }).then(response => console.log(response))

// Write to a smart contract
writeContract(
  {
    accessToken: ACCESS_TOKEN,
    address: "0x55d4dfb578daa4d60380995fff7a706471d7c719",
    abi: "pay(uint256,uint256,address) public returns (bool success)",
    args: ['1', '10000000', '0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39'],
  }).then(response => console.log(response))


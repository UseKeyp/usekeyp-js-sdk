const { tokenTransfer } = require("@usekeyp/js-sdk");
const dotenv = require('dotenv')

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

// ###########################
// Tokens

// POST Transfer Token

const data = {
  accessToken: ACCESS_TOKEN,
  toUserUsername: "pi0neerpat#1337",
  toUserProviderType: "DISCORD",
  tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  tokenType: 'ERC20',
  amount: '.01',
}

tokenTransfer(data).then(response => {
  console.log(response)
}).catch(e => console.log(e))

// const data = {
//   toUserUsername: 'pi0neerpat#1337',
//   toUserProviderType: 'DISCORD',
//   tokenAddress: '0x9CA6a77C8B38159fd2dA9Bd25bc3E259C33F5E39',
//   tokenType: 'ERC20',
//   amount: '.01',
// }

// const data = {
//   toAddress: '',
//   toUserId: 'DISCORD-381135787330109441',
//   tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
//   tokenType: 'ERC20',
//   amount: '.01',
// }

// const options = {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${ACCESS_TOKEN}`,
//   },
// }

// axios
//   .post(
//     'http://localhost:4001/v1/tokens/transfers',
//     // "https://api.usekeyp.com/v1/tokens/transfer" ,
//     data,
//     options
//   )
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// Ramps

// GET On Ramp

// const rampType = 'WERT'
// const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

// axios
//   .get(
//     `https://api.usekeyp.com/v1/ramps/on/${rampType}`,
//     options
//   )
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// GET Off Ramp

// const rampType = 'COINBASE'
// const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

// axios
//   .get(`https://api.usekeyp.com/v1/ramps/off/${rampType}`, options)
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// Read Method

// const data = {
//   address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
//   abi: 'balanceOf(address) public view returns (uint256)',
//   args: ['0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'],
// }

// const options = {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${ACCESS_TOKEN}`,
//   },
// }

// axios
//   .post('http://localhost:4001/v1/contracts/method/read', data, options)
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// Write Method

// const data = {
//   address: '0x55d4dfb578daa4d60380995fff7a706471d7c719',
//   args: ['1', '10000000', '0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39'],
//   abi: 'pay(uint256,uint256,address) public returns (bool success)',
//   // value: '1',
// }

// const options = {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${ACCESS_TOKEN}`,
//   },
// }

// axios
//   .post('http://localhost:4001/v1/contracts/method/write', data, options)
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

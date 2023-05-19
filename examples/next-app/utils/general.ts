export const KEYP_API_DOMAIN =
  process.env.NEXT_PUBLIC_KEYP_API_DOMAIN || "https://api.usekeyp.com";
export const KEYP_BASE_URL_V1 = `${KEYP_API_DOMAIN}/v1`;

export const blockExplorerLink = (hash: string) =>
  `https://polygonscan.com/tx/${hash}`;

// TODO: replace ETH address with WETH on Polygon
export const supportedAssets: { [k: string]: string } = {
  ETH: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  DAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
};

export const inputColorLogicErrors = (errors: any, type: string) => {
  if (type === "request") {
    return "formGreen";
  } else if (type === "send" && errors.amount) {
    return "errorEmailRed";
  } else {
    return "formGreen";
  }
};

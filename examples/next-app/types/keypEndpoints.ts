export type Endpoints = "ramps" | "users" | "tokens" | "balance";

export type UrlParams1 = "on" | "off" | "transfers" | string;

export type UserBalance = {
  [k: string]: {
    balance: string;
    balanceBn: {
      type: string;
      hex: string;
    };
    formatted: string;
    decimals: 18;
    symbol: string;
    name: string;
    tokenAddress: string | null;
    network: string;
    chainId: number;
  };
};

export type TransferError = {
  status: "FAILED" | "SUCCESS";
  hash: string;
  error: string;
};

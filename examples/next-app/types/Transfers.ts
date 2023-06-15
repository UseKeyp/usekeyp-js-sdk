export type Transfers = {
  toUserUsername: string;
  toUserProviderType: "GOOGLE" | "DISCORD";
  tokenAddress: string;
  tokenType: "ERC20";
  amount: string;
};

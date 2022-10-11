export const config = {
  appName: "MezumWallet",
  chains: {
    eth: {
      name: "Ethereum",
      shortName: "eth",
      chainId: 1,
      networkId: 1,
      rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      blockExplorerUrls: ["https://etherscan.io"],
    },
  },
};

export const volitileState = {
  accounts: {
    eth: {
      address: "0x0000000000000000000000000000000000000000",
      privateKey:
        "0x0000000000000000000000000000000000000000000000000000000000000000",
    },
  },
};

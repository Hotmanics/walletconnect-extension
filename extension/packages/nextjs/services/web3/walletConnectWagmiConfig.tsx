import { defaultWagmiConfig } from "@web3modal/wagmi";
import { Chain } from "viem";
import { mainnet } from "viem/chains";
import scaffoldConfig from "~~/scaffold.config";

const { targetNetworks } = scaffoldConfig;

// We always want to have mainnet enabled (ENS resolution, ETH price, etc). But only once.
export const enabledChains = targetNetworks.find((network: Chain) => network.id == 1)
  ? targetNetworks
  : ([...targetNetworks, mainnet] as const);

// 1. Get projectId from https://cloud.walletconnect.com
export const projectId = "ff7064e3f703589c6a52183e6496768d";

// 2. Create wagmiConfig
export const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const walletConnectWagmiConfig = defaultWagmiConfig({
  chains: enabledChains,
  projectId,
  metadata,
  auth: {
    email: true, // default to true
    socials: ["google", "x", "github", "discord", "apple", "facebook", "farcaster"],
    showWallets: true, // default to true
    walletFeatures: true, // default to true
  },
});

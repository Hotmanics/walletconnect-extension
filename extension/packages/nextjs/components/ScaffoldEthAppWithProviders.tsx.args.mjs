export const providerImports = `import { createWeb3Modal } from "@web3modal/wagmi/react"; import { metadata, projectId, walletConnectWagmiConfig } from "~~/services/web3/walletConnectWagmiConfig";`;
export const walletProviderOpeningTags = "";
export const walletProviderClosingTags = "";
// export const preSetup = "createWeb3Modal({metadata, wagmiConfig: walletConnectWagmiConfig, projectId, enableAnalytics: true, // Optional - defaults to your Cloud configuration});"
export const wagmiConfig = "walletConnectWagmiConfig";
import Pool from "@/components/Pool";
import React from "react";

interface Poolprops {
  //handlePriceClick: any;
  connectWallet: () => void;
  InjectedChainId: number;
  chainId: number;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const index: React.FC<Poolprops> = ({
  connectWallet,
  chainId,
  InjectedChainId,
  handleWalletConnect,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  return (
    <Pool
      handleWalletConnect={handleWalletConnect}
      InjectedChainId={InjectedChainId}
      chainId={chainId}
      handleNetworkChange={handleNetworkChange}
      disconnectMetamask={disconnectMetamask}
      // isConnected={isConnected}
      connectWallet={connectWallet}
    />
  );
};

export default index;

import Trade from "@/components/Trade";
import React from "react";
interface Tradesprops {
  //handlePriceClick: any;
  connectWallet: () => void;
  InjectedChainId: number;
  chainId: number;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const index: React.FC<Tradesprops> = ({
  connectWallet,
  chainId,
  InjectedChainId,
  handleWalletConnect,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  return (
    <div>
      <Trade
        handleWalletConnect={handleWalletConnect}
        InjectedChainId={InjectedChainId}
        chainId={chainId}
        handleNetworkChange={handleNetworkChange}
        disconnectMetamask={disconnectMetamask}
        // isConnected={isConnected}
        connectWallet={connectWallet}
      />
    </div>
  );
};

export default index;

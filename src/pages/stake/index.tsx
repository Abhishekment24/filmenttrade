import Stakepage from "@/components/Stake";
import React from "react";
interface Stakeprops {
  //handlePriceClick: any;
  connectWallet: () => void;
  InjectedChainId: number;
  chainId: number;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const index: React.FC<Stakeprops> = ({
  connectWallet,
  chainId,
  InjectedChainId,
  handleWalletConnect,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  return (
    <div>
      <Stakepage
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

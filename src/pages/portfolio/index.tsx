import Portfolio from '@/components/Portfolio'
import React from 'react'

interface Portfolioprops {
  //handlePriceClick: any;
  connectWallet: () => void;
  InjectedChainId: number;
  chainId: number;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const index: React.FC<Portfolioprops> = ({
  connectWallet,
  chainId,
  InjectedChainId,
  handleWalletConnect,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  return (
    <div>
      <Portfolio
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

export default index

import Image from "next/image";
import { Inter } from "next/font/google";

import Head from "next/head";
import Trade from "@/components/Trade";
const inter = Inter({ subsets: ["latin"] });
interface Tradesprops {
  //handlePriceClick: any;
  connectWallet: () => void;
  InjectedChainId: number;
  chainId: number;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const Myapp: React.FC<Tradesprops> = ({
  connectWallet,
  chainId,
  InjectedChainId,
  handleWalletConnect,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  return (
    <div className="">
      <Head>
        <title>Filament</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

export default Myapp;

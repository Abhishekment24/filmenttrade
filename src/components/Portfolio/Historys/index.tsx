import React, { useState } from "react";

import Table from "./Table";
import { useAccount, useConnect, useDisconnect, useSwitchNetwork } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Afterconnectpopup from "@/components/Header/Walletpopup/Afterconnectpopup";
import Connectpopup from "@/components/Header/Walletpopup/Connectpopup";
import Agreepopup from "@/components/Header/Walletpopup/Agreepopup";
interface walletProps {
  InjectedChainId: number;
  chainId: number;

  connectWallet: () => void;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const Historys: React.FC<walletProps> = ({
  InjectedChainId,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  const { chains, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  const walletDetails = useAccount();
  console.log(chains, "<<<<thesearechains");

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const [chainId, setchainId] = useState<any>(null);
  const { address, isConnected, isConnecting } = useAccount();
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isAgreeOpen, setIsAgreeOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const handleWalletConnect = () => {
    if (window.ethereum) {
      connect();
      setIsWalletOpen(true);
      setIsAgreeOpen(false);
      setIsConnectOpen(false);
    } else {
      alert("Install metamask");
    }
  };
  const handleOpen = () => {
    setIsConnectOpen(true);
    setIsWalletOpen(false);
    setIsAgreeOpen(false);
  };

  const handleClose = () => {
    setIsConnectOpen(false);
    setIsWalletOpen(false);
    setIsAgreeOpen(false);
  };
  return (
    <>
      <div className="">
        <p className="pool_font text-[#fff] text-2xl font-semibold">History</p>
      </div>
      {!isConnected ? (
        <div className="py-[50px] my-[40px] bg-[#1B1C1E] pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]">
          <p className="pool_font text-xs text-center font-normal tracking-[0.06px] text-[#9CA3AF]">
            Connect wallet to see history
          </p>
          <div className="flex justify-center mt-3">
            <button
              onClick={handleOpen}
              className="items-center mb-2 pool_font text-[#0B2B28] w-[140px]  max-[588px]:w-full text-sm font-semibold  btn_one  py-[12px] px-[16px]"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      ) : (
        <Table />
      )}
      <Connectpopup
        isOpen={isConnectOpen}
        onClose={handleClose}
        handleWalletConnect={handleWalletConnect}
      />
      {/*wallet popup  */}

      <Afterconnectpopup
        isOpen={isWalletOpen}
        isConnecting={isConnecting}
        InjectedChainId={InjectedChainId}
        chainId={chainId}
        isConnected={isConnected}
        onClose={handleClose}
        handleNetworkChange={handleNetworkChange}
        disconnectMetamask={disconnectMetamask}
      />

      {/*  Agree Popup after connected */}
      {isAgreeOpen && <Agreepopup isOpen={isAgreeOpen} onClose={handleClose} />}
    </>
  );
};

export default Historys;

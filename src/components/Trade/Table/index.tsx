import React, { useState } from "react";

import Positions from "../Table/positions";

import Openorders from "./openorders";
import History from "./history";
import RealisedPnL from "./realisedPnL";
import Balance from "./balance";
import Errormsg from "@/components/Commoncomponent/Errormsg";
import Afterconnectpopup from "@/components/Header/Walletpopup/Afterconnectpopup";
import Connectpopup from "@/components/Header/Walletpopup/Connectpopup";
import Agreepopup from "@/components/Header/Walletpopup/Agreepopup";
import { useAccount, useConnect, useDisconnect, useSwitchNetwork } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
interface TablesProps {
  //formData: any;

  InjectedChainId: number;
  chainId: number;

  connectWallet: () => void;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
  //isConnected: boolean;
}
const tabs = [
  {
    title: "Positions",
    key: "positions",
  },
  {
    title: "Open Orders",
    key: "openorders",
  },
  {
    title: "History",
    key: "history",
  },
  {
    title: "Realised PnL",
    key: "realisedPnL",
  },
  {
    title: "Balance",
    key: "balance",
  },
];
const Tablesection: React.FC<TablesProps> = ({
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
  const [selectedTab, setSelectedTab] = useState("positions");
  const [error, setError] = useState(false);
  const [isAgreeOpen, setIsAgreeOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const handleWalletConnect = () => {
    if (window.ethereum) {
      connect();
      setIsWalletOpen(true);
      setIsAgreeOpen(false);
      setIsDetailOpen(false);
    } else {
      alert("Install metamask");
    }
  };
  const handleDelete = () => {
    setIsDetailOpen(true);
    setIsWalletOpen(false);
    setIsAgreeOpen(false);
  };

  const closeDelete = () => {
    setIsDetailOpen(false);
    setIsWalletOpen(false);
    setIsAgreeOpen(false);
  };

  return (
    <>
      <div>
        <div className=" bg-[#1B1C1E] pool_box_shadow border-t-[1px] border-solid border-[#25272A]    w-full ">
          <div className="">
            <div className="flex items-center max-[500px]:px-2 overflow-x-auto no-scrollbar gap-[18px] w-full border-b-[1px] border-[#272727] ">
              {tabs.map((tab, index) => {
                return (
                  <button
                    onClick={() => setSelectedTab(tab.key)}
                    className={`py-3  pool_font font-semibold text-xs tracking-[0.06px]  ${
                      tab.key == selectedTab
                        ? "text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] max-[639px]:min-w-[8rem] sm:w-[80px] "
                        : "text-[#BABABA] max-[639px]:min-w-[8rem]  sm:w-[80px]"
                    }`}
                    key={index}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>
          {!isConnected ? (
            <div className="py-[50px]">
              <p className="pool_font text-xs text-center font-normal tracking-[0.06px] text-[#9CA3AF]">
                Connect wallet to see{" "}
                {selectedTab === "positions"
                  ? "positions"
                  : selectedTab === "openorders"
                  ? "open orders"
                  : selectedTab === "history"
                  ? "history"
                  : selectedTab === "realisedPnL"
                  ? "realised PnL"
                  : "balance"}
              </p>
              <div className="flex justify-center mt-3">
                <button
                  onClick={handleDelete}
                  className="cursor-pointer w-[105px] pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF] rounded-[4px] flex justify-center items-center py-[6px] px-[6px] max-border  bg-[#2B2B2B]"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          ) : (
            <>
              {error ? (
                <div className="text-center font-medium px-2 py-2">
                  <Errormsg />
                </div>
              ) : (
                <>
                  {selectedTab === "positions" && (
                    <>
                      <Positions />
                    </>
                  )}
                  {selectedTab === "openorders" && (
                    <>
                      <Openorders />
                    </>
                  )}
                  {selectedTab === "history" && (
                    <>
                      <History />
                    </>
                  )}
                  {selectedTab === "realisedPnL" && (
                    <>
                      <RealisedPnL />
                    </>
                  )}
                  {selectedTab === "balance" && (
                    <>
                      <Balance />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Connectpopup
        isOpen={isDetailOpen}
        onClose={closeDelete}
        handleWalletConnect={handleWalletConnect}
      />
      {/*wallet popup  */}

      <Afterconnectpopup
        isOpen={isWalletOpen}
        isConnecting={isConnecting}
        InjectedChainId={InjectedChainId}
        chainId={chainId}
        isConnected={isConnected}
        onClose={closeDelete}
        handleNetworkChange={handleNetworkChange}
        disconnectMetamask={disconnectMetamask}
      />

      {/*  Agree Popup after connected */}
      <Agreepopup isOpen={isAgreeOpen} onClose={closeDelete} />
    </>
  );
};

export default Tablesection;

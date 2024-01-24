import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Charts from "../../Pool/Leftcomponentside/Charts";
import Table from "./Pooltable";
import Dropdown from "@/components/Commoncomponent/Dropdown";
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
const tabs = [
  {
    title: "Deposited",
    key: "deposited",
  },
  {
    title: "PnL",
    key: "pnL",
  },
];
const edata = [
  {
    id: 1,
    title: "Avg. APR",
    price: "48.73%",
  },
];

const Pools: React.FC<walletProps> = ({
  InjectedChainId,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  const [selectedTab, setSelectedTab] = useState("deposited");
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
      <div className="flex flex-col gap-[4px]">
        <span className="pool_font text-[#fff] text-2xl font-semibold">
          Pools
        </span>
      </div>
      {!isConnected ? (
        <div className="py-[50px] my-[40px] bg-[#1B1C1E] pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]">
          <p className="pool_font text-xs text-center font-normal tracking-[0.06px] text-[#9CA3AF]">
            Connect wallet to see pools
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
        <>
          <div className="flex mt-[40px] items-start bg-[#1B1C1E] gap-6 max-[1023px]:flex-col justify-between  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] sm:px-[24px] px-5 w-full relative">
            <div className="lg:w-[30%] w-full py-[24px]">
              <span className="pool_font text-[#BABABA] text-xs font-normal tracking-[0.06px]">
                Deposited
              </span>
              <p className="pool_font text-[#fff] text-2xl font-medium tracking-[0.12px]">
                $52,522.59
              </p>
              <div className="border-t-[1px] border-[#262626] border-solid my-4"></div>
              {edata.map((items, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className=" flex justify-between items-center gap-4 w-full mb-[8px]"
                    >
                      <span className="pool_font text-[#939191] text-xs font-normal tracking-[0.06px]">
                        {items.title}
                      </span>

                      <p className="pool_font text-[#fff] text-xs font-semibold tracking-[0.06px]">
                        {items.price}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="lg:border-l-[1px] max-[1023px]:border-t-[1px] border-[#262626] border-solid max-[1023px]:w-full lg:h-[327px]"></div>
            <div className="lg:w-[70%] w-full py-[24px]">
              <div className="flex justify-between flex-wrap gap-3 items-center w-full">
                <div className="flex items-center gap-[4px] bg-[#26282C] border-[#34363C] pool_charts_box border-[1px] border-solid rounded-[8px]  overflow-x-auto no-scrollbar">
                  {tabs.map((tab, index) => {
                    return (
                      <button
                        onClick={() => setSelectedTab(tab.key)}
                        className={`py-[6px] px-[12px] pool_font rounded-[8px] font-normal text-base  ${tab.key == selectedTab
                          ? " bg-[#1A1A1A] text-[#E8E8E8] "
                          : "text-[#BABABA] "
                          }`}
                        key={index}
                      >
                        {tab.title}
                      </button>
                    );
                  })}
                </div>
                <div>
                  <Dropdown />
                </div>
              </div>
              {selectedTab == "deposited" && (
                <div className="w-full h-[200px] mt-[35px]">
                  <Charts />
                </div>
              )}
              {selectedTab == "pnL" && (
                <div className="w-full h-[200px] mt-[35px]">
                  <Charts />
                </div>
              )}
            </div>
          </div>

          <Table />
        </>
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

export default Pools;

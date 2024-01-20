import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { LuArrowDownRightSquare, LuArrowUpRightSquare } from "react-icons/lu";
import Charts from "../../Pool/Leftcomponentside/Charts";
import Table from "./Table";
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
    title: "Portfolio",
    key: "portfolio",
  },
  {
    title: "PnL",
    key: "pnL",
  },
];
const edata = [
  {
    id: 1,
    title: "24h PnL",
    price: "$1001.54",
    value: "(18.27%)",
  },
  {
    id: 2,
    title: "Total PnL",
    price: "$1001.54",
    value: "(18.27%)",
  },
];
const mdata = [
  {
    id: 1,
    title: "Margin Usage",
    price: "48.73%",
  },
  {
    id: 2,
    title: "Funds Available",
    price: "$8.12",
  },
  {
    id: 3,
    title: "Account Leverage",
    price: "55.2x",
  },
  {
    id: 4,
    title: "Staked Liquidity",
    price: "223.11",
  },
];
const Overview: React.FC<walletProps> = ({
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
  const [selectedTab, setSelectedTab] = useState("portfolio");
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
        <div>
          <p className="pool_font text-[#fff] text-2xl font-semibold tracking-[0.12px]">
            My Portfolio
          </p>
          <span className="pool_font text-[#939191] text-xs font-normal tracking-[0.06px]">
            0x63gws...3536
          </span>
        </div>
      </div>
      {!isConnected ? (
        <div className="py-[50px] my-[40px] bg-[#1B1C1E] pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]">
          <p className="pool_font text-xs text-center font-normal tracking-[0.06px] text-[#9CA3AF]">
            Connect wallet to see portfolio details
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
          <div className="flex mt-[40px] items-start bg-[#1B1C1E] gap-6 justify-between max-[1023px]:flex-col pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] sm:px-[24px] px-5 w-full relative">
            <div className="lg:w-[30%] w-full py-[24px]">
              <span className="pool_font text-[#BABABA] text-xs font-normal tracking-[0.06px]">
                Portfolio
              </span>
              <p className="pool_font text-[#fff] text-2xl font-medium tracking-[0.12px]">
                $241,500.28
              </p>
              <div className="border-t-[1px] border-[#262626] border-solid my-4"></div>
              {edata.map((items, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className=" flex justify-between items-center gap-4 w-full mb-[8px]"
                    >
                      <div>
                        <span className="pool_font text-[#939191] text-xs font-normal tracking-[0.06px]">
                          {items.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <span className="text-[#00CC99] text-xs">
                          <FaArrowUp />
                        </span>
                        <p className="pool_font text-[#00CC99] text-xs font-semibold tracking-[0.06px]">
                          {items.price}
                        </p>
                        <p className="pool_font text-[#00CC99] text-xs font-normal tracking-[0.06px]">
                          {items.value}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="border-t-[1px] border-[#262626] border-solid my-4"></div>
              {mdata.map((items, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className=" flex justify-between items-center gap-4 w-full mb-[8px]"
                    >
                      <p className="pool_font text-[#939191] text-xs font-normal tracking-[0.06px]">
                        {items.title}
                      </p>
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
                        className={`py-[6px] px-[12px] pool_font rounded-[8px] font-normal text-base  ${
                          tab.key == selectedTab
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
              {selectedTab == "portfolio" && (
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] my-4 relative">
            <li className="bg-[#1B1C1E] pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px] ">
              <div className="flex items-center justify-between gap-[4px]">
                <p className="pool_font text-[#E8E8E8] text-xs font-normal tracking-[0.06px]">
                  Perps PnL
                </p>
                <div className="flex items-center gap-[4px]">
                  <span className="text-[#10B981] text-xs">
                    <IoMdTrendingUp />
                  </span>
                  <p className="pool_font text-[#10B981] text-xs font-semibold tracking-[0.06px]">
                    10.7%
                  </p>
                </div>
              </div>
              <p className="pool_font text-[#10B981] mt-[8px] text-[20px] font-semibold tracking-[0.1px]">
                $241,500.28
              </p>
            </li>
            <li className="bg-[#1B1C1E] pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px] ">
              <p className="pool_font text-[#E8E8E8] text-xs font-normal tracking-[0.06px]">
                Pools
              </p>

              <p className="pool_font text-[#fff] mt-[8px] text-[20px] font-semibold tracking-[0.1px]">
                $241,500.28
              </p>
            </li>
            <li className="bg-[#1B1C1E] pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px] ">
              <p className="pool_font text-[#E8E8E8] text-xs font-normal tracking-[0.06px]">
                Staked
              </p>

              <p className="pool_font text-[#fff] mt-[8px] text-[20px] font-semibold tracking-[0.1px]">
                $241,500.28
              </p>
            </li>
            <li className="pool_right_box portfolio_box_shadow p-[24px]   relative  bg_coin">
              <p className="pool_font text-[#E8E8E8] text-xs font-normal tracking-[0.06px]">
                Rewards
              </p>

              <p className="pool_font text-[#fff] mt-[8px] text-[20px] font-semibold tracking-[0.1px]">
                $241,500.28
              </p>
            </li>
          </ul>
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
      <Agreepopup isOpen={isAgreeOpen} onClose={handleClose} />
    </>
  );
};

export default Overview;

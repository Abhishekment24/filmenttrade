import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import Market from "./Market";
import Limit from "./Limit";
import Link from "next/link";
import { RiShareBoxFill } from "react-icons/ri";
import { useAccount, useConnect, useDisconnect, useSwitchNetwork } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Connectpopup from "@/components/Header/Walletpopup/Connectpopup";
import Afterconnectpopup from "@/components/Header/Walletpopup/Afterconnectpopup";
import Agreepopup from "@/components/Header/Walletpopup/Agreepopup";
import Orderplace from "@/components/Commoncomponent/Alertpopup/Orderplace";
import Postionpopup from "@/components/Commoncomponent/Alertpopup/Positioncreatedpopup";
import Failedorder from "@/components/Commoncomponent/Alertpopup/Failedorder";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SkeletonLoader, { SingleSkeleton, SkeletonDefaultProps } from "@/components/Commoncomponent/SkeletonLoader";
interface RightProps {
  StakeOpenPopup: () => void;
  //formData: any;
  isPageLoading: boolean,
  selectedPrice: any;
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
    title: "Market",
    key: "market",
  },
  {
    title: "Limit",
    key: "limit",
  },
];
const Rightsidecomponent: React.FC<RightProps> = ({
  StakeOpenPopup,
  connectWallet,
  isPageLoading,
  selectedPrice,
  // handleWalletConnect,
  // formData,

  InjectedChainId,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  const walletDetails = useAccount();
  console.log(chains, "<<<<thesearechains");

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const [chainId, setchainId] = useState<any>(null);
  const { address, isConnected, isConnecting } = useAccount();
  const [selectedTab, setSelectedTab] = useState("market");
  const [isAgreeOpen, setIsAgreeOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [openpopup, setOpenpopup] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const CloseAlert = () => {
    setOpenpopup(false);
  };
  const Opens = () => {
    setOpenpopup(true);
  };
  const handleWalletConnect = () => {
    if (window.ethereum) {
      connect();
      setIsWalletOpen(true);
      setIsAgreeOpen(false);
      setIsPopupOpen(false);
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
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <>
      <div className="border-[1px] border-solid bg-[#1B1C1E]   border-[#FFFFFF0D] max-[1023px]:mt-5 lg:h-[100vh] lg:w-[30%] xl:w-[25%] min-[1700px]:w-[400px] lg:fixed lg:overflow-y-scroll  no-scrollbar">
        <div className="lg:bg-[#1B1C1E] lg:fixed  z-[300] lg:w-[30%] xl:w-[25%] min-[1700px]:w-[400px]">
          <div className="px-4"></div>
          <div className="flex justify-between flex-wrap items-center gap-[10px] w-full border-b-[1px] border-[#272727] px-4">
            <div className="flex items-center  justify-between  gap-[19px]  border-b-[1px] border-[#272727] w-full">
              {tabs.map((tab, index) => {
                return (
                  <button
                    onClick={() => setSelectedTab(tab.key)}
                    className={`pool_font font-semibold text-sm  ${tab.key == selectedTab
                      ? "py-[8.5px] text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] w-[50%]"
                      : "text-[#BABABA] w-[50%] "
                      }`}
                    key={index}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-10 pb-20">
          {selectedTab == "market" && (
            <>
              {isPageLoading ? ShowMarketSkeleton :
                <Market
                  //formData={formData}
                  isPageLoading={isPageLoading}
                  StakeOpenPopup={StakeOpenPopup}
                  isConnected={isConnected}
                />}

            </>
          )}
          {selectedTab == "limit" && (
            <>
              {isPageLoading ? ShowMarketSkeleton : <Limit selectedPrice={selectedPrice} />}
            </>
          )}
        </div>

        <div className="lg:fixed lg:bg-[#1B1C1E]  z-[300] lg:bottom-[1%] px-4 py-4 border-t-[1px] lg:h-[90px] border-[#272727] border-solid lg:w-[30%] xl:w-[25%] min-[1700px]:w-[400px]">
          {isPageLoading ? ShowBuySellSkeleton : <>
            {!isConnected ? (
              <button
                onClick={handleDelete}
                className="items-center pool_font text-[#1F2937] w-full text-xs font-semibold  btn_one  py-[10px] px-[16px] tracking-[0.06px]"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center gap-[8px] w-full">
                <div
                  onClick={Opens}
                  data-tooltip-id="my-tooltip5"
                  className="w-[50%]"
                >
                  <button className=" items-center pool_font text-[#fff] w-[100%]  text-[15px] font-semibold btn_border  bg-[#059669] rounded-[6px]  py-[10px] px-[16px] tracking-[0.075px]">
                    Buy / Long
                  </button>
                  <Tooltip id="my-tooltip5" className="tooltip_bg">
                    <div className="w-[150px]">
                      <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                        Deposit funds
                      </h3>
                      <p className="text-xs font-normal text-[#fff] pool_font tracking-[0.05px]">
                        Deposit funds to start trading
                      </p>
                    </div>
                  </Tooltip>
                </div>
                <div className="w-[50%]">
                  <button className="items-center pool_font text-[#fff] w-[100%] text-[15px] font-semibold  bg-[#C33F3F] btn_border rounded-[6px]  py-[10px] px-[16px] tracking-[0.075px]">
                    Sell / Short
                  </button>
                </div>
              </div>
            )}
          </>}
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
      {isAgreeOpen && <Agreepopup isOpen={isAgreeOpen} onClose={closeDelete} />}
      {/*} <Failedorder
        isOpen={openpopup}
        onClose={closePopup}
        failStatus="placed"
      />*/}
      <Orderplace
        isOpen={openpopup}
        onClose={CloseAlert}
        orderStatus="placed"
      />
    </>
  );
};
const ShowMarketSkeleton = (
  <>
    <div className="px-4 py-2 pb-[100px] z-0">

      <SkeletonLoader height={40} />
      <div className="mt-2"></div>
      <SkeletonLoader height={15} width="30%" />
      <div className="mt-5"></div>
      <SkeletonLoader height={40} />
      <SingleSkeleton containerClassName="flex mt-2 justify-between" height={15} inline={true} count={2} width="30%" />
      <div className="my-6 border-t border-[#26282B]" ></div>
      {["60", "70", "90"].map((item, key) => {
        return (
          <div key={key} className="my-3">

            <SkeletonTheme  {...SkeletonDefaultProps({ width: "100%" })}  >
              <Skeleton width="5%" borderRadius={0} />
              <Skeleton width="5%" containerClassName="opacity-0" />
              <Skeleton width={item + "%"} />
              <Skeleton width={100 - +item - 10 + "%"} containerClassName="opacity-0" />
            </SkeletonTheme>
          </div>
        )
      })}
      <div className="my-6 border-t border-[#26282B]" ></div>
      <SingleSkeleton width="15%" height={12} />
      {["40", "30", "35", "30", "40", "45"].map((item, key) => {
        return (
          <div key={key} className="my-2">

            <SkeletonTheme  {...SkeletonDefaultProps({ width: "100%" })}  >
              <Skeleton width={(80 - +item) + "%"} />
              <Skeleton width={item + "%"} containerClassName="opacity-0" />
              <Skeleton width="20%" />
            </SkeletonTheme>
          </div>
        )
      })}
      <div className="my-6 border-t border-[#26282B]" ></div>
      {["40", "30",].map((item, key) => {
        return (
          <div key={key} className="my-2">

            <SkeletonTheme  {...SkeletonDefaultProps({ width: "100%" })}  >
              <Skeleton width={(80 - +item) + "%"} />
              <Skeleton width={item + "%"} containerClassName="opacity-0" />
              <Skeleton width="20%" />
            </SkeletonTheme>
          </div>
        )
      })}
      <div className="my-6 border-t border-[#26282B]" ></div>



    </div>
  </>
)
const ShowBuySellSkeleton = (
  <SkeletonTheme  {...SkeletonDefaultProps({ width: "100%", height: "50" })}  >
    <Skeleton width="48%" height={45} />

    <Skeleton width="4%" height={45} containerClassName="opacity-0" />
    <Skeleton width="48%" height={45} />
  </SkeletonTheme>
)
export default Rightsidecomponent;

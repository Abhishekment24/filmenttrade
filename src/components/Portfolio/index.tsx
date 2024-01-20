import React, { useEffect, useState } from "react";
import Overviews from "./Overviews/Overview";
import Perpetuals from "./Perpetuals/Perpetuals";
import Pools from "./Pools/Pools";
import Rewards from "./Rewards";
import Historys from "./Historys";
import Link from "next/link";
interface Portfolioprops {
  //handlePriceClick: any;
  connectWallet: () => void;
  InjectedChainId: number;
  chainId: number;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const tabs = [
  {
    title: "Overview",
    href: "",
    key: "overview",
  },
  {
    title: "Perpetuals",
    href: "",
    key: "perpetuals",
  },
  {
    title: "Pools",
    href: "",
    key: "pools",
  },
  {
    title: "Rewards",
    href: "/portfolio?active=reward",
    key: "reward",
  },
  {
    title: "History",
    href: "",
    key: "history",
  },
];

const Portfolio: React.FC<Portfolioprops> = ({
  connectWallet,
  chainId,
  InjectedChainId,
  handleWalletConnect,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get("active");

    if (activeTab) {
      setSelectedTab(activeTab);
    }
  }, []);
  return (
    <>
      <section className="py-[120px] pool_bg lg:h-[60px] max-[1023px]:overflow-hidden no-scrollbar">
        <div className="max-[1023px]:container max-[1023px]:mx-auto max-[1023px]:px-4 ">
          <div className="portfolio_grids-width lg:grid relative  ">
            <div className="lg:w-[18%] w-full">
              <div className=" border-r-[1px] border-solid bg-[#111113] border-[#25272A]  max-[1023px]:mb-[50px] lg:py-12 max-[1023px]:rounded-[8px] lg:h-[100vh] lg:w-[18%] lg:top-[2%] 2xl:top-[2%] lg:fixed">
                <div className="">
                  <div className="flex  lg:flex-col  max-[1023px]:items-center max-[1023px]:gap-8  max-[1023px]:overflow-x-auto text-left w-full lg:px-6 lg:py-5 px-3">
                    {tabs.map((tab, index) => {
                      return (
                        <>
                          <Link key={index} href={tab.href}>
                            <button
                              onClick={() => handleTabClick(tab.key)}
                              className={`py-3 text-left  pool_font font-medium text-sm tracking-[0.07px]  ${
                                tab.key == selectedTab
                                  ? " text-[#40E0D0]  max-[1023px]:border-b-[2px]  max-[1023px]:border-[#40E0D0]  max-[639px]:w-[117px] "
                                  : "text-[#fff]   max-[639px]:w-[117px]"
                              }`}
                            >
                              {tab.title}
                            </button>
                          </Link>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[82%] w-full lg:mx-auto">
              {selectedTab == "overview" && (
                <>
                  <div className="pb-[70px]">
                    <Overviews
                      handleWalletConnect={handleWalletConnect}
                      InjectedChainId={InjectedChainId}
                      chainId={chainId}
                      handleNetworkChange={handleNetworkChange}
                      disconnectMetamask={disconnectMetamask}
                      // isConnected={isConnected}
                      connectWallet={connectWallet}
                    />
                  </div>
                </>
              )}
              {selectedTab == "perpetuals" && (
                <>
                  <div className="pb-[70px]">
                    <Perpetuals
                      handleWalletConnect={handleWalletConnect}
                      InjectedChainId={InjectedChainId}
                      chainId={chainId}
                      handleNetworkChange={handleNetworkChange}
                      disconnectMetamask={disconnectMetamask}
                      // isConnected={isConnected}
                      connectWallet={connectWallet}
                    />
                  </div>
                </>
              )}
              {selectedTab == "pools" && (
                <>
                  <div className="pb-[70px]">
                    <Pools
                      handleWalletConnect={handleWalletConnect}
                      InjectedChainId={InjectedChainId}
                      chainId={chainId}
                      handleNetworkChange={handleNetworkChange}
                      disconnectMetamask={disconnectMetamask}
                      // isConnected={isConnected}
                      connectWallet={connectWallet}
                    />
                  </div>
                </>
              )}
              {selectedTab == "reward" && (
                <>
                  <div className="pb-[70px]">
                    <Rewards
                      handleWalletConnect={handleWalletConnect}
                      InjectedChainId={InjectedChainId}
                      chainId={chainId}
                      handleNetworkChange={handleNetworkChange}
                      disconnectMetamask={disconnectMetamask}
                      // isConnected={isConnected}
                      connectWallet={connectWallet}
                    />
                  </div>
                </>
              )}
              {selectedTab == "history" && (
                <>
                  <div className="pb-[70px]">
                    <Historys
                      handleWalletConnect={handleWalletConnect}
                      InjectedChainId={InjectedChainId}
                      chainId={chainId}
                      handleNetworkChange={handleNetworkChange}
                      disconnectMetamask={disconnectMetamask}
                      // isConnected={isConnected}
                      connectWallet={connectWallet}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

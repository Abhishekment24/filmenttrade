import React, { useState } from "react";
import Overviews from "./Overviews/Overview";
import Perpetuals from "./Perpetuals/Perpetuals";
import Pools from "./Pools/Pools";
import Rewards from "./Rewards/Rewards";
import Historys from "./Historys";
const tabs = [
  {
    title: "Overview",
    key: "overview",
  },
  {
    title: "Perpetuals",
    key: "perpetuals",
  },
  {
    title: "Pools",
    key: "pools",
  },
  {
    title: "Rewards",
    key: "rewards",
  },
  {
    title: "History",
    key: "history",
  },
];

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  return (
    <>
      <section className="py-[120px] pool_bg lg:h-[60px] max-[1023px]:overflow-hidden">
        <div className="">
          <div className="portfolio_grids-width grid relative">
            <div className="w-[18%]">
              <div className=" border-r-[1px] border-solid bg-[#111113] border-[#25272A] py-12 max-[1023px]:mt-5 lg:h-[100vh] w-[18%] top-[2%] 2xl:top-[2%] lg:fixed lg:overflow-y-scroll">
                <div className="">
                  <div className="flex  flex-col   overflow-x-auto text-left w-full px-6 py-5">
                    {tabs.map((tab, index) => {
                      return (
                        <button
                          onClick={() => setSelectedTab(tab.key)}
                          className={`py-3 text-left  pool_font font-medium text-sm tracking-[0.07px]  ${
                            tab.key == selectedTab
                              ? " text-[#40E0D0]  sm:w-[117px] "
                              : "text-[#fff]   sm:w-[117px]"
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
            </div>
            <div className="w-[82%] mx-auto">
              {selectedTab == "overview" && (
                <>
                  <Overviews />
                </>
              )}
              {selectedTab == "perpetuals" && (
                <>
                  <Perpetuals />
                </>
              )}
              {selectedTab == "pools" && (
                <>
                  <Pools />
                </>
              )}
              {selectedTab == "rewards" && (
                <>
                  <Rewards />
                </>
              )}
              {selectedTab == "history" && (
                <>
                  <Historys />
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

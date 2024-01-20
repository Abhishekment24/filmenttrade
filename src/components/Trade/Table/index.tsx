import React, { useState } from "react";

import Positions from "../Table/positions";

import Openorders from "./openorders";
import History from "./history";
import RealisedPnL from "./realisedPnL";
import Balance from "./balance";
import Errormsg from "@/components/Commoncomponent/Errormsg";
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
const Tablesection = () => {
  const [selectedTab, setSelectedTab] = useState("positions");
  const [error, setError] = useState(false);

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
        </div>
      </div>
    </>
  );
};

export default Tablesection;

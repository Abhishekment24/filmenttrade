import React, { useState } from "react";

import Positions from "./positions";
import Openorders from "./openorders";

import Pool from "./pool";
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
    title: "Pools",
    key: "pools",
  },
];
const Table = () => {
  const [selectedTab, setSelectedTab] = useState("positions");
  return (
    <>
      <div className=" bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]   w-full ">
        <div className="">
          <div className="flex items-center max-[500px]:px-2 overflow-x-auto gap-[20px] w-full border-b-[1px] border-[#272727]  px-2">
            {tabs.map((tab, index) => {
              return (
                <button
                  onClick={() => setSelectedTab(tab.key)}
                  className={`py-3  pool_font font-semibold text-xs tracking-[0.06px]  ${
                    tab.key == selectedTab
                      ? " text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] max-[639px]:min-w-[8rem]  "
                      : "text-[#BABABA] max-[639px]:min-w-[8rem] "
                  }`}
                  key={index}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
        {selectedTab == "positions" && (
          <>
            <Positions />
          </>
        )}
        {selectedTab == "openorders" && (
          <>
            <Openorders />
          </>
        )}
        {selectedTab == "pools" && (
          <>
            <Pool />
          </>
        )}
      </div>
    </>
  );
};

export default Table;

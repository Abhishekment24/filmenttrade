import React, { useState } from "react";
import { TbProgressX } from "react-icons/tb";
import Rewards from "../Rewards";
import Stake from "./stake";
const tabs = [
  {
    title: "Referral",
    key: "referral",
  },
  {
    title: "Stake",
    key: "stake",
  },
  
];
const Table = () => {
  const [selectedTab, setSelectedTab] = useState("referral");
  return (
    <>
      <div className=" bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]   w-full ">
        <div className="">
          <div className="overflow-x-auto gap-[20px] w-full border-b-[1px] border-[#272727]  px-2">
            <button className="py-4 text-[#fff] pool_font font-semibold text-base ">
              Reward History
            </button>
          </div>
        </div>
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
        {selectedTab == "referral" && (
          <>
            <Rewards />
          </>
        )}
        {selectedTab == "stake" && (
          <>
            <Stake />
          </>
        )}
      </div>
    </>
  );
};

export default Table;

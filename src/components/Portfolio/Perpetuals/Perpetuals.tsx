import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Charts from "../../Pool/Leftcomponentside/Charts";
import Table from "./Table";
import Dropdown from "@/components/Commoncomponent/Dropdown";
const tabs = [
  {
    title: "Value",
    key: "value",
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

const Perpetuals = () => {
  const [selectedTab, setSelectedTab] = useState("value");
  return (
    <>
      <div className="flex flex-col gap-[4px]">
        <span className="pool_font text-[#fff] text-2xl font-semibold">
          Perpetuals
        </span>
      </div>
      <div className="flex mt-[40px] items-start bg-[#1B1C1E] max-[1023px]:flex-col gap-6 justify-between  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] sm:px-[24px] px-5 w-full relative">
        <div className="lg:w-[30%] w-full py-[24px]">
          <span className="pool_font text-[#BABABA] text-xs font-normal tracking-[0.06px]">
            Perpetuals Value
          </span>
          <p className="pool_font text-[#fff] text-2xl font-medium tracking-[0.12px]">
            $10,001.54
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
        </div>
        <div className="lg:border-l-[1px] max-[1023px]:border-t-[1px] border-[#262626] border-solid max-[1023px]:w-full lg:h-[327px]"></div>
        <div className="lg:w-[70%] w-full py-[24px]">
          <div className="flex justify-between flex-wrap gap-3 items-center w-full">
            <div className="flex items-center gap-[4px] bg-[#26282C] border-[#34363C] pool_charts_box border-[1px] border-solid rounded-[8px]  overflow-x-auto">
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
          {selectedTab == "value" && (
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
  );
};

export default Perpetuals;

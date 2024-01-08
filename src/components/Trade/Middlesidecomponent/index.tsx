import Link from "next/link";
import { cdata, edata } from "./data";
import React, { useState } from "react";
const tabs = [
  {
    title: "Order Book",
    key: "orderbook",
  },
  {
    title: "Trades",
    key: "trades",
  },
];
const Middlesidecomponent = () => {
  const [selectedTab, setSelectedTab] = useState("orderbook");
  return (
    <>
      <div className="border-[1px] bg-[#1B1C1E] border-solid border-[#FFFFFF0D] max-[1023px]:my-5 h-[632px] overflow-y-scroll">
        <div className="">
          <div className="flex px-2  items-center justify-between gap-[18px]  border-b-[1px] border-[#272727] ">
            {tabs.map((tab, index) => {
              return (
                <button
                  onClick={() => setSelectedTab(tab.key)}
                  className={`pool_font font-semibold text-xs  ${
                    tab.key == selectedTab
                      ? "py-[9px] text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] w-[101px] "
                      : "text-[#BABABA] w-[101px]"
                  }`}
                  key={index}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
        {selectedTab == "orderbook" && (
          <>
            <div className="flex justify-between items-center  pt-4 px-2">
              <p className="pool_font text-[#9CA3AF] text-left font-medium text-[10px] tracking-[0.05px]">
                Price <span className="font-normal text-[#6B7280]">USDC</span>
              </p>
              <div className="flex items-center gap-[19px]">
                <p className="pool_font text-[#9CA3AF] text-center  font-medium text-[10px] tracking-[0.05px]">
                  Size <span className="font-normal text-[#6B7280]">BTC</span>
                </p>
                <p className="pool_font text-[#9CA3AF] text-right font-medium text-[10px] w-[68px] tracking-[0.05px]">
                  Total
                </p>
              </div>
            </div>
            <div className="">
              {cdata.map((item, index) => (
                <div
                  className="flex justify-between items-center py-[4px] px-2"
                  key={index}
                >
                  <span className="cursor-pointer pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>

                  <div className=" flex items-center gap-[19px]">
                    <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                      {item.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center  py-4 px-2 border-t-[1px] border-b-[1px] border-solid border-[#25272A] bg-[#1B1C1E]">
              <span className="cursor-pointer nav_font text-[#00CC99] font-medium text-base">
                43,998.5
              </span>
            </div>
            <div className="">
              {cdata.map((item, index) => (
                <div
                  className="flex justify-between items-center py-[4px] px-2"
                  key={index}
                >
                  <span className="cursor-pointer pool_font text-[#00CC99] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                      {item.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {selectedTab == "trades" && (
          <>
            <div className="flex justify-between items-center  pt-4 px-2">
              <p className="pool_font text-[#9CA3AF] text-left font-medium text-[10px] tracking-[0.05px]">
                Price <span className="font-normal text-[#6B7280]">USDC</span>
              </p>
              <div className="flex items-center gap-[19px]">
                <p className="pool_font text-[#9CA3AF] text-center  font-medium text-[10px] tracking-[0.05px]">
                  Size <span className="font-normal text-[#6B7280]">BTC</span>
                </p>
                <p className="pool_font text-[#9CA3AF] text-right font-medium text-[10px] w-[68px] tracking-[0.05px]">
                  Time
                </p>
              </div>
            </div>

            <div className="">
              {edata.map((item, index) => (
                <div
                  className="flex justify-between items-center py-[4px] px-2"
                  key={index}
                >
                  <span className="cursor-pointer pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className=" cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              {edata.map((item, index) => (
                <div
                  className="flex justify-between items-center py-[4px] px-2"
                  key={index}
                >
                  <span className="cursor-pointer pool_font text-[#00CC99] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {edata.map((item, index) => (
                <div
                  className="flex justify-between items-center py-[4px] px-2"
                  key={index}
                >
                  <span className="cursor-pointer pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Middlesidecomponent;

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
                  className={`pool_font font-medium text-sm  ${
                    tab.key == selectedTab
                      ? "py-[9px] text-[#40E0D0] border-b-[2px] border-[#40E0D0] w-[101px] "
                      : "text-[#fff] w-[101px]"
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
              <span className="wallet_connected_font text-[#939191] font-normal text-[10px] tracking-[0.2px]">
                Price
              </span>
              <div className="flex items-center gap-[19px]">
                <p className="wallet_connected_font text-[#939191] text-center font-normal text-[10px] tracking-[0.2px]">
                  Size
                </p>
                <p className="wallet_connected_font text-[#939191] w-[67px] text-right font-normal text-[10px] tracking-[0.2px]">
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
                  <span className="pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="pool_font text-[#BABABA] w-[67px]  text-right font-normal text-xs tracking-[0.06px]">
                      {item.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center  py-4 px-2 border-t-[1px] border-b-[1px] border-solid border-[#25272A] bg-[#1B1C1E]">
              <span className="nav_font text-[#00CC99] font-medium text-base">
                43,998.5
              </span>
            </div>
            <div className="">
              {cdata.map((item, index) => (
                <div
                  className="flex justify-between items-center py-[4px] px-2"
                  key={index}
                >
                  <span className="pool_font text-[#00CC99] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="pool_font text-[#BABABA] w-[67px]  text-right font-normal text-xs tracking-[0.06px]">
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
              <span className="wallet_connected_font text-[#939191] font-normal text-[10px] tracking-[0.2px]">
                Price(USDC)
              </span>
              <div className="flex items-center gap-[19px]">
                <p className="wallet_connected_font text-[#939191] text-center font-normal text-[10px] tracking-[0.2px]">
                  Size(BTC)
                </p>
                <p className="wallet_connected_font text-[#939191] w-[51px] text-right font-normal text-[10px] tracking-[0.2px]">
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
                  <span className="pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="pool_font text-[#BABABA] w-[67px]  text-right font-normal text-xs tracking-[0.06px]">
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
                  <span className="pool_font text-[#00CC99] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="pool_font text-[#BABABA] w-[67px]  text-right font-normal text-xs tracking-[0.06px]">
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
                  <span className="pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="pool_font text-[#BABABA] w-[67px]  text-right font-normal text-xs tracking-[0.06px]">
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

import React, { useState } from "react";
import { TbProgressX } from "react-icons/tb";
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
                  className={`py-3  pool_font font-medium text-sm  ${
                    tab.key == selectedTab
                      ? " text-[#40E0D0] border-b-[2px] border-[#40E0D0] max-[639px]:min-w-[8rem]  "
                      : "text-[#fff] max-[639px]:min-w-[8rem] "
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
            <div className=" w-full relative flex">
              <div className="flex flex-col relative xl:w-[95%]  sm:w-[92%] max-[639px]:w-[88%]  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                {/* <div className="w-full "> */}

                <div className="wallet_connected_font  flex  text-[10px] font-normal text-[#939191]">
                  <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Token
                  </div>
                  <div className="text-left  py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Type
                  </div>
                  <div className=" text-center py-3 px-3 max-[1699px]:min-w-[8rem]  min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                    Position Size
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                    Collateral
                  </div>
                  <div className="text-right py-3  px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Leverage
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Quantity
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Entry Price
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Take Profit
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Stop Loss
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    PnL
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Liquidation Price
                  </div>
                  <div className="text-right py-3 pl-3 pr-[60px] min-[1700px]:min-w-[15%] max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                    Fees
                  </div>
                </div>
                {[1, 2, 3].map((item, key) => {
                  return (
                    <div key={key} className="relative w-full ">
                      <div className="nav_font w-full  hover:bg-[#25272A] hover:w-fit text-xs flex font-light text-[#fff]  ">
                        <div className="text-left py-3 px-3 flex font-normal flex-col max-[1699px]:min-w-[8rem]  min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          BTC-PERP
                          <span className="text-xs text-[#939191]">
                            Buy / Long
                          </span>
                        </div>
                        <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%]  border-b-[1px] border-solid border-[#25272A] ">
                          Market
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          20.44 USDC
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          10.2520 USDC
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A]  ">
                          25x
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A]  ">
                          4.25
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          12.1252 USDC
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          6.2525 USDC
                        </div>

                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          27.22535 USDC
                        </div>
                        <div className="text-right flex flex-col text-[#00CC99] py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A] ">
                          4.0052 USDC <span className="text-[10px]">24.8%</span>
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                          2.53 USD
                        </div>
                        <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]">
                          2.53 USD
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="xl:w-[5%] sm:w-[8%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2.5rem]">
                {[1, 2, 3].map((item, key) => {
                  return (
                    <div
                      key={key}
                      //onClick={handleDelete}
                      className=" h-[56px] cursor-pointer border-l-[1px] border-t-[1px]  border-solid border-[#313131] bg-[#1B1C1E] flex   items-center justify-center   "
                    >
                      <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                        <span>
                          <TbProgressX className="text-[#fff] text-base" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
        {selectedTab == "openorders" && (
          <>
            <div className=" w-full relative flex">
              <div className="flex flex-col relative xl:w-[95%]  sm:w-[92%] max-[639px]:w-[88%]  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                {/* <div className="w-full "> */}

                <div className="wallet_connected_font  flex  text-[10px] font-normal text-[#939191]">
                  <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Date
                  </div>
                  <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Token
                  </div>
                  <div className="text-left  py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Type
                  </div>
                  <div className="text-center  py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Status
                  </div>
                  <div className=" text-center py-3 px-3 max-[1699px]:min-w-[8rem]  min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                    Position Size
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                    Collateral
                  </div>
                  <div className="text-right py-3  px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Leverage
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Quantity
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Entry Price
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Take Profit
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Stop Loss
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    PnL
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Liquidation Price
                  </div>
                  <div className="text-right py-3 pl-3 pr-[60px] min-[1700px]:min-w-[15%] max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                    Fees
                  </div>
                </div>
                {[1, 2, 3].map((item, key) => {
                  return (
                    <div key={key} className="relative w-full ">
                      <div className="nav_font w-full  hover:bg-[#25272A] hover:w-fit text-xs flex font-light text-[#fff]  ">
                        <div className="text-left py-3 px-3 flex flex-col max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          23 Sep 2023
                          <span className="text-xs text-[#939191]">
                            18:04:22
                          </span>
                        </div>
                        <div className="text-left py-3 px-3 flex font-normal flex-col max-[1699px]:min-w-[8rem]  min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          BTC-PERP
                          <span className="text-xs text-[#939191]">
                            Buy / Long
                          </span>
                        </div>
                        <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%]  border-b-[1px] border-solid border-[#25272A] ">
                          Market
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          Partially Filled
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          20.44 USDC
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          10.2520 USDC
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A]  ">
                          25x
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A]  ">
                          4.25
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          12.1252 USDC
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          6.2525 USDC
                        </div>

                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          27.22535 USDC
                        </div>
                        <div className="text-right flex flex-col text-[#00CC99] py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A] ">
                          4.0052 USDC <span className="text-[10px]">24.8%</span>
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                          2.53 USD
                        </div>
                        <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]">
                          2.53 USD
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="xl:w-[5%] sm:w-[8%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2.5rem]">
                {[1, 2, 3].map((item, key) => {
                  return (
                    <div
                      key={key}
                      //onClick={handleDelete}
                      className=" h-[56px] cursor-pointer border-l-[1px] border-t-[1px]  border-solid border-[#313131] bg-[#1B1C1E] flex   items-center justify-center   "
                    >
                      <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                        <span>
                          <TbProgressX className="text-[#fff] text-base" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
        {selectedTab == "pools" && (
          <>
            <div className=" w-full relative flex">
              <div className="flex flex-col relative xl:w-[95%]  sm:w-[92%] max-[639px]:w-[88%]  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                {/* <div className="w-full "> */}

                <div className="wallet_connected_font  flex  text-[10px] font-normal text-[#939191]">
                  <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Token
                  </div>
                  <div className="text-left  py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Type
                  </div>
                  <div className=" text-center py-3 px-3 max-[1699px]:min-w-[8rem]  min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                    Position Size
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                    Collateral
                  </div>
                  <div className="text-right py-3  px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Leverage
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Quantity
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Entry Price
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Take Profit
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Stop Loss
                  </div>
                  <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    PnL
                  </div>
                  <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                    Liquidation Price
                  </div>
                  <div className="text-right py-3 pl-3 pr-[60px] min-[1700px]:min-w-[15%] max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                    Fees
                  </div>
                </div>
                {[1, 2, 3].map((item, key) => {
                  return (
                    <div key={key} className="relative w-full ">
                      <div className="nav_font w-full  hover:bg-[#25272A] hover:w-fit text-xs flex font-light text-[#fff]  ">
                        <div className="text-left py-3 px-3 flex font-normal flex-col max-[1699px]:min-w-[8rem]  min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          BTC-PERP
                          <span className="text-xs text-[#939191]">
                            Buy / Long
                          </span>
                        </div>
                        <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%]  border-b-[1px] border-solid border-[#25272A] ">
                          Market
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          20.44 USDC
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          10.2520 USDC
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A]  ">
                          25x
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A]  ">
                          4.25
                        </div>
                        <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          12.1252 USDC
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          6.2525 USDC
                        </div>

                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid  border-[#25272A] ">
                          27.22535 USDC
                        </div>
                        <div className="text-right flex flex-col text-[#00CC99] py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px]  border-solid border-[#25272A] ">
                          4.0052 USDC <span className="text-[10px]">24.8%</span>
                        </div>
                        <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                          2.53 USD
                        </div>
                        <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]">
                          2.53 USD
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="xl:w-[5%] sm:w-[8%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2.5rem]">
                {[1, 2, 3].map((item, key) => {
                  return (
                    <div
                      key={key}
                      //onClick={handleDelete}
                      className=" h-[56px] cursor-pointer border-l-[1px] border-t-[1px]  border-solid border-[#313131] bg-[#1B1C1E] flex   items-center justify-center   "
                    >
                      <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                        <span>
                          <TbProgressX className="text-[#fff] text-base" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
              <table className="w-full">
                <thead>
                  <tr className="pool_font text-xs border-b-[1px] border-solid border-[#25272A] font-normal text-[#767676] tracking-[0.06px]">
                    <th className="text-left font-normal px-[24px] py-3">
                      Token
                    </th>
                    <th className="text-center font-normal px-[24px] py-3">
                      Position Size
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Margin
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Entry Price
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Liq Price
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Unrealised PnL
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      TP
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      SL
                    </th>
                  </tr>
                </thead>
                <tbody className="hover:bg-[#25272A]">
                  <tr className="pool_font text-sm font-normal text-[#E8E8E8] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                    <td className="text-left flex flex-col gap-[2px] font-normal px-[24px] py-3">
                      BTC-PERP
                      <span className="text-xs text-[#939191]">Buy / Long</span>
                    </td>
                    <td className="text-center font-normal px-[24px] py-3">
                      $3,636
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      $36
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      1,244
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      1,050
                    </td>
                    <td className="text-right flex flex-col gap-[2px] font-normal px-[24px] py-3">
                      $329.00
                      <span className="text-xs text-[#939191]">28.05%</span>
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">-</td>
                    <td className="text-right font-normal px-[24px] py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>*/}
          </>
        )}
      </div>
    </>
  );
};

export default Table;

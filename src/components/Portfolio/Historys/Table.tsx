import React, { useState } from "react";
import { TbProgressX } from "react-icons/tb";
const tabs = [
  {
    title: "Trades",
    key: "trades",
  },
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
  {
    title: "Stake",
    key: "stake",
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
        {selectedTab == "trades" && (
          <>
            <div className=" w-full relative flex">
              <div className="flex flex-col relative w-full  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
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
            </div>
          </>
        )}
        {selectedTab == "positions" && (
          <>
            <div className=" w-full relative flex">
              <div className="flex flex-col relative w-full  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
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
            </div>
          </>
        )}
        {selectedTab == "openorders" && (
          <>
            <div className=" w-full relative flex">
              <div className="flex flex-col relative w-full  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
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
            </div>
          </>
        )}
        {selectedTab == "pools" && (
          <>
            <div className=" w-full relative flex">
              <div className="flex flex-col relative w-full  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
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
            </div>
          </>
        )}
        {selectedTab == "stake" && (
          <>
            <div className=" w-full relative flex">
              <div className="flex flex-col relative w-full  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
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
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Table;

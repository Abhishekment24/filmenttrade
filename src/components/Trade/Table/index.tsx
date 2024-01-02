import React, { useState } from "react";
import { TbProgressX } from "react-icons/tb";
import Positiondetailspopup from "./Positiondetailspopup";
import Link from "next/link";
const tabs = [
  {
    title: "Positions",
    key: "positions",
  },
  {
    title: "Active Orders",
    key: "activeorders",
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
    title: "Asset",
    key: "asset",
  },
];
const Tablesection = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("positions");
  const handleDelete = () => {
    setIsDetailOpen(true);
  };

  const closeDelete = () => {
    setIsDetailOpen(false);
  };
  return (
    <>
      <div>
        <div className=" bg-[#1B1C1E] pool_box_shadow border-[1px] border-solid border-[#25272A]    w-full ">
          <div className="">
            <div className="flex items-center max-[500px]:px-2 overflow-x-auto gap-[18px] w-full border-b-[1px] border-[#272727] ">
              {tabs.map((tab, index) => {
                return (
                  <button
                    onClick={() => setSelectedTab(tab.key)}
                    className={`py-3  pool_font font-medium text-sm  ${
                      tab.key == selectedTab
                        ? " text-[#40E0D0] border-b-[2px] border-[#40E0D0] max-[639px]:max-[1699px]:min-w-[8rem] sm:w-[117px] "
                        : "text-[#fff] max-[639px]:max-[1699px]:min-w-[8rem]  sm:w-[117px]"
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
            <div className=" w-full relative flex">
              <div className="flex flex-col relative xl:w-[95%] sm:w-[92%] max-[639px]:w-[88%]  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
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
                    <div key={key} className="relative w-full">
                      <div className="nav_font w-full  text-xs flex font-light text-[#fff]  ">
                        <div className="text-left py-3 px-3 flex flex-col max-[1699px]:min-w-[8rem]  min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                          BTC/USDC <span className="font-black">BUY</span>
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
                      onClick={handleDelete}
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
          )}
          {selectedTab == "activeorders" && (
            <>
              <div className=" w-full relative flex">
                <div className="flex flex-col relative xl:w-[95%] sm:w-[92%] max-[639px]:w-[88%]   overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                  {/* <div className="w-full "> */}

                  <div className="wallet_connected_font  flex  text-[10px] font-normal text-[#939191]">
                    <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Token
                    </div>
                    <div className="text-left  py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Type/ID
                    </div>
                    <div className=" text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                      Position Size
                    </div>
                    <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right py-3  px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
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
                    <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {[1].map((item, key) => {
                    return (
                      <div key={key} className="relative w-full">
                        <div className="nav_font w-full  text-xs flex font-light text-[#fff]  ">
                          <div className="text-left py-3 px-3 flex flex-col max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            BTC/USDC <span className="font-black">BUY</span>
                          </div>
                          <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%]  border-b-[1px] border-solid border-[#25272A] ">
                            Limit
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            20.44 USDC
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            10.2520 USDC
                          </div>
                          <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                            25x
                          </div>
                          <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            12.1252 USDC
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            6.2525 USDC
                          </div>

                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            27.22535 USDC
                          </div>
                          <div className="text-right flex flex-col text-[#00CC99] py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            4.0052 USDC{" "}
                            <span className="text-[10px]">24.8%</span>
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            2.53 USD
                          </div>
                          <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            2.53 USD
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="xl:w-[5%] sm:w-[8%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2.5rem]">
                  {[1].map((item, key) => {
                    return (
                      <div
                        key={key}
                        onClick={handleDelete}
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
          {selectedTab == "history" && (
            <>
              <div className=" w-full relative flex">
                <div className="flex flex-col relative xl:w-[95%] sm:w-[92%] max-[639px]:w-[88%]  overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                  {/* <div className="w-full "> */}

                  <div className="wallet_connected_font  flex  text-[10px] font-normal text-[#939191]">
                    <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] border-b-[1px] min-[1700px]:min-w-[15%] border-solid border-[#25272A] ">
                      Token
                    </div>
                    <div className="text-left  py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Type
                    </div>
                    <div className=" text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                      Position Size
                    </div>
                    <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right py-3  px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
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
                    <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {[1].map((item, key) => {
                    return (
                      <div key={key} className="relative w-full">
                        <div className="nav_font w-full  text-xs flex font-light text-[#fff]  ">
                          <div className="text-left py-3 px-3 flex flex-col max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            BTC/USDC <span className="font-black">BUY</span>
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
                          <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                            25x
                          </div>
                          <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            12.1252 USDC
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            6.2525 USDC
                          </div>

                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            27.22535 USDC
                          </div>
                          <div className="text-right flex flex-col text-[#00CC99] py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            4.0052 USDC{" "}
                            <span className="text-[10px]">24.8%</span>
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            2.53 USD
                          </div>
                          <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            2.53 USD
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="xl:w-[5%] sm:w-[8%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2.5rem]">
                  {[1].map((item, key) => {
                    return (
                      <div
                        key={key}
                        onClick={handleDelete}
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
          {selectedTab == "realisedPnL" && (
            <>
              <div className=" w-full relative flex">
                <div className="flex flex-col relative xl:w-[95%] sm:w-[92%] max-[639px]:w-[88%]   overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                  {/* <div className="w-full "> */}

                  <div className="wallet_connected_font  flex  text-[10px] font-normal text-[#939191]">
                    <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] border-b-[1px] min-[1700px]:min-w-[15%] border-solid border-[#25272A] ">
                      Token
                    </div>
                    <div className="text-left  py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Type
                    </div>
                    <div className=" text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                      Position Size
                    </div>
                    <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right py-3  px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
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
                    <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {[1].map((item, key) => {
                    return (
                      <div key={key} className="relative w-full">
                        <div className="nav_font w-full  text-xs flex font-light text-[#fff]  ">
                          <div className="text-left py-3 px-3 flex flex-col max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            BTC/USDC <span className="font-black">BUY</span>
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
                          <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                            25x
                          </div>
                          <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            12.1252 USDC
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            6.2525 USDC
                          </div>

                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            27.22535 USDC
                          </div>
                          <div className="text-right flex flex-col text-[#00CC99] py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            4.0052 USDC{" "}
                            <span className="text-[10px]">24.8%</span>
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            2.53 USD
                          </div>
                          <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            2.53 USD
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="xl:w-[5%] sm:w-[8%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2.5rem]">
                  {[1].map((item, key) => {
                    return (
                      <div
                        key={key}
                        onClick={handleDelete}
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
          {selectedTab == "asset" && (
            <>
              <div className=" w-full relative flex">
                <div className="flex flex-col relative xl:w-[95%] sm:w-[92%] max-[639px]:w-[88%]   overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                  {/* <div className="w-full "> */}

                  <div className="wallet_connected_font  flex  text-[10px] font-normal text-[#939191]">
                    <div className="text-left py-3 px-3 max-[1699px]:min-w-[8rem] border-b-[1px] min-[1700px]:min-w-[15%] border-solid border-[#25272A] ">
                      Token
                    </div>
                    <div className="text-left  py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Type
                    </div>
                    <div className=" text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                      Position Size
                    </div>
                    <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right py-3  px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
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
                    <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {[1].map((item, key) => {
                    return (
                      <div key={key} className="relative w-full">
                        <div className="nav_font w-full  text-xs flex font-light text-[#fff]  ">
                          <div className="text-left py-3 px-3 flex flex-col max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            BTC/USDC <span className="font-black">BUY</span>
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
                          <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A]  ">
                            25x
                          </div>
                          <div className="text-right py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            12.1252 USDC
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            6.2525 USDC
                          </div>

                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            27.22535 USDC
                          </div>
                          <div className="text-right flex flex-col text-[#00CC99] py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            4.0052 USDC{" "}
                            <span className="text-[10px]">24.8%</span>
                          </div>
                          <div className="text-center py-3 px-3 max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            2.53 USD
                          </div>
                          <div className="text-right py-3 pl-3 pr-[60px] max-[1699px]:min-w-[8rem] min-[1700px]:min-w-[15%] border-b-[1px] border-solid border-[#25272A] ">
                            2.53 USD
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="xl:w-[5%] sm:w-[8%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2.5rem]">
                  {[1].map((item, key) => {
                    return (
                      <div
                        key={key}
                        onClick={handleDelete}
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
        </div>
      </div>
      <Positiondetailspopup isOpen={isDetailOpen} onClose={closeDelete} />
    </>
  );
};

export default Tablesection;

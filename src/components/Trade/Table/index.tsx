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
                    className={`py-3  pool_font font-semibold text-sm  ${
                      tab.key == selectedTab
                        ? "text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] max-[639px]:min-w-[8rem] sm:w-[98px] "
                        : "text-[#BABABA] max-[639px]:min-w-[8rem]  sm:w-[98px]"
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
              <div className="flex flex-col relative xl:w-[92%] sm:w-[88%] max-[639px]:w-[88%]  max-[1699px]:overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                {/* <div className="w-full "> */}

                <div className="pool_font  flex  text-xs font-medium text-[#9CA3AF]">
                  <div className="text-left py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                    Token
                  </div>
                  <div className="text-left  py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                    Type
                  </div>
                  <div className=" text-center py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                    Position Size
                  </div>
                  <div className="text-center py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                    Collateral
                  </div>
                  <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                    Leverage
                  </div>
                  <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                    Entry Price
                  </div>
                  <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                    Take Profit
                  </div>
                  <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                    Stop Loss
                  </div>
                  <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                    PnL
                  </div>
                  <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                    Liquidation Price
                  </div>
                  <div className="text-right py-2 pl-2 pr-[60px] table_width max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                    Fees
                  </div>
                </div>
                {[1, 2, 3].map((item, key) => {
                  return (
                    <div key={key} className="relative w-full">
                      <div className="pool_font w-full hover:bg-[#25272A] max-[1699px]:hover:w-fit  min-[1700px]:hover:w-full text-xs flex font-medium text-[#E5E7EB]  ">
                        <div className="text-left py-[6px] px-3 flex flex-col max-[1699px]:min-w-[8rem]  table_width border-b-[1px] border-solid border-[#25272A] ">
                          BTC/USDC{" "}
                          <span className="text-xs text-[#939191]">BUY</span>
                        </div>
                        <div className="text-left  py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width  border-b-[1px] border-solid border-[#25272A] ">
                          Market
                        </div>
                        <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                          20.44 USDC
                        </div>
                        <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                          10.2520 USDC
                        </div>
                        <div className="text-right py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A]  ">
                          25x
                        </div>
                        <div className="text-right py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                          12.1252 USDC
                        </div>
                        <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                          6.2525 USDC
                        </div>

                        <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                          27.22535 USDC
                        </div>
                        <div className="text-right py-[8px] flex flex-col text-[#00CC99]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A] ">
                          4.0052 USDC <span className="text-[10px]">24.8%</span>
                        </div>
                        <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                          2.53 USD
                        </div>
                        <div className="text-right py-[8px] pl-3 pr-[60px] max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]">
                          2.53 USD
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="xl:w-[8%] sm:w-[12%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2rem]">
                {[1, 2, 3].map((item, key) => {
                  return (
                    <div
                      key={key}
                      onClick={handleDelete}
                      className=" h-[49.5px] cursor-pointer border-l-[1px] border-t-[1px]  border-solid border-[#313131] bg-[#1B1C1E] flex   items-center justify-center   "
                    >
                      <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#2B2B2B] p-1 flex items-center justify-center">
                        <span className="pool_font text-xs font-semibold text-[#FFFFFF] tracking-[0.06px]">
                          Manage
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {selectedTab == "openorders" && (
            <>
              <div className=" w-full relative flex">
                <div className="flex flex-col relative xl:w-[92%] sm:w-[88%] max-[639px]:w-[88%]   max-[1699px]:overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                  {/* <div className="w-full "> */}

                  <div className="pool_font  flex  text-xs font-medium ">
                    <div className="text-left py-2 px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Date
                    </div>
                    <div className="text-left py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Token
                    </div>
                    <div className="text-left  py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Type
                    </div>
                    <div className=" text-center py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Status
                    </div>
                    <div className=" text-center py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Position Size
                    </div>
                    <div className="text-center py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
                    </div>
                    <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Entry Price
                    </div>
                    <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Take Profit
                    </div>
                    <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Stop Loss
                    </div>
                    <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      PnL
                    </div>
                    <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Liquidation Price
                    </div>
                    <div className="text-right py-2 pl-2 pr-[60px] table_width max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {[1, 2].map((item, key) => {
                    return (
                      <div key={key} className="relative w-full">
                        <div className="pool_font w-full hover:bg-[#25272A] max-[1699px]:hover:w-fit  min-[1700px]:hover:w-full text-xs flex font-medium text-[#E5E7EB] ">
                          <div className="text-left py-[8px] px-3 flex flex-col max-[1699px]:min-w-[8rem]   table_width border-b-[1px] border-solid border-[#25272A] ">
                            23 Sep 2023
                            <span className="text-xs text-[#939191]">
                              18:04:22
                            </span>
                          </div>
                          <div className="text-left py-[6px] px-3 flex flex-col max-[1699px]:min-w-[8rem]  table_width border-b-[1px] border-solid border-[#25272A] ">
                            BTC/USDC{" "}
                            <span className="text-xs text-[#939191]">BUY</span>
                          </div>
                          <div className="text-left  py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width  border-b-[1px] border-solid border-[#25272A] ">
                            Market
                          </div>
                          <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                            Partially Filled
                          </div>
                          <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                            20.44 USDC
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                            10.2520 USDC
                          </div>
                          <div className="text-right py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A]  ">
                            25x
                          </div>
                          <div className="text-right py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            12.1252 USDC
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            6.2525 USDC
                          </div>

                          <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            27.22535 USDC
                          </div>
                          <div className="text-right py-[8px] flex flex-col text-[#00CC99]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A] ">
                            4.0052 USDC{" "}
                            <span className="text-[10px]">24.8%</span>
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                            2.53 USD
                          </div>
                          <div className="text-right py-[8px] pl-3 pr-[60px] max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]">
                            2.53 USD
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="xl:w-[8%] sm:w-[12%] max-[639px]:w-[12%] max-[380px]:w-[18%] mt-[2rem]">
                  {[1, 2].map((item, key) => {
                    return (
                      <div
                        key={key}
                        onClick={handleDelete}
                        className=" h-[49.5px] cursor-pointer border-l-[1px] border-t-[1px]  border-solid border-[#313131] bg-[#1B1C1E] flex   items-center justify-center   "
                      >
                        <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#2B2B2B] p-1 flex items-center justify-center">
                          <span className="pool_font text-xs font-semibold text-[#FFFFFF] tracking-[0.06px]">
                            Manage
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
                <div className="flex flex-col relative w-full  max-[1699px]:overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                  {/* <div className="w-full "> */}

                  <div className="pool_font  flex  text-xs font-medium text-[#9CA3AF]">
                    <div className="text-left py-2 px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Date
                    </div>
                    <div className="text-left py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Token
                    </div>
                    <div className="text-left  py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Type
                    </div>

                    <div className=" text-center py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Position Size
                    </div>
                    <div className="text-center py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
                    </div>
                    <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Entry Price
                    </div>
                    <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Take Profit
                    </div>
                    <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Stop Loss
                    </div>
                    <div className="text-right py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      PnL
                    </div>
                    <div className="text-center py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Liquidation Price
                    </div>
                    <div className="text-right py-2 pl-2 pr-[60px] table_width max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {[1].map((item, key) => {
                    return (
                      <div key={key} className="relative w-full">
                        <div className="pool_font w-full hover:bg-[#25272A] max-[1699px]:hover:w-fit  min-[1700px]:hover:w-full text-xs flex font-medium text-[#E5E7EB] ">
                          <div className="text-left py-[8px] px-3 flex flex-col max-[1699px]:min-w-[8rem]   table_width border-b-[1px] border-solid border-[#25272A] ">
                            23 Sep 2023
                            <span className="text-xs text-[#939191]">
                              18:04:22
                            </span>
                          </div>
                          <div className="text-left py-[6px] px-3 flex flex-col max-[1699px]:min-w-[8rem]  table_width border-b-[1px] border-solid border-[#25272A] ">
                            BTC/USDC{" "}
                            <span className="text-xs text-[#939191]">BUY</span>
                          </div>
                          <div className="text-left  py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width  border-b-[1px] border-solid border-[#25272A] ">
                            Market
                          </div>
                          <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                            20.44 USDC
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                            10.2520 USDC
                          </div>
                          <div className="text-right py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A]  ">
                            25x
                          </div>
                          <div className="text-right py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            12.1252 USDC
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            6.2525 USDC
                          </div>

                          <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            27.22535 USDC
                          </div>
                          <div className="text-right py-[8px] flex flex-col text-[#00CC99]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A] ">
                            4.0052 USDC{" "}
                            <span className="text-[10px]">24.8%</span>
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                            2.53 USD
                          </div>
                          <div className="text-right py-[8px] pl-3 pr-[60px] max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]">
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
          {selectedTab == "realisedPnL" && (
            <>
              <div className=" w-full relative flex">
                <div className="flex flex-col relative w-full  max-[1699px]:overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                  {/* <div className="w-full "> */}

                  <div className="pool_font  flex  text-xs font-medium text-[#9CA3AF]">
                    <div className="text-left py-2 px-3  font-medium max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Date
                    </div>
                    <div className="text-left py-2 px-2  font-medium max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Token
                    </div>
                    <div className="text-left  py-2 px-2 font-medium max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Type
                    </div>

                    <div className=" text-center font-medium py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Position Size
                    </div>
                    <div className="text-center font-medium py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right  font-medium py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
                    </div>
                    <div className="text-right font-medium py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Entry Price
                    </div>
                    <div className="text-center font-medium py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Take Profit
                    </div>
                    <div className="text-center font-medium py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Stop Loss
                    </div>
                    <div className="text-right font-medium py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      PnL
                    </div>
                    <div className="text-center font-medium py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Liquidation Price
                    </div>
                    <div className="text-right font-medium py-2 pl-2 pr-[60px] table_width max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {[1].map((item, key) => {
                    return (
                      <div key={key} className="relative w-full">
                        <div className="pool_font w-full hover:bg-[#25272A] font-medium max-[1699px]:hover:w-fit  min-[1700px]:hover:w-full text-xs flex  text-[#E5E7EB]  ">
                          <div className="text-left font-medium py-[8px] px-3 flex flex-col max-[1699px]:min-w-[8rem]   table_width border-b-[1px] border-solid border-[#25272A] ">
                            23 Sep 2023
                            <span className="text-xs text-[#939191] font-normal">
                              18:04:22
                            </span>
                          </div>
                          <div className="font-medium text-left py-[6px] px-3 flex flex-col max-[1699px]:min-w-[8rem]  table_width border-b-[1px] border-solid border-[#25272A] ">
                            BTC-PERP
                            <span className="text-xs text-[#939191] font-normal">
                              BUY / LONG
                            </span>
                          </div>
                          <div className="text-left  py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width  border-b-[1px] border-solid border-[#25272A] ">
                            Market
                          </div>
                          <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                            20.44 USDC
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                            10.2520 USDC
                          </div>
                          <div className="text-right py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A]  ">
                            25x
                          </div>
                          <div className="text-right py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            12.1252 USDC
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            6.2525 USDC
                          </div>

                          <div className="text-center py-[8px] px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                            27.22535 USDC
                          </div>
                          <div className="text-right py-[8px] flex flex-col text-[#00CC99]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A] ">
                            4.0052 USDC{" "}
                            <span className="text-[10px]">24.8%</span>
                          </div>
                          <div className="text-center py-[8px]  px-3 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                            2.53 USD
                          </div>
                          <div className="text-right py-[8px] pl-3 pr-[60px] max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]">
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
          {selectedTab == "balance" && (
            <>
              <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
                <table className="w-full">
                  <thead>
                    <tr className="pool_font text-xs font-medium border-b-[1px] border-solid border-[#25272A]  text-[#9CA3AF]">
                      <th className="text-left font-medium  px-3 py-2">
                        Token
                      </th>
                      <th className="text-right font-medium  px-3 py-2">
                        Quantity
                      </th>
                      <th className="text-right font-medium px-3 py-2">
                        Staked Quantity
                      </th>
                      <th className="text-right  font-medium px-3 py-2">
                        LP Contribution
                      </th>
                      <th className="text-right font-medium px-3 py-2">
                        LP Tokens
                      </th>
                      <th className="text-right font-medium px-3 py-2">
                        Current Price
                      </th>
                      <th className="text-right font-medium px-3 py-2">
                        Total Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="hover:bg-[#25272A]">
                    <tr className="pool_font text-sm  text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                      <td className="text-left  font-medium px-3 py-2">
                        BTC-PERP
                      </td>
                      <td className="text-right  font-medium px-3 py-2">
                        11.36
                      </td>
                      <td className="text-right  font-medium px-3 py-2"></td>
                      <td className="text-right  font-medium  px-3 py-2"></td>
                      <td className="text-right  font-medium px-3 py-2"></td>
                      <td className="text-right  font-medium  px-3 py-2">
                        $12.1252
                      </td>
                      <td className="text-right  font-medium  px-3 py-2">
                        $12.1252
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="hover:bg-[#25272A]">
                    <tr className="pool_font text-sm  text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                      <td className="text-left  font-medium px-3 py-2">LP</td>
                      <td className="text-right  font-medium px-3 py-2">
                        11.36
                      </td>
                      <td className="text-right  font-medium px-3 py-2">500</td>
                      <td className="text-right  font-medium  px-3 py-2">
                        $5,000.35
                      </td>
                      <td className="text-right  font-medium px-3 py-2">200</td>
                      <td className="text-right  font-medium  px-3 py-2"></td>
                      <td className="text-right  font-medium  px-3 py-2">
                        $12.1252
                      </td>
                    </tr>
                  </tbody>
                </table>
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

import React, { useState } from "react";
import { TbProgressX } from "react-icons/tb";
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
  const [selectedTab, setSelectedTab] = useState("positions");
  return (
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
                      ? " text-[#3B82F6] border-b-[2px] border-[#3B82F6] max-[639px]:min-w-[8rem] sm:w-[117px] "
                      : "text-[#fff] max-[639px]:min-w-[8rem]  sm:w-[117px]"
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
            <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
              <table className="w-full">
                <thead>
                  <tr className="wallet_connected_font  text-[10px] border-b-[1px] border-solid border-[#25272A] font-normal text-[#939191]">
                    <th className="text-left py-3 px-3 min-w-[8rem]">Token</th>
                    <th className="text-left  py-3 px-3 min-w-[8rem]">Type</th>
                    <th className=" text-center py-3 px-3 min-w-[8rem] ">
                      Position Size
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem] ">
                      Collateral
                    </th>
                    <th className="text-right py-3  px-3 min-w-[8rem]">
                      Leverage
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">
                      Entry Price
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Take Profit
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Stop Loss
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">PnL</th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Liquidation Price
                    </th>
                    <th className="text-right py-3 pl-3 pr-[60px] min-w-[8rem]">
                      Fees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="nav_font text-xs font-light text-[#fff] border-b-[1px] border-solid border-[#25272A] relative">
                    <td className="text-left py-3 px-3 flex flex-col min-w-[8rem]">
                      BTC/USDC <span className="font-black">BUY</span>
                    </td>
                    <td className="text-left py-3 px-3 min-w-[8rem] ">
                      Market
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      20.44 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      10.2520 USDC
                    </td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">25x</td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">
                      12.1252 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      6.2525 USDC
                    </td>

                    <td className="text-center py-3 px-3 min-w-[8rem]">
                      27.22535 USDC
                    </td>
                    <td className="text-right flex flex-col text-[#00CC99] py-3 px-3 min-w-[8rem]">
                      4.0052 USDC <span className="text-[10px]">24.8%</span>
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      2.53 USD
                    </td>
                    <td className="text-right py-3 pl-3 pr-[60px] min-w-[8rem] ">
                      2.53 USD
                    </td>
                    {/*   <td className="rounded-[4px] border-l-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[45px] h-[45px] flex items-center justify-center  bottom-[15%] right-[32%]">
                  <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                    <span>
                      <TbProgressX className="text-[#fff] text-base" />
                    </span>
                  </div>
                </td> */}
                  </tr>
                </tbody>
                <tbody>
                  <tr className="nav_font text-xs font-light text-[#fff] border-b-[1px] border-solid border-[#25272A] relative">
                    <td className="text-left py-3 px-3 flex flex-col min-w-[8rem]">
                      BTC/USDC <span className="font-black">BUY</span>
                    </td>
                    <td className="text-left py-3 px-3 min-w-[8rem] ">
                      Market
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      20.44 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      10.2520 USDC
                    </td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">25x</td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">
                      12.1252 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      6.2525 USDC
                    </td>

                    <td className="text-center py-3 px-3 min-w-[8rem]">
                      27.22535 USDC
                    </td>
                    <td className="text-right flex flex-col text-[#00CC99] py-3 px-3 min-w-[8rem]">
                      4.0052 USDC <span className="text-[10px]">24.8%</span>
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      2.53 USD
                    </td>
                    <td className="text-right py-3 pl-3 pr-[60px] min-w-[8rem] ">
                      2.53 USD
                    </td>
                    {/*   <td className="rounded-[4px] border-l-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[45px] h-[45px] flex items-center justify-center  bottom-[15%] right-[32%]">
                  <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                    <span>
                      <TbProgressX className="text-[#fff] text-base" />
                    </span>
                  </div>
                </td> */}
                  </tr>
                </tbody>
                <tbody>
                  <tr className="nav_font text-xs font-light text-[#fff] border-b-[1px] border-solid border-[#25272A] relative">
                    <td className="text-left py-3 px-3 flex flex-col min-w-[8rem]">
                      BTC/USDC <span className="font-black">BUY</span>
                    </td>
                    <td className="text-left py-3 px-3 min-w-[8rem] ">
                      Market
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      20.44 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      10.2520 USDC
                    </td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">25x</td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">
                      12.1252 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      6.2525 USDC
                    </td>

                    <td className="text-center py-3 px-3 min-w-[8rem]">
                      27.22535 USDC
                    </td>
                    <td className="text-right flex flex-col text-[#00CC99] py-3 px-3 min-w-[8rem]">
                      4.0052 USDC <span className="text-[10px]">24.8%</span>
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      2.53 USD
                    </td>
                    <td className="text-right py-3 pl-3 pr-[60px] min-w-[8rem] ">
                      2.53 USD
                    </td>
                    {/*   <td className="rounded-[4px] border-l-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[45px] h-[45px] flex items-center justify-center  bottom-[15%] right-[32%]">
                  <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                    <span>
                      <TbProgressX className="text-[#fff] text-base" />
                    </span>
                  </div>
                </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {selectedTab == "activeorders" && (
          <>
            <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
              <table className="w-full">
                <thead>
                  <tr className="wallet_connected_font  text-[10px] border-b-[1px] border-solid border-[#25272A] font-normal text-[#939191]">
                    <th className="text-left py-3 px-3 min-w-[8rem]">Token</th>
                    <th className="text-left  py-3 px-3 min-w-[8rem]">
                      Type/ID
                    </th>
                    <th className=" text-center py-3 px-3 min-w-[8rem] ">
                      Position Size
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem] ">
                      Collateral
                    </th>
                    <th className="text-right py-3  px-3 min-w-[8rem]">
                      Leverage
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">
                      Entry Price
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Take Profit
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Stop Loss
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">PnL</th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Liquidation Price
                    </th>
                    <th className="text-right py-3 pl-3 pr-[60px] min-w-[8rem]">
                      Fees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="nav_font text-xs font-light text-[#fff] border-b-[1px] border-solid border-[#25272A] relative">
                    <td className="text-left py-3 px-3 flex flex-col min-w-[8rem]">
                      BTC/USDC <span className="font-black">BUY</span>
                    </td>
                    <td className="text-left py-3 px-3 min-w-[8rem] ">Limit</td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      20.44 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      10.2520 USDC
                    </td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">25x</td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">
                      12.1252 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      6.2525 USDC
                    </td>

                    <td className="text-center py-3 px-3 min-w-[8rem]">
                      27.22535 USDC
                    </td>
                    <td className="text-right flex flex-col text-[#00CC99] py-3 px-3 min-w-[8rem]">
                      4.0052 USDC <span className="text-[10px]">24.8%</span>
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      2.53 USD
                    </td>
                    <td className="text-right py-3 pl-3 pr-[60px] min-w-[8rem] ">
                      2.53 USD
                    </td>
                    {/*   <td className="rounded-[4px] border-l-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[45px] h-[45px] flex items-center justify-center  bottom-[15%] right-[32%]">
                  <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                    <span>
                      <TbProgressX className="text-[#fff] text-base" />
                    </span>
                  </div>
                </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {selectedTab == "history" && (
          <>
            <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
              <table className="w-full">
                <thead>
                  <tr className="wallet_connected_font  text-[10px] border-b-[1px] border-solid border-[#25272A] font-normal text-[#939191]">
                    <th className="text-left py-3 px-3 min-w-[8rem]">Token</th>
                    <th className="text-left  py-3 px-3 min-w-[8rem]">Type</th>
                    <th className=" text-center py-3 px-3 min-w-[8rem] ">
                      Position Size
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem] ">
                      Collateral
                    </th>
                    <th className="text-right py-3  px-3 min-w-[8rem]">
                      Leverage
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">
                      Entry Price
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Take Profit
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Stop Loss
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">PnL</th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Liquidation Price
                    </th>
                    <th className="text-right py-3 pl-3 pr-[60px] min-w-[8rem]">
                      Fees
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="nav_font text-xs font-light text-[#fff] border-b-[1px] border-solid border-[#25272A] relative">
                    <td className="text-left py-3 px-3 flex flex-col min-w-[8rem]">
                      BTC/USDC <span className="font-black">BUY</span>
                    </td>
                    <td className="text-left py-3 px-3 min-w-[8rem] ">
                      Market
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      20.44 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      10.2520 USDC
                    </td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">25x</td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">
                      12.1252 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      6.2525 USDC
                    </td>

                    <td className="text-center py-3 px-3 min-w-[8rem]">
                      27.22535 USDC
                    </td>
                    <td className="text-right flex flex-col text-[#00CC99] py-3 px-3 min-w-[8rem]">
                      4.0052 USDC <span className="text-[10px]">24.8%</span>
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      2.53 USD
                    </td>
                    <td className="text-right py-3 pl-3 pr-[60px] min-w-[8rem] ">
                      2.53 USD
                    </td>
                    {/*   <td className="rounded-[4px] border-l-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[45px] h-[45px] flex items-center justify-center  bottom-[15%] right-[32%]">
                  <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                    <span>
                      <TbProgressX className="text-[#fff] text-base" />
                    </span>
                  </div>
                </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {selectedTab == "realisedPnL" && (
          <>
            <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
              <table className="w-full">
                <thead>
                  <tr className="wallet_connected_font  text-[10px] border-b-[1px] border-solid border-[#25272A] font-normal text-[#939191]">
                    <th className="text-left py-3 px-3 min-w-[8rem]">Token</th>
                    <th className="text-left  py-3 px-3 min-w-[8rem]">Type</th>
                    <th className=" text-center py-3 px-3 min-w-[8rem] ">
                      Position Size
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem] ">
                      Collateral
                    </th>
                    <th className="text-right py-3  px-3 min-w-[8rem]">
                      Leverage
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">
                      Entry Price
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Take Profit
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Stop Loss
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">PnL</th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Liquidation Price
                    </th>
                    <th className="text-right py-3 pl-3 pr-[60px] min-w-[8rem]">
                      Fees
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="nav_font text-xs font-light text-[#fff] border-b-[1px] border-solid border-[#25272A] relative">
                    <td className="text-left py-3 px-3 flex flex-col min-w-[8rem]">
                      BTC/USDC <span className="font-black">BUY</span>
                    </td>
                    <td className="text-left py-3 px-3 min-w-[8rem] ">
                      Market
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      20.44 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      10.2520 USDC
                    </td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">25x</td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">
                      12.1252 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      6.2525 USDC
                    </td>

                    <td className="text-center py-3 px-3 min-w-[8rem]">
                      27.22535 USDC
                    </td>
                    <td className="text-right flex flex-col text-[#00CC99] py-3 px-3 min-w-[8rem]">
                      4.0052 USDC <span className="text-[10px]">24.8%</span>
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      2.53 USD
                    </td>
                    <td className="text-right py-3 pl-3 pr-[60px] min-w-[8rem] ">
                      2.53 USD
                    </td>
                    {/*   <td className="rounded-[4px] border-l-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[45px] h-[45px] flex items-center justify-center  bottom-[15%] right-[32%]">
                  <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                    <span>
                      <TbProgressX className="text-[#fff] text-base" />
                    </span>
                  </div>
                </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {selectedTab == "asset" && (
          <>
            <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
              <table className="w-full">
                <thead>
                  <tr className="wallet_connected_font  text-[10px] border-b-[1px] border-solid border-[#25272A] font-normal text-[#939191]">
                    <th className="text-left py-3 px-3 min-w-[8rem]">Token</th>
                    <th className="text-left  py-3 px-3 min-w-[8rem]">Type</th>
                    <th className=" text-center py-3 px-3 min-w-[8rem] ">
                      Position Size
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem] ">
                      Collateral
                    </th>
                    <th className="text-right py-3  px-3 min-w-[8rem]">
                      Leverage
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">
                      Entry Price
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Take Profit
                    </th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Stop Loss
                    </th>
                    <th className="text-right py-3 px-3 min-w-[8rem]">PnL</th>
                    <th className="text-center py-3 px-3 min-w-[8rem]">
                      Liquidation Price
                    </th>
                    <th className="text-right py-3 pl-3 pr-[60px] min-w-[8rem]">
                      Fees
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="nav_font text-xs font-light text-[#fff] border-b-[1px] border-solid border-[#25272A] relative">
                    <td className="text-left py-3 px-3 flex flex-col min-w-[8rem]">
                      BTC/USDC <span className="font-black">BUY</span>
                    </td>
                    <td className="text-left py-3 px-3 min-w-[8rem] ">
                      Market
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      20.44 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      10.2520 USDC
                    </td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">25x</td>
                    <td className="text-right py-3 px-3 min-w-[8rem] ">
                      12.1252 USDC
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      6.2525 USDC
                    </td>

                    <td className="text-center py-3 px-3 min-w-[8rem]">
                      27.22535 USDC
                    </td>
                    <td className="text-right flex flex-col text-[#00CC99] py-3 px-3 min-w-[8rem]">
                      4.0052 USDC <span className="text-[10px]">24.8%</span>
                    </td>
                    <td className="text-center py-3 px-3 min-w-[8rem] ">
                      2.53 USD
                    </td>
                    <td className="text-right py-3 pl-3 pr-[60px] min-w-[8rem] ">
                      2.53 USD
                    </td>
                    {/*   <td className="rounded-[4px] border-l-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[45px] h-[45px] flex items-center justify-center  bottom-[15%] right-[32%]">
                  <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
                    <span>
                      <TbProgressX className="text-[#fff] text-base" />
                    </span>
                  </div>
                </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tablesection;

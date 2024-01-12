import React, { useEffect, useRef, useState } from "react";
import { TbProgressX } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Positiondetailspopup from "./Positiondetailspopup";
import Link from "next/link";
import { CiCircleQuestion } from "react-icons/ci";
import {
  tablebalanceData,
  tablehistoryData,
  tableopenordersData,
  tablepositionData,
} from "./data";
import { mdata } from "../Rightsidecomponent/data";
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
  const [visiblePopupIndex, setVisiblePopupIndex] = useState<number | null>(
    null
  );
  const menusRef = useRef<HTMLDivElement>(null);
  const handleToggleVisibility = (index: number) => {
    setVisiblePopupIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (menusRef.current && !menusRef.current.contains(event.target)) {
        setVisiblePopupIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menusRef]);
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
                    className={`py-3  pool_font font-semibold text-xs tracking-[0.06px]  ${
                      tab.key == selectedTab
                        ? "text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] max-[639px]:min-w-[8rem] sm:w-[80px] "
                        : "text-[#BABABA] max-[639px]:min-w-[8rem]  sm:w-[80px]"
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
              <div className="flex w-full">
                <div className="lg:w-[92%] sm:w-[88%] max-[639px]:w-[84%] max-[380px]:w-[78%]">
                  <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
                    <table className="w-full">
                      <thead>
                        <tr className="pool_font text-xs font-medium border-b-[1px] border-solid border-[#25272A]  text-[#9CA3AF]">
                          <th className="text-left font-medium  max-[1699px]:min-w-[8rem] px-2 py-2">
                            Token
                          </th>
                          <th className="text-left font-medium  max-[1699px]:min-w-[8rem] px-2 py-2">
                            Type
                          </th>
                          <th className="text-center font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                            Position Size
                          </th>
                          <th className="text-right  font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                            Collateral
                          </th>
                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                            Leverage
                          </th>
                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                            Quantity
                          </th>
                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                            Entry Price
                          </th>
                          <th className="text-center font-medium  max-[1699px]:min-w-[8rem] px-2 py-2">
                            Take Profit
                          </th>
                          <th className="text-center font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                            Stop Loss
                          </th>
                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                            PnL
                          </th>
                          <th className="text-center font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                            Liquidation Price
                          </th>
                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] pl-2 pr-[25px]  py-2">
                            Fees
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {tablepositionData.length === 0 ? (
                          <tr>
                            <td
                              colSpan={8}
                              className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2"
                            >
                              No Positions
                            </td>
                          </tr>
                        ) : (
                          <>
                            {tablepositionData.map((data, index) => (
                              <>
                                <tr
                                  key={index}
                                  className="pool_font hover:bg-[#25272A] text-sm  text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]"
                                >
                                  <td className="text-left font-medium flex flex-col max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.token}
                                    <span
                                      className={`text-[10px] text-center   px-[2px] rounded-[4px] ${
                                        data.tokenpart === "SELL/SHORT"
                                          ? "text-[#D65454] bg-[#991B1B4D] w-[70px]"
                                          : "text-[#14B8A6] bg-[#0596694D] w-[65px]"
                                      }`}
                                    >
                                      {data.tokenpart}
                                    </span>
                                  </td>
                                  <td className="text-left font-medium max-[1699px]:min-w-[8rem]  px-2 py-2">
                                    {data.type}
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.positionSize}
                                  </td>
                                  <td className="text-right  font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.collateral}
                                  </td>
                                  <td className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.leverage}
                                  </td>
                                  <td className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.quantity}
                                  </td>
                                  <td className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.entryprice}
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.takeprofit}
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.stoploss}
                                  </td>
                                  <td className="text-right font-medium  text-[#00CC99] flex flex-col max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.pnL}
                                    <span className="text-[10px]">
                                      {data.pnlper}
                                    </span>
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] px-2 py-2">
                                    {data.liquidationprice}
                                  </td>
                                  <td className="  font-medium max-[1699px]:min-w-[8rem] pl-2 pr-[25px] py-2">
                                    <div className="justify-end flex items-center gap-1">
                                      <div> {data.fees}</div>
                                      <div className="relative" ref={menusRef}>
                                        <span
                                          onClick={() =>
                                            handleToggleVisibility(index)
                                          }
                                          className="cursor-pointer"
                                        >
                                          <AiOutlinePlusCircle />
                                        </span>
                                        <div
                                          className={`absolute top-[20px] lg:z-[99] pl-2  right-0 ${
                                            visiblePopupIndex === index
                                              ? "block"
                                              : "hidden"
                                          }`}
                                        >
                                          <div className="w-[256px] three_dot px-4">
                                            <div className="">
                                              {mdata.map((item, index) => (
                                                <div
                                                  key={index}
                                                  className="flex justify-between items-center gap-3 my-4"
                                                >
                                                  <div className="flex items-center gap-1">
                                                    <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                                                      {item.titles}
                                                    </p>
                                                    <span>
                                                      <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base" />
                                                    </span>
                                                  </div>

                                                  <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                                                    ${item.description}
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            ))}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {tablepositionData.length > 0 && (
                  <div className="xl:w-[8%] sm:w-[12%] max-[639px]:w-[16%] max-[380px]:w-[22%] mt-[2rem]">
                    {tablepositionData.map((item, key) => (
                      <div
                        key={key}
                        onClick={handleDelete}
                        className="h-[57.7px] cursor-pointer table_right_side flex items-center justify-center"
                      >
                        <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#2B2B2B] p-1 flex items-center justify-center">
                          <span className="pool_font text-xs font-semibold text-[#FFFFFF] tracking-[0.06px]">
                            Manage
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
          {selectedTab == "openorders" && (
            <>
              <div className="flex w-full">
                <div className="lg:w-[92%] sm:w-[88%] max-[639px]:w-[84%] max-[380px]:w-[78%]">
                  <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
                    <table className="w-full">
                      <thead>
                        <tr className="pool_font text-xs font-medium border-b-[1px] border-solid border-[#25272A]  text-[#9CA3AF]">
                          <th className="text-left font-medium  max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-2 py-2">
                            Date
                          </th>
                          <th className="text-left font-medium  max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Token
                          </th>
                          <th className="text-left font-medium  max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Type
                          </th>
                          <th className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Status
                          </th>
                          <th className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Position Size
                          </th>
                          <th className="text-right  font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Collateral
                          </th>
                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Leverage
                          </th>

                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Entry Price
                          </th>
                          <th className="text-center font-medium  max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Take Profit
                          </th>
                          <th className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Stop Loss
                          </th>
                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            PnL
                          </th>
                          <th className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                            Liquidation Price
                          </th>
                          <th className="text-right font-medium max-[1699px]:min-w-[8rem] max-[1699px]:pl-2 pl-1 pr-[25px]  py-2">
                            Fees
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {tableopenordersData.length === 0 ? (
                          <tr>
                            <td
                              colSpan={8}
                              className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2"
                            >
                              No Open Orders
                            </td>
                          </tr>
                        ) : (
                          <>
                            {tableopenordersData.map((data, index) => (
                              <>
                                <tr
                                  key={index}
                                  className="pool_font hover:bg-[#25272A] text-sm  text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]"
                                >
                                  <td className="text-left font-medium  max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    <div className="flex flex-col">
                                      <span> {data.date}</span>
                                      <span className="text-xs text-[#6B7280] font-normal">
                                        {data.hours}
                                      </span>
                                    </div>
                                  </td>

                                  <td className="text-left font-medium flex flex-col max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-2 py-2">
                                    {data.token}
                                    <span
                                      className={`text-[10px] text-center   px-[2px] rounded-[4px] ${
                                        data.tokenpart === "SELL/SHORT"
                                          ? "text-[#D65454] bg-[#991B1B4D] w-[70px]"
                                          : "text-[#14B8A6] bg-[#0596694D] w-[65px]"
                                      }`}
                                    >
                                      {data.tokenpart}
                                    </span>
                                  </td>
                                  <td className="text-left font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.type}
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.status}
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.positionSize}
                                  </td>
                                  <td className="text-right  font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.collateral}
                                  </td>
                                  <td className="text-right font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.leverage}
                                  </td>

                                  <td className="text-right font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.entryprice}
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.takeprofit}
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.stoploss}
                                  </td>
                                  <td className="text-right font-medium  text-[#00CC99] flex flex-col max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.pnL}
                                    <span className="text-[10px]">
                                      {data.pnlper}
                                    </span>
                                  </td>
                                  <td className="text-center font-medium max-[1699px]:min-w-[8rem] max-[1699px]:px-2 px-1 py-2">
                                    {data.liquidationprice}
                                  </td>
                                  <td className="  font-medium max-[1699px]:min-w-[8rem] max-[1699px]:pl-2 pl-1 pr-[25px] py-2">
                                    <div className="justify-end flex">
                                      <div> {data.fees}</div>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            ))}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {tableopenordersData.length > 0 && (
                  <div className="xl:w-[8%] sm:w-[12%] max-[639px]:w-[16%] max-[380px]:w-[22%] mt-[2rem]">
                    {tableopenordersData.map((item, key) => (
                      <div
                        key={key}
                        onClick={handleDelete}
                        className="h-[57.7px] cursor-pointer table_right_side flex items-center justify-center"
                      >
                        <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#2B2B2B] p-1 flex items-center justify-center">
                          <span className="pool_font text-xs font-semibold text-[#FFFFFF] tracking-[0.06px]">
                            Manage
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
          {selectedTab == "history" && (
            <>
              <div className=" w-full relative flex">
                <div className="flex flex-col relative w-full  max-[1699px]:overflow-x-scroll border-t-[1px] border-solid border-[#25272A]">
                  {/* <div className="w-full "> */}

                  <div className="pool_font  flex  text-xs font-medium text-[#9CA3AF]">
                    <div className="text-left font-medium  max-[1699px]:min-w-[8rem] table_width px-2 py-2 border-b-[1px] border-solid border-[#25272A]">
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
                    <div className="text-right font-medium py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right  font-medium py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
                    </div>
                    <div className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2 table_width border-b-[1px] border-solid border-[#25272A] ">
                      Quantity
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
                    <div className="text-right font-medium py-2 pl-2 pr-[25px] table_width max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {tablehistoryData.length === 0 ? (
                    <div className="relative w-full">
                      <div className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2">
                        No Realised PnL
                      </div>
                    </div>
                  ) : (
                    <>
                      {tablehistoryData.map((data, index) => (
                        <>
                          <div key={index} className="relative w-full">
                            <div className="pool_font w-full hover:bg-[#25272A] font-medium max-[1699px]:hover:w-fit  min-[1700px]:hover:w-full text-sm flex  text-[#E5E7EB] tracking-[0.07px] ">
                              <div className="text-left font-medium py-[8px] px-2 flex flex-col max-[1699px]:min-w-[8rem]   table_width border-b-[1px] border-solid border-[#25272A] ">
                                {data.date}
                                <span className="text-xs text-[#6B7280] font-normal">
                                  {data.hours}
                                </span>
                              </div>
                              <div className="font-medium text-left py-[8px] px-2 flex flex-col max-[1699px]:min-w-[8rem]  table_width border-b-[1px] border-solid border-[#25272A] ">
                                {data.token}
                                <span
                                  className={`text-[10px] text-center   px-[2px] rounded-[4px] ${
                                    data.tokenpart === "SELL/SHORT"
                                      ? "text-[#D65454] bg-[#991B1B4D] w-[70px]"
                                      : "text-[#14B8A6] bg-[#0596694D] w-[65px]"
                                  }`}
                                >
                                  {data.tokenpart}
                                </span>
                              </div>
                              <div className="text-left  py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width  border-b-[1px] border-solid border-[#25272A] ">
                                {data.type}
                              </div>
                              <div className="text-center py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                                {data.positionSize}
                              </div>
                              <div className="text-right py-[8px]  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                                {data.collateral}
                              </div>
                              <div className="text-right py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A]  ">
                                {data.leverage}
                              </div>
                              <div className="text-right py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                                {data.quantity}
                              </div>
                              <div className="text-center py-[8px]  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                                {data.entryprice}
                              </div>

                              <div className="text-center py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                                {data.takeprofit}
                              </div>
                              <div className="text-center py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                                {data.stoploss}
                              </div>
                              <div className="text-right py-[8px] flex flex-col text-[#00CC99]  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A] ">
                                {data.pnL}
                                <span className="text-[10px]">
                                  {data.pnlper}
                                </span>
                              </div>
                              <div className="text-center py-[8px]  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                                {data.liquidationprice}
                              </div>
                              <div className="text-right py-[8px] pl-2 pr-[25px] max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]">
                                {data.fees}
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
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
                    <div className="text-left font-medium  max-[1699px]:min-w-[8rem] table_width px-2 py-2 border-b-[1px] border-solid border-[#25272A]">
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
                    <div className="text-right font-medium py-2 px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                      Collateral
                    </div>
                    <div className="text-right  font-medium py-2  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                      Leverage
                    </div>
                    <div className="text-right font-medium max-[1699px]:min-w-[8rem] px-2 py-2 table_width border-b-[1px] border-solid border-[#25272A] ">
                      Quantity
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
                    <div className="text-right font-medium py-2 pl-2 pr-[25px] table_width max-[1699px]:min-w-[8rem] border-b-[1px] border-solid border-[#25272A] ">
                      Fees
                    </div>
                  </div>
                  {tablehistoryData.length === 0 ? (
                    <div className="relative w-full">
                      <div className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2">
                        No Realised PnL
                      </div>
                    </div>
                  ) : (
                    <>
                      {tablehistoryData.map((data, index) => (
                        <>
                          <div key={index} className="relative w-full">
                            <div className="pool_font w-full hover:bg-[#25272A] font-medium max-[1699px]:hover:w-fit  min-[1700px]:hover:w-full text-sm flex  text-[#E5E7EB] tracking-[0.07px] ">
                              <div className="text-left font-medium py-[8px] px-2 flex flex-col max-[1699px]:min-w-[8rem]   table_width border-b-[1px] border-solid border-[#25272A] ">
                                {data.date}
                                <span className="text-xs text-[#6B7280] font-normal">
                                  {data.hours}
                                </span>
                              </div>
                              <div className="font-medium text-left py-[8px] px-2 flex flex-col max-[1699px]:min-w-[8rem]  table_width border-b-[1px] border-solid border-[#25272A] ">
                                {data.token}
                                <span
                                  className={`text-[10px] text-center   px-[2px] rounded-[4px] ${
                                    data.tokenpart === "SELL/SHORT"
                                      ? "text-[#D65454] bg-[#991B1B4D] w-[70px]"
                                      : "text-[#14B8A6] bg-[#0596694D] w-[65px]"
                                  }`}
                                >
                                  {data.tokenpart}
                                </span>
                              </div>
                              <div className="text-left  py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width  border-b-[1px] border-solid border-[#25272A] ">
                                {data.type}
                              </div>
                              <div className="text-center py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                                {data.positionSize}
                              </div>
                              <div className="text-right py-[8px]  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A] ">
                                {data.collateral}
                              </div>
                              <div className="text-right py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A]  ">
                                {data.leverage}
                              </div>
                              <div className="text-right py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                                {data.quantity}
                              </div>
                              <div className="text-center py-[8px]  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                                {data.entryprice}
                              </div>

                              <div className="text-center py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                                {data.takeprofit}
                              </div>
                              <div className="text-center py-[8px] px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid  border-[#25272A] ">
                                {data.stoploss}
                              </div>
                              <div className="text-right py-[8px] flex flex-col text-[#00CC99]  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px]  border-solid border-[#25272A] ">
                                {data.pnL}
                                <span className="text-[10px]">
                                  {data.pnlper}
                                </span>
                              </div>
                              <div className="text-center py-[8px]  px-2 max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]  ">
                                {data.liquidationprice}
                              </div>
                              <div className="text-right py-[8px] pl-2 pr-[25px] max-[1699px]:min-w-[8rem] table_width border-b-[1px] border-solid border-[#25272A]">
                                {data.fees}
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
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
                  <tbody className="">
                    {tablebalanceData.length === 0 ? (
                      <div className="relative w-full">
                        <div className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2">
                          No Balance
                        </div>
                      </div>
                    ) : (
                      <>
                        {tablebalanceData.map((data, index) => (
                          <tr
                            key={index}
                            className="pool_font text-sm hover:bg-[#25272A] text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]"
                          >
                            <td className="text-left  font-medium px-3 py-2">
                              {data.token}
                            </td>
                            <td className="text-right  font-medium px-3 py-2">
                              {data.quantity}
                            </td>
                            <td className="text-right  font-medium px-3 py-2">
                              {data.stakedquans}
                            </td>
                            <td className="text-right  font-medium  px-3 py-2">
                              {data.lpcontribution}
                            </td>
                            <td className="text-right  font-medium px-3 py-2">
                              {data.lptokens}
                            </td>
                            <td className="text-right  font-medium  px-3 py-2">
                              {data.currentprice}
                            </td>
                            <td className="text-right  font-medium  px-3 py-2">
                              {data.totalvalue}
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
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

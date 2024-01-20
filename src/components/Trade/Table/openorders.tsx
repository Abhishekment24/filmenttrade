import React, { useEffect, useRef, useState } from "react";

import Positiondetailspopup from "./Positiondetailspopup";

import { tableopenordersData } from "./data";
import { mdata } from "../Rightsidecomponent/data";
const Openorders = () => {
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

  const handleDelete = () => {
    setIsDetailOpen(true);
  };

  const closeDelete = () => {
    setIsDetailOpen(false);
  };
  return (
    <>
      <div>
        <div className=" w-full relative flex">
          <div className="flex flex-col relative lg:w-[92%] sm:w-[88%] max-[639px]:w-[84%] max-[380px]:w-[78%] overflow-auto  no-scrollbar border-t-[1px] border-solid border-[#25272A]">
            <div className="pool_font text-xs font-medium flex  text-[#9CA3AF]">
              <div className="text-left px-2 py-2  position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Date
              </div>
              <div className="text-left px-2 py-2  position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Token
              </div>
              <div className="text-left  px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Type
              </div>
              <div className=" text-center px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A]  ">
                Status
              </div>
              <div className=" text-center px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A]  ">
                Position Size
              </div>
              <div className="text-right px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A]  ">
                Collateral
              </div>
              <div className="text-right px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Leverage
              </div>

              <div className="text-right px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Entry Price
              </div>
              <div className="text-center px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Take Profit
              </div>
              <div className="text-center px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Stop Loss
              </div>
              <div className="text-right px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                PnL
              </div>
              <div className="text-center px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Liquidation Price
              </div>
              <div className="text-right pl-2 pr-[25px]  py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                Fees
              </div>
            </div>
            {tableopenordersData.length === 0 ? (
              <div className="relative w-full">
                <div className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2">
                  No Open Orders
                </div>
              </div>
            ) : (
              <>
                {tableopenordersData.map((data, index) => {
                  return (
                    <div key={index} className="relative w-full">
                      <div className=" w-full  max-[1699px]:hover:w-fit min-[1700px]:hover:w-full  flex pool_font hover:bg-[#25272A] text-sm  text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                        <div className="text-left px-2 py-2 flex flex-col position-width table_width   border-b-[1px] border-solid border-[#25272A] ">
                          <span> {data.date}</span>
                          <span className="text-xs text-[#6B7280] font-normal">
                            {data.hours}
                          </span>
                        </div>
                        <div className="text-left px-2 py-2 flex flex-col position-width table_width   border-b-[1px] border-solid border-[#25272A] ">
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
                        <div className="text-left px-2 py-2 position-width table_width  border-b-[1px] border-solid border-[#25272A] ">
                          {data.type}
                        </div>
                        <div className="text-center px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                          {data.status}
                        </div>
                        <div className="text-center px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                          {data.positionSize}
                        </div>
                        <div className="text-right px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A] ">
                          {data.collateral}
                        </div>
                        <div className="text-right px-2 py-2 position-width table_width border-b-[1px]  border-solid border-[#25272A]  ">
                          {data.leverage}
                        </div>

                        <div className="text-right px-2 py-2 position-width table_width border-b-[1px] border-solid  border-[#25272A] ">
                          {data.entryprice}
                        </div>

                        <div className="text-center px-2 py-2 position-width table_width border-b-[1px] border-solid  border-[#25272A] ">
                          {data.takeprofit}
                        </div>
                        <div className="text-center px-2 py-2 position-width table_width border-b-[1px] border-solid  border-[#25272A] ">
                          {data.stoploss}
                        </div>
                        <div className="text-right flex flex-col text-[#00CC99] px-2 py-2 position-width table_width border-b-[1px]  border-solid border-[#25272A] ">
                          {data.pnL}
                          <span className="text-[10px]">{data.pnlper}</span>
                        </div>
                        <div className="text-center px-2 py-2 position-width table_width border-b-[1px] border-solid border-[#25272A]  ">
                          {data.liquidationprice}
                        </div>
                        <div className="text-right pl-2 pr-[25px] py-2 position-width table_width border-b-[1px] border-solid border-[#25272A]">
                          <div className="justify-end flex ">
                            <div> {data.fees}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {tableopenordersData.length > 0 && (
            <div className="xl:w-[8%] sm:w-[12%] max-[639px]:w-[16%] max-[380px]:w-[22%] mt-[32px]">
              {tableopenordersData.map((item, key) => (
                <div
                  key={key}
                  onClick={handleDelete}
                  className="h-[57px] cursor-pointer table_right_side flex items-center justify-center"
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
        {/* <div className="flex w-full">
          <div className="lg:w-[92%] sm:w-[88%] max-[639px]:w-[84%] max-[380px]:w-[78%]">
            <div className="flex w-full overflow-auto  no-scrollbar border-t-[1px] border-solid border-[#25272A]">
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
                              <span className="text-[10px]">{data.pnlper}</span>
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
                  className="h-[57px] cursor-pointer table_right_side flex items-center justify-center"
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
              </div>*/}
      </div>
      <Positiondetailspopup isOpen={isDetailOpen} onClose={closeDelete} />
    </>
  );
};

export default Openorders;

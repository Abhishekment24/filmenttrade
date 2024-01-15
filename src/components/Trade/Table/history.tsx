import React from "react";
import { tablehistoryData } from "./data";
const History = () => {
  return (
    <div>
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
                        <span className="text-[10px]">{data.pnlper}</span>
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
    </div>
  );
};

export default History;

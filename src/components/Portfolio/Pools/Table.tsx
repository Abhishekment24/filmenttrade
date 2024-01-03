import React, { useState } from "react";
import { TbProgressX } from "react-icons/tb";

const Table = () => {
  return (
    <>
      <div className=" bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]   w-full ">
        <div className="">
          <div className="overflow-x-auto gap-[20px] w-full border-b-[1px] border-[#272727]  px-4">
            <button className="py-4 text-[#fff] pool_font font-medium text-sm ">
              Pools
            </button>
          </div>
        </div>

        <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
          <table className="w-full">
            <thead>
              <tr className="pool_font text-xs border-b-[1px] border-solid border-[#25272A] font-normal text-[#767676] tracking-[0.06px]">
                <th className="text-left font-normal px-4 py-3">Pool</th>
                <th className="text-center font-normal px-4 py-3">
                  Liquidity Provided
                </th>
                <th className="text-right font-normal px-4 py-3">Apr</th>
                <th className="text-right font-normal px-4 py-3">
                  Unrealised PnL
                </th>
              </tr>
            </thead>
            <tbody className="hover:bg-[#25272A]">
              <tr className="pool_font text-sm font-normal text-[#E8E8E8] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                <td className="text-left font-medium px-4 py-3">USDC</td>
                <td className="text-center font-normal px-4 py-3">$3,636</td>
                <td className="text-right font-normal px-4 py-3">16.64%</td>
                <td className="text-right font-normal px-4 py-3">$3,600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;

import React from "react";
import { tablebalanceData } from "./data";
const Balance = () => {
  return (
    <div>
      <div className="flex w-full overflow-auto no-scrollbar border-t-[1px] border-solid border-[#25272A]">
        <table className="w-full">
          <thead>
            <tr className="pool_font text-xs font-medium border-b-[1px] border-solid border-[#25272A]  text-[#9CA3AF]">
              <th className="text-left font-medium  px-3 py-2">Token</th>
              <th className="text-right font-medium  px-3 py-2">Quantity</th>
              <th className="text-right font-medium px-3 py-2">
                Staked Quantity
              </th>
              <th className="text-right  font-medium px-3 py-2">
                LP Contribution
              </th>
              <th className="text-right font-medium px-3 py-2">LP Tokens</th>
              <th className="text-right font-medium px-3 py-2">
                Current Price
              </th>
              <th className="text-right font-medium px-3 py-2">Total Value</th>
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
    </div>
  );
};

export default Balance;

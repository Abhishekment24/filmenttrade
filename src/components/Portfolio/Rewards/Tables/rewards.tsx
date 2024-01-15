import { tablepoolData, tablerwardData } from "@/components/Trade/Table/data";
import React from "react";

const pool = () => {
  return (
    <div>
      <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
        <table className="w-full">
          <thead>
            <tr className="pool_font text-xs font-medium border-b-[1px] border-solid border-[#25272A]  text-[#9CA3AF]">
              <th className="text-left font-medium  px-3 py-2">Date</th>
              <th className="text-left font-medium  px-3 py-2">Reward Type</th>
              <th className="text-right font-medium px-3 py-2">Reward Value</th>
            </tr>
          </thead>
          <tbody className="">
            {tablepoolData.length === 0 ? (
              <div className="relative w-full">
                <div className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2">
                  No Rewards
                </div>
              </div>
            ) : (
              <>
                {tablerwardData.map((data, index) => (
                  <tr
                    key={index}
                    className="pool_font text-sm hover:bg-[#25272A] text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]"
                  >
                    <td className="text-left  font-medium px-3 py-2">
                      {data.date}
                    </td>
                    <td className="text-left flex flex-col gap-1 font-medium px-3 py-2">
                      {data.rewardtype}
                      <span className="text-[#6B7280] text-xs font-normal">
                        {data.type}
                      </span>
                    </td>
                    <td className="text-right  font-medium px-3 py-2">
                      {data.rewardvalue}
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

export default pool;

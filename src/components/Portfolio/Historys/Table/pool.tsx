import { tablepoolData } from '@/components/Trade/Table/data';
import React from 'react'

const pool = () => {
  return (
    <div>
      <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
        <table className="w-full">
          <thead>
            <tr className="pool_font text-xs font-medium border-b-[1px] border-solid border-[#25272A]  text-[#9CA3AF]">
              <th className="text-left font-medium  px-3 py-2">Pool</th>
              <th className="text-right font-medium  px-3 py-2">
                Liquidity Provided
              </th>
              <th className="text-right font-medium px-3 py-2">Apr</th>
              <th className="text-right  font-medium px-3 py-2">
                Unrealised PnL
              </th>
            </tr>
          </thead>
          <tbody className="">
            {tablepoolData.length === 0 ? (
              <div className="relative w-full">
                <div className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2">
                  No Pool
                </div>
              </div>
            ) : (
              <>
                {tablepoolData.map((data, index) => (
                  <tr
                    key={index}
                    className="pool_font text-sm hover:bg-[#25272A] text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]"
                  >
                    <td className="text-left  font-medium px-3 py-2">
                      {data.pool}
                    </td>
                    <td className="text-right  font-medium px-3 py-2">
                      {data.liquidityProvided}
                    </td>
                    <td className="text-right  font-medium px-3 py-2">
                      {data.apr}
                    </td>
                    <td className="text-right  font-medium  px-3 py-2">
                      {data.unrealisedPnL}
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
}

export default pool

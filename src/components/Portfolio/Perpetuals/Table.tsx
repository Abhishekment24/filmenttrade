import React, { useState } from "react";
const tabs = [
  {
    title: "Positions",
    key: "positions",
  },
  {
    title: "Active Orders",
    key: "activeorders",
  },
];
const Table = () => {
  const [selectedTab, setSelectedTab] = useState("positions");
  return (
    <>
      <div className=" bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]   w-full ">
        <div className="">
          <div className="flex items-center max-[500px]:px-2 overflow-x-auto gap-[10px] w-full border-b-[1px] border-[#272727] ">
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
          <>
            <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
              <table className="w-full">
                <thead>
                  <tr className="pool_font text-xs border-b-[1px] border-solid border-[#25272A] font-normal text-[#767676] tracking-[0.06px]">
                    <th className="text-left font-normal px-[24px] py-3">
                      Token
                    </th>
                    <th className="text-center font-normal px-[24px] py-3">
                      Position Size
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Margin
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Entry Price
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Liq Price
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Unrealised PnL
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      TP
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      SL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="pool_font text-sm font-normal text-[#E8E8E8] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                    <td className="text-left flex flex-col gap-[2px] font-normal px-[24px] py-3">
                      BTC
                      <span className="text-xs text-[#939191]">Long</span>
                    </td>
                    <td className="text-center font-normal px-[24px] py-3">
                      $3,636
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      $36
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      1,244
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      1,050
                    </td>
                    <td className="text-right flex flex-col gap-[2px] font-normal px-[24px] py-3">
                      $329.00
                      <span className="text-xs text-[#939191]">28.05%</span>
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">-</td>
                    <td className="text-right font-normal px-[24px] py-3">-</td>
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
                  <tr className="pool_font text-xs border-b-[1px] border-solid border-[#25272A] font-normal text-[#767676] tracking-[0.06px]">
                    <th className="text-left font-normal px-[24px] py-3">
                      Token
                    </th>
                    <th className="text-center font-normal px-[24px] py-3">
                      Position Size
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Margin
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Entry Price
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Liq Price
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      Unrealised PnL
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      TP
                    </th>
                    <th className="text-right font-normal px-[24px] py-3">
                      SL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="pool_font text-sm font-normal text-[#E8E8E8] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                    <td className="text-left flex flex-col gap-[2px] font-normal px-[24px] py-3">
                      BTC
                      <span className="text-xs text-[#939191]">Long</span>
                    </td>
                    <td className="text-center font-normal px-[24px] py-3">
                      $3,636
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      $36
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      1,244
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">
                      1,050
                    </td>
                    <td className="text-right flex flex-col gap-[2px] font-normal px-[24px] py-3">
                      $329.00
                      <span className="text-xs text-[#939191]">28.05%</span>
                    </td>
                    <td className="text-right font-normal px-[24px] py-3">-</td>
                    <td className="text-right font-normal px-[24px] py-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Table;

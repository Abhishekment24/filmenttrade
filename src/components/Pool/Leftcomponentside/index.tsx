import React, { useState } from "react";
import { cdata, edata } from "./Data/data";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Charts from "./Charts";
const tabs = [
  {
    title: "Liquidity",
    key: "liquidity",
  },
  {
    title: "Utilisation",
    key: "utilisation",
  },
  {
    title: "Fees",
    key: "fees",
  },
];
const Leftcomponentside = () => {
  const [selectedTab, setSelectedTab] = useState("liquidity");
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="flex items-center flex-wrap max-[550px]:gap-4  bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px] justify-between  w-full ">
        <div className="">
          <span className="nav_font text-[#fff] text-xs font-semibold">
            Total Liquidity Supplied
          </span>
          <p className="pool_font text-[#fff] text-[20px] font-medium">
            $241,500.28
          </p>
        </div>
        <div className="w-[1px] h-[54px]  border-l-[1px] border-[#25272A] "></div>
        <div className="">
          <span className="nav_font text-[#fff] text-xs font-semibold">
            Utilisation
          </span>
          <p className="pool_font text-[#fff] text-[20px] font-medium">
            223.11
          </p>
        </div>
        <div className="w-[1px] h-[54px]  border-l-[1px] border-[#25272A] "></div>
        <div className="">
          <span className="nav_font text-[#fff] text-xs font-semibold">
            APR
          </span>
          <p className="pool_font text-[#fff] text-[20px] font-medium">
            70.15%
          </p>
        </div>
        <div className="w-[1px] h-[54px] border-l-[1px] border-[#25272A] "></div>
        <div className="pr-[50px]">
          <div className="">
            <span className="nav_font text-[#fff] text-xs font-semibold">
              Fees (24h)
            </span>
            <p className="pool_font text-[#fff] text-[20px] font-medium">
              223.11
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] sm:p-[24px] p-5 w-full ">
        <div className="flex justify-between flex-wrap gap-3 items-center w-full">
          <div className="flex items-center gap-[20px] bg-[#26282C] border-[#34363C] pool_charts_box border-[1px] border-solid rounded-[8px]  overflow-x-auto">
            {tabs.map((tab, index) => {
              return (
                <button
                  onClick={() => setSelectedTab(tab.key)}
                  className={`py-3 px-4 pool_font rounded-[8px] font-normal text-base  ${
                    tab.key == selectedTab
                      ? " bg-[#1A1A1A] text-[#fff] "
                      : "text-[#BABABA] "
                  }`}
                  key={index}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
          <div className="flex items-center py-3 px-4 gap-[20px] bg-[#26282C] border-[#34363C] pool_charts_box border-[1px] border-solid rounded-[8px]  ">
            <p className=" pool_font text-[#BABABA] text-base font-normal">
              1 Year
            </p>
            <div className="">
              <IoMdArrowDropup className="text-[#BABABA] text-base" />

              <IoMdArrowDropdown className="text-[#BABABA] text-base mt-[-10px]" />
            </div>
          </div>
        </div>
        {selectedTab == "liquidity" && (
          <div className="w-full h-[160px] mt-5">
            <Charts />
          </div>
        )}
        {selectedTab == "utilisation" && (
          <div className="w-full h-[160px] mt-5">
            <Charts />
          </div>
        )}
        {selectedTab == "fees" && (
          <div className="w-full h-[160px] mt-5">
            <Charts />
          </div>
        )}
      </div>
      <div className=" bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px]  w-full ">
        <div>
          <p className="nav_font text-[#fff] text-base font-semibold">
            Pool Matrix
          </p>
        </div>
        <div className="">
          {cdata.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-3 my-3"
            >
              <p className="pool_font text-[#fff] text-sm font-medium">
                {item.titles}
              </p>
              <p className="pool_font text-[#fff] text-sm font-semibold ">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="">
          {isVisible && (
            <>
              <div className="border-t-[1px] border-solid border-[#25272A] my-5"></div>
              <div className="">
                {edata.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3 my-3"
                  >
                    <p className="pool_font text-[#fff] text-sm font-medium">
                      {item.titles}
                    </p>
                    <p className="pool_font text-[#fff] text-sm font-semibold ">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
          <button onClick={toggleVisibility}>
            {isVisible ? (
              <>
                <div className="flex items-center gap-1">
                  <span className="text-[#40E0D0] pool_font  text-[13px] font-medium">
                    Hide other info
                  </span>
                  <span>
                    <IoMdArrowDropup className="text-[#40E0D0] pool_font  text-[13px] font-medium" />
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <span className="text-[#40E0D0] pool_font  text-[13px] font-medium">
                    Show other info
                  </span>
                  <span>
                    <IoMdArrowDropdown className="text-[#40E0D0] pool_font  text-[13px] font-medium" />
                  </span>
                </div>
              </>
            )}
          </button>
        </div>
      </div>
      <div className=" bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]   w-full ">
        <div className="px-[24px] py-5">
          <p className="nav_font text-[#fff] text-base font-semibold">
            Liquidity Allocation
          </p>
        </div>
        <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
          <table className="w-full">
            <thead>
              <tr className="wallet_connected_font text-[10px] border-b-[1px] border-solid border-[#25272A] font-normal text-[#939191]">
                <th className="text-left px-[24px] py-3">Token</th>
                <th className="text-center px-[24px] py-3">
                  Percentage(Avl/Tot)
                </th>
                <th className="text-right px-[24px] py-3">Amount Utilised</th>
                <th className="text-right px-[24px] py-3">Amount Available</th>
                <th className="text-right px-[24px] py-3">Borrowing Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="pool_font text-sm font-medium text-[#fff] border-b-[1px] border-solid border-[#25272A]">
                <td className="text-left px-[24px] py-3">USDC</td>
                <td className="text-center px-[24px] py-3">223.11/223.11</td>
                <td className="text-right px-[24px] py-3">223.11</td>
                <td className="text-right px-[24px] py-3">223.11</td>
                <td className="text-right px-[24px] py-3">223.11</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="pool_font text-sm font-medium text-[#fff] border-b-[1px] border-solid border-[#25272A]">
                <td className="text-left px-[24px] py-3">FLP</td>
                <td className="text-center px-[24px] py-3">223.11/223.11</td>
                <td className="text-right px-[24px] py-3">223.11</td>
                <td className="text-right px-[24px] py-3">223.11</td>
                <td className="text-right px-[24px] py-3">223.11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leftcomponentside;

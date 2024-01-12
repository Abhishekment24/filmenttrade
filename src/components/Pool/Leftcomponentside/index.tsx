import React, { useState, useEffect, useRef } from "react";
import { cdata, edata } from "./Data/data";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Charts from "./Charts";
import Dropdown from "../../Commoncomponent/Dropdown";
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
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);
  return (
    <>
      <div className="flex items-center flex-wrap max-[550px]:gap-4  bg-[#1B1C1E] mb-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px] justify-between  w-full ">
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
                  className={`py-[6px] px-[12px] pool_font rounded-[8px] font-normal text-base  ${
                    tab.key == selectedTab
                      ? " bg-[#1A1A1A] text-[#E8E8E8] "
                      : "text-[#BABABA] "
                  }`}
                  key={index}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
        {selectedTab == "liquidity" && (
          <div className="w-full h-[200px] mt-5">
            <Charts />
          </div>
        )}
        {selectedTab == "utilisation" && (
          <div className="w-full h-[200px] mt-5">
            <Charts />
          </div>
        )}
        {selectedTab == "fees" && (
          <div className="w-full h-[200px] mt-5">
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
              className="flex justify-between items-center gap-3 my-4"
            >
              <p className="pool_font text-[#E8E8E8] text-sm font-normal">
                {item.titles}
              </p>
              <p className="pool_font text-[#fff] text-sm font-semibold tracking-[0.07px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="">
          <div className="border-t-[1px] border-solid border-[#25272A] my-5"></div>
          <div className="flex justify-between items-center gap-3 my-4">
            <p className="pool_font text-[#E8E8E8] text-sm font-normal">
              Pool Address
            </p>
            <p className="pool_font text-[#fff] text-sm font-semibold tracking-[0.07px]">
              0xc0ffee254729296........10F9d54979
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px]   w-full ">
        <div className="px-[24px] py-5">
          <p className="pool_font text-[#fff] text-base font-semibold tracking-[0.08px]">
            Compartment Allocation
          </p>
        </div>
        <div className="flex w-full overflow-auto border-t-[1px] border-solid border-[#25272A]">
          <table className="w-full">
            <thead>
              <tr className="pool_font text-xs border-b-[1px] border-solid border-[#25272A] font-medium text-[#9CA3AF]">
                <th className="text-left pl-[24px] py-2">Token</th>
                <th className="text-center px-2 py-2">
                  Percentage <span className="text-[#4B5563]">(Avl/Tot)</span>
                </th>
                <th className="text-right px-2 py-2">Amount Utilised</th>
                <th className="text-right px-2 py-2">Amount Available</th>
                <th className="text-right pr-[24px] py-2">Borrowing Rate</th>
              </tr>
            </thead>
            <tbody className="hover:bg-[#25272A]">
              <tr className="pool_font text-sm font-medium text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                <td className="text-left pl-[24px] py-3">USDC</td>
                <td className="text-center px-2 py-3">223.11/223.11</td>
                <td className="text-right px-2 py-3">223.11</td>
                <td className="text-right px-2 py-3">223.11</td>
                <td className="text-right pr-[24px] py-3">223.11</td>
              </tr>
            </tbody>
            <tbody className="hover:bg-[#25272A]">
              <tr className="pool_font text-sm font-medium text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]">
                <td className="text-left pl-[24px]  py-3">USDC</td>
                <td className="text-center px-2 py-3">223.11/223.11</td>
                <td className="text-right px-2 py-3">223.11</td>
                <td className="text-right px-2 py-3">223.11</td>
                <td className="text-right pr-[24px] py-3">223.11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leftcomponentside;

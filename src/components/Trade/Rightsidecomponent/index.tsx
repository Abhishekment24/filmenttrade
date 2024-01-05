import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import Market from "./Market";
import Limit from "./Limit";
import Link from "next/link";
import { RiShareBoxFill } from "react-icons/ri";
const tabs = [
  {
    title: "Market",
    key: "market",
  },
  {
    title: "Limit",
    key: "limit",
  },
];
const Rightsidecomponent = () => {
  const [selectedTab, setSelectedTab] = useState("market");
  const [testnet, setTestnet] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);
  return (
    <>
      <div className="border-[1px] border-solid bg-[#1B1C1E] border-[#FFFFFF0D] max-[1023px]:mt-5 lg:h-[90vh] lg:w-[30%] xl:w-[25%] min-[1700px]:w-[400px] lg:fixed lg:overflow-y-scroll">
        <div className="flex justify-between flex-wrap items-center gap-[10px] w-full border-b-[1px] border-[#272727] px-4">
          <div className="flex items-center  gap-[19px]  border-b-[1px] border-[#272727]">
            {tabs.map((tab, index) => {
              return (
                <button
                  onClick={() => setSelectedTab(tab.key)}
                  className={`pool_font font-medium text-sm  ${
                    tab.key == selectedTab
                      ? "py-[8.5px] text-[#40E0D0] border-b-[2px] border-[#40E0D0] w-[101px]"
                      : "text-[#fff] w-[101px] "
                  }`}
                  key={index}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={toggleMenu}
              className="rounded-[4px] cursor-pointer border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[24px] h-[24px] flex items-center justify-center"
            >
              <span>
                <BsThreeDotsVertical className="text-[#fff] text-base" />
              </span>
            </div>
            <div
              className={`absolute top-[30px] lg:z-[99] pl-2  right-0 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <div className=" icon-width three_dot p-[24px]">
                <span className="pool_font text-[#9CA3AF] mb-1 text-xs font-medium tracking-[0.06px]">
                  Layout
                </span>
                <ul className="grid gap-4 grid-cols-2 my-3">
                  <li className="bg-[#25272A] h-[120px] border-[1px] border-solid border-[#25272A] rounded-[4px]">
                    <div className="bg-[#171717] flex rounded-[4px] items-center gap-[4px] h-[90px] justify-center">
                      <div className="w-[20px] h-[39px] bg-[#4B5563] rounded-[2px]"></div>
                      <div className="w-[47px] h-[39px] bg-[#25272A] rounded-[2px]"></div>
                    </div>
                    <div className=" text-center">
                      <span className="pool_font text-[#fff]  text-xs font-medium tracking-[0.06px]">
                        Left Panel
                      </span>
                    </div>
                  </li>
                  <li className="right_bg h-[120px] border-[1px] border-solid border-[#40E0D0] rounded-[4px]">
                    <div className="right_bg1 flex rounded-[4px] items-center gap-[4px] h-[90px] justify-center">
                      <div className="w-[47px] h-[39px] right_bg rounded-[2px]"></div>
                      <div className="w-[20px] h-[39px] bg-[#40E0D0] rounded-[2px]"></div>
                    </div>
                    <div className=" text-center">
                      <span className="pool_font text-[#40E0D0]  text-xs font-medium tracking-[0.06px]">
                        Right Panel
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="header_bg my-6"></div>
                <div>
                  <span className="pool_font text-[#9CA3AF]  text-xs font-medium tracking-[0.06px]">
                    Slippage Tolerance
                  </span>
                  <div className="flex justify-between items-center gap-2 w-full my-2">
                    <span className="pool_font text-[#fff]  text-xs font-medium tracking-[0.06px]">
                      Market Order
                    </span>
                    <div className="bg-[#1B1C1E] flex w-[40%] items-center gap-3 my-4   px-4 rounded-[8px] h-[38px] border-[#25272A] border-solid border-[1px]">
                      <input
                        type="text"
                        className=" block w-[100%]  pool_font text-[#fff] text-[15px] font-medium text-left h-[38px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                        placeholder="1"
                      />

                      <div className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                        %
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2 w-full">
                    <span className="pool_font text-[#fff]  text-xs font-medium tracking-[0.06px]">
                      Limit Order
                    </span>
                    <div className="bg-[#1B1C1E] flex w-[40%] items-center gap-3 my-4   px-4 rounded-[8px] h-[38px] border-[#25272A] border-solid border-[1px]">
                      <input
                        type="text"
                        className=" block w-[100%]  pool_font text-[#fff] text-[15px] font-medium text-left h-[38px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                        placeholder="1"
                      />

                      <div className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                        %
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header_bg my-6"></div>
                <div>
                  <Link href="/portfolio?active=rewards">
                    <div className="flex items-center justify-start gap-1">
                      <span className="text-[#40E0D0] pool_font  text-xs font-medium max-[345px]:text-xs tracking-[0.06px]">
                        View more token details on CoinGecko
                      </span>
                      <span>
                        <RiShareBoxFill className="text-[#40E0D0] pool_font  text-xs font-medium max-[345px]:text-xs" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {selectedTab == "market" && (
          <>
            <Market />
          </>
        )}
        {selectedTab == "limit" && (
          <>
            <Limit />
          </>
        )}
      </div>
    </>
  );
};

export default Rightsidecomponent;

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
  const [activeTab, setActiveTab] = useState("Buy");
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
        <div className="lg:bg-[#1B1C1E] lg:fixed lg:w-[30%] xl:w-[25%] min-[1700px]:w-[400px]">
          <div className="px-4 py-4">
            <div className="flex items-center gap-[4px] active_button_bg   overflow-x-auto w-full">
              <button
                onClick={() => setActiveTab("Buy")}
                className={`py-[10px] px-[12px] pool_font  font-semibold text-xs tracking-[0.06px]  ${
                  activeTab == "Buy"
                    ? " buy_bg_btn  text-[#10B981] w-[50%] "
                    : "text-[#BABABA]  w-[50%]"
                }`}
              >
                Buy / Long
              </button>
              <button
                onClick={() => setActiveTab("Sell")}
                className={`py-[10px] px-[12px] pool_font font-semibold text-xs tracking-[0.06px]  ${
                  activeTab == "Sell"
                    ? " sell_bg_btn text-[#C33F3F] w-[50%]"
                    : "text-[#BABABA] w-[50%] "
                }`}
              >
                Sell / Short
              </button>
            </div>
          </div>
          <div className="flex justify-between flex-wrap items-center gap-[10px] w-full border-b-[1px] border-[#272727] px-4">
            <div className="flex items-center  gap-[19px]  border-b-[1px] border-[#272727]">
              {tabs.map((tab, index) => {
                return (
                  <button
                    onClick={() => setSelectedTab(tab.key)}
                    className={`pool_font font-semibold text-sm  ${
                      tab.key == selectedTab
                        ? "py-[9px] text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] w-[101px]"
                        : "text-[#BABABA] w-[101px] "
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
                <div className=" icon-width three_dot p-[24px] icon-height">
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
                  <div className="header_bg mt-6 mb-3"></div>
                  <div>
                    <span className="pool_font text-[#9CA3AF]  text-xs font-medium tracking-[0.06px]">
                      Slippage Tolerance
                    </span>
                    <div className="flex justify-between items-center gap-2 w-full my-2">
                      <span className="pool_font text-[#fff]  text-xs font-medium tracking-[0.06px]">
                        Market Order
                      </span>
                      <div className="input_field_bg flex w-[40%] items-center gap-3   px-4  h-[38px] ">
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
                      <div className="input_field_bg flex w-[40%] items-center gap-3    px-4  h-[38px] ">
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
                  {/* <div className="header_bg my-6"></div>
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pt-[120px] lg:pb-[70px]">
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
        <div className="lg:fixed lg:bg-[#1B1C1E] lg:bottom-[1%] px-4 py-4 border-t-[1px] lg:h-[90px] border-[#272727] border-solid lg:w-[30%] xl:w-[25%] min-[1700px]:w-[400px]">
          {activeTab === "Buy" && (
            <div>
              <button className="items-center pool_font text-[#fff] w-[100%] text-[15px] font-semibold btn_border  bg-[#059669] rounded-[6px]  py-[10px] px-[16px] tracking-[0.075px]">
                Buy / Long
              </button>
            </div>
          )}
          {activeTab === "Sell" && (
            <button className="items-center pool_font text-[#fff] w-[100%] text-[15px] font-semibold  bg-[#C33F3F] btn_border rounded-[6px]  py-[10px] px-[16px] tracking-[0.075px]">
              Sell / Short
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Rightsidecomponent;

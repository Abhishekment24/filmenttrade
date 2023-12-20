import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Suppliedicon from "../../../../public/assest/supplied.png";
import Stakeicons from "../../../../public/assest/stakeicons.png";
const tabs = [
  {
    title: "Deposit",
    key: "deposit",
  },
  {
    title: "Withdraw",
    key: "withdraw",
  },
];
const Rightcomponentside = () => {
  const [selectedTab, setSelectedTab] = useState("deposit");
  return (
    <>
      <div className="pool_right_box p-[24px] pool_box_shadow ">
        <p className="nav_font text-[#fff] text-base font-semibold">
          My Deposit
        </p>
        <div className="flex items-center gap-[16px] my-5">
          <div>
            <Image
              className="w-[40px]"
              priority
              src={Suppliedicon}
              alt="Suppliedicon"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="nav_font text-[#fff] text-sm font-semibold">
              Supplied Liquidity
            </span>
            <span className="wallet_connected_font text-[#fff] text-[20px] font-semibold">
              42.86 USDC
            </span>
          </div>
        </div>
        <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
        <div className="flex items-start gap-[16px] mt-5">
          <div>
            <Image
              className="w-[40px]"
              priority
              src={Stakeicons}
              alt="Stakeicons"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="nav_font text-[#fff] text-sm font-semibold">
              Stake to Earn 85% APR & Filament Tokens
            </span>
            <span className="nav_font text-[#FFFFFF80] text-xs font-normal">
              Bonding period ~ 21 days
            </span>
            <div className="mt-3">
              <button className="items-center nav_font text-[#40CABC] text-[14px] w-[120px] font-semibold  btn  w-[120px] p-[16px]">
                Stake
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1C1E]   pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] mt-5">
        <div className="">
          <div className="flex items-center gap-[20px]  border-b-[1px] border-[#272727] px-[24px]">
            {tabs.map((tab, index) => {
              return (
                <button
                  onClick={() => setSelectedTab(tab.key)}
                  className={`py-5  nav_font font-semibold text-base  ${
                    tab.key == selectedTab
                      ? "  text-[#40E0D0] border-b-[2px] border-[#40E0D0] "
                      : "text-[#fff] "
                  }`}
                  key={index}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="p-[24px]">
          {selectedTab == "deposit" && (
            <>
              <div className="bg-[#222325] flex items-center gap-3 w-full px-4 rounded-[8px] h-[52px] border-[#25272A] border-solid border-[1px]">
                <input
                  type="text"
                  className=" block w-full nav_font text-[#fff] text-[20px] font-medium text-right h-[52px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                  placeholder="100"
                />
                <span className="nav_font text-[#939191] text-[20px] font-medium">
                  USDC
                </span>
              </div>
              <div className="flex items-center gap-4 justify-between my-3">
                <span className="nav_font text-[#939191] text-xs font-normal">
                  Available
                </span>
                <span className="nav_font text-[#fff] text-xs font-medium">
                  100 USDC
                </span>
              </div>
              <div>
                <button className="items-center w-full nav_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]">
                  Deposit
                </button>
              </div>
            </>
          )}
          {selectedTab == "withdraw" && (
            <>
              <div className="bg-[#222325] flex items-center gap-3 w-full px-4 rounded-[8px] h-[52px] border-[#25272A] border-solid border-[1px]">
                <input
                  type="text"
                  className=" block w-full nav_font text-[#fff] text-[20px] font-medium text-right h-[52px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                  placeholder="0.00"
                />
                <span className="nav_font text-[#939191] text-[20px] font-medium">
                  USDC
                </span>
              </div>
              <div className="flex items-center gap-4 justify-between my-3">
                <span className="nav_font text-[#939191] text-xs font-normal">
                  Supplied
                </span>
                <span className="nav_font text-[#fff] text-xs font-medium">
                  42.86 USDC
                </span>
              </div>
              <div>
                <button className="items-center w-full nav_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[10px] px-[16px]">
                  Withdraw
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Rightcomponentside;

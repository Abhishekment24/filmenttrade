import React, { useEffect, useState } from "react";
import Image from "next/image";
import Poolicons from "../../../public/assest/poolicons.png";
import Link from "next/link";
import DepositPupopup from "./Rightcomponentside/Depositpopup";
import { MdInfoOutline } from "react-icons/md";
import Line from "../../../public/assest/Line.png";
import Suppliedicon from "../../../public/assest/supplied.png";
import Stakeicons from "../../../public/assest/stakeicons.png";

import Leftcomponentside from "./Leftcomponentside";
import Withdrawpopup from "./Rightcomponentside/Withdrawpopup";
const tabs = [
  {
    title: "Add",
    key: "add",
  },
  {
    title: "Remove",
    key: "remove",
  },
];
const Pool = () => {
  const [selectedTab, setSelectedTab] = useState("add");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [addvalue, setAddValue] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [formsData, setFormsData] = useState({
    collateralinput: "0.3636",
    profitinput: "0.250",
    stopinput: "0.015",
    amount: "100",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (/^\d*$/.test(value) || value === "") {
      setFormsData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setAddValue(true);
  };
  const withdrawclosePopup = () => {
    setIsWithdrawOpen(false);
  };
  useEffect(() => {
    if (isPopupOpen) {
    }
  }, [isPopupOpen]);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const withdrawopenPopup = () => {
    setIsWithdrawOpen(true);
  };
  return (
    <>
      <section className="max-[1023px]:overflow-hidden relative">
        <div className="pt-[108px] pb-[24px] pool_bg lg:sticky lg:top-0 z-10">
          <div className="container mx-auto max-[1279px]:px-4">
            <div className="flex items-center gap-[16px]">
              <div>
                <Image
                  className="w-[32px]"
                  priority
                  src={Poolicons}
                  alt="Poolicons"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="nav_font text-[#fff] text-[20px] font-semibold">
                  USDC
                </span>
                <span className="nav_font text-[#939191] text-xs font-normal">
                  Liquidity Pool
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-[1279px]:px-4">
          <div className="flex items-start gap-[30px] lg:flex-row flex-col w-full relative  pb-[80px]">
            <div className="lg:w-[65%] w-full lg:overflow-y-auto">
              <Leftcomponentside />
            </div>
            <div className="lg:w-[35%] w-full mb-5  lg:sticky lg:top-[12rem]">
              {!addvalue && (
                <>
                  <div className=" p-[24px] add_balance_bg ">
                    <p className="pool_font text-[#fff] text-base font-semibold tracking-[0.08px]">
                      My Deposit
                    </p>
                    <div className="flex items-center gap-[16px] my-5">
                      <div>
                        <Image
                          className="w-[40px] max-[420px]:w-[23px] "
                          priority
                          src={Stakeicons}
                          alt="Stakeicons"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <span className="pool_font text-[#fff] text-sm font-normal">
                          Add Liquidity
                        </span>
                        <span className="pool_font text-[#FFFFFF80] text-xs font-normal">
                          Add liquidity to this pool to start earning
                        </span>
                      </div>
                    </div>
                    <Image
                      className="w-[100%]"
                      priority
                      src={Line}
                      alt="line"
                    />
                    <div className="flex items-start gap-[16px] mt-5 opacity-[0.3]">
                      <div>
                        <Image
                          className="w-[40px] max-[420px]:w-[23px] "
                          priority
                          src={Stakeicons}
                          alt="Stakeicons"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <span className="pool_font text-[#fff] text-sm font-normal">
                          Stake to Earn 85% APR & Filament Tokens
                        </span>
                        <span className="pool_font text-[#FFFFFF80] text-xs font-normal">
                          Bonding period ~ 21 days
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {addvalue && (
                <>
                  <div className="pool_right_box p-[24px] pool_box_shadow ">
                    <p className="pool_font text-[#fff] text-base font-semibold tracking-[0.08px]">
                      My Deposit
                    </p>
                    <div className="flex items-center gap-[16px] my-5">
                      <div>
                        <Image
                          className="w-[40px] max-[420px]:w-[23px]"
                          priority
                          src={Suppliedicon}
                          alt="Suppliedicon"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <span className="pool_font text-[#fff] text-sm font-normal">
                          Liquidity Added
                        </span>
                        <span className="pool_font text-[#fff] max-[320px]:text-base text-[20px] font-semibold">
                          {formsData.amount} USDC
                        </span>
                      </div>
                    </div>
                    <Image
                      className="w-[100%]"
                      priority
                      src={Line}
                      alt="line"
                    />
                    <div className="flex items-start gap-[16px] mt-5">
                      <div>
                        <Image
                          className="w-[40px] max-[420px]:w-[23px] "
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
                        <div className="mt-4">
                          <button className="items-center pool_font text-[#0B2B28] w-[120px] font-semibold  btn_one py-[16px]">
                            Stake
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="bg-[#1B1C1E]   pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] mt-5">
                <div className="">
                  <div className="flex items-center gap-[20px]  border-b-[1px] border-[#272727] px-[24px]">
                    {tabs.map((tab, index) => {
                      return (
                        <button
                          onClick={() => setSelectedTab(tab.key)}
                          className={`py-5  pool_font font-semibold text-base  ${
                            tab.key == selectedTab
                              ? "  text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] "
                              : "text-[#BABABA] "
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
                  {selectedTab == "add" && (
                    <>
                      <div className="bg-[#2B2B2B] border-[1px] border-solid border-[#363A41] rounded-[8px] flex items-center gap-3 mt-4 w-full px-4 h-[45px] ">
                        <input
                          type="text"
                          name="amount"
                          value={formsData.amount}
                          onChange={handleInputChange}
                          className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder="0.0"
                        />
                        <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.75px]">
                          USD
                        </span>
                      </div>
                      <div className="flex justify-between items-center  my-4">
                        <p className="pool_font text-xs font-normal tracking-[0.06px] text-[#9CA3AF]">
                          Available to add to pool:
                          <span className="text-[#fff]">
                            {formsData.amount} USDT
                          </span>
                        </p>
                        <div className="flex items-center gap-[4px]">
                          <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B]">
                            <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                              Max
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={openPopup}
                          className="items-center w-full pool_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
                        >
                          Deposit
                        </button>
                      </div>
                    </>
                  )}
                  {selectedTab == "remove" && (
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
                        <button
                          onClick={withdrawopenPopup}
                          className="items-center w-full nav_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
                        >
                          Withdraw
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DepositPupopup
        setAddValue={setAddValue}
        formsData={formsData}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
      <Withdrawpopup isOpen={isWithdrawOpen} onClose={withdrawclosePopup} />
    </>
  );
};

export default Pool;

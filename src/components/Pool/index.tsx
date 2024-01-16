import React, { useEffect, useState } from "react";
import Image from "next/image";
import Poolicons from "../../../public/assest/poolicons.png";
import Link from "next/link";
import DepositPupopup from "./Rightcomponentside/Depositpopup";
import { MdInfoOutline } from "react-icons/md";
import Line from "../../../public/assest/Line.png";
import Suppliedicon from "../../../public/assest/supplied.png";
import Stakeicons from "../../../public/assest/stakeicons.png";
import Stakeopen1 from "../../../public/assest/stake/stakeopen1.png";
import Leftcomponentside from "./Leftcomponentside";
import Withdrawpopup from "./Rightcomponentside/Withdrawpopup";
import Stakepopup from "../Stake/Stakepopup";
import { AiOutlineClose } from "react-icons/ai";
// interface PoolProps {
//   StakeOpenPopup: () => void;
// }
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

  const [showSecondPhase, setSecondPhase] = useState(false);
  const [addvalue, setAddValue] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isStakeOpen, setIsStakeOpen] = useState(false);
  const [removevalue, setRemoveValue] = useState(false);
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

  const StakeOpenPopup = () => {
    setIsStakeOpen(true);
    setIsDetailOpen(false);
  };
  const handleDelete = () => {
    setIsDetailOpen(true);
    setIsStakeOpen(false);
  };

  const closeDelete = () => {
    setIsDetailOpen(false);
    setIsStakeOpen(false);
    setSecondPhase(true);
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
                <span className="pool_font text-[#fff] text-[20px] font-semibold">
                  USDC
                </span>
                <span className="pool_font text-[#939191] text-xs font-normal">
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
                          <button
                            onClick={StakeOpenPopup}
                            className="items-center pool_font text-[#0B2B28] w-[120px] font-semibold  btn_one py-[16px]"
                          >
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
                          Available to add to pool:{" "}
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
                          Available to remove to pool:{" "}
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
                      <div className="flex items-start gap-[12px] px-4 py-2 rounded-[8px] border-[1px] border-solid border-[#FFFFFF1A] bg-[#FFFFFF0D] mb-4">
                        <span>
                          <MdInfoOutline className="text-[#FFFFFF99] text-base" />
                        </span>
                        <span className="text-[#9CA3AF] text-xs  font-normal pool_font tracking-[0.07px]">
                          Your 60 USDT are staked & cannot be removed right now
                          from the liquidity pool. You will be able to withdraw
                          them after the staking period of 21 days is complete.
                        </span>
                      </div>

                      <div>
                        <button
                          onClick={withdrawopenPopup}
                          className="items-center w-full pool_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
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
      {isStakeOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm bg-black opacity-90"></div>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] top-[10%] max-[500px]:px-4">
            <div className="pool_wallet_popup w-full max-w-[540px] transform p-5 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[#fff] text-[20px] font-semibold pool_font tracking-[0.1px]">
                  Stake
                </p>
                <button
                  className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                  onClick={StakeOpenPopup}
                >
                  <AiOutlineClose className="text-2xl text-white" />
                </button>
              </div>
              <div className="my-5">
                <div className="flex justify-center ">
                  <div className="rounded-[50%] bg-[#27272A] w-[200px] h-[200px]  flex justify-center items-center">
                    <Image
                      className="w-[160px]"
                      priority
                      src={Stakeopen1}
                      alt="Stakeopen1"
                    />
                  </div>
                </div>
              </div>
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
                  FLP_USDC
                </span>
              </div>
              <div className="flex justify-between items-center  my-4">
                <p className="pool_font text-xs font-normal tracking-[0.06px] text-[#9CA3AF]">
                  Available to Stake:{" "}
                  <span className="text-[#fff]">
                    {formsData.amount} FLP_USDC
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
                  onClick={handleDelete}
                  className="items-center w-full pool_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
                >
                  Stake
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <DepositPupopup
        setAddValue={setAddValue}
        formsData={formsData}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
      <Withdrawpopup
        setRemoveValue={setRemoveValue}
        formsData={formsData}
        isOpen={isWithdrawOpen}
        onClose={withdrawclosePopup}
      />
      <Stakepopup
        formsData={formsData}
        //setIsStakeOpen={setIsStakeOpen}
        setSecondPhase={setSecondPhase}
        isOpen={isDetailOpen}
        onClose={closeDelete}
      />
    </>
  );
};

export default Pool;

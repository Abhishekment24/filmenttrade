import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Stakeopen from "../../../public/assest/stake/stakeopen.png";
import Stakeopen1 from "../../../public/assest/stake/stakeopen1.png";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Lock from "../../../public/assest/Lock.png";
import Coin from "../../../public/assest/Coin3.png";
import Sparkles from "../../../public/assest/sparkles.png";
import Timerbg from "../../../public/assest/timerbg.png";
import Tick from "../../../public/assest/check.png";
import Cross from "../../../public/assest/Cross.png";
import Clock from "../../../public/assest/Clock.png";
import { RiShareBoxFill } from "react-icons/ri";
import { IoMdArrowDropleft } from "react-icons/io";
import Stakepopup from "./Stakepopup";
import { AiOutlineClose } from "react-icons/ai";
import Unstakepopup from "./Unstakepopup";
const Stakepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState("");

  const [showSecondPhase, setSecondPhase] = useState(false);
  const [isUnstakeDetailOpen, setIsUnstakeDetailOpen] = useState(false);
  const [isUnStakeOpen, setIsUnStakeOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isStakeOpen, setIsStakeOpen] = useState(false);
  const [formsData, setFormsData] = useState({
    amount: "100",
  });
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get("success");

    if (activeTab) {
      // setSelectedTab(activeTab);
      setSecondPhase(true);
    }
  }, []);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (/^\d*$/.test(value) || value === "") {
      setFormsData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const UnStakeOpenPopup = () => {
    setIsUnStakeOpen(true);
    setIsUnstakeDetailOpen(false);
  };
  const UnstakeOpen = () => {
    setIsUnstakeDetailOpen(true);
    setIsUnStakeOpen(false);
  };

  const Unstakeclose = () => {
    setIsUnstakeDetailOpen(false);
    setIsUnStakeOpen(false);
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
      <section className="py-[120px] pool_bg lg:h-[60px] max-[1023px]:overflow-hidden">
        <div className="container mx-auto max-[1279px]:px-4">
          <div className="">
            <p className="pool_font text-[#fff] text-2xl font-semibold">
              Stake
            </p>
          </div>
          {!showSecondPhase && (
            <div className="w-full relative  bg-[#1B1C1E] mt-[32px]  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] ">
              <div className="p-[24px]">
                <div className="flex items-center flex-wrap justify-between gap-3">
                  <div className="">
                    <p className="pool_font text-[#fff] text-[20px] tracking-[0.1px] font-semibold">
                      FLP_USDC
                    </p>
                    <div className="flex flex-wrap items-center gap-[12px] mt-3">
                      <div className="flex items-center gap-[8px] rounded-[4px] stake_box py-[6px] px-[8px]">
                        <div>
                          <Image
                            className="w-[16px]"
                            priority
                            src={Lock}
                            alt="Lock"
                          />
                        </div>
                        <span className="pool_font text-[#FFFFFFCC] text-xs font-medium">
                          21 Days Staking Period
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px] rounded-[4px] stake_box py-[6px] px-[8px]">
                        <div>
                          <Image
                            className="w-[16px]"
                            priority
                            src={Lock}
                            alt="Lock"
                          />
                        </div>
                        <span className="pool_font text-[#FFFFFFCC] text-xs font-medium">
                          Boost Rewards
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={StakeOpenPopup}
                      className="items-center mb-2 pool_font text-[#0B2B28] w-[140px]  max-[588px]:w-full text-sm font-semibold  btn_one  py-[12px] px-[16px]"
                    >
                      Stake
                    </button>
                    <p className="pool_font text-[#9CA3AF] text-xs font-medium tracking-[0.06px]">
                      Available to stake: 1,524.44 FLP
                    </p>
                  </div>
                </div>
                <div className="pool_right_box sm:px-[40px] px-4 py-[16px] pool_box_shadow  mt-5">
                  <div className="flex  max-[550px]:flex-col items-center gap-3 sm:gap-[36px] ">
                    <div className="max-[550px]:flex  max-[550px]:justify-center">
                      <Image
                        className="w-[88px]"
                        priority
                        src={Coin}
                        alt="Coin"
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] max-[550px]:justify-center">
                      <span className="pool_font text-[#fff] text-[20px] max-[400px]:text-base max-[550px]:text-center font-semibold tracking-[0.1px]">
                        Stake to start earning reward
                      </span>
                      <span className="pool_font text-[#939191] text-xs max-[550px]:text-center font-medium tracking-[0.07px]">
                        Get higher fees 2x
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showSecondPhase && (
            <div className="w-full relative  bg-[#1B1C1E] mt-[32px]  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] ">
              <div className="p-[24px]">
                <div className="">
                  <p className="pool_font text-[#fff] text-[20px] tracking-[0.1px] font-semibold">
                    FLP_USDC
                  </p>
                  <div className="flex flex-wrap items-center gap-[12px] mt-3">
                    <div className="flex items-center gap-[8px] rounded-[4px] stake_box py-[6px] px-[8px]">
                      <div>
                        <Image
                          className="w-[16px]"
                          priority
                          src={Lock}
                          alt="Lock"
                        />
                      </div>
                      <span className="pool_font text-[#FFFFFFCC] text-xs font-medium">
                        21 Days Staking Period
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px] rounded-[4px] stake_box py-[6px] px-[8px]">
                      <div>
                        <Image
                          className="w-[16px]"
                          priority
                          src={Lock}
                          alt="Lock"
                        />
                      </div>
                      <span className="pool_font text-[#FFFFFFCC] text-xs font-medium">
                        Boost Rewards
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-[20px] mt-5 lg:flex-row flex-col w-full relative">
                  <div className="lg:w-[50%] w-full">
                    <div className="rounded-[8px] border-[1px] border-solid border-[#25272A] p-[24px] lg:h-[183px]">
                      <div className="flex items-center flex-wrap justify-between gap-3">
                        <div>
                          <p className="pool_font text-[#9CA3AF] text-xs font-semibold">
                            Staked
                          </p>
                          <p className="pool_font text-[#FFFFFF] text-base font-medium tracking-[0.08px]">
                            1,500,500.65 FLP
                          </p>
                        </div>
                        <div className="">
                          <button
                            onClick={UnStakeOpenPopup}
                            className="items-center pool_font text-[#40CABC] text-sm font-semibold   w-[140px] btn   py-[12px] px-[16px]"
                          >
                            Unstake
                          </button>
                        </div>
                      </div>
                      <div className="border-t-[1px] border-solid border-[#25272A] my-5"></div>
                      <div className="flex items-center flex-wrap justify-between gap-3">
                        <div>
                          <p className="pool_font text-[#9CA3AF] text-xs font-semibold">
                            Available to Stake
                          </p>
                          <p className="pool_font text-[#FFFFFF] text-base font-medium tracking-[0.08px]">
                            2,525 FLP
                          </p>
                        </div>
                        <div className="">
                          <button
                            onClick={StakeOpenPopup}
                            className="items-center pool_font text-[#40CABC] text-sm font-semibold  btn  w-[140px]  py-[12px] px-[16px]"
                          >
                            Stake
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[50%] w-full relative">
                    <div className="pool_right_box sm:px-[40px] px-4 py-[33px] pool_box_shadow  lg:h-[183px]">
                      <div className="absolute top-[1px] right-[1px]  ">
                        <Image
                          className="w-[214px] overflow-hidden max-[300px]:w-[191px]"
                          priority
                          src={Timerbg}
                          alt="Timerbg"
                        />
                        <div className="absolute top-[8px] right-[14px]">
                          <div className="flex items-center gap-1">
                            <div className="">
                              <Image
                                className="w-[16px]"
                                priority
                                src={Sparkles}
                                alt="Sparkles"
                              />
                            </div>
                            <span className="pool_font text-[#939191] max-[300px]:text-[10px] text-xs font-medium tracking-[0.06px]">
                              More rewards coming soon
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex  max-[550px]:flex-col items-center gap-3 sm:gap-[36px] max-[550px]:mt-5">
                        <div className="max-[550px]:flex  max-[550px]:justify-center">
                          <Image
                            className="w-[88px]"
                            priority
                            src={Coin}
                            alt="Coin"
                          />
                        </div>
                        <div className="flex flex-col gap-[4px] max-[550px]:justify-center">
                          <span className="pool_font text-[#fff] text-xs max-[550px]:text-center font-semibold tracking-[0.06px]">
                            Your Reward
                          </span>
                          <span className="pool_font text-[#fff] text-[20px] max-[400px]:text-base max-[550px]:text-center font-semibold tracking-[0.1px]">
                            ~25% APR
                          </span>
                          {/* <div className="mt-3 max-[550px]:text-center">
                            <button className="items-center w-[140px] nav_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[12px] px-[16px]">
                              Claim
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full relative  bg-[#242527]   pool_box_shadow border-t-[1px] border-solid border-[#25272A]  px-[24px] py-[16px]">
                <Link href="/portfolio?active=rewards">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-[#40E0D0] pool_font  text-sm font-medium max-[345px]:text-xs">
                      View earned rewards
                    </span>
                    <span>
                      <RiShareBoxFill className="text-[#40E0D0] pool_font  text-sm font-medium max-[345px]:text-xs" />
                    </span>
                  </div>
                </Link>
                {/*   <div className="rewards-blocks">
                  <div className="flex justify-between items-center gap-2 flex-wrap">
                    <div className="pool_font text-[#fff] text-sm max-[345px]:text-xs">
                      Reward History
                    </div>
                    <button onClick={toggleVisibility} className="">
                      {isVisible ? (
                        <>
                          <div className="flex items-center gap-1">
                            <span className="text-[#40E0D0] pool_font  text-sm font-medium max-[345px]:text-xs">
                              Hide reward history
                            </span>
                            <span>
                              <IoMdArrowDropup className="text-[#40E0D0] pool_font  text-sm font-medium max-[345px]:text-xs" />
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-1">
                            <span className="text-[#40E0D0] pool_font  text-sm font-medium max-[345px]:text-xs">
                              Show reward history
                            </span>
                            <span>
                              <IoMdArrowDropdown className="text-[#40E0D0] pool_font  text-sm font-medium max-[345px]:text-xs" />
                            </span>
                          </div>
                        </>
                      )}
                    </button>
                  </div>
                  {isVisible && (
                    <>
                      <div className="flex align-center md:flex-row flex-col mt-8">
                        <button className="bg-[#3c3d40] px-[9px] py-[8px] text-center rounded-[4px] max-[767px]:w-[36px]">
                          <IoMdArrowDropleft />
                        </button>
                        <ul className="flex justify-between md:flex-row flex-col items-center stakereward-ul">
                          <li className="border_list max-[767px]:my-3 flex flex-col justify-center text-center px-8 max-[767px]:py-3">
                            <span className="m-auto bg-[#34d5c4] w-[27px] h-[27] rounded-full p-1 ">
                              <Image
                                className=""
                                priority
                                src={Tick}
                                alt="Tick"
                              />
                            </span>
                            <h3 className="text-[16px] mt-[8px] pool_font font-semibold text-[#E8E8E8] ">
                              0.1563 Filament Token
                            </h3>
                            <p className="font-medium pool_font text-[14px] text-[#9CA3AF]">
                              15 Dec
                            </p>
                          </li>
                          <li className="border_list flex flex-col justify-center text-center px-8 max-[767px]:py-3">
                            <span className="m-auto bg-[#34d5c4] w-[27px] h-[27] rounded-full p-1">
                              <Image
                                className=""
                                priority
                                src={Tick}
                                alt="Tick"
                              />
                            </span>
                            <h3 className="text-[16px] mt-[8px] pool_font font-semibold text-[#E8E8E8]">
                              0.1563 Filament Token
                            </h3>
                            <p className="font-medium pool_font text-[14px] text-[#9CA3AF]">
                              16 Dec
                            </p>
                          </li>
                          <li className="border_list max-[767px]:my-3 flex flex-col justify-center text-center px-8 max-[767px]:py-3">
                            <span className="m-auto bg-[#34d5c4] w-[27px] h-[27] rounded-full p-1">
                              <Image
                                className=""
                                priority
                                src={Tick}
                                alt="Tick"
                              />
                            </span>
                            <h3 className="text-[16px] mt-[8px] pool_font font-semibold text-[#E8E8E8]">
                              0.1563 Filament Token
                            </h3>
                            <p className="font-medium pool_font text-[14px] text-[#9CA3AF]">
                              17 Dec
                            </p>
                          </li>
                          <li className=" border_list flex flex-col justify-center text-center px-8 max-[767px]:py-3">
                            <span className="m-auto bg-[#C35200] w-[27px] h-[27] rounded-full p-1 text-center">
                              <Image
                                className=""
                                priority
                                src={Cross}
                                alt="Cross"
                              />
                            </span>
                            <h3 className="text-[16px] mt-[8px] pool_font font-semibold text-[#E8E8E8]">
                              0.1563 Filament Token
                            </h3>
                            <p className="font-medium pool_font text-[14px] text-[#9CA3AF]">
                              18 Dec
                            </p>
                          </li>
                          <li className="border_list max-[767px]:my-3 flex flex-col justify-center text-center px-8 max-[767px]:py-3">
                            <span className="m-auto bg-[#3B82F6] w-[27px] h-[27] rounded-full p-1 text-center">
                              <Image
                                className=""
                                priority
                                src={Clock}
                                alt="Clock"
                              />
                            </span>
                            <h3 className="text-[16px] mt-[8px] pool_font font-semibold text-[#E8E8E8]">
                              0.1563 Filament Token
                            </h3>
                            <p className="font-medium pool_font text-[14px] text-[#9CA3AF]">
                              19 Dec
                            </p>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div> */}
              </div>
            </div>
          )}
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
      <Stakepopup
        formsData={formsData}
        setSecondPhase={setSecondPhase}
        isOpen={isDetailOpen}
        onClose={closeDelete}
      />
      {isUnStakeOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm bg-black opacity-90"></div>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] top-[10%] max-[500px]:px-4">
            <div className="pool_wallet_popup w-full max-w-[540px] transform p-5 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[#fff] text-[20px] font-semibold pool_font tracking-[0.1px]">
                  Unstake
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
                      src={Stakeopen}
                      alt="Stakeopen"
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
                  Available to Unstake:{" "}
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
                  onClick={UnstakeOpen}
                  className="items-center w-full pool_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
                >
                  Unstake
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <Unstakepopup
        formsData={formsData}
        // setSecondPhase={setSecondPhase}
        isOpen={isUnstakeDetailOpen}
        onClose={Unstakeclose}
      />
    </>
  );
};

export default Stakepage;

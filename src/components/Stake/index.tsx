import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lock from "../../../public/assest/Lock.png";
import Coin from "../../../public/assest/Coin.png";
import Timerbg from "../../../public/assest/timerbg.png";
const Stakepage = () => {
  return (
    <>
      <section className="py-[100px] pool_bg max-[1023px]:overflow-hidden">
        <div className="container mx-auto max-[1023px]:px-4">
          <div className="">
            <p className="nav_font text-[#fff] text-2xl font-semibold">Stake</p>
          </div>
          <div className="w-full relative  bg-[#1B1C1E] my-5  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px]">
            <div className="">
              <p className="pool_font text-[#fff] text-[20px] tracking-[0.1px] font-semibold">
                FLP_USDC
              </p>
              <div className="flex items-center gap-[12px] mt-3">
                <div className="flex items-center gap-[8px] rounded-[4px] stake_box py-[6px] px-[8px]">
                  <div>
                    <Image
                      className="w-[16px]"
                      priority
                      src={Lock}
                      alt="Lock"
                    />
                  </div>
                  <span className="nav_font text-[#FFFFFFCC] text-xs font-medium">
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
                  <span className="nav_font text-[#FFFFFFCC] text-xs font-medium">
                    Boost Rewards
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[20px] mt-5 lg:flex-row flex-col w-full relative">
              <div className="lg:w-[50%] w-full">
                <div className="rounded-[8px] border-[1px] border-solid border-[#25272A] p-[24px]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="pool_font text-[#939191] text-sm font-semibold">
                        Staked
                      </p>
                      <p className="pool_font text-[#E8E8E8] text-base font-medium tracking-[0.08px]">
                        1,500,500.65 FLP
                      </p>
                    </div>
                    <div className="">
                      <button className="items-center nav_font text-[#40CABC] text-sm font-semibold   w-[140px] btn   py-[12px] px-[16px]">
                        Unstake
                      </button>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-solid border-[#25272A] my-5"></div>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="pool_font text-[#939191] text-sm font-semibold">
                        Available to Stake
                      </p>
                      <p className="pool_font text-[#E8E8E8] text-base font-medium tracking-[0.08px]">
                        1,500,500.65 FLP
                      </p>
                    </div>
                    <div className="">
                      <button className="items-center nav_font text-[#40CABC] text-sm font-semibold  btn  w-[140px]  py-[12px] px-[16px]">
                        Stake
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] w-full relative">
                <div className="pool_right_box pl-[40px] py-[33px] pool_box_shadow ">
                  <div className="absolute top-[1px] right-[1px] ">
                    <Image
                      className="w-[206px] overflow-hidden"
                      priority
                      src={Timerbg}
                      alt="Timerbg"
                    />
                    <div className="absolute top-[2px] right-[25px]">
                      <span className="pool_font text-[#939191] text-xs font-medium tracking-[0.06px]">
                        Next reward in 23H:05M
                      </span>
                    </div>
                  </div>
                  <div className="flex  flex-wrap items-center gap-[36px]">
                    <div>
                      <Image
                        className="w-[88px]"
                        priority
                        src={Coin}
                        alt="Coin"
                      />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <span className="pool_font text-[#fff] text-xs font-semibold tracking-[0.06px]">
                        Your Reward
                      </span>
                      <span className="pool_font text-[#fff] text-[20px] font-semibold tracking-[0.1px]">
                        0.1563 Filament Token
                      </span>
                      <div className="mt-3">
                        <button className="items-center w-[140px] nav_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[12px] px-[16px]">
                          Claim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stakepage;

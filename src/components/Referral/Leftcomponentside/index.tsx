import React, { useState } from "react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";
import Suppliedicon from "../../../../public/assest/referral.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
const Leftcomponentside = () => {

  return (
    <>
      <div className="flex items-center flex-wrap max-[550px]:gap-4  bg-[#1B1C1E] mb-5 pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px] justify-between  w-full ">
        <div className="flex flex-col w-full">
          <span className="nav_font text-[#fff] text-[16px] font-semibold mb-[12px]">
            Referral Link
          </span>
          <p className="flex items-center justify-between flex-row pool_font text-[#fff] text-[14px] font-medium bg-[#0A0A0A] p-[16px] rounded-lg">
          https://app.filament.com?referral=3nge93g
          <span className="flex items-center text-[#40E0D0] text-[12px] gap-1">
          <FaCopy /> Copy
          </span>
          </p>
        </div>
      </div>
      <div className="flex items-center flex-wrap max-[550px]:gap-4  bg-[#1B1C1E] mb-5 pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px] justify-between  w-full ">
        <div className="flex flex-col w-full">
          <span className="nav_font text-[#fff] text-[16px] font-semibold mb-[12px]">
          Referral Benefits
          </span>
        <div className="flex items-start gap-[16px] mt-5">
          <div>
            <Image
              className="w-[40px] max-[420px]:w-[23px] "
              priority
              src={Suppliedicon}
              alt="Suppliedicon"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="nav_font text-[#fff] text-sm font-bold">
            Referral’s fees
            </span>
            <span className="nav_font text-[#fff] text-sm font-normal">
            You get a portion of the referred user’s fees
            </span>
          </div>
        </div>
        <div className="border-[1px] border-dashed border-[#FFFFFF1A] my-6"></div>
        <div className="flex items-start gap-[16px]">
          <div>
            <Image
              className="w-[40px] max-[420px]:w-[23px] "
              priority
              src={Suppliedicon}
              alt="Suppliedicon"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="nav_font text-[#fff] text-sm font-bold">
            Referral’s fees
            </span>
            <span className="nav_font text-[#fff] text-sm font-normal">
            You get a portion of the referred user’s fees
            </span>
          </div>
        </div>
        </div>
        <div className="flex items-center mt-5 w-full bg-[#262729] p-[16px] rounded-xl border-[1px] border-solid border-[#3c3d3e]">
        <AiOutlineInfoCircle  className="text-[18px] text-[#9CA3AF] mr-4" />
        <div className="text-[18px] text-[#9CA3AF]">When a new user enters & deposits via your link, they become your referral</div>
        </div>
      </div>
    </>
  );
};

export default Leftcomponentside;

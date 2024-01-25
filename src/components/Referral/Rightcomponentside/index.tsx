import React, { useState } from "react";
import { mdata } from "@/components/Pool/Leftcomponentside/Data/data";
import Line from "../../../../public/assest/Line.png";
import Image from "next/image";
import { AiOutlineInfoCircle } from "react-icons/ai";
const Rightcomponentside = () => {
  return (
    <>
      <div className="pool_right_box p-[24px] pool_box_shadow ">
        <div className="flex justify-between items-center gap-2">
          <p className="pool_font text-[#E8E8E8] text-base sm:text-[20px] font-semibold tracking-[0.1px]">
            Total Earning
          </p>
          <p className="pool_font text-[#fff] sm:text-[20px] text-base font-semibold  tracking-[0.1px]">
            102.54 FLP
          </p>
        </div>
        <Image className="w-[100%] my-5" priority src={Line} alt="line" />

        <div className="">
          {mdata.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-3 my-[21px]"
            >
              <p className="pool_font text-[#E8E8E8] text-sm font-medium tracking-[0.07px]">
                {item.titles}
              </p>
              <p className="pool_font text-[#fff] text-sm font-bold ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="">
          <button className="items-center pool_font text-[#1F2937] w-full text-sm font-semibold  btn_one  py-[14px] px-[16px] tracking-[0.06px] my-5">
            Claim Rewards
          </button>
          <div className="flex items-center gap-3  w-full bg-[#262729] px-[16px] py-2 rounded-[8px] border-[1px] border-solid border-[#3c3d3e]">
            <AiOutlineInfoCircle className="text-[18px] text-[#9CA3AF] " />
            <div className="text-sm text-[#9CA3AF] pool_font font-medium tracking-[0.07px]">
              Unclaimed Rewards expire after 7 days
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightcomponentside;

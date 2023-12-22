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
        <div className="flex justify-between">
          <p className="nav_font text-[#fff] text-base font-semibold">
            My Deposit
          </p>
          <p className="nav_font text-[#fff] lg:text-[20px] text-base font-semibold">
            102.54 FLP
          </p>
        </div>
        <div className="border-[1px] border-dashed border-[#FFFFFF1A] my-5"></div>
        <div className="">
            <div className="flex justify-between items-center gap-3 my-3">
              <p className="pool_font text-[#E8E8E8] text-sm font-medium">
                Fixed Earning
              </p>
              <p className="pool_font text-[#fff] text-sm font-semibold ">
                233.11
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 my-3">
              <p className="pool_font text-[#E8E8E8] text-sm font-medium">
                Variable Earning
              </p>
              <p className="pool_font text-[#fff] text-sm font-semibold ">
                233.11
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 my-3">
              <p className="pool_font text-[#E8E8E8] text-sm font-medium">
                Total Number of Referrals
              </p>
              <p className="pool_font text-[#fff] text-sm font-semibold ">
                233.11
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 my-3">
              <p className="pool_font text-[#E8E8E8] text-sm font-medium">
                Epoch Countdown
              </p>
              <p className="pool_font text-[#fff] text-sm font-semibold ">
                0D : 2H : 4BM : 32S
              </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Rightcomponentside;

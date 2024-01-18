import React, { useState } from "react";
import Image from "next/image";
import RefferralBg from "../../../public/assest/referral-bg.png";

import Rightcomponentside from "./Rightcomponentside";
import Leftcomponentside from "./Leftcomponentside";

const Referral = () => {
  return (
    <>
      <section className="py-[120px] pool_bg lg:h-[60px] max-[1023px]:overflow-hidden no-scrollbar ">
        <div className="referal-bg">
          <Image className="" priority src={RefferralBg} alt="Lock" />
        </div>
        <div className="container mx-auto max-[1279px]:px-4 ">
          <div className="flex items-center gap-[16px]">
            <div className="flex flex-col gap-[4px]">
              <span className="nav_font text-[#fff] text-2xl font-semibold">
                Refer and Earn
              </span>
              <span className="nav_font text-[#939191] text-sm font-normal">
                Refer people to Filament’s community & get rewarded
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-[1279px]:px-4">
          <div className="flex my-[40px] items-start gap-[30px] lg:flex-row flex-col w-full relative ">
            <div className="lg:w-[65%] w-full overflow-y-auto no-scrollbar">
              <Leftcomponentside />
            </div>
            <div className="lg:w-[35%] w-full lg:sticky lg:top-44 ">
              <Rightcomponentside />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Referral;

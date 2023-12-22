import React, { useState } from "react";
import Image from "next/image";
import Poolicons from "../../../public/assest/poolicons.png";

import Rightcomponentside from "./Rightcomponentside";
import Leftcomponentside from "./Leftcomponentside";

const Referral = () => {
  return (
    <>
      <section className="max-[1023px]:overflow-hidden relative">
        <div className="pt-[95px] pb-[24px] pool_bg lg:sticky lg:top-0 z-10">
          <div className="container mx-auto max-[1023px]:px-4">
            <div className="flex items-center gap-[16px]">
              <div className="flex flex-col gap-[4px]">
                <span className="nav_font text-[#fff] text-[20px] font-semibold">
                Refer and Earn
                </span>
                <span className="nav_font text-[#939191] text-xs font-normal">
                Refer people to Filament’s community & get rewarded
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-[1023px]:px-4">
          <div className="flex items-start gap-[30px] lg:flex-row flex-col w-full relative  pb-[80px]">
            <div className="lg:w-[65%] w-full lg:overflow-y-auto">
              <Leftcomponentside />
            </div>
            <div className="lg:w-[35%] w-full mb-5  lg:sticky lg:top-44">
              <Rightcomponentside />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Referral;

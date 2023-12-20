import React, { useState } from "react";
import Image from "next/image";
import Poolicons from "../../../public/assest/poolicons.png";

import Rightcomponentside from "./Rightcomponentside";
import Leftcomponentside from "./Leftcomponentside";

const Pool = () => {
  return (
    <>
      <section className="py-[100px] pool_bg max-[1023px]:overflow-hidden">
        <div className="container mx-auto max-[1023px]:px-4">
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
          <div className="flex items-start gap-[30px] lg:flex-row flex-col w-full relative">
            <div className="lg:w-[65%] w-full lg:overflow-y-auto">
              <Leftcomponentside />
            </div>
            <div className="lg:w-[35%] w-full my-5  lg:sticky lg:top-40">
              <Rightcomponentside />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pool;

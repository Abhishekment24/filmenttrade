import React, { useState } from "react";
import { mdata } from "@/components/Pool/Leftcomponentside/Data/data";

const Rightcomponentside = () => {
  return (
    <>
      <div className="pool_right_box p-[24px] pool_box_shadow ">
        <div className="flex justify-between">
          <p className="nav_font text-[#fff] text-base font-semibold">
            Total Earning
          </p>
          <p className="nav_font text-[#fff] lg:text-[20px] text-base font-semibold">
            102.54 FLP
          </p>
        </div>
        <div className="border-[1px] border-dashed border-[#FFFFFF1A] my-5"></div>
        <div className="">
                {mdata.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3 my-3"
                  >
                    <p className="pool_font text-[#E8E8E8] text-sm font-medium">
                      {item.titles}
                    </p>
                    <p className="pool_font text-[#fff] text-sm font-semibold ">
                      {item.description}
                    </p>
                  </div>
                ))}
        </div>
      </div>
    </>
  );
};

export default Rightcomponentside;

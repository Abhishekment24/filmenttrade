import React, { useState } from "react";

import Table from "./Table";

const Rewards = () => {
  return (
    <>
      <div className="flex flex-col gap-[4px]">
        <span className="pool_font text-[#fff] text-2xl font-semibold">
          Rewards
        </span>
      </div>
      <div className=" mt-[40px]  bg-[#1B1C1E]  pool_box_shadow border-[1px] border-solid border-[#25272A] rounded-[8px] p-[24px] w-full relative">
        <span className="pool_font text-[#939191] text-sm font-normal tracking-[0.06px]">
          Total Rewards
        </span>
        <p className="pool_font text-[#fff] text-2xl font-medium tracking-[0.12px] mt-[8px]">
          $241,500.28
        </p>
      </div>

      <Table />
    </>
  );
};

export default Rewards;

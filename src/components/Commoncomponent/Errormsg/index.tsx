import React from "react";
import { BsExclamationOctagon } from "react-icons/bs";
const Errormsg = () => {
  return (
    <div>
      <div className="py-6">
        <div className="flex justify-center">
          <span className="text-2xl text-[#D65454]">
            <BsExclamationOctagon />
          </span>
        </div>
        <p className="text-sm text-center text-[#D65454] font-semibold tracking-[0.07px] my-2">
          Something went wrong
        </p>
        <p className="text-xs text-center text-[#FFFFFF] font-normal tracking-[0.06px]">
          We’re having trouble loading this data, check your internet connection
          & retry
        </p>
        <p className="text-xs text-center text-[#FFFFFF] font-normal tracking-[0.06px]">
          If the problem persists,contact us
        </p>
        <div className="flex justify-center">
          <div className="cursor-pointer w-[48px] rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B] mt-6">
            <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
              Retry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errormsg;

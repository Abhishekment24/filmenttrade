import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
const Footer = () => {
  return (
    <section className="bg-[#1B1C1E] border-t-[1px] border-solid border-[#25272A] py-[4px] pl-[10px] pr-[16px] fixed bottom-0 w-full">
      <div className="max-[1023px]:container lg:max-w-full lg:w-full mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-[16px] hover:bg-[#25272A] px-2 py-[2px] rounded-[4px] active:bg-[#25272A]">
            <div className="flex items-center gap-[4px]  ">
              <span>
                <RxDotFilled className="text-[#00CC99] text-base" />
              </span>
              <span className="text-[#00CC99] pool_font text-[10px] font-medium tracking-[0.05px]">
                Operational
              </span>
            </div>
            <div className="bg-[#25272A] h-[8px] w-[1px]"></div>
            <div className="flex items-center gap-[4px] ">
              <span>
                <MdKeyboardDoubleArrowUp className="text-[#9CA3AF] text-base" />
              </span>
              <span className="text-[#9CA3AF] pool_font text-[10px] font-medium tracking-[0.05px]">
                Scheduled Update
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <p className="text-[#9CA3AF] pool_font text-[10px] font-medium tracking-[0.05px] py-[2px] px-2 hover:bg-[#25272A] rounded-[4px] active:bg-[#25272A]">
              Help
            </p>
            <p className="text-[#9CA3AF] pool_font text-[10px] font-medium tracking-[0.05px] px-2 py-[2px] hover:bg-[#25272A] rounded-[4px] active:bg-[#25272A]">
              Docs
            </p>
            <p className="text-[#9CA3AF] pool_font text-[10px] font-medium tracking-[0.05px] px-2 py-[2px] hover:bg-[#25272A] rounded-[4px] active:bg-[#25272A]">
              Share Feedback
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

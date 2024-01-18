import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Btcicon from "../../../../public/assest/btc.png";
import Image from "next/image";

interface PostionpopupProps {
  isOpen: boolean;

  onClose: () => void;
  positionStatus: "created" | "closed";
}

const Postionpopup: React.FC<PostionpopupProps> = ({
  isOpen,
  onClose,
  positionStatus,
}) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 "></div>
          <div className="fixed duration-500 inset-0 flex justify-end items-start right-[2%] top-[2%] z-[9999]   max-[500px]:px-4">
            <div className="order_bg_popup w-full max-w-[300px] transform px-4 py-3 text-left align-middle shadow-xl transition-all">
              <div className="w-full">
                <div className="flex items-start  gap-3 w-full">
                  <div>
                    <Image
                      className="w-[24px]"
                      priority
                      src={Btcicon}
                      alt="Btcicon"
                    />
                  </div>
                  <div className="  w-full">
                    <div className="flex items-center justify-between w-full gap-1">
                      <p className="text-[#fff] text-sm font-semibold pool_font tracking-[0.07px]">
                        {positionStatus === "created"
                          ? "Position Created"
                          : "Position Closed"}
                      </p>
                      <button className="" onClick={onClose}>
                        <AiOutlineClose className="text-base text-white" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between w-full gap-1 mt-4">
                      <p className="text-[#9CA3AF]  text-xs font-medium pool_font tracking-[0.06px]">
                        {positionStatus === "created" ? "Order Type" : "PnL"}
                      </p>

                      <p className="text-[#FFFFFF]  text-xs font-medium pool_font tracking-[0.06px]">
                        {positionStatus === "created"
                          ? "Market - SELL"
                          : "0.636 USDT"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-1 my-2">
                      <p className="text-[#9CA3AF]  text-xs font-medium pool_font tracking-[0.06px]">
                        Quantity
                      </p>

                      <p className="text-[#FFFFFF]  text-xs font-medium pool_font tracking-[0.06px]">
                        0.0246 BTC
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-1 ">
                      <p className="text-[#9CA3AF]  text-xs font-medium pool_font tracking-[0.06px]">
                        {positionStatus === "created" ? "Entry Price" : ""}
                      </p>

                      <p className="text-[#FFFFFF]  text-xs font-medium pool_font tracking-[0.06px]">
                        {positionStatus === "created" ? "$1,793.16 " : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Postionpopup;

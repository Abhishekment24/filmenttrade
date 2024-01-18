import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Btcicon from "../../../../public/assest/btc.png";
import Image from "next/image";

interface FaildorderProps {
  isOpen: boolean;

  onClose: () => void;
  failStatus: "placed" | "cancelled";
}

const Failedorder: React.FC<FaildorderProps> = ({
  isOpen,
  onClose,
  failStatus,
}) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 "></div>
          <div className="fixed duration-500 inset-0 flex justify-end items-start right-[2%] top-[2%] z-[9999]   max-[500px]:px-4">
            <div className="failed_order-bg_popup w-full max-w-[300px] transform px-4 py-3 text-left align-middle shadow-xl transition-all">
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
                      <p className="text-[#E68383] text-sm font-semibold pool_font tracking-[0.07px]">
                        {failStatus === "placed"
                          ? "Failed to Place Order"
                          : "Failed to Cancel Order"}
                      </p>
                      <button className="" onClick={onClose}>
                        <AiOutlineClose className="text-base text-white" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between w-full gap-1 mt-4">
                      <p className="text-[#9CA3AF]  text-xs font-medium pool_font tracking-[0.06px]">
                        Order Type
                      </p>

                      <p className="text-[#FFFFFF]  text-xs font-medium pool_font tracking-[0.06px]">
                        Limit - SELL
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-1 my-2">
                      <p className="text-[#9CA3AF]  text-xs font-medium pool_font tracking-[0.06px]">
                        Price
                      </p>

                      <p className="text-[#FFFFFF]  text-xs font-medium pool_font tracking-[0.06px]">
                        $1,793.16
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-1">
                      <p className="text-[#9CA3AF]  text-xs font-medium pool_font tracking-[0.06px]">
                        Quantity
                      </p>

                      <p className="text-[#FFFFFF]  text-xs font-medium pool_font tracking-[0.06px]">
                        0.0246 BTC
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

export default Failedorder;
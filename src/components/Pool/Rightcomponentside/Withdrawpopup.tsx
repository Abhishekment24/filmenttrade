import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import Tick from "../../../../public/assest/check.png";
import Suppliedicon from "../../../../public/assest/supplied.png";
import Stakeicons from "../../../../public/assest/stakeicons.png";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
interface WithdrawPopupProps {
  isOpen: boolean;

  onClose: () => void;
}
const Withdrawpopup: React.FC<WithdrawPopupProps> = ({
  isOpen,

  onClose,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const [image, setImage] = useState("");
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    // Simulating an asynchronous operation
    if (isOpen) {
      setLoading1(true);
      setIsProcessing(false);

      const timeout1 = setTimeout(() => {
        setLoading1(false);
        setLoading2(true);
      }, 2000);

      const timeout2 = setTimeout(() => {
        setLoading2(false);
        setIsProcessing(true);
      }, 4000);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [isOpen]);
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm bg-black opacity-90"></div>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] top-[10%] max-[500px]:px-4">
            <div className="pool_wallet_popup w-full max-w-[540px] transform p-5 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[#fff] text-2xl font-semibold nav_font">
                  Withdraw Liquidity
                </p>
                <button
                  className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                  onClick={onClose}
                >
                  <AiOutlineClose className="text-2xl text-white" />
                </button>
              </div>
              <div className="my-5">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Placeholder for image"
                  className="rounded-[4px] w-full bg-[#343434] block nav_font text-[#fff] text-sm font-medium text-center h-[120px]  border-solid outline-none focus:ring-0 placeholder:text-[#939191]"
                />
              </div>

              <div>
                {isProcessing ? (
                  <div>
                    <p className="text-[#14B8A6] text-center text-sm font-medium nav_font">
                      Withdraw Liquidity Successful
                    </p>
                  </div>
                ) : (
                  <p className="text-[#939191] text-sm text-center font-medium nav_font">
                    Withdraw Liquidity
                  </p>
                )}
              </div>
              <p className="text-[#fff] text-center text-[20px] font-medium nav_font my-3">
                428.24<span className="text-[#939191]"> USDC</span>
              </p>

              <div className="border-t-[1px] border-solid border-[#25272A] my-5"></div>
              <div className="my-5">
                {/* Loader 1 */}
                <div className="flex items-center gap-3">
                  {loading1 ? (
                    <ClipLoader color="#3B82F6" loading={loading1} size={28} />
                  ) : (
                    <>
                      <span className=" bg-[#34d5c4] w-[28px] h-[28] rounded-full p-1">
                        <Image className="" priority src={Tick} alt="Tick" />
                      </span>
                    </>
                  )}
                  <span className="text-[#fff] text-center text-base font-semibold pool_font">
                    Confirm the transaction request
                  </span>
                </div>
                <div className="my-2 ml-3">
                  <div className=" w-[1px] h-[24px] bg-[#374151]"></div>
                </div>
                {/* Loader 2 */}
                <div className="flex items-center gap-3">
                  {loading2 ? (
                    <ClipLoader color="#3B82F6" loading={loading2} size={28} />
                  ) : loading1 ? (
                    <div className="rounded-[50%] w-[28px] h-[28px] bg-[#374151]"></div>
                  ) : (
                    <span className=" bg-[#34d5c4] w-[28px] h-[28] rounded-full p-1">
                      <Image className="" priority src={Tick} alt="Tick" />
                    </span>
                  )}
                  <span className="text-[#fff] text-center text-base font-semibold pool_font">
                    Withdraw Liquidity
                  </span>
                </div>
              </div>

              <div className="mt-3">
                {isProcessing ? (
                  <button
                    onClick={onClose}
                    className="items-center w-full nav_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
                  >
                    Done
                  </button>
                ) : (
                  <button
                    className="items-center w-full nav_font text-[#FFFFFF33] text-sm font-semibold rounded-[8px]  bg-[#1A6059]  py-[16px] px-[16px]"
                    disabled
                  >
                    Processing...
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Withdrawpopup;

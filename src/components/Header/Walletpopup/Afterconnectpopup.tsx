import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Btc from "../../../../public/assest/btc.png";
import Wallecticons from "../../../../public/assest/wallecticons.png";
import Link from "next/link";
import Metamaskicon from "../../../../public/assest/metamaskicon.png";
import Metamaskimg from "../../../../public/assest/metamsakimgs.png";
import ConnectingAnimation from "../../../../public/assest/metamaskanimation.gif";
import Yellowimg from "../../../../public/assest/yellowimg.png";
import Image from "next/image";
import Line from "../../../../public/assest/Line.png";
import { FaRegCopy } from "react-icons/fa6";
import { IoMdWarning } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
interface DetailsPopupProps {
  isOpen: boolean;
  isConnecting: boolean;
  InjectedChainId: number;
  chainId: number;
  isConnected: boolean;
  onClose: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const Afterconnectpopup: React.FC<DetailsPopupProps> = ({
  isOpen,
  onClose,
  isConnecting,
  chainId,
  InjectedChainId,
  isConnected,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm  bg-black opacity-90"></div>
          <div className="fixed inset-0  flex justify-center items-center z-[9999]  top-[10%] ">
            <div className="  wallet_popup w-full max-w-md transform  p-5 text-left align-middle shadow-xl transition-all ">
              <div className="flex items-center justify-between gap-2 ">
                <p className="text-[#fff] text-[20px] font-semibold pool_font ">
                  Connect Wallet
                </p>
                <button
                  className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                  onClick={onClose}
                >
                  <AiOutlineClose className="text-2xl text-white" />
                </button>
              </div>

              <div className="py-7">
                <div className="flex justify-center">

                  {isConnecting ||
                    (isConnected && chainId == InjectedChainId) ? (
                    <Image
                      className="w-[317px]"
                      // src={Metamaskimg} // green metamask
                      src={isConnecting ? ConnectingAnimation : Metamaskimg} // green metamask
                      priority
                      alt="Metamaskimg"
                    />
                  ) : (
                    <Image
                      className="w-[317px]"
                      src={Yellowimg}
                      priority
                      alt="Yellowimg"
                    />
                  )}
                </div>
                <Link href={""} className=" ">
                  <div className="flex items-center gap-[8px] justify-center">
                    <span>
                      {isConnected && (
                        <FaRegCheckCircle className="text-[#00CC99] text-[20px]" />
                      )}
                    </span>
                    <p className="text-[20px]  text-[#fff] font-semibold pool_font">
                      {isConnected
                        ? "Connected to metamask"
                        : isConnecting ? "Connecting to MetaMask" : <span className="text-red-400"> Request denied</span>}
                    </p>
                  </div>
                </Link>
                {/* Switch to injected Network  */}
                {isConnected && chainId != InjectedChainId ? (
                  <>
                    <div className="wallet_card_bg py-[12px] px-[16px] my-6">
                      <div className="flex items-start gap-[12px]">
                        <span>
                          <IoMdWarning className="text-[#D57501] text-2xl" />
                        </span>
                        <div>
                          <p className="text-[#D57501] pool_font text-base font-bold">
                            Switch to Injective network
                          </p>
                          <p className="text-[#939191] pool_font text-base font-light">
                            You need to be on Injective network to open &
                            execute orders
                          </p>
                        </div>
                      </div>
                      <div className="my-3 justify-center flex">
                        <button
                          // disabled={!switchNetwork || x.id === chain?.id}
                          className="items-center pool_font w-[384px] text-[#0B2B28] text-sm font-semibold  btn_one  py-[10px] px-[16px]"
                          onClick={handleNetworkChange}
                        >
                          Switch to injective
                        </button>
                      </div>
                    </div>
                    <div
                      onClick={disconnectMetamask}
                      className="text-[#939191] cursor-pointer text-center pool_font text-xs font-medium"
                    >
                      Disconnect Wallet
                    </div>
                  </>
                ) : (
                  <div
                    onClick={disconnectMetamask}
                    className=" text-center cursor-pointer justify-center flex  text-[#ffffff] text-xs font-semibold "
                  ></div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Afterconnectpopup;

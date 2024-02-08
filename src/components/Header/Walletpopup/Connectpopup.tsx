import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Btc from "../../../../public/assest/btc.png";
import Wallecticons from "../../../../public/assest/wallecticons.png";
import Link from "next/link";
import Metamaskicon from "../../../../public/assest/metamaskicon.png";
import Metamaskimg from "../../../public/assest/metamsakimgs.png";
import Image from "next/image";
import Line from "../../../../public/assest/Line.png";
import { FaRegCopy } from "react-icons/fa6";
interface DetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  handleWalletConnect: () => void;
}
const Connectpopup: React.FC<DetailsPopupProps> = ({
  isOpen,
  onClose,
  handleWalletConnect,
}) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm  bg-black opacity-90"></div>
          <div className="fixed inset-0  flex justify-center items-center z-[9999]  top-[10%] ">
            <div className="  wallet_popup w-full max-w-[480px] transform  p-5 text-left align-middle shadow-xl transition-all ">
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
                <Link
                  href={""}
                  onClick={handleWalletConnect}
                  className="flex items-center gap-4 box_wallet"
                >
                  <Image
                    className="w-[24px]"
                    src={Metamaskicon}
                    priority
                    alt="Metamaskicon"
                  />
                  <span className="text-base text-[#fff] font-medium pool_font">
                    MetaMask
                  </span>
                </Link>
                <Link
                  href={""}
                  className="flex items-center gap-4 box_wallet my-3 "
                >
                  <Image
                    className="w-[24px]"
                    src={Wallecticons}
                    priority
                    alt="Wallecticons"
                  />
                  <span className="text-base text-[#fff] font-medium pool_font">
                    WalletConnect
                  </span>
                </Link>
              </div>
              <p className="text-[#9CA3AF] text-xs font-medium pool_font ">
                Can’t connect your wallet?{""}
                <span className="text-[#40E0D0] cursor-pointer ">
                  {" "}
                  Get Help
                </span>
              </p>
              <div className="my-[24px]">
                <Image className="w-[100%]" priority src={Line} alt="line" />
              </div>
              <p className="text-[#9CA3AF]  text-xs font-medium pool_font ">
                By continuing, you agree to Filament’s{" "}
                <Link href="">
                  <span className="underline underline-offset-8">
                    Terms of Service
                  </span>
                </Link>{" "}
                &{" "}
                <Link href="">
                  <span className="underline underline-offset-8">
                    Privacy Policy
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Connectpopup;

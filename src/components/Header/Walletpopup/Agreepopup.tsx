import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Agreeimg from "../../../../public/assest/stake/Agree.png";
import Logo from "../../../../public/assest/stake/Logo.svg";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { CiCircleQuestion } from "react-icons/ci";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { useDisconnect } from "wagmi";
interface DetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}
const Agreepopup: React.FC<DetailsPopupProps> = ({ isOpen, onClose }) => {
  const [enableButton, setenableButton] = useState(false)
  const { disconnect } = useDisconnect();
  useEffect(() => {


    return () => {
      setenableButton(false)
    }
  }, [])

  const handleScroll = (event: any) => {
    const hitBottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (hitBottom) {
      setenableButton(true)
    }
  };
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm bg-black opacity-90"></div>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] top-[10%] max-[500px]:px-4">
            <div className="pool_wallet_popup w-full max-w-[540px]  transform  text-left align-middle shadow-xl transition-all">
              <div className="agree_bg   h-[220px]">
                <div className=" justify-end flex p-5 relative">
                  <button
                    className="bg-[#1B1B1B]  border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                    onClick={() => {

                      onClose()
                      disconnect()
                      sessionStorage.clear()
                    }
                    }
                  >
                    <AiOutlineClose className="text-2xl text-white" />
                  </button>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Image
                      className="w-[60px]"
                      priority
                      src={Logo}
                      alt="logo"
                    />
                  </div>
                  <p className="text-[#fff] mt-4 text-2xl font-semibold pool_font tracking-[0.12px]">
                    Welcome to Filament
                  </p>
                  <div className="p-5">
                    <div className="border-b-[1px] border-[#25272A] border-solid "></div>
                  </div>
                </div>
              </div>

             
              <div className="p-5 overflow-y-auto h-[300px] no-scrollbar" onScroll={handleScroll}>

                <p className="text-[#FFFFFF]  text-sm font-medium pool_font tracking-[0.07px] mb-6">
                  By accessing Filament, you agree to Filament’s{" "}
                  <Link href="">
                    <span className="text-[#40E0D0]">Terms of Service</span>
                  </Link>{" "}
                  &{" "}
                  <Link href="">
                    <span className="text-[#40E0D0]">Privacy Policy</span>
                  </Link>
                </p>
                <p className="text-[#FFFFFF]  text-xs font-normal pool_font tracking-[0.06px]">
                  These terms of use, together with any documents and additional
                  terms they expressly incorporate by reference, which includes
                  any other terms and conditions or other agreement that dYdX
                  Trading Inc. and its affiliates (“dYdX,” “we,” “us” and “our”)
                  posts publicly or makes available to you or the company or
                  other legal entity you represent (“you” or “your”)
                  (collectively, these “Terms”), are entered into between dYdX
                  and you concerning your use of, and access to:
                </p>
                <p className="text-[#FFFFFF]  text-sm font-medium pool_font tracking-[0.07px] my-6">
                  Modification of these terms
                </p>
                <p className="text-[#FFFFFF]  text-xs font-normal pool_font tracking-[0.06px]">
                  These terms of use, together with any documents and additional
                  terms they expressly incorporate by reference, which includes
                  any other terms and conditions or other agreement that dYdX
                  Trading Inc. and its affiliates (“dYdX,” “we,” “us” and “our”)
                  posts publicly or makes available to you or the company or
                  other legal entity you represent (“you” or “your”)
                  (collectively, these “Terms”), are entered into between dYdX
                  and you concerning your use of, and access to: These terms of
                  use, together with any documents and additional terms they
                  expressly incorporate by reference, which includes any other
                  terms and conditions or other agreement that dYdX Trading Inc.
                  and its affiliates (“dYdX,” “we,” “us” and “our”) posts
                  publicly or makes available to you or the company or other
                  legal entity you represent (“you” or “your”) (collectively,
                  these “Terms”), are entered into between dYdX and you
                  concerning your use of, and access to:These terms of use,
                  together with any documents and additional terms they
                  expressly incorporate by reference, which includes any other
                  terms and conditions or other agreement that dYdX Trading Inc.
                  and its affiliates (“dYdX,” “we,” “us” and “our”) posts
                  publicly or makes available to you or the company or other
                  legal entity you represent (“you” or “your”) (collectively,
                  these “Terms”), are entered into between dYdX and you
                  concerning your use of, and access to:
                </p>
              </div>
              <div className="p-5">
                <Link href="/trade">
                  <button
                    disabled={!enableButton}
                    onClick={onClose}
                    className="items-center w-full pool_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
                    style={{
                      background: enableButton ? "#40e0d0" : "gray"
                    }}
                  >
                    Agree
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Agreepopup;

import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import Tick from "../../../public/assest/check.png";
import RedTick from "../../../../public/assest/stake/Icon.png";
import Stakeopen from "../../../public/assest/stake/stakeopen.png";
import Stakeopen1 from "../../../public/assest/stake/stakeopen1.png";
import Stakeopen2 from "../../../public/assest/stake/stake3.png";
import Suppliedicon from "../../../public/assest/supplied.png";
import Stakeicons from "../../../public/assest/stakeicons.png";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
interface StakePopupProps {
  isOpen: boolean;
  formsData: any;
  setSecondPhase: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}
const Stakepopup: React.FC<StakePopupProps> = ({
  isOpen,
  formsData,
  setSecondPhase,
  onClose,
}) => {
  const navigation = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(false); // this state handles the Error popup  (if true--> Error modal will be visible)
  const [image, setImage] = useState("");
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    // Simulating an asynchronous operation
    if (isOpen) {
      setLoading1(true);
      setIsProcessing(false);
      setError(false);
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
          <div className="fixed inset-0 flex justify-center items-center z-[9999] top-[10%]  max-[500px]:px-4">
            <div className="pool_wallet_popup w-full max-w-[540px] transform p-5 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[#fff] text-[20px] font-semibold pool_font tracking-[0.1px]">
                  Stake
                </p>
                <button
                  className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                  onClick={onClose}
                >
                  <AiOutlineClose className="text-2xl text-white" />
                </button>
              </div>
              <div className="my-5">
                <div className="flex justify-center ">
                  <div className="rounded-[50%] bg-[#27272A] w-[200px] h-[200px]  flex justify-center items-center">
                    {!error ? (
                      <>
                        {isProcessing ? (
                          <Image
                            className="w-[160px]"
                            priority
                            src={Stakeopen}
                            alt="Stakeopen"
                          />
                        ) : (
                          <Image
                            className="w-[160px]"
                            priority
                            src={Stakeopen1}
                            alt="Stakeopen1"
                          />
                        )}
                      </>
                    ) : (
                      <Image
                        className="w-[160px]"
                        priority
                        src={Stakeopen2}
                        alt="Stakeopen2"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div>
                {!error ? (
                  <>
                    {isProcessing ? (
                      <div>
                        <p className="text-[#10B981] text-center text-sm font-medium nav_font">
                          Stake Successful
                        </p>
                      </div>
                    ) : (
                      <p className="text-[#939191] text-sm text-center font-medium nav_font">
                        Staking
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-[#939191] text-sm text-center font-medium nav_font">
                      Staking
                    </p>
                  </>
                )}
              </div>
              <p className="text-[#fff] text-center text-[20px] font-medium pool_font my-3">
                {formsData.amount}
                <span className="text-[#939191]"> FLP_USDC</span>
              </p>

              <div className="border-t-[1px] border-solid border-[#25272A] my-5"></div>
              <div className="my-5">
                {/* Loader 1 */}
                <div className="flex items-center gap-3">
                  {loading1 ? (
                    <ClipLoader color="#3B82F6" loading={loading1} size={28} />
                  ) : (
                    <>
                      <span className=" bg-[#34d5c4] w-[28px] h-[28px] rounded-full p-2">
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
                  ) : !error ? (
                    <>
                      <span className="bg-[#34d5c4] w-[28px] h-[28px] rounded-full p-2">
                        <Image className="" priority src={Tick} alt="Tick" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="bg-[#D65454] w-[28px] h-[28px] items-center flex justify-center rounded-full p-2">
                        <AiOutlineClose className=" text-[#fff]" />
                      </span>
                    </>
                  )}
                  {!error ? (
                    <>
                      <span className="text-[#fff] text-center text-base font-semibold pool_font">
                        Staked
                      </span>
                    </>
                  ) : (
                    <>
                      <div className=" flex flex-col gap-1">
                        <p className="text-[#fff]  text-base font-semibold pool_font">
                          Unable to stake
                        </p>
                        <span className="text-[#9CA3AF] text-sm font-normal pool_font tracking-[0.07px]">
                          There was an error while staking. Retry below & if the
                          issue persists, contact us
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-3">
                {error ? (
                  <div>
                    <button className="items-center w-full pool_font text-[#1F2937] text-sm font-semibold btn_one py-[16px] px-[16px] mt-2">
                      Retry
                    </button>
                  </div>
                ) : isProcessing ? (
                  <button
                    onClick={() => {
                      onClose();
                      navigation.push("/stake?success=true");
                    }}
                    className="items-center w-full pool_font text-[#1F2937] text-sm font-semibold btn_one py-[16px] px-[16px]"
                  >
                    Done
                  </button>
                ) : (
                  <button
                    className="items-center w-full pool_font text-[#FFFFFF33] text-sm font-semibold rounded-[8px] bg-[#1A6059] py-[16px] px-[16px]"
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

export default Stakepopup;

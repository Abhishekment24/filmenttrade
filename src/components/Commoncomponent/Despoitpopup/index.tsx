import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import { ClipLoader } from "react-spinners";

interface DespositPopupProps {
  isOpen: boolean;
  formData: any;
  onClose: () => void;
}

const Despositpopup: React.FC<DespositPopupProps> = ({
  isOpen,
  onClose,
  formData,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [image, setImage] = useState("");
  const [step, setStep] = useState("input"); // 'input' or 'done'
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

  const handleDeposit = () => {
    setIsProcessing(true);

    // Simulate asynchronous deposit process
    setTimeout(() => {
      setIsProcessing(false);
      setStep("done");
    }, 2000);
  };

  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm bg-black opacity-90"></div>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] top-[10%]  max-[500px]:px-4">
            <div className="pool_wallet_popup w-full max-w-[540px] transform p-5 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[#fff] text-[20px] font-semibold pool_font tracking-[0.1px]">
                  Despoit
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
                      Despoit Successful
                    </p>
                  </div>
                ) : (
                  <p className="text-[#939191] text-sm text-center font-medium nav_font">
                    Despoit
                  </p>
                )}
              </div>
              <p className="text-[#fff] text-center text-[20px] font-medium nav_font my-3">
                {formData.amount} <span className="text-[#939191]">USDC</span>
              </p>

              <div className="border-t-[1px] border-solid border-[#25272A] my-5"></div>

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
                    Despoiting
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

export default Despositpopup;

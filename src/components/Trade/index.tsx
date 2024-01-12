import React, { useState } from "react";
import Subheader from "./Subheader";
import Leftsidecomponent from "./Leftsidecomponent";
import Middlesidecomponent from "./Middlesidecomponent";
import Rightsidecomponent from "./Rightsidecomponent";
import Tablesection from "./Table";
import DepositPupopup from "../Commoncomponent/Despoitpopup";
import { AiOutlineClose } from "react-icons/ai";
const Trade = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isStakeOpen, setIsStakeOpen] = useState(false);
  const [formData, setFormData] = useState({
   amount: "100",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (/^\d*$/.test(value) || value === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const closePopup = () => {
    setIsPopupOpen(false);
     setIsStakeOpen(false);
   
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };
   const handleDelete = () => {
   setIsPopupOpen(true);
     setIsStakeOpen(false);
   };
   const StakeOpenPopup = () => {
     setIsStakeOpen(true);
     setIsPopupOpen(false);
   };
  return (
    <>
      <div className="">
        <Subheader />
        <div className="lg:py-[123px] py-[100px] lg:grid grids-width relative max-[1023px]:container max-[1023px]:mx-auto max-[1023px]:px-4">
          <div className="flex flex-col w-full">
            <div className="flex w-full max-[1023px]:flex-col items-center">
              <div className="lg:w-[70%] xl:w-[78%] w-full">
                <Leftsidecomponent />
              </div>
              <div className="lg:w-[30%] xl:w-[22%] w-full">
                <Middlesidecomponent />
              </div>
            </div>
            <div>
              <Tablesection />
            </div>
          </div>
          <div className="">
            <Rightsidecomponent  formData={formData} StakeOpenPopup={StakeOpenPopup} />
          </div>
        </div>
      </div>
      {isStakeOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm bg-black opacity-90"></div>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] top-[10%] max-[500px]:px-4">
            <div className="pool_wallet_popup w-full max-w-[540px] transform p-5 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[#fff] text-[20px] font-semibold pool_font tracking-[0.1px]">
                  Deposit
                </p>
                <button
                  className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                  onClick={StakeOpenPopup}
                >
                  <AiOutlineClose className="text-2xl text-white" />
                </button>
              </div>
              <div className="my-5">
                <div className="input_field_bg flex items-center gap-3 mt-4 w-full px-4 h-[45px] ">
                  <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.07px]">
                    Amount
                  </span>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                    placeholder="0.0"
                  />
                </div>
                <div className="flex justify-between items-center  my-4 ">
                  <p className="pool_font text-xs font-normal tracking-[0.06px] text-[#9CA3AF]">
                    Available Collateral:{" "}
                    <span className="text-[#D65454]">$500.68</span>
                  </p>
                  <div className="flex items-center gap-[4px]">
                    <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B]">
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        75%
                      </p>
                    </div>
                    <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B]">
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        100%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleDelete}
                  className="items-center w-full nav_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
                >
                  Despoit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <DepositPupopup
        formData={formData}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </>
  );
};

export default Trade;

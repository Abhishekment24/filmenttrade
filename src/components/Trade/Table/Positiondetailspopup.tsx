import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Btc from "../../../../public/assest/btc.png";
import { cdata, edata, mdata } from "../Rightsidecomponent/data";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { CiCircleQuestion } from "react-icons/ci";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
interface PositiondetailsPopupProps {
  isOpen: boolean;

  onClose: () => void;
}
const Positiondetailspopup: React.FC<PositiondetailsPopupProps> = ({
  isOpen,

  onClose,
}) => {
  const [editPopupVisible, setEditPopupVisible] = useState(false);
  const [closePopupVisible, setClosePopupVisible] = useState(false);
  const [formsData, setFormsData] = useState({
    collateralinput: "0.3636",
    profitinput: "0.250",
    stopinput: "0.015",
    amount: "100",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (/^\d*$/.test(value) || value === "") {
      setFormsData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const [sliderValue, setSliderValue] = useState(10);
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value, 10));
  };
  const calculateBgColor = (sliderValue: number) => {
    // Example: Change color based on the value
    const percentage = (sliderValue / 100) * 100;
    return `linear-gradient(to right, #40E0D0 ${percentage}%, rgba(64, 224, 208, 0.1) ${percentage}%, rgba(64, 224, 208, 0.1) 100%), #1a1a1a`;
  };

  const sliderStyle = {
    background: calculateBgColor(sliderValue),
  };
  // Step 2: Create function to toggle edit popup visibility
  const toggleEditPopup = () => {
    setEditPopupVisible(!editPopupVisible);
  };
  const toggleclosePopup = () => {
    setClosePopupVisible(!closePopupVisible);
  };
  const handleSave = () => {
    toggleEditPopup();
  };
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm  bg-black opacity-90"></div>
          <div className="fixed inset-0  flex  items-center justify-center  text-center z-[9999]  top-[4%] ">
            <div className="  manage_popup w-full max-w-[360px] transform  max-[1279px]:h-[610px] overflow-y-auto p-5 text-left align-middle shadow-xl transition-all ">
              {!closePopupVisible ? (
                <>
                  <div className="flex items-center justify-between gap-2 ">
                    <div>
                      <p className="text-[#fff] text-[20px] font-semibold tracking-[0.1px] pool_font ">
                        Manage Position
                      </p>
                      <div className="flex items-center gap-[8px] mt-3">
                        <div>
                          <Image
                            className="w-[16px]"
                            priority
                            src={Btc}
                            alt="Btc"
                          />
                        </div>
                        <p className="text-[#9CA3AF] pool_font text-xs font-medium tracking-[0.06px]">
                          BTC/USDC - BUY
                        </p>
                      </div>
                    </div>
                    <button
                      className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                      onClick={onClose}
                    >
                      <AiOutlineClose className="text-2xl text-white" />
                    </button>
                  </div>

                  {!editPopupVisible ? (
                    <>
                      <div className="bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px]">
                        <span className="pool_font w-[100%] text-[#fff] text-xs font-medium ">
                          Collateral
                        </span>
                        <input
                          type="text"
                          name="collateralinput"
                          value={formsData.collateralinput}
                          onChange={handleInputChange}
                          className=" block w-[100%] pool_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder="42.2042 USDC"
                        />
                        <div className="w-[1px] h-[16px] bg-[#25272A]"> </div>

                        <span>
                          <MdEdit className="text-[#fff] text-[16px]" />
                        </span>
                      </div>
                      <div className="bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px]">
                        <span className="pool_font w-[100%] text-[#fff] text-xs font-medium ">
                          Leverage
                        </span>
                        <input
                          type="text"
                          value={`${sliderValue}x`}
                          onChange={handleSliderChange}
                          className=" block w-[100%] pool_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder="10x"
                        />
                        <div className="w-[1px] h-[16px] bg-[#25272A]"> </div>

                        <span
                          className="cursor-pointer"
                          onClick={toggleEditPopup}
                        >
                          <MdEdit className="text-[#fff] text-[16px]" />
                        </span>
                      </div>

                      <div className="bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px]">
                        <span className="pool_font w-[100%] text-[#fff] text-xs font-medium ">
                          Take Profit
                        </span>
                        <input
                          type="text"
                          name="profitinput"
                          value={formsData.profitinput}
                          onChange={handleInputChange}
                          className=" block w-[100%] pool_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder="-"
                        />
                        <div className="w-[1px] h-[16px] bg-[#25272A]"> </div>

                        <span>
                          <MdEdit className="text-[#fff] text-[16px]" />
                        </span>
                      </div>
                      <div className="bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px]">
                        <span className="pool_font w-[100%] text-[#fff] text-xs font-medium ">
                          Stop Loss
                        </span>
                        <input
                          type="text"
                          name="stopinput"
                          value={formsData.stopinput}
                          onChange={handleInputChange}
                          className=" block w-[100%] pool_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder="42.2042 USDC"
                        />
                        <div className="w-[1px] h-[16px] bg-[#25272A]"> </div>

                        <span>
                          <MdEdit className="text-[#fff] text-[16px]" />
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="bg-[#1F2023] my-4  p-3 rounded-[8px]  border-[#363A41] border-solid border-[1px]">
                      <span className="text-[#FFFFFF] pool_font text-xs font-medium tracking-[0.06px]">
                        Update Leverage
                      </span>
                      <div className="bg-[#25272A] mt-[16px] flex items-center gap-3 w-full px-4 rounded-[8px] h-[46px] border-[#2E3034] border-solid border-[1px]">
                        <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.06px]">
                          Leverage
                        </span>
                        <input
                          type="text"
                          value={sliderValue}
                          className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder="50"
                        />
                        <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                          x
                        </span>
                      </div>
                      <div className="mt-3">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="5"
                          value={sliderValue}
                          onChange={handleSliderChange}
                          className="range-slider"
                          style={sliderStyle}
                        />
                        <div className="flex mt-2 justify-between items-center gap-[18px]">
                          <span className="pool_font text-[#767676] text-[10px] uppercase font-semibold tracking-[0.4px]">
                            0x
                          </span>
                          <span className="pool_font text-[#767676] text-[10px] uppercase font-semibold tracking-[0.4px]">
                            10x
                          </span>
                          <span className="pool_font text-[#767676] text-[10px] uppercase font-semibold tracking-[0.4px]">
                            25x
                          </span>
                          <span className="pool_font text-[#767676] text-[10px] uppercase font-semibold tracking-[0.4px]">
                            50x
                          </span>
                          <span className="pool_font text-[#767676] text-[10px] uppercase font-semibold tracking-[0.4px]">
                            100x
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-[4px] mt-[16px]">
                        <button
                          className="items-center pool_font text-[#FFFFFF] w-[100%] text-xs font-semibold   bg-[#2B2B2B] rounded-[4px] max-border py-[12px] px-[8px] tracking-[0.06px]"
                          onClick={toggleEditPopup}
                        >
                          Cancel
                        </button>
                        <button
                          className="items-center pool_font text-[#FFFFFF] w-[100%] text-xs font-semibold save_btn  py-[12px] px-[8px]  tracking-[0.06px]"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="my-5">
                    <div className="">
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                          Position Size
                        </p>

                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          0.024 BTC
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                          Type
                        </p>

                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          Market
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <div className="flex items-center gap-1">
                          <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                            Leverage
                          </p>
                          <span data-tooltip-id="my-tooltip">
                            <CiCircleQuestion className="text-[#9CA3AF] text-[12px]" />
                            <Tooltip id="my-tooltip" className="tooltip_bg">
                              <div className="w-[300px]">
                                <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                                  Leverage
                                </h3>
                                <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                                  Leverage changes the multiplier on your gains
                                  or losses increasing your leverage increases
                                  how much you would gain/loose on a trade with
                                  the same price movement
                                </p>
                              </div>
                            </Tooltip>
                          </span>
                        </div>
                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          {`${sliderValue}x`}
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                          Collateral
                        </p>

                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          {formsData.collateralinput}USDT
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                          Quantity
                        </p>

                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          0.3636 USDT
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                          Entry Price
                        </p>

                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          0.3636 USDT
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <div className="flex items-center gap-1">
                          <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                            Take Profit
                          </p>
                          <span data-tooltip-id="my-tooltip1">
                            <CiCircleQuestion className="text-[#9CA3AF] text-[12px]" />
                            <Tooltip id="my-tooltip1" className="tooltip_bg">
                              <div className="w-[300px]">
                                <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                                  Take Profit & Stop Loss
                                </h3>
                                <ul className="list-disc">
                                  <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                                    TP/SL are reduce only, which means that they
                                    can only close an existing postion, which
                                    means that they can only close an existing
                                    position
                                  </li>
                                  <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px] my-2">
                                    TP/SL are fill-or-kill stop market orders
                                    where excution is not guaranteed. if the
                                    orders cannot be filled within the slippage
                                    limits, then the order will not execute.
                                  </li>
                                  <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                                    1CT must be enabled to use TP/SL
                                  </li>
                                </ul>
                              </div>
                            </Tooltip>
                          </span>
                        </div>
                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          {formsData.profitinput} BTC
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                          Stop Loss
                        </p>

                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          {formsData.stopinput} BTC
                        </p>
                      </div>
                    </div>
                    <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
                    <div className="">
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                          Avg. Price
                        </p>

                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          100 USDC
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-3 my-[8px]">
                        <div className="flex items-center gap-1">
                          <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                            Liquidation Price
                          </p>
                          <span data-tooltip-id="my-tooltip3">
                            <CiCircleQuestion className="text-[#9CA3AF] text-[12px]" />
                            <Tooltip id="my-tooltip3" className="tooltip_bg">
                              <div className="w-[300px]">
                                <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                                  Est. Liq Price
                                </h3>
                                <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                                  The estimated price at which a position would
                                  make a user eligible for liquidation
                                </p>
                                <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                                  <span className="font-bold">
                                    {" "}
                                    Please note -
                                  </span>{" "}
                                  this is this works for a move in a single
                                  underlying position for users with multiple
                                  positions risk should be valuated on a
                                  portfolio basis using alternative metrics
                                </p>
                              </div>
                            </Tooltip>
                          </span>
                        </div>

                        <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                          100 USDC
                        </p>
                      </div>
                    </div>
                    <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
                    <div className="">
                      {mdata.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center gap-3 my-[8px]"
                        >
                          <div className="flex items-center gap-1">
                            <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                              {item.titles}
                            </p>
                            <span>
                              <CiCircleQuestion className="text-[#9CA3AF] text-[12px]" />
                            </span>
                          </div>

                          <p className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {!editPopupVisible ? (
                    <>
                      <button
                        onClick={toggleclosePopup}
                        className="items-center pool_font text-[#fff] w-[100%] text-[15px] font-semibold max-border bg-[#2B2B2B] rounded-[8px] py-[12px] px-[8px]"
                      >
                        Close Position
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-2 ">
                    <div>
                      <p className="text-[#fff] text-[20px] font-semibold tracking-[0.1px] pool_font ">
                        Close Position
                      </p>
                      <div className="flex items-center gap-[8px] mt-3">
                        <div>
                          <Image
                            className="w-[16px]"
                            priority
                            src={Btc}
                            alt="Btc"
                          />
                        </div>
                        <p className="text-[#9CA3AF] pool_font text-xs font-medium tracking-[0.06px]">
                          BTC/USDC - BUY
                        </p>
                      </div>
                    </div>
                    <button
                      className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                      onClick={onClose}
                    >
                      <AiOutlineClose className="text-2xl text-white" />
                    </button>
                  </div>
                  <div className="bg-[#2B2B2B] border-[1px] border-solid border-[#363A41] rounded-[8px] flex items-center gap-3 mt-4 w-full px-4 h-[45px] ">
                    <span className="pool_font text-[#9CA3AF] text-xs font-medium tracking-[0.06px]">
                      Amount
                    </span>
                    <input
                      type="text"
                      name="amount"
                      value={formsData.amount}
                      onChange={handleInputChange}
                      className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                      placeholder="0.0"
                    />
                    <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.75px]">
                      USD
                    </span>
                  </div>
                  <div className="flex items-center gap-[8px] justify-between w-full my-4">
                    <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B] w-[25%]">
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        25%
                      </p>
                    </div>
                    <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B] w-[25%]">
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        50%
                      </p>
                    </div>
                    <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B] w-[25%]">
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        75%
                      </p>
                    </div>
                    <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B] w-[25%]">
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        100%
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="items-center pool_font text-[#fff] w-[100%] text-[15px] font-semibold bg-[#C33F3F] btn_border rounded-[8px] py-[12px] px-[8px]"
                  >
                    Close Position
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Positiondetailspopup;

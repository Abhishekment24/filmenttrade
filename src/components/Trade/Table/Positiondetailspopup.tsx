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
  let initialPosition = 100; // will be fetched from  API
  const [editPopupVisible, setEditPopupVisible] = useState(false);
  const [closePopupVisible, setClosePopupVisible] = useState(false);
  const [percentSelection, setpercentSelection] = useState<number | string>("")
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [positionSize, setpositionSize] = useState(0.024);
  //const [result, setResult] = useState<number | null>(null);
  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState({
    collateralinput: false,
    profitinput: false,
    stopinput: false,
    amount: false,
  });
  const [formsData, setFormsData] = useState({
    collateralinput: "2",
    profitinput: "2",
    stopinput: "3",
    amount: "100",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (isDisabled) {
      return; // Skip input change if the component is disabled
    }
    if (/^[0-9.]+$/.test(value) || value === "") {
      setFormsData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const calculatePercentage = (percentage: number) => {
    // const { amount } = formsData;
    const parsedAmount = parseFloat(`${initialPosition}`);
    if (!isNaN(parsedAmount)) {
      const calculatedValue = (parsedAmount * percentage) / 100;
      setFormsData((prevFormData) => ({
        ...prevFormData,
        amount: calculatedValue.toFixed(2),
      }));
    }
  };
  const handleInputFocus = (field: string) => {
    // Hide placeholder when input is focused
    setIsPlaceholderHidden((prevPlaceholders) => ({
      ...prevPlaceholders,
      [field]: true,
    }));
  };

  const handleInputBlur = (field: string) => {
    // Show placeholder when input loses focus and is empty
    if (formsData[field as keyof typeof formsData] === "") {
      setIsPlaceholderHidden((prevPlaceholders) => ({
        ...prevPlaceholders,
        [field]: false,
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
            {!closePopupVisible ? (
              <>
                <div className="  manage_popup w-full max-w-[360px] transform  max-[1440px]:h-[610px] overflow-y-auto no-scrollbar p-5 text-left align-middle shadow-xl transition-all ">
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
                      <div
                        className={`bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px] ${
                          error ||
                          0.95 * positionSize < +formsData.collateralinput ||
                          +formsData.collateralinput <
                            positionSize / sliderValue
                            ? "focus-within:border-[#D65454] border-[#D65454]"
                            : isDisabled
                            ? "border-[#40E0D0]"
                            : "focus-within:border-[#40E0D0] border-gray-gray4"
                        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <span className="pool_font w-[100%] text-[#fff] text-xs font-medium ">
                          Collateral
                        </span>
                        <input
                          type="text"
                          name="collateralinput"
                          value={formsData.collateralinput}
                          onChange={(e) => {
                            handleInputChange(e);
                          }}
                          onFocus={() => handleInputFocus("collateralinput")}
                          onBlur={() => handleInputBlur("collateralinput")}
                          className=" block w-[100%] pool_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder={
                            isPlaceholderHidden.collateralinput ? "" : "42 USDC"
                          }
                          disabled={isDisabled}
                        />
                        <div className="w-[1px] h-[16px] bg-[#25272A]"> </div>

                        <span>
                          <MdEdit className="text-[#fff] text-[16px]" />
                        </span>
                      </div>
                      <div
                        className={`bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px] ${
                          error
                            ? "focus-within:border-[#D65454] border-[#D65454]"
                            : isDisabled
                            ? "border-[#40E0D0]"
                            : "focus-within:border-[#40E0D0] border-gray-gray4"
                        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <span className="pool_font w-[100%] text-[#fff] text-xs font-medium ">
                          Leverage
                        </span>
                        <input
                          type="text"
                          value={`${sliderValue}x`}
                          className=" block w-[100%] pool_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          disabled={isDisabled}
                        />
                        <div className="w-[1px] h-[16px] bg-[#25272A]"> </div>

                        <span
                          className="cursor-pointer"
                          onClick={toggleEditPopup}
                        >
                          <MdEdit className="text-[#fff] text-[16px]" />
                        </span>
                      </div>

                      <div
                        className={`bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px] ${
                          error
                            ? "focus-within:border-[#D65454] border-[#D65454]"
                            : isDisabled
                            ? "border-[#40E0D0]"
                            : "focus-within:border-[#40E0D0] border-gray-gray4"
                        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <span className="pool_font w-[100%] text-[#fff] text-xs font-medium ">
                          Take Profit
                        </span>
                        <input
                          type="text"
                          name="profitinput"
                          value={formsData.profitinput}
                          onChange={handleInputChange}
                          onFocus={() => handleInputFocus("profitinput")}
                          onBlur={() => handleInputBlur("profitinput")}
                          className=" block w-[100%] pool_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder={
                            isPlaceholderHidden.profitinput ? "" : "10"
                          }
                          disabled={isDisabled}
                        />
                        <div className="w-[1px] h-[16px] bg-[#25272A]"> </div>

                        <span>
                          <MdEdit className="text-[#fff] text-[16px]" />
                        </span>
                      </div>
                      <div
                        className={`bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px] ${
                          error
                            ? "focus-within:border-[#D65454] border-[#D65454]"
                            : isDisabled
                            ? "border-[#40E0D0]"
                            : "focus-within:border-[#40E0D0] border-gray-gray4"
                        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <span className="pool_font w-[100%] text-[#fff] text-xs font-medium ">
                          Stop Loss
                        </span>
                        <input
                          type="text"
                          name="stopinput"
                          value={formsData.stopinput}
                          onChange={handleInputChange}
                          onFocus={() => handleInputFocus("stopinput")}
                          onBlur={() => handleInputBlur("stopinput")}
                          className=" block w-[100%] pool_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder={
                            isPlaceholderHidden.stopinput ? "" : "42.2042"
                          }
                          disabled={isDisabled}
                        />
                        <div className="w-[1px] h-[16px] bg-[#25272A]"> </div>

                        <span>
                          <MdEdit className="text-[#fff] text-[16px]" />
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="bg-[#1F2023] my-4  py-4 px-3 rounded-[4px]  border-[#25272A] border-solid border-[1px]">
                      <span className="text-[#FFFFFF] pool_font text-xs font-medium tracking-[0.06px]">
                        Update Leverage
                      </span>
                      <div
                        className={`bg-[#1F2023] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#25272A] border-solid border-[1px] ${
                          error
                            ? "focus-within:border-[#D65454] border-[#D65454]"
                            : isDisabled
                            ? "border-[#40E0D0]"
                            : "focus-within:border-[#40E0D0] border-gray-gray4"
                        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.06px]">
                          Leverage
                        </span>
                        <input
                          type="text"
                          value={sliderValue}
                          className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          disabled={isDisabled}
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
                          {positionSize} BTC
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
                      <button className="mb-2 items-center pool_font text-[#1F2937] w-full text-[15px] font-semibold  btn_one  py-[12px] px-[8px] tracking-[0.06px]">
                        Update Position
                      </button>
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
                </div>
              </>
            ) : (
              <>
                <div className="  manage_popup w-full max-w-[360px] transform  overflow-y-auto no-scrollbar p-5 text-left align-middle shadow-xl transition-all ">
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
                  <div
                    className={`bg-[#2B2B2B] border-[1px] border-solid border-[#363A41] rounded-[8px] flex items-center gap-3 mt-4 w-full px-4 h-[45px] ${
                      error
                        ? "focus-within:border-[#D65454] border-[#D65454]"
                        : isDisabled
                        ? "border-[#40E0D0]"
                        : "focus-within:border-[#40E0D0] border-gray-gray4"
                    } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span className="pool_font text-[#9CA3AF] text-xs font-medium tracking-[0.06px]">
                      Amount
                    </span>
                    <input
                      type="text"
                      name="amount"
                      value={formsData.amount}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus("amount")}
                      onBlur={() => handleInputBlur("amount")}
                      className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                      placeholder={isPlaceholderHidden.amount ? "" : "0.0"}
                      disabled={isDisabled}
                    />
                    <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.75px]">
                      USD
                    </span>
                  </div>
                  <div className="flex items-center gap-[8px] justify-between w-full my-4">
                    {[25, 50, 75, 100].map((item, key) => {
                      return <div key={key}
                        onClick={() => {
                          calculatePercentage(item)
                          setpercentSelection(item)
                        }}
                        className={`cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border ${percentSelection == item ? "bg-[#40e0d0]" : "bg-[#2B2B2B]"}   w-[25%]`}

                      >
                        <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                          {item}%
                        </p>
                      </div>
                    })}

                    {/* <div
                      onClick={() => calculatePercentage(50)}
                      className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B] w-[25%]"
                    >
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        50%
                      </p>
                    </div>
                    <div
                      onClick={() => calculatePercentage(75)}
                      className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B] w-[25%]"
                    >
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        75%
                      </p>
                    </div>
                    <div
                      onClick={() => calculatePercentage(100)}
                      className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B] w-[25%]"
                    >
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        100%
                      </p>
                    </div> */}
                  </div>
                  <button
                    onClick={onClose}
                    className="items-center pool_font text-[#fff] w-[100%] text-[15px] font-semibold bg-[#C33F3F] btn_border rounded-[8px] py-[12px] px-[8px]"
                  >
                    Close Position
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Positiondetailspopup;

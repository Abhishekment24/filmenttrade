import React, { useEffect, useRef, useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { cdata, edata, mdata } from "./data";

import { Switch } from "@headlessui/react";
//import { IoIosArrowDown } from "react-icons/io";
import { Tooltip } from "react-tooltip";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Dropdown from "./Dropdown";

interface MarketProps {
  isConnected: boolean;
  // formData: any;
  isPageLoading: boolean,

  StakeOpenPopup: () => void;
}
const Market: React.FC<MarketProps> = ({
  isConnected,
  StakeOpenPopup,

  // formData,
}) => {
  //const [isPopupOpen, setIsPopupOpen] = useState(false);
  const minimumCollateral = 5
  const [isChecked1, setIsChecked1] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [positionSize, setpositionSize] = useState(0.024)
  const [maximumCollateral, setmaximumCollateral] = useState(500)

  const [isVisible, setIsVisible] = useState(true);
  const [limitCurrency, setLimitCurrency] = useState("$")
  const [profitCurrency, setprofitCurrency] = useState("$")
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState({
    collateralinput: false,
    profitinput: false,
    stopinput: false,
    limitinput: false,
    sizeinput: false,
    Slippageinput: false,
  });
  const [formsData, setFormsData] = useState({
    collateralinput: "",
    profitinput: "",
    stopinput: "",
    limitinput: "",
    sizeinput: "",
    Slippageinput: "",
  });



  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    if (isDisabled) {
      return; // Skip input change if the component is disabled
    }
    const regex = /^[0-9.]+$/
    // Check if the input value is valid (numeric)
    if (regex.test(value) || value === "") {
      setFormsData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
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

  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleSave = () => {
    toggleMenu();
  };
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);
  const [sliderValue, setSliderValue] = useState(20);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target
    if (value == "") setSliderValue(parseInt("0", 10));
    else if (+value > 100) setSliderValue(parseInt("100", 10));
    else setSliderValue(parseInt(value, 10));
  };

  const calculateBgColor = (sliderValue: number) => {
    // Example: Change color based on the value
    console.log(sliderValue, "<<<<< sliderValue")
    const percentage = sliderValue
    return `linear-gradient(to right, #40E0D0 ${percentage}%, rgba(64, 224, 208, 0.1) ${percentage}%, rgba(64, 224, 208, 0.1) 100%), #1a1a1a`;
  };

  const sliderStyle = {
    background: calculateBgColor(sliderValue),
  };




  return (
    <>
      <div className="px-4 pb-[100px]">


        <div
          className={`input_field_bg flex items-center gap-3 mt-4  w-full px-4 h-[45px] ${+minimumCollateral > +formsData.collateralinput || error || +formsData.collateralinput > +maximumCollateral
            ? "focus-within:border-[#D65454] border-[#D65454]"
            : isDisabled
              ? "border-[#40E0D0]"
              : "focus-within:border-[#40E0D0] border-gray-gray4"
            } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.07px]">
            Collateral
          </span>
          <input
            type="text"
            name="collateralinput"
            value={formsData.collateralinput}

            onChange={e => {

              handleInputChange(e)
              // if (regex.test(value)) handleInputChange(e)
            }}
            placeholder={isPlaceholderHidden.collateralinput ? "" : "25.46"}
            onFocus={() => handleInputFocus("collateralinput")}
            onBlur={() => handleInputBlur("collateralinput")}
            className={` block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white`}
            // placeholder={isPlaceholderHidden ? "" : "25.46"}
            disabled={isDisabled}
          />
          <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
            USDC
          </span>
        </div>
        {/* <div className="input_field_bg flex items-center justify-between gap-3 mt-4 w-full px-4 h-[45px] ">
          <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.07px]">
            Collateral
          </span>
          <div className="flex items-center gap-1">
            <span className="text-right">{formData.amount}</span>
            <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
              USDC
            </span>
          </div>
        </div>*/}

        {isConnected ? (
          <>
            <div className="flex justify-between items-center  my-4">
              <p className="pool_font text-xs font-normal tracking-[0.06px] text-[#9CA3AF]">
                Available Collateral:{" "}
                <span className="text-[#fff]">${maximumCollateral}</span>
              </p>
              <div className="flex items-center gap-[4px]">
                <div
                  //  onClick={StakeOpenPopup}
                  className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B]"
                >
                  <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]"
                    onClick={() => {
                      setFormsData({ ...formsData, collateralinput: `${maximumCollateral}` })
                    }}
                  >
                    Max
                  </p>
                </div>
              </div>
            </div>
            {/*   <div className="flex justify-between items-center  my-4 border-[1px] border-solid border-[#D65454] rounded-[4px] p-1">
              <p className="pool_font text-xs font-normal tracking-[0.06px] text-[#9CA3AF]">
                Available Collateral:{" "}
                <span className="text-[#D65454]">${formData.amount}</span>
              </p>
              <div className="flex items-center gap-[4px]">
                <div
                  onClick={StakeOpenPopup}
                  className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B]"
                >
                  <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                    75%
                  </p>
                </div>
                <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B]">
                  <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                    Deposit
                  </p>
                </div>
              </div>
            </div>*/}
          </>
        ) : (
          <>
            <div className="flex justify-between items-center gap-3 my-4">
              <p className="pool_font text-xs font-normal tracking-[0.06px] text-[#9CA3AF]">
                Available Collateral :
                <span className="text-[#fff]">$500.68</span>
              </p>
              <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[8px] max-border  bg-[#2B2B2B]">
                <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                  Max
                </p>
              </div>
            </div>
          </>
        )}

        <div
          className={`input_field_bg flex items-center gap-3  w-full px-4 h-[45px] ${error
            ? "focus-within:border-[#D65454] border-[#D65454]"
            : isDisabled
              ? "border-[#40E0D0]"
              : "focus-within:border-[#40E0D0] border-gray-gray4"
            } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.07px]">
            Leverage
          </span>

          <input
            type="text"
            value={sliderValue}
            onChange={handleSliderChange}
            className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
            disabled={isDisabled}
          />
          <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
            x
          </span>
        </div>
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
            className="range-slider"
            style={sliderStyle}
          />
          <div className="flex mt-2 justify-between items-center gap-[18px]">
            <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
              0x
            </span>
            <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
              20x
            </span>
            <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
              40x
            </span>
            <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
              60x
            </span>
            <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
              80x
            </span>
            <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
              100x
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-3 my-4">
          <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
            Position Size
          </p>

          <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
            0.024 BTC
          </p>
        </div>
        <div className="header_bg"></div>
        <div className="my-4">
          <div className="flex items-start space-x-2">
            <div className="mt-1">
              <input
                type="checkbox"
                className="cursor-pointer text-[#fff] accent-[#40E0D0]   h-[16px] w-[16px] appearance-none border-2 border-solid rounded-[4px] bg-[#1A1A1A] border-[#374151]
             focus:ring-0 focus:ring-offset-0
             "
                checked={isChecked1}
                onChange={() => setIsChecked1(!isChecked1)}
              />
            </div>
            <div>
              <span className="pool_font text-[#E5E7EB] text-[12px] font-semibold tracking-[0.06px]">
                Take Profit
              </span>
              {isChecked1 && (
                <>
                  <div
                    className={`input_field_bg flex items-center gap-3 my-4 w-full px-4 h-[45px] ${error
                      ? "focus-within:border-[#D65454] border-[#D65454]"
                      : isDisabled
                        ? "border-[#40E0D0]"
                        : "focus-within:border-[#40E0D0] border-gray-gray4"
                      } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                      Take Profit
                    </span>
                    <input
                      type="text"
                      name="profitinput"
                      value={formsData.profitinput}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus("profitinput")}
                      onBlur={() => handleInputBlur("profitinput")}
                      className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                      placeholder={isPlaceholderHidden.profitinput ? "" : "10"}
                      disabled={isDisabled}
                    />
                    <div className="w-[1px] h-[45px] bg-[#FFFFFF0D]"> </div>

                    <span>
                      <Dropdown setCurrency={setprofitCurrency} />
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-start space-x-2">
            <div className="mt-1">
              <input
                type="checkbox"
                className="cursor-pointer text-[#fff] accent-[#40E0D0]   h-[16px] w-[16px] appearance-none border-2 border-solid rounded-[4px] bg-[#1A1A1A] border-[#374151]
             focus:ring-0 focus:ring-offset-0
             "
                checked={isChecked2}
                onChange={() => setIsChecked2(!isChecked2)}
              />
            </div>

            <div>
              <span className="pool_font text-[#fff] text-[12px] font-medium tracking-[0.06px]">
                Stop Loss
              </span>
              <div>
                {isChecked2 && (
                  <>
                    <div className="flex items-center justify-between gap-3">
                      <span className="pool_font text-[#fff] text-[12px] font-medium tracking-[0.06px]">
                        Trailing Stop Loss
                      </span>
                      <div className="">
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${enabled ? "toggle_btn" : "bg-[#25272a]"}
          relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={`${enabled
                              ? "translate-x-6 bg-teal-900"
                              : "translate-x-0 bg-white"
                              }
            pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                    </div>
                    <div
                      className={`input_field_bg flex items-center gap-3 my-4 w-full px-4 h-[45px] ${error
                        ? "focus-within:border-[#D65454] border-[#D65454]"
                        : isDisabled
                          ? "border-[#40E0D0]"
                          : "focus-within:border-[#40E0D0] border-gray-gray4"
                        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                        Stop Loss
                      </span>
                      <input
                        type="text"
                        name="stopinput"
                        value={formsData.stopinput}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus("stopinput")}
                        onBlur={() => handleInputBlur("stopinput")}
                        className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                        placeholder={isPlaceholderHidden.stopinput ? "" : "0"}
                        disabled={isDisabled}
                      />

                      <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                        %
                      </span>
                    </div>
                    {enabled && (
                      <>
                        <div
                          className={`input_field_bg flex items-center gap-3 my-4 w-full px-4 h-[45px] ${error
                            ? "focus-within:border-[#D65454] border-[#D65454]"
                            : isDisabled
                              ? "border-[#40E0D0]"
                              : "focus-within:border-[#40E0D0] border-gray-gray4"
                            } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                          <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                            Limit
                          </span>
                          <input
                            type="text"
                            name="limitinput"
                            value={formsData.limitinput}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus("limitinput")}
                            onBlur={() => handleInputBlur("limitinput")}
                            className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                            placeholder={
                              isPlaceholderHidden.limitinput ? "" : "0"
                            }
                            disabled={isDisabled}
                          />
                          {/* <div className="w-[1px] h-[45px] bg-[#FFFFFF0D]">
                            {" "}
                          </div>
                          <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                            %
                          </span> */}
                          <span>
                            <Dropdown setCurrency={setLimitCurrency} />
                          </span>
                        </div>
                        <div
                          className={`input_field_bg flex items-center gap-3 my-4 w-full px-4 h-[45px] ${error
                            ? "focus-within:border-[#D65454] border-[#D65454]"
                            : isDisabled
                              ? "border-[#40E0D0]"
                              : "focus-within:border-[#40E0D0] border-gray-gray4"
                            } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                          <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                            Size
                          </span>
                          <input
                            type="text"
                            name="sizeinput"
                            value={formsData.sizeinput}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus("sizeinput")}
                            onBlur={() => handleInputBlur("sizeinput")}
                            className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                            placeholder={
                              isPlaceholderHidden.sizeinput ? "" : "0"
                            }
                            disabled={isDisabled}
                          />

                          <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                            %
                          </span>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="cursor-pointer text-[#fff] accent-[#40E0D0]   h-[16px] w-[16px] appearance-none border-2 border-solid rounded-[4px] bg-[#1A1A1A] border-[#374151]
             focus:ring-0 focus:ring-offset-0
             "
              checked={isChecked3}
              onChange={() => setIsChecked3(!isChecked3)}
            />
            <span className="pool_font text-[#fff] text-[12px] font-medium tracking-[0.06px]">
              Reduce Only
            </span>
          </label>
        </div>
        <div className="header_bg"></div>
        <div
          onClick={toggleVisibility}
          className="flex justify-between items-center gap-3 py-3"
        >
          <p className="pool_font text-xs font-semibold">Summary</p>
          <span className="text-[#fff] text-base">
            {isVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </div>
        {isVisible && (
          <div>
            <div className="">
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                  Position Size
                </p>

                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  $2000
                </p>
              </div>
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <div className="flex items-center gap-1">
                  <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                    Leverage
                  </p>
                  <span data-tooltip-id="my-tooltip">
                    <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base" />
                    <Tooltip id="my-tooltip" className="tooltip_bg">
                      <div className="w-[300px]">
                        <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                          Leverage
                        </h3>
                        <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                          Leverage changes the multiplier on your gains or
                          losses increasing your leverage increases how much you
                          would gain/loose on a trade with the same price
                          movement
                        </p>
                      </div>
                    </Tooltip>
                  </span>
                </div>
                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  {`${sliderValue}x`}
                </p>
              </div>
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <div className="flex items-center gap-1">
                  <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                    Take Profit
                  </p>
                  <span data-tooltip-id="my-tooltip1">
                    <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base" />
                    <Tooltip id="my-tooltip1" className="tooltip_bg">
                      <div className="w-[300px]">
                        <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                          Take Profit & Stop Loss
                        </h3>
                        <ul className="list-disc">
                          <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                            TP/SL are reduce only, which means that they can
                            only close an existing postion, which means that
                            they can only close an existing position
                          </li>
                          <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px] my-2">
                            TP/SL are fill-or-kill stop market orders where
                            excution is not guaranteed. if the orders cannot be
                            filled within the slippage limits, then the order
                            will not execute.
                          </li>
                          <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                            1CT must be enabled to use TP/SL
                          </li>
                        </ul>
                      </div>
                    </Tooltip>
                  </span>
                </div>
                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  {formsData.profitinput}%
                </p>
              </div>
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <div className="flex items-center gap-1">
                  <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                    Stop Loss
                  </p>
                  <span data-tooltip-id="my-tooltip7">
                    <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base" />
                    <Tooltip id="my-tooltip7" className="tooltip_bg">
                      <div className="w-[300px]">
                        <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                          Stop Market Order
                        </h3>
                        <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                          A Stop Market Order lets you set a trigger price that,
                          once reached, will execute a Market Order for the
                          direction and size of your order.
                        </p>
                        <ul className="list-disc">
                          <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                            Stop orders are NOT conditional / linked to a
                            position
                          </li>
                          <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px] my-2">
                            The trigger is executed on the oracle price
                          </li>
                          <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                            Stop orders are always executed in the direction
                            that the price is moving
                          </li>
                          <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px] my-2">
                            Stop Market is Fill-or-Kill(Fok), meaning that is
                            the order: does not fill entirely, it will be
                            killed(no partial fills)
                          </li>
                          <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                            Stop market orders use the same slippage as market
                            orders, which is configurable in the order placement
                            console
                          </li>
                        </ul>
                      </div>
                    </Tooltip>
                  </span>
                </div>

                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  {formsData.stopinput}%
                </p>
              </div>
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <div
                  className="relative flex items-center gap-1"
                  ref={dropdownRef}
                >
                  <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                    Slippage Tolerance
                  </p>
                  <p
                    onClick={toggleMenu}
                    className="pool_font cursor-pointer text-[#40E0D0] text-xs font-normal tracking-[0.06px]"
                  >
                    Adjust
                  </p>
                  <div
                    className={`absolute top-[-135px] lg:z-[] pl-2  left-[-17px] ${isMenuOpen ? "block" : "hidden"
                      }`}
                  >
                    <div className=" icon-width three_dot p-4">
                      <div>
                        <div className="flex justify-between items-center gap-2 w-full">
                          <span className="pool_font text-[#fff]  text-xs font-medium tracking-[0.06px]">
                            Slippage Tolerance
                          </span>
                          <div
                            className={`input_field_bg flex w-[40%] items-center gap-3   px-4  h-[38px] ${error
                              ? "focus-within:border-[#D65454] border-[#D65454]"
                              : isDisabled
                                ? "border-[#40E0D0]"
                                : "focus-within:border-[#40E0D0] border-gray-gray4"
                              } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                          >
                            <input
                              type="text"
                              name="Slippageinput"
                              value={formsData.Slippageinput}
                              onChange={handleInputChange}
                              onFocus={() => handleInputFocus("Slippageinput")}
                              onBlur={() => handleInputBlur("Slippageinput")}
                              className=" block w-[100%]  pool_font text-[#fff] text-[15px] font-medium text-left h-[38px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                              placeholder={
                                isPlaceholderHidden.Slippageinput ? "" : "1"
                              }
                              disabled={isDisabled}
                            />

                            <div className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                              %
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[12px] mt-[16px]">
                        <button
                          className="items-center pool_font text-[#FFFFFF] w-[100%] text-xs font-semibold   bg-[#2B2B2B] rounded-[4px] max-border py-[12px] px-[8px] tracking-[0.06px]"
                          onClick={toggleMenu}
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
                  </div>
                </div>
                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  {formsData.Slippageinput}%
                </p>
              </div>
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                  Price Impact
                </p>

                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  $20
                </p>
              </div>
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <div className="flex items-center gap-1">
                  <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                    Funding Rate
                  </p>
                  <span data-tooltip-id="my-tooltip2">
                    <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base" />
                    <Tooltip id="my-tooltip2" className="tooltip_bg">
                      <div className="w-[300px]">
                        <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                          Funding
                        </h3>
                        <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                          The total funding payments you have received(+) or
                          paid(-) payments are made early in usdc.e the funding
                          rate for the payments is calculated based on the
                          difference between TWAP of filaments&apos;s large
                          price and index price
                        </p>
                      </div>
                    </Tooltip>
                  </span>
                </div>
                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  $15
                </p>
              </div>
            </div>
            <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
            <div className="">
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                  Avg. Price
                </p>

                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  $1700
                </p>
              </div>
              <div className="flex justify-between items-center gap-3 my-[4px]">
                <div className="flex items-center gap-1">
                  <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                    Liquidation Price
                  </p>
                  <span data-tooltip-id="my-tooltip3">
                    <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base " />
                    <Tooltip id="my-tooltip3" className="tooltip_bg">
                      <div className="w-[300px]">
                        <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                          Est. Liq Price
                        </h3>
                        <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                          The estimated price at which a position would make a
                          user eligible for liquidation
                        </p>
                        <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                          <span className="font-bold"> Please note -</span> this
                          is this works for a move in a single underlying
                          position for users with multiple positions risk should
                          be valuated on a portfolio basis using alternative
                          metrics
                        </p>
                      </div>
                    </Tooltip>
                  </span>
                </div>

                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  $1000
                </p>
              </div>
            </div>
            <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
            <div className="">
              {mdata.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-3 my-[4px]"
                >
                  <div className="flex items-center gap-1">
                    <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                      {item.titles}
                    </p>
                    <span>
                      <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base" />
                    </span>
                  </div>

                  <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                    ${item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div >
    </>
  );
};

export default Market;

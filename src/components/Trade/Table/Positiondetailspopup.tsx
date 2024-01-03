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
  const handleSave = () => {
    toggleEditPopup();
  };
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm  bg-black opacity-90"></div>
          <div className="fixed inset-0  flex  items-center justify-center  text-center z-[9999]  top-[4%] ">
            <div className="  wallet_popup w-full max-w-[360px] transform  max-[1279px]:h-[610px] overflow-y-auto p-5 text-left align-middle shadow-xl transition-all ">
              <div className="flex items-center justify-between gap-2 ">
                <div>
                  <p className="text-[#fff] text-base font-medium nav_font ">
                    Position Details
                  </p>
                  <div className="flex items-center gap-[4px]">
                    <p className="text-[#939191] nav_font text-xs font-medium">
                      #18522
                    </p>
                    <FaRegCopy className="  text-[#828282] text-base" />
                  </div>
                </div>
                <button
                  className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                  onClick={onClose}
                >
                  <AiOutlineClose className="text-2xl text-white" />
                </button>
              </div>
              <div className="border-t-[1px] border-solid border-[#272727] my-[16px]"></div>
              <div className="flex items-center gap-[8px]">
                <div>
                  <Image className="w-[16px]" priority src={Btc} alt="Btc" />
                </div>
                <p className="text-[#fff] nav_font text-xs font-medium">
                  BTC/USDC - BUY
                </p>
              </div>
              {!editPopupVisible ? (
                <>
                  <div className="bg-[#232323] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#2F2F2F] border-solid border-[1px]">
                    <span className="nav_font w-[100%] text-[#fff] text-xs font-medium ">
                      Collateral
                    </span>
                    <input
                      type="text"
                      className=" block w-[100%] nav_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                      placeholder="42.2042 USDC"
                    />
                    <div className="w-[1px] h-[16px] bg-[#323232]"> </div>

                    <span>
                      <MdEdit className="text-[#fff] text-[16px]" />
                    </span>
                  </div>
                  <div className="bg-[#232323] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#2F2F2F] border-solid border-[1px]">
                    <span className="nav_font w-[100%] text-[#fff] text-xs font-medium ">
                      Leverage
                    </span>
                    <input
                      type="text"
                      value={`${sliderValue}x`}
                      onChange={handleSliderChange}
                      className=" block w-[100%] nav_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                      placeholder="10x"
                    />
                    <div className="w-[1px] h-[16px] bg-[#323232]"> </div>

                    <span className="cursor-pointer" onClick={toggleEditPopup}>
                      <MdEdit className="text-[#fff] text-[16px]" />
                    </span>
                  </div>

                  <div className="bg-[#232323] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#2F2F2F] border-solid border-[1px]">
                    <span className="nav_font w-[100%] text-[#fff] text-xs font-medium ">
                      Take Profit
                    </span>
                    <input
                      type="text"
                      className=" block w-[100%] nav_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                      placeholder="-"
                    />
                    <div className="w-[1px] h-[16px] bg-[#323232]"> </div>

                    <span>
                      <MdEdit className="text-[#fff] text-[16px]" />
                    </span>
                  </div>
                  <div className="bg-[#232323] flex  items-center gap-3 my-4 w-[100%] px-3 rounded-[4px] h-[40px] border-[#2F2F2F] border-solid border-[1px]">
                    <span className="nav_font w-[100%] text-[#fff] text-xs font-medium ">
                      Stop Loss
                    </span>
                    <input
                      type="text"
                      className=" block w-[100%] nav_font text-[#fff] text-xs font-medium text-right h-[40px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                      placeholder="42.2042 USDC"
                    />
                    <div className="w-[1px] h-[16px] bg-[#323232]"> </div>

                    <span>
                      <MdEdit className="text-[#fff] text-[16px]" />
                    </span>
                  </div>
                </>
              ) : (
                <div className="bg-[#232323] my-4  p-3 rounded-[4px]  border-[#2F2F2F] border-solid border-[1px]">
                  <span className="text-[#939191] nav_font text-xs font-medium">
                    Update Leverage
                  </span>
                  <div className="bg-[#1A1A1A] mt-[16px] flex items-center gap-3 w-full px-4 rounded-[8px] h-[46px] border-[#2E3034] border-solid border-[1px]">
                    <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.07px]">
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
                      min="10"
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
                      className="items-center pool_font text-[#9CA3AF] w-[100%] text-[15px] font-semibold   bg-[#FFFFFF0D] rounded-[8px] py-[12px] px-[8px]"
                      onClick={toggleEditPopup}
                    >
                      Cancel
                    </button>
                    <button
                      className="items-center pool_font text-[#14B8A6] w-[100%] text-[15px] font-semibold bg-[#115E594D] rounded-[8px] py-[12px] px-[8px]"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}

              <div className="my-5">
                <div className="">
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      Position Size
                    </p>

                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      0.024 BTC
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <div className="flex items-center gap-1">
                      <p className="nav_font text-[#939191] text-[10px] font-medium">
                        Leverage
                      </p>
                      <span data-tooltip-id="my-tooltip">
                        <CiCircleQuestion className="text-[#939191] text-[12px]" />
                        <Tooltip id="my-tooltip" className="tooltip_bg">
                          <div className="w-[300px]">
                            <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                              Leverage
                            </h3>
                            <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                              Leverage changes the multiplier on your gains or
                              losses increasing your leverage increases how much
                              you would gain/loose on a trade with the same
                              price movement
                            </p>
                          </div>
                        </Tooltip>
                      </span>
                    </div>
                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      10x
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <div className="flex items-center gap-1">
                      <p className="nav_font text-[#939191] text-[10px] font-medium">
                        Take Profit
                      </p>
                      <span data-tooltip-id="my-tooltip1">
                        <CiCircleQuestion className="text-[#939191] text-[12px]" />
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
                                excution is not guaranteed. if the orders cannot
                                be filled within the slippage limits, then the
                                order will not execute.
                              </li>
                              <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                                1CT must be enabled to use TP/SL
                              </li>
                            </ul>
                          </div>
                        </Tooltip>
                      </span>
                    </div>
                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      0.250 BTC
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      Stop Loss
                    </p>

                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      0.015 BTC
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      Slippage Tolerance
                    </p>

                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      0.015 BTC
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      Price Impact
                    </p>

                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      0.015 BTC
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <div className="flex items-center gap-1">
                      <p className="nav_font text-[#939191] text-[10px] font-medium">
                        Funding Rate
                      </p>
                      <span data-tooltip-id="my-tooltip2">
                        <CiCircleQuestion className="text-[#939191] text-[12px]" />
                        <Tooltip id="my-tooltip2" className="tooltip_bg">
                          <div className="w-[300px]">
                            <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                              Funding
                            </h3>
                            <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                              The total funding payments you have received(+) or
                              paid(-) payments are made early in usdc.e the
                              funding rate for the payments is calculated based
                              on the difference between TWAP of filaments&apos;s
                              large price and index price
                            </p>
                          </div>
                        </Tooltip>
                      </span>
                    </div>
                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      0.015 BTC
                    </p>
                  </div>
                </div>
                <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
                <div className="">
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      Avg. Price
                    </p>

                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      100 USDC
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-3 my-[4px]">
                    <div className="flex items-center gap-1">
                      <p className="nav_font text-[#939191] text-[10px] font-medium">
                        Liquidation Price
                      </p>
                      <span data-tooltip-id="my-tooltip3">
                        <CiCircleQuestion className="text-[#939191] text-[12px]" />
                        <Tooltip id="my-tooltip3" className="tooltip_bg">
                          <div className="w-[300px]">
                            <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                              Est. Liq Price
                            </h3>
                            <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                              The estimated price at which a position would make
                              a user eligible for liquidation
                            </p>
                            <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                              <span className="font-bold"> Please note -</span>{" "}
                              this is this works for a move in a single
                              underlying position for users with multiple
                              positions risk should be valuated on a portfolio
                              basis using alternative metrics
                            </p>
                          </div>
                        </Tooltip>
                      </span>
                    </div>

                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      100 USDC
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
                        <p className="nav_font text-[#939191] text-[10px] font-medium">
                          {item.titles}
                        </p>
                        <span>
                          <CiCircleQuestion className="text-[#939191] text-[12px]" />
                        </span>
                      </div>

                      <p className="nav_font text-[#fff] text-[10px] font-medium">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {!editPopupVisible ? (
                <>
                  <button className="items-center pool_font text-[#fff] w-[100%] text-sm font-medium border-[1px] border-solid border-[#2F2F2F] bg-[#232323] rounded-[4px] py-[12px] px-[8px]">
                    Close Position
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Positiondetailspopup;

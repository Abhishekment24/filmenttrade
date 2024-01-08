import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { cdata, edata, mdata } from "./data";
import { MdCheck } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { MdOutlineArrowDownward } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Limit = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [sliderValue, setSliderValue] = useState(25);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const calculateBgColor = (sliderValue: number) => {
    // Example: Change color based on the value
    const percentage = (sliderValue / 125) * 100;
    return `linear-gradient(to right, #40E0D0 ${percentage}%, rgba(64, 224, 208, 0.1) ${percentage}%, rgba(64, 224, 208, 0.1) 100%), #1a1a1a`;
  };

  const sliderStyle = {
    background: calculateBgColor(sliderValue),
  };
  return (
    <div className="px-4 pb-[100px]">
      <div className="input_field_bg flex items-center gap-3 my-4 w-full px-4  h-[45px] ">
        <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.07px]">
          Price
        </span>
        <input
          type="text"
          className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
          placeholder="25.56"
        />
        <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
          USDC
        </span>
      </div>
      <div className="input_field_bg flex items-center gap-3 my-4 w-full px-4 h-[45px] ">
        <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.07px]">
          Collateral
        </span>
        <input
          type="text"
          className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
          placeholder="25.56"
        />
        <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
          USDC
        </span>
      </div>
      <div className="input_field_bg flex items-center gap-3 w-full px-4  h-[45px] ">
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
      <div className="mt-4">
        <input
          type="range"
          min="0"
          max="125"
          step="25"
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
            25x
          </span>
          <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
            50x
          </span>
          <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
            75x
          </span>
          <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
            100x
          </span>
          <span className="pool_font text-[#6B7280] text-[10px] uppercase font-semibold tracking-[0.5px]">
            125x
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
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className=" text-[#fff] accent-[#40E0D0]   h-[16px] w-[16px] appearance-none border-2 border-solid rounded-[4px] bg-[#1A1A1A] border-[#374151]
             focus:ring-0 focus:ring-offset-0
             "
            checked={isChecked1}
            onChange={() => setIsChecked1(!isChecked1)}
          />

          <span className="pool_font text-[#fff] text-[12px] font-medium tracking-[0.06px]">
            Take Profit / Stop Loss
          </span>
        </label>

        {isChecked1 && (
          <>
            <div className="input_field_bg flex  items-center gap-3 my-4 w-[100%] px-4  h-[45px] ">
              <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                Take Profit
              </span>
              <input
                type="text"
                className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                placeholder="25.56"
              />
              <div className="w-[1px] h-[45px] bg-[#FFFFFF0D]"> </div>
              <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                %
              </span>
              <span>
                <MdOutlineArrowDownward className="text-[#9CA3AF] text-[15px]" />
              </span>
            </div>
            <div className="input_field_bg flex  items-center gap-3 my-4 w-[100%] px-4  h-[45px] ">
              <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                Stop Loss
              </span>
              <input
                type="text"
                className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                placeholder="25.56"
              />
              <div className="w-[1px] h-[45px] bg-[#FFFFFF0D]"> </div>
              <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                %
              </span>
              <span>
                <MdOutlineArrowDownward className="text-[#9CA3AF] text-[15px]" />
              </span>
            </div>
          </>
        )}
      </div>
      <div className="my-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className=" text-[#fff] accent-[#40E0D0]   h-[16px] w-[16px] appearance-none border-2 border-solid rounded-[4px] bg-[#1A1A1A] border-[#374151]
             focus:ring-0 focus:ring-offset-0
             "
            checked={isChecked2}
            onChange={() => setIsChecked2(!isChecked2)}
          />
          <span className="pool_font text-[#fff] text-[12px] font-medium tracking-[0.06px]">
            Trailing Stop Loss
          </span>
        </label>
        {isChecked2 && (
          <>
            <div className="input_field_bg flex  items-center gap-3 my-4 w-[100%] px-4  h-[45px] ">
              <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                Callback Rate
              </span>
              <input
                type="text"
                className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                placeholder="25.56"
              />

              <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                %
              </span>
            </div>
            <div className="input_field_bg flex  items-center gap-3 my-4 w-[100%] px-4  h-[45px] ">
              <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                Activation Price
              </span>
              <input
                type="text"
                className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                placeholder="25.5"
              />
              <div className="w-[1px] h-[45px] bg-[#FFFFFF0D]"> </div>
              <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                %
              </span>
              <span>
                <MdOutlineArrowDownward className="text-[#9CA3AF] text-[15px]" />
              </span>
            </div>
            <div className="input_field_bg flex  items-center gap-3 my-4 w-[100%] px-4  h-[45px] ">
              <span className="pool_font w-[100%] text-[#9CA3AF] text-sm font-medium ">
                Size
              </span>
              <input
                type="text"
                className=" block w-[100%] pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                placeholder="25.56"
              />

              <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                %
              </span>
            </div>
          </>
        )}
      </div>
      <div className="my-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className=" text-[#fff] accent-[#40E0D0]   h-[16px] w-[16px] appearance-none border-2 border-solid rounded-[4px] bg-[#1A1A1A] border-[#374151]
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
                0.024 BTC
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
                        Leverage changes the multiplier on your gains or losses
                        increasing your leverage increases how much you would
                        gain/loose on a trade with the same price movement
                      </p>
                    </div>
                  </Tooltip>
                </span>
              </div>
              <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                10x
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
                          TP/SL are reduce only, which means that they can only
                          close an existing postion, which means that they can
                          only close an existing position
                        </li>
                        <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px] my-2">
                          TP/SL are fill-or-kill stop market orders where
                          excution is not guaranteed. if the orders cannot be
                          filled within the slippage limits, then the order will
                          not execute.
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
                0.250 BTC
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 my-[4px]">
              <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                Stop Loss
              </p>

              <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                0.015 BTC
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 my-[4px]">
              <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                Slippage Tolerance
              </p>

              <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                0.015 BTC
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 my-[4px]">
              <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                Price Impact
              </p>

              <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                0.015 BTC
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
                        difference between TWAP of filaments&apos;s large price
                        and index price
                      </p>
                    </div>
                  </Tooltip>
                </span>
              </div>
              <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                0.015 BTC
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
                100 USDC
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
                        is this works for a move in a single underlying position
                        for users with multiple positions risk should be
                        valuated on a portfolio basis using alternative metrics
                      </p>
                    </div>
                  </Tooltip>
                </span>
              </div>

              <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
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
                  <p className="pool_font text-[#9CA3AF] text-xs font-normal tracking-[0.06px]">
                    {item.titles}
                  </p>
                  <span>
                    <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base" />
                  </span>
                </div>

                <p className="pool_font text-[#FFF] text-xs font-normal tracking-[0.06px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Limit;

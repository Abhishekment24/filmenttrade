import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { cdata, edata, mdata } from "./data";
import { MdCheck } from "react-icons/md";
import { MdOutlineArrowDownward } from "react-icons/md";
const tabs = [
  {
    title: "Market",
    key: "market",
  },
  {
    title: "Limit",
    key: "limit",
  },
];
const Rightsidecomponent = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [selectedTab, setSelectedTab] = useState("market");
  const [sliderValue, setSliderValue] = useState(40);
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value, 10));
  };
  const calculateBgColor = (sliderValue: number) => {
    // Example: Change color based on the value
    const percentage = (sliderValue / 5) * 100;
    return `linear-gradient(to right, #40e0d0 ${percentage}%, #1a1a1a ${percentage}%)`;
  };

  const sliderStyle = {
    background: calculateBgColor(sliderValue),
  };
  return (
    <>
      <div className="border-[1px] border-solid bg-[#1B1C1E] border-[#FFFFFF0D] max-[1023px]:mt-5 lg:h-[90vh] lg:w-[30%] xl:w-[25%] lg:fixed lg:overflow-y-scroll">
        <div className="flex justify-between items-center gap-[10px] w-full border-b-[1px] border-[#272727] px-4">
          <div className="flex items-center  gap-[19px]  border-b-[1px] border-[#272727]">
            {tabs.map((tab, index) => {
              return (
                <button
                  onClick={() => setSelectedTab(tab.key)}
                  className={`pool_font font-medium text-sm  ${
                    tab.key == selectedTab
                      ? "py-[8.5px] text-[#40E0D0] border-b-[2px] border-[#40E0D0] w-[101px]"
                      : "text-[#fff] w-[101px] "
                  }`}
                  key={index}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
          <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[24px] h-[24px] flex items-center justify-center">
            <span>
              <BsThreeDotsVertical className="text-[#fff] text-base" />
            </span>
          </div>
        </div>
        {selectedTab == "market" && (
          <>
            <div className="px-4 pb-[100px]">
              <div className="bg-[#1A1A1A] flex items-center gap-3 my-4 w-full px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
              <div className="bg-[#1A1A1A] flex items-center gap-3 w-full px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                  min="11"
                  max="125"
                  step="6"
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
                  <span className="pool_font text-[#767676] text-[10px] uppercase font-semibold tracking-[0.4px]">
                    125x
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3 my-4">
                <p className="nav_font text-[#939191] text-[10px] font-medium">
                  Position Size
                </p>
                <p className="nav_font text-[#fff] text-[10px] font-medium">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
              <div className="">
                {cdata.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3 my-[4px]"
                  >
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      {item.titles}
                    </p>
                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
              <div className="">
                {edata.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3 my-[4px]"
                  >
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      {item.titles}
                    </p>
                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      {item.description}
                    </p>
                  </div>
                ))}
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

              <div className="flex items-center gap-[8px] w-full mt-5">
                <button className="items-center pool_font text-[#fff] w-[50%] text-[15px] font-semibold   bg-[#14B8A6] rounded-[8px]  py-[10px] px-[16px] tracking-[0.075px]">
                  Buy / Long
                </button>
                <button className="items-center pool_font text-[#fff] w-[50%] text-[15px] font-semibold  bg-[#EF4444] rounded-[8px]  py-[10px] px-[16px] tracking-[0.075px]">
                  Sell / Short
                </button>
              </div>
            </div>
          </>
        )}
        {selectedTab == "limit" && (
          <>
            <div className="px-4 pb-[100px]">
              <div className="bg-[#1A1A1A] flex items-center gap-3 my-4 w-full px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
              <div className="bg-[#1A1A1A] flex items-center gap-3 my-4 w-full px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
              <div className="bg-[#1A1A1A] flex items-center gap-3 w-full px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                  min="11"
                  max="125"
                  step="6"
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="range-slider"
                  style={sliderStyle}
                />
                <div className="flex  mt-2 justify-between items-center gap-[18px]">
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
                  <span className="pool_font text-[#767676] text-[10px] uppercase font-semibold tracking-[0.4px]">
                    125x
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3 my-4">
                <p className="nav_font text-[#939191] text-[10px] font-medium">
                  Position Size
                </p>
                <p className="nav_font text-[#fff] text-[10px] font-medium">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
                    <div className="bg-[#1A1A1A] flex  items-center gap-3 my-4 w-[100%] px-4 rounded-[8px] h-[45px] border-[#2E3034] border-solid border-[1px]">
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
              <div className="">
                {cdata.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3 my-[4px]"
                  >
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      {item.titles}
                    </p>
                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
              <div className="">
                {edata.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3 my-[4px]"
                  >
                    <p className="nav_font text-[#939191] text-[10px] font-medium">
                      {item.titles}
                    </p>
                    <p className="nav_font text-[#fff] text-[10px] font-medium">
                      {item.description}
                    </p>
                  </div>
                ))}
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

              <div className="flex items-center gap-[8px] w-full mt-5">
                <button className="items-center pool_font text-[#fff] w-[50%] text-[15px] font-semibold   bg-[#14B8A6] rounded-[8px]  py-[10px] px-[16px] tracking-[0.075px]">
                  Buy / Long
                </button>
                <button className="items-center pool_font text-[#fff] w-[50%] text-[15px] font-semibold  bg-[#EF4444] rounded-[8px]  py-[10px] px-[16px] tracking-[0.075px]">
                  Sell / Short
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Rightsidecomponent;

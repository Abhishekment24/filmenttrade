import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { cdata } from "./data";
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
  const [sliderValue, setSliderValue] = useState(60);
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value, 10));
  };
  return (
    <>
      <div className="border-[1px] border-solid border-[#FFFFFF0D] h-[100vh] overflow-y-scroll">
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

        <div className="px-4">
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
              min="10"
              max="100"
              step="10"
              value={sliderValue}
              onChange={handleSliderChange}
              className="mt-2  w-full rounded-md"
            />
            <div className="flex justify-between items-center gap-[18px]">
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
                className="form-checkbox text-blue-500   h-[16px] w-[16px]"
                checked={isChecked1}
                onChange={() => setIsChecked1(!isChecked1)}
              />
              <span className="pool_font text-[#fff] text-[12px] font-medium tracking-[0.06px]">
                Take Profit / Stop Loss
              </span>
            </label>

            {isChecked1 && (
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
            )}
          </div>
          <div className="my-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500   h-[16px] w-[16px]"
                checked={isChecked2}
                onChange={() => setIsChecked1(!isChecked2)}
              />
              <span className="pool_font text-[#fff] text-[12px] font-medium tracking-[0.06px]">
                Trailing Stop Loss
              </span>
            </label>
          </div>
          <div className="my-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500   h-[16px] w-[16px]"
                checked={isChecked3}
                onChange={() => setIsChecked1(!isChecked3)}
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
          <div className="flex justify-between items-center gap-3 my-[4px]">
            <p className="nav_font text-[#939191] text-[10px] font-medium">
              Avg. Price
            </p>
            <p className="nav_font text-[#fff] text-[10px] font-medium">
              100 USDC
            </p>
          </div>
          <div className="flex justify-between items-center gap-3">
            <p className="nav_font text-[#939191] text-[10px] font-medium">
              Liquidation Price
            </p>
            <p className="nav_font text-[#fff] text-[10px] font-medium">
              100 USDC
            </p>
          </div>
          <div className="border-[1px] border-dashed border-[#FFFFFF1A]"></div>
          <div className="flex justify-between items-center gap-3 my-[4px]">
            <div className="flex items-center gap-1">
              <p className="nav_font text-[#939191] text-[10px] font-medium">
                Trade Fees
              </p>
              <span>
                <CiCircleQuestion className="text-[#939191] text-[12px]" />
              </span>
            </div>
            <p className="nav_font text-[#fff] text-[10px] font-medium">
              0.01 USDC
            </p>
          </div>
          <div className="flex justify-between items-center gap-3 my-[4px]">
            <div className="flex items-center gap-1">
              <p className="nav_font text-[#939191] text-[10px] font-medium">
                Borrow Fees
              </p>
              <span>
                <CiCircleQuestion className="text-[#939191] text-[12px]" />
              </span>
            </div>
            <p className="nav_font text-[#fff] text-[10px] font-medium">
              0.01 USDC
            </p>
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
      </div>
    </>
  );
};

export default Rightsidecomponent;

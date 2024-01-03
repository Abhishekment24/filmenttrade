import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { cdata, edata, mdata } from "./data";
import { MdCheck } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { MdOutlineArrowDownward } from "react-icons/md";
import Market from "./Market";
import Limit from "./Limit";
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
           <Market />
          </>
        )}
        {selectedTab == "limit" && (
          <>
          <Limit />
          </>
        )}
      </div>
    </>
  );
};

export default Rightsidecomponent;

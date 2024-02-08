import Link from "next/link";
import { cdata, edata } from "./data";
import React, { useMemo, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  SingleSkeleton,
  SkeletonDefaultProps,
} from "@/components/Commoncomponent/SkeletonLoader";
interface MiddlesProps {
  onPriceClick: (price: string) => void;
  isPageLoading: boolean;
  currencyState: string,
}

const tabs = [
  {
    title: "Order Book",
    key: "orderbook",
  },
  {
    title: "Trades",
    key: "trades",
  },
];
function getRandomWidth() {
  return Math.floor(Math.random() * 16) + 15;
}
const Middlesidecomponent: React.FC<MiddlesProps> = ({
  onPriceClick,
  currencyState,
  isPageLoading,
}) => {
  const [selectedTab, setSelectedTab] = useState("orderbook");
  const showCurrency = useMemo(() => {
    if (currencyState == "BINANCE:BTCUSDT") return "BTC"
    if (currencyState == "BITTREX:TEAUSDT") return "TEAUSDT"
    if (currencyState == "BINANCE:ETHUSDT") return "ETH"

  }, [currencyState])
  return (
    <>
      <div className="border-[1px] bg-[#1B1C1E] border-solid border-[#FFFFFF0D] max-[1023px]:my-5 h-[632px] overflow-y-scroll no-scrollbar">
        <div className="">
          <div className="flex px-2  items-center justify-between gap-[18px]  border-b-[1px] border-[#272727] ">
            {tabs.map((tab, index) => {
              return (
                <button
                  onClick={() => setSelectedTab(tab.key)}
                  className={`pool_font font-semibold text-xs  ${tab.key == selectedTab
                    ? "py-[11px] text-[#FFFFFF] border-b-[2px] border-[#FFFFFF] w-[101px] "
                    : "text-[#BABABA] w-[101px]"
                    }`}
                  key={index}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
        {isPageLoading ? (
          <ShowOrderSkeleton />
        ) : selectedTab == "orderbook" ? (
          <>
            <div className="flex justify-between items-center  pt-4 px-2">
              <p className="pool_font text-[#9CA3AF] text-left font-medium text-[10px] tracking-[0.05px]">
                Price <span className="font-normal text-[#6B7280]">USDC</span>
              </p>
              <div className="flex items-center gap-[19px]">
                <p className="pool_font text-[#9CA3AF] text-center  font-medium text-[10px] tracking-[0.05px]">
                  Size <span className="font-normal text-[#6B7280]">{showCurrency}</span>
                </p>
                <p className="pool_font text-[#9CA3AF] text-right font-medium text-[10px] w-[68px] tracking-[0.05px]">
                  Total
                </p>
              </div>
            </div>
            <div className="relative  ">
              {cdata.map((item, index) => (
                <div
                  className={`flex justify-between bg_charts items-center py-[4px] px-2 order ransition-all duration-300  ${(index == 1 || index == 4 || index == 8) && "bg-[#282022]"
                    }`}
                  key={index}
                >
                  <span
                    onClick={() => onPriceClick(item.price)}
                    className="cursor-pointer pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]"
                  >
                    {item.price}
                  </span>

                  <div className=" flex items-center gap-[19px]">
                    <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                      {item.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              onClick={() => onPriceClick("43,998.5")}
              className="flex justify-between items-center  py-4 px-2 border-t-[1px] border-b-[1px] border-solid border-[#25272A] bg-[#1B1C1E] order ransition-all duration-300"
            >
              <span className="cursor-pointer nav_font text-[#00CC99] font-medium text-base">
                43,998.5
              </span>
            </div>
            <div className="">
              {cdata.map((item, index) => (
                <div
                  className={`flex justify-between items-center py-[4px] px-2 order ransition-all duration-300 ${(index == 1 || index == 4 || index == 7) && "bg-[#182928]"
                    }`}
                  key={index}
                >
                  <span
                    onClick={() => onPriceClick(item.price)}
                    className="cursor-pointer pool_font text-[#00CC99] font-normal text-xs tracking-[0.06px] "
                  >
                    {item.price}
                  </span>
                  <div className="flex items-center gap-[19px]">
                    <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                      {item.size}
                    </p>
                    <p className="cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                      {item.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          selectedTab == "trades" && (
            <>
              <div className="flex justify-between items-center  pt-4 px-2">
                <p className="pool_font text-[#9CA3AF] text-left font-medium text-[10px] tracking-[0.05px]">
                  Price <span className="font-normal text-[#6B7280]">USDC</span>
                </p>
                <div className="flex items-center gap-[19px]">
                  <p className="pool_font text-[#9CA3AF] text-center  font-medium text-[10px] tracking-[0.05px]">
                    Size <span className="font-normal text-[#6B7280]">BTC</span>
                  </p>
                  <p className="pool_font text-[#9CA3AF] text-right font-medium text-[10px] w-[68px] tracking-[0.05px]">
                    Time
                  </p>
                </div>
              </div>

              <div className="">
                {edata.map((item, index) => (
                  <div
                    className="flex justify-between items-center py-[4px] px-2 order ransition-all duration-300"
                    key={index}
                  >
                    <span
                      onClick={() => onPriceClick(item.price)}
                      className="cursor-pointer pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]"
                    >
                      {item.price}
                    </span>
                    <div className="flex items-center gap-[19px]">
                      <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                        {item.size}
                      </p>
                      <p className=" cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="">
                {edata.map((item, index) => (
                  <div
                    className="flex justify-between items-center py-[4px] px-2 order ransition-all duration-300"
                    key={index}
                  >
                    <span
                      onClick={() => onPriceClick(item.price)}
                      className="cursor-pointer pool_font text-[#00CC99] font-normal text-xs tracking-[0.06px]"
                    >
                      {item.price}
                    </span>
                    <div className="flex items-center gap-[19px]">
                      <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                        {item.size}
                      </p>
                      <p className="cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                {edata.map((item, index) => (
                  <div
                    className="flex justify-between items-center py-[4px] px-2 order ransition-all duration-300"
                    key={index}
                  >
                    <span
                      onClick={() => onPriceClick(item.price)}
                      className="cursor-pointer pool_font text-[#D65454] font-normal text-xs tracking-[0.06px]"
                    >
                      {item.price}
                    </span>
                    <div className="flex items-center gap-[19px]">
                      <p className="cursor-pointer pool_font text-[#fff]  text-center  font-normal text-xs tracking-[0.06px]">
                        {item.size}
                      </p>
                      <p className="cursor-pointer pool_font text-[#9CA3AF] w-[68px]  text-right font-normal text-xs tracking-[0.06px]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};
const ShowOrderSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
        let firstWidth = getRandomWidth();
        let secondWidth = getRandomWidth();
        let thirdWidth = getRandomWidth();
        return (
          <div key={index} className="border-t border-[#26282B] py-2">
            <SkeletonTheme {...SkeletonDefaultProps({ inline: true })}>
              <Skeleton width={firstWidth + "%"} />
              <Skeleton
                width={33 - +firstWidth + "%"}
                containerClassName="opacity-0"
              />
              <Skeleton width={secondWidth + "%"} />
              <Skeleton
                width={33 - +secondWidth + "%"}
                containerClassName="opacity-0"
              />
              <Skeleton width={thirdWidth + "%"} />
            </SkeletonTheme>
          </div>
        );
      })}
      <div className="border-t border-[#26282B] py-2">
        <SingleSkeleton height={30} width="40%" />
      </div>

      {[1, 2, 3, 4, 5].map((item, index) => {
        let firstWidth = getRandomWidth();
        let secondWidth = getRandomWidth();
        let thirdWidth = getRandomWidth();
        return (
          <div key={index} className="border-t border-[#26282B] py-2">
            <SkeletonTheme {...SkeletonDefaultProps({ inline: true })}>
              <Skeleton width={firstWidth + "%"} />
              <Skeleton
                width={33 - +firstWidth + "%"}
                containerClassName="opacity-0"
              />
              <Skeleton width={secondWidth + "%"} />
              <Skeleton
                width={33 - +secondWidth + "%"}
                containerClassName="opacity-0"
              />
              <Skeleton width={thirdWidth + "%"} />
            </SkeletonTheme>
          </div>
        );
      })}
    </>
  );
};

export default Middlesidecomponent;

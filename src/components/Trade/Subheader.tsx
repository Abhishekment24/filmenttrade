import React, { useState, useEffect, useRef } from "react";
import Btcicon from "../../../public/assest/btc.png";
import Ethicon from "../../../public/assest/EthCoin.png";
import Usdcicon from "../../../public/assest/USDCoin.png";
import Dogecoins from "../../../public/assest/Dogecoin.png";
import Spxicons from "../../../public/assest/Spxicons.png";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import { RiArrowDownSFill, RiShareBoxFill } from "react-icons/ri";

import { MdOutlineArrowDropUp, MdInfo } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import { SingleSkeleton } from "../Commoncomponent/SkeletonLoader";
import { BiSearch } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
interface headerInterFace {
  currencyState: String;
  TRADE_LAYOUT: Boolean;
  isPageLoading: Boolean;
  toggleLayout: (value: boolean) => void;
  setcurrencyState: any;
}
const Subheader: React.FC<headerInterFace> = ({
  currencyState,
  toggleLayout,
  isPageLoading,
  TRADE_LAYOUT,
  setcurrencyState,
}) => {
  const Graph = [
    {
      image: Usdcicon,
      name: "USDT-PERP",
      value: "100x",
      currency: "BITTREX:TEAUSDT",
      price: "2,2304.56",
      funding: "0.0012",
      change: "-1.52",
      interest: "$100.01",
    },
    {
      image: Btcicon,
      name: " BTC-PERP",
      value: "50x",
      currency: "BINANCE:BTCUSDT",
      price: "2,2304.56",
      funding: "0.56",
      change: "5.56",
      interest: "$100.01",
    },
    {
      image: Ethicon,
      name: "ETH-PERP",
      value: "20x",
      currency: "BINANCE:ETHUSDT",
      price: "1,509.89",
      funding: "0.03",
      change: "8.45",
      interest: "$100.01",
    },
  ];
  const Graphone = [
    {
      image: Dogecoins,
      name: "DOGE-PERP",
      value: "100x",
      currency: "GEMINI:DOGEBTC",
      price: "2,2304.56",
      funding: "0.0012",
      type: "Meme",
      change: "-1.52",
      interest: "$100.01",
    },
    {
      image: Spxicons,
      name: " SPX-PERP",
      value: "50x",
      currency: "BITMART:SPXCUSDT",
      price: "0.0089",
      funding: "0.0001",
      type: "Meme",
      change: "+900",
      interest: "$100.01",
    },
    {
      image: Spxicons,
      name: "SPX-PERP",
      value: "20x",
      currency: "BITMART:SPXCUSDT",
      price: "0.0089",
      funding: "0.0001",
      type: "Pre Launch",
      change: "+900",
      interest: "$100.01",
    },
  ];
  const tabs = [
    {
      title: "Standard Assetst",
      key: "standardassets",
    },
    {
      title: "Sandboxed Assets",
      key: "sandboxedassets",
    },
  ];
  const [activeTab, setActiveTab] = useState("standardassets");
  const [showDropNav, setShowDropNav] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLangDrop, setshowLangDrop] = useState(false);

  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentDay = currentDate.getUTCDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

      // Calculate remaining seconds till next Monday
      const secondsInADay = 24 * 60 * 60;
      let remainingSeconds = 0;

      if (currentDay === 0) {
        // If today is Sunday, set remaining time till next Monday
        remainingSeconds =
          8 * secondsInADay -
          (currentDate.getUTCHours() * 3600 +
            currentDate.getUTCMinutes() * 60 +
            currentDate.getUTCSeconds());
      } else {
        // Calculate remaining seconds till next Monday
        remainingSeconds =
          (8 - currentDay) * secondsInADay -
          (currentDate.getUTCHours() * 3600 +
            currentDate.getUTCMinutes() * 60 +
            currentDate.getUTCSeconds());
      }

      setCountdown(remainingSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert countdown seconds to HH:MM:SS format
  const formatCountdown = (countdown: number): string => {
    const days = Math.floor(countdown / (24 * 3600));
    const hours = Math.floor((countdown % (24 * 3600)) / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshowLangDrop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  function handleLink() {
    setShowDropNav(false);
  }
  const menusRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (menusRef.current && !menusRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menusRef]);
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState(false);
  const [selectedTab, setselectedTab] = useState({
    image: Btcicon,
    name: " BTC-PERP",
  });
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const [formData, setFormData] = useState({
    Slippageinput: "",
  });
  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    if (isDisabled) {
      return; // Skip input change if the component is disabled
    }

    // Check if the input value is valid (numeric)
    if (/^\d*$/.test(value) || value === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    setIsPlaceholderHidden(true);
  };
  const handleInputFocus = () => {
    // Hide placeholder when input is focused
    setIsPlaceholderHidden(true);
  };

  const handleInputBlur = () => {
    // Show placeholder when input loses focus and is empty
    if (formData.Slippageinput === "") {
      setIsPlaceholderHidden(false);
    }
  };
  console.log(TRADE_LAYOUT, "<<<<thisisTRADE_LAYOUT");

  const ShowSkeletonLoader = (
    <div
      className="navbartop fixed top-[62px] z-[300] bg-[#1B1C1E] flex  header_bg lg:px-[24px] px-4 w-full  items-center text-white mx-auto  
        "
    >
      <div className="w-[2%]  h-full ">
        <Skeleton
          highlightColor="#444"
          baseColor="#26282B"
          height={20}
          width={20}
          circle={true}
          containerClassName="mt-10"
          borderRadius={5}
        />
      </div>
      <div className="w-[18%] box-border h-full px-4 ">
        <SingleSkeleton
          containerClassName="ml-2"
          width={"70%"}
          borderRadius={5}
          height={23}
        />
      </div>
      <div className="w-[20%]  box-border px-5 ">
        <SingleSkeleton width={"70%"} borderRadius={5} height={23} />
      </div>
      <div className="w-[10%]  box-border px-5 ">
        <SingleSkeleton height={10} width={"70%"} borderRadius={5} />
        <SingleSkeleton height={13} width={"40%"} borderRadius={5} />
      </div>
      <div className="w-[10%]  box-border px-5 ">
        <SingleSkeleton height={10} width={"80%"} borderRadius={5} />
        <SingleSkeleton height={13} width={"60%"} borderRadius={5} />
      </div>
      <div className="w-[10%]  box-border px-5 ">
        <SingleSkeleton height={10} width={"60%"} borderRadius={5} />
        <SingleSkeleton height={13} width={"50%"} borderRadius={5} />
      </div>
      <div className="w-[10%]  box-border px-5 border-r border-[#ffffff1c]">
        <SingleSkeleton height={10} width={"60%"} borderRadius={5} />
        <SingleSkeleton height={13} width={"50%"} borderRadius={5} />
      </div>
      <div className="w-[30%]  box-border px-5">
        <SingleSkeleton width={"50%"} borderRadius={5} height={23} />
      </div>
    </div>
  );
  return isPageLoading ? (
    ShowSkeletonLoader
  ) : (
    <>
      <div
        className="navbartop fixed top-[62px] z-[300] bg-[#1B1C1E]  header_bg lg:px-[24px] px-4 w-full justify-between flex items-center text-white mx-auto  
        "
      >
        <div className="max-[1023px]:container lg:max-w-full lg:w-full mx-auto">
          <div className="flex justify-between text-[#fff] items-center max-[1023px]:hidden xl:gap-[14px] lg:gap-2">
            <div className="flex items-center xl:gap-[12px] min-[1380px]:gap-[14px] lg:gap-2">
              <div
                onClick={() => setshowLangDrop(!showLangDrop)}
                className="flex cursor-pointer justify-between items-center xl:gap-[14px] lg:gap-2"
              >
                <div className="flex items-center xl:gap-[14px] lg:gap-1">
                  <Image
                    className="xl:w-[24px] lg:w-[16px]"
                    priority
                    src={selectedTab.image}
                    alt=""
                  />
                  <span className="text-[#fff] pool_font font-semibold lg:text-[10px] xl:text-base min-[1360px]:text-lg tracking-[0.09px] xl:w-[138px] lg:w-[65px]">
                    {selectedTab.name}
                  </span>
                </div>
                <div className="relative ">
                  <RiArrowDownSFill className="text-[#fff] lg:text-sm xl:text-base" />

                  {showLangDrop && (
                    <div
                      ref={dropdownRef}
                      className="absolute three_dot   top-12 lg:left-[-120px] xl:left-[-191px] w-[630px] px-2   text-left"
                    >
                      <div className="flex justify-between items-center gap-3">
                        <div
                          className={`input_field_bg flex items-center gap-3 my-4 w-[100%] px-4 h-[45px] ${
                            error
                              ? "focus-within:border-[#D65454] border-[#D65454]"
                              : isDisabled
                              ? "border-[#40E0D0]"
                              : "focus-within:border-[#40E0D0] border-gray-gray4"
                          } ${
                            isDisabled ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <input
                            type="text"
                            placeholder="Search coins ..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-left h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-gray-500"
                            disabled={isDisabled}
                            onClick={(e) => e.stopPropagation()}
                          />

                          <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                            <BiSearch />
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap items-center gap-[10px] w-full border-b-[1px] border-[#272727] px-4">
                        <div className="flex items-center  justify-between  gap-[19px]  border-b-[1px] border-[#272727] w-full">
                          {tabs.map((tab, index) => {
                            return (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveTab(tab.key);
                                }}
                                className={`pool_font font-semibold text-sm  ${
                                  tab.key == activeTab
                                    ? "py-[8.5px] text-[#40E0D0] border-b-[2px] border-[#40E0D0] w-[50%]"
                                    : "text-[#E5E7EB] w-[50%] "
                                }`}
                                key={index}
                              >
                                {tab.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {activeTab === "standardassets" && (
                        <>
                          <div className="flex w-full overflow-auto no-scrollbar my-3">
                            <table className="w-full">
                              <thead>
                                <tr className="pool_font  text-xs tracking-[0.06px] font-medium   text-[#9CA3AF]">
                                  <th className="text-left font-medium  px-3 py-2">
                                    Token
                                  </th>
                                  <th className="text-left font-medium  px-3 py-2">
                                    Price
                                  </th>
                                  <th className="text-left font-medium px-3 py-2">
                                    8hr Funding
                                  </th>
                                  <th className="text-left  font-medium px-3 py-2">
                                    <div className="flex items-center gap-1">
                                      <span>Change</span>
                                      <span className="text-[#4B5563]">
                                        24h
                                      </span>
                                    </div>
                                  </th>
                                  <th className="text-left font-medium px-3 py-2">
                                    Open Interest
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="">
                                {Graph.filter((item) =>
                                  item.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ).map((item, key) => (
                                  <React.Fragment key={key}>
                                    <tr
                                      onClick={() => {
                                        setcurrencyState(item.currency);
                                        setselectedTab(item);
                                      }}
                                      className="border-b-[1px] border-solid border-[#25272A] font-medium text-xs tracking-[0.06px]"
                                    >
                                      <td className="text-left font-medium px-3 py-2">
                                        <div className="flex items-center gap-[8px]">
                                          <Image
                                            className="w-[24px]"
                                            priority
                                            src={item.image}
                                            alt=""
                                          />
                                          <span className="text-[#fff] pool_font font-medium text-xs tracking-[0.06px]">
                                            {item.name}
                                          </span>
                                          <div className="text-[#14B8A6] pool_font rounded-[4px] px-[2px] py-[1px] font-medium text-[10px] tracking-[0.06px] bg-[#0596694D]">
                                            <span> {item.value}</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="text-left font-medium px-3 py-2">
                                        ${item.price}
                                      </td>
                                      <td className="text-left font-medium px-3 py-2">
                                        {item.funding}%
                                      </td>

                                      <td
                                        className={`pool_font ${
                                          key === 0
                                            ? "text-[#D65454]"
                                            : "text-[#00CC99]"
                                        } w-[88px] font-medium text-left px-3 py-2 text-xs tracking-[0.06px]`}
                                      >
                                        {item.change}%
                                      </td>

                                      <td className="text-left font-medium px-4 py-2">
                                        {item.interest}m
                                      </td>
                                    </tr>
                                  </React.Fragment>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </>
                      )}
                      {activeTab === "sandboxedassets" && (
                        <>
                          <div className="flex w-full overflow-auto no-scrollbar my-3">
                            <table className="w-full">
                              <thead>
                                <tr className="pool_font  text-xs tracking-[0.06px] font-medium   text-[#9CA3AF]">
                                  <th className="text-left font-medium  px-2 py-2">
                                    Token
                                  </th>
                                  <th className="text-left font-medium  px-2 py-2">
                                    Price
                                  </th>
                                  <th className="text-left font-medium px-2 py-2">
                                    8hr Funding
                                  </th>
                                  <th className="text-left font-medium px-2 py-2">
                                    Type
                                  </th>
                                  <th className="text-left  font-medium px-2 py-2">
                                    <div className="flex items-center gap-1">
                                      <span>Change</span>
                                      <span className="text-[#4B5563]">
                                        24h
                                      </span>
                                    </div>
                                  </th>
                                  <th className="text-left font-medium px-2 py-2">
                                    Open Interest
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="">
                                {Graphone.filter((item) =>
                                  item.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ).map((item, key) => (
                                  <React.Fragment key={key}>
                                    <tr
                                      onClick={() => {
                                        setcurrencyState(item.currency);
                                        setselectedTab(item);
                                      }}
                                      className="border-b-[1px] border-solid border-[#25272A] font-medium text-xs tracking-[0.06px]"
                                    >
                                      <td className="text-left font-medium px-2 py-2">
                                        <div className="flex items-center gap-[8px]">
                                          <Image
                                            className="w-[24px]"
                                            priority
                                            src={item.image}
                                            alt=""
                                          />
                                          <span className="text-[#fff] pool_font font-medium text-xs tracking-[0.06px]">
                                            {item.name}
                                          </span>
                                          <div className="text-[#14B8A6] pool_font rounded-[4px] px-[2px] py-[1px] font-medium text-[10px] tracking-[0.06px] bg-[#0596694D]">
                                            <span> {item.value}</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="text-left font-medium px-2 py-2">
                                        ${item.price}
                                      </td>
                                      <td className="text-left font-medium px-2 py-2">
                                        {item.funding}%
                                      </td>
                                      <td className="text-left font-medium px-2 py-2">
                                        <span className="text-[#14B8A6] pool_font rounded-[4px] py-[2px] px-[3px] font-medium text-[10px] tracking-[0.06px] bg-[#0596694D]">
                                          {item.type}
                                        </span>
                                      </td>

                                      <td
                                        className={`pool_font ${
                                          key === 0
                                            ? "text-[#D65454]"
                                            : "text-[#00CC99]"
                                        } w-[88px] font-medium text-left px-2 py-2 text-xs tracking-[0.06px]`}
                                      >
                                        {item.change}%
                                      </td>

                                      <td className="text-left font-medium px-2 py-2">
                                        {item.interest}m
                                      </td>
                                    </tr>
                                  </React.Fragment>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div className="w-[1px] py-[30px] bg-[#FFFFFF0D]"> </div>
              </div>
              <div className=" flex items-center lg:gap-[10px] min-[1180px]:gap-[18px] xl:gap-[18px] min-[1380px]:gap-[23px] 2xl:gap-[36px]">
                <div className="flex items-center gap-[12px] max-[1100px]:gap-[8px]">
                  <p className="pool_font text-[#10B981] font-medium text_subheader lg:text-sm xl:text-base min-[1360px]:text-lg tracking-[0.09px]">
                    $225.62
                  </p>
                  <p className="pool_font text-[#9CA3AF] font-medium  text_subheader text-sm tracking-[0.07px]">
                    $224.89
                  </p>
                </div>
                <div className="w-[1px] h-[39px] bg-[#FFFFFF0D]"> </div>
                <div className="">
                  <p className="pool_font text-[#9CA3AF] font-light text_subheader1 text-xs tracking-[0.06px]">
                    24h change
                  </p>
                  <div className="flex items-center gap-[8px]">
                    <p className="wallet_connected_font text-[#10B981] font-medium text_subheader text-sm ">
                      +0.81%
                    </p>
                    <p className="wallet_connected_font text-[#10B981] font-medium text_subheader text-sm ">
                      +1.65
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="pool_font text-[#9CA3AF] font-light text-xs text_subheader1 tracking-[0.06px]">
                    24h volume
                  </p>
                  <p className="pool_font text-[#fff] font-medium text-sm text_subheader tracking-[0.07px]">
                    $24,363,353
                  </p>
                </div>

                <div className="">
                  <div className="flex items-center gap-1">
                    <p className="pool_font text-[#9CA3AF] font-light text-xs text_subheader1 tracking-[0.06px]">
                      Open Interest
                    </p>
                    <span data-tooltip-id="my-tooltip3">
                      <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base " />
                      <Tooltip id="my-tooltip3" className="tooltip_bg">
                        <div className="w-[300px]">
                          <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                            Open Interest
                          </h3>
                          <p className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                            The total outstanding in perpetual contracts for
                            that market, denominated in the quote USDC
                          </p>
                        </div>
                      </Tooltip>
                    </span>
                  </div>
                  <p className="pool_font text-[#fff] font-medium text-sm text_subheader tracking-[0.07px]">
                    $228.48
                  </p>
                </div>
                <div className="">
                  <p className="pool_font text-[#9CA3AF] font-light text-xs text_subheader1 tracking-[0.06px]">
                    Market Cap
                  </p>
                  <p className="pool_font text-[#fff] font-medium text-sm text_subheader tracking-[0.07px]">
                    $3,046K
                  </p>
                </div>
                <div className="w-[1px] h-[39px] bg-[#FFFFFF0D]"> </div>
                <div className="">
                  <p className="pool_font text-[#9CA3AF] font-light text-xs text_subheader1 tracking-[0.06px]">
                    Funding Rate
                  </p>
                  <p className="pool_font text-[#fff] font-medium text-sm text_subheader tracking-[0.07px]">
                    80.47%
                  </p>
                </div>
                <div className="w-[150px]">
                  <div className="flex items-center gap-1">
                    <p className="pool_font text-[#9CA3AF] font-light text-xs text_subheader1 tracking-[0.06px]">
                      Funding / Countdown
                    </p>
                    <span data-tooltip-id="my-tooltip-funding">
                      <CiCircleQuestion className="pool_font text-[#9CA3AF] text-base " />
                      <Tooltip id="my-tooltip-funding" className="tooltip_bg">
                        <div className="w-[300px]">
                          <h3 className="text-xs font-bold text-[#FFFFFF] pool_font tracking-[0.06px] mb-2">
                            Funding / Countdown
                          </h3>
                          <ul className="list-disc">
                            <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                              Funding payments are made every hour and
                              calculated algorithmically based on the index
                              price and Time-Weighted Average Price (TWAP) of
                              Filtrate on the Filament order book. The 1-hour
                              and annualized rates display the current funding
                              rate.
                            </li>
                            <li className="text-[10px] font-normal text-[#fff] pool_font tracking-[0.05px]">
                              The countdown displays the time until the next
                              funding payment.
                            </li>
                          </ul>
                        </div>
                      </Tooltip>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="wallet_connected_font text-[#10B981] font-medium text_subheader text-sm ">
                      0.0013%
                    </p>
                    <p className="pool_font text-[#fff] font-medium text-sm  text_subheader tracking-[0.07px]">
                      {formatCountdown(countdown)}
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="pool_font text-[#9CA3AF] font-light text-xs text_subheader1 tracking-[0.06px]">
                    Borrowing Rate
                  </p>
                  <p className="pool_font text-[#fff] font-medium text-sm text_subheader tracking-[0.07px]">
                    80.47%
                  </p>
                </div>
              </div>
            </div>
            <div className="relative" ref={menusRef}>
              <div
                className="cursor-pointer rounded-[4px] border-[1px] border-solid border-[#25272A] bg-[#1B1B1B] w-[38px] h-[38px] flex items-center justify-center"
                onClick={toggleMenu}
              >
                <span>
                  <IoSettingsOutline className="text-[#fff] text-base" />
                </span>
              </div>
              <div
                className={`absolute top-[50px] lg:z-[99] pl-2  right-0 ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <div className=" icon-width three_dot p-[24px] icon-height">
                  <span className="pool_font text-[#9CA3AF] mb-1 text-xs font-medium tracking-[0.06px]">
                    Layout
                  </span>
                  <ul className="grid gap-4 grid-cols-2 my-3">
                    <li
                      onClick={() => toggleLayout(false)}
                      className={`cursor-pointer ${
                        !TRADE_LAYOUT ? "right_bg" : "bg-[#171717]"
                      } h-[120px] border-[1px] border-solid ${
                        !TRADE_LAYOUT ? "border-[#40E0D0]" : "border-[#25272A]"
                      }  rounded-[4px]`}
                    >
                      <div
                        className={`${
                          !TRADE_LAYOUT ? " right_bg1" : "bg-[#171717]"
                        } flex rounded-[4px] items-center gap-[4px] h-[90px] justify-center`}
                      >
                        <div
                          className={`w-[20px] h-[39px] ${
                            !TRADE_LAYOUT ? "bg-[#40E0D0]" : "bg-[#4B5563]"
                          }  rounded-[2px]`}
                        ></div>
                        <div
                          className={`w-[47px] h-[39px] ${
                            !TRADE_LAYOUT ? "right_bg" : "bg-[#25272A]"
                          }  rounded-[2px]`}
                        ></div>
                      </div>
                      <div className=" text-center">
                        <span
                          className={`pool_font ${
                            !TRADE_LAYOUT ? "text-[#40E0D0]" : "text-white"
                          }  text-xs font-medium tracking-[0.06px]`}
                        >
                          Left Panel
                        </span>
                      </div>
                    </li>
                    <li
                      onClick={() => toggleLayout(true)}
                      className={`${
                        TRADE_LAYOUT ? "right_bg" : "bg-[#171717]"
                      } h-[120px] border-[1px] border-solid  ${
                        TRADE_LAYOUT ? "border-[#40E0D0]" : "border-[#25272A]"
                      }  rounded-[4px]`}
                    >
                      <div
                        className={`${
                          TRADE_LAYOUT ? "right_bg1" : "bg-[#171717]"
                        }  flex rounded-[4px] items-center gap-[4px] h-[90px] justify-center`}
                      >
                        <div
                          className={`w-[47px] h-[39px] ${
                            TRADE_LAYOUT ? "right_bg" : "bg-[#25272A]"
                          }  rounded-[2px]`}
                        ></div>
                        <div
                          className={`w-[20px] h-[39px] ${
                            TRADE_LAYOUT ? "bg-[#40E0D0]" : "bg-[#4B5563]"
                          }  rounded-[2px]`}
                        ></div>
                      </div>
                      <div className=" text-center">
                        <span
                          className={`pool_font ${
                            TRADE_LAYOUT ? "text-[#40E0D0]" : "text-white"
                          }  text-xs font-medium tracking-[0.06px]`}
                        >
                          Right Panel
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="header_bg mt-6 mb-3"></div>
                  <div>
                    <div className="flex justify-between items-center gap-2 w-full my-2">
                      <span className="pool_font text-[#fff]  text-xs font-medium tracking-[0.06px]">
                        Slippage Tolerace
                      </span>
                      <div
                        className={`input_field_bg flex w-[40%] items-center gap-3   px-4  h-[38px] ${
                          error
                            ? "focus-within:border-[#D65454] border-[#D65454]"
                            : isDisabled
                            ? "border-[#40E0D0]"
                            : "focus-within:border-[#40E0D0] border-gray-gray4"
                        } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <input
                          type="text"
                          name="Slippageinput"
                          value={formData.Slippageinput}
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          className=" block w-[100%]  pool_font text-[#fff] text-[15px] font-medium text-left h-[38px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                          placeholder={isPlaceholderHidden ? "" : "1"}
                          disabled={isDisabled}
                        />

                        <div className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header_bg mt-6 mb-4"></div>
                  <div>
                    <Link href="">
                      <div className="flex items-center justify-start gap-1">
                        <span className="text-[#40E0D0] pool_font  text-xs font-medium max-[345px]:text-xs tracking-[0.06px]">
                          View on CoinGecko
                        </span>
                        <span>
                          <RiShareBoxFill className="text-[#40E0D0] pool_font  text-xs font-medium max-[345px]:text-xs" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subheader;

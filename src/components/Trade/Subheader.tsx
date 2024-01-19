import React, { useState, useEffect, useRef } from "react";
import Btcicon from "../../../public/assest/btc.png";
import Ethicon from "../../../public/assest/EthCoin.png";
import Usdcicon from "../../../public/assest/USDCoin.png";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import { RiArrowDownSFill, RiShareBoxFill } from "react-icons/ri";

import { MdOutlineArrowDropUp, MdInfo } from "react-icons/md";
interface headerInterFace {
  currencyState: String;
  TRADE_LAYOUT: Boolean,
  toggleLayout: (value: boolean) => void,
  setcurrencyState: any;
}
const Subheader: React.FC<headerInterFace> = ({
  currencyState,
  toggleLayout,
  TRADE_LAYOUT,
  setcurrencyState,
}) => {
  const Graph = [
    {
      image: Btcicon,
      name: " BTC-PERP",
      currency: "BINANCE:BTCUSDT",
      price: "$2,2304.56",
    },
    {
      image: Ethicon,
      name: "ETH-PERP",
      currency: "BINANCE:ETHUSDT",
      price: "$2,2304.56",
    },
    {
      image: Usdcicon,
      name: "USDC",
      currency: "BITTREX:TEAUSDT",
      price: "$2,2304.56",
    },
  ];
  const [showDropNav, setShowDropNav] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLangDrop, setshowLangDrop] = useState(false);
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
  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState(false);
  const [selectedTab, setselectedTab] = useState({
    image: Btcicon,
    name: " BTC-PERP",
  });

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
  console.log(TRADE_LAYOUT, "<<<<thisisTRADE_LAYOUT")
  return (
    <>
      <div
        className="navbartop fixed top-[62px] z-[300] bg-[#1B1C1E] max-[1179px]:hidden header_bg lg:px-[24px] px-4 w-full justify-between flex items-center text-white mx-auto  
        "
      >
        <div className="max-[1023px]:container lg:max-w-full lg:w-full mx-auto">
          <div className="flex justify-between text-[#fff] items-center max-[1023px]:hidden gap-[14px]">
            <div className="flex items-center gap-[14px]">
              <div
                onClick={() => setshowLangDrop(!showLangDrop)}
                className="flex cursor-pointer justify-between items-center gap-[14px]"
              >
                <div className="flex items-center gap-[14px]">
                  <Image
                    className="w-[24px]"
                    priority
                    src={selectedTab.image}
                    alt=""
                  />
                  <span className="text-[#fff] pool_font font-semibold text-base xl:text-lg tracking-[0.09px] w-[138px]">
                    {selectedTab.name}
                  </span>
                </div>
                <div className="relative ">
                  <RiArrowDownSFill className="text-[#fff] text-base" />

                  {showLangDrop && (
                    <div
                      ref={dropdownRef}
                      className="absolute three_dot   top-12 left-[-191px] w-[440px] px-2   text-left"
                    >
                      <Link href="">
                        <div
                          onClick={() => setshowLangDrop(!showLangDrop)}
                          className="my-5"
                        >
                          <div className="flex justify-between items-center  pb-4">
                            <span className="pool_font text-[#9CA3AF] font-medium text-xs tracking-[0.06px]">
                              Token Name
                            </span>
                            <div className="flex items-center gap-[20px]">
                              <p className="pool_font text-[#9CA3AF] font-medium text-xs tracking-[0.06px]">
                                Price
                              </p>
                              <p className="pool_font text-[#9CA3AF] font-medium text-xs tracking-[0.06px]">
                                Change{" "}
                                <span className="text-[#4B5563]">24h</span>
                              </p>
                              <p className="pool_font text-[#9CA3AF] font-medium text-xs tracking-[0.06px]">
                                Volume{" "}
                                <span className="text-[#4B5563]">24h</span>
                              </p>
                            </div>
                          </div>
                          {Graph.map((item, key) => {
                            return (
                              <>
                                <div
                                  key={key}
                                  onClick={() => {
                                    setcurrencyState(item.currency);
                                    setselectedTab(item);
                                  }}
                                  className="flex justify-between items-center  py-4"
                                >
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
                                  </div>
                                  <div className="flex items-center gap-[20px]">
                                    <p className="pool_font text-[#fff]  text-left font-medium text-xs tracking-[0.06px]">
                                      ${item.price}
                                    </p>
                                    <p
                                      className={`pool_font ${key == 1
                                        ? "text-[#D65454]"
                                        : "text-[#00CC99]"
                                        }  w-[88px] text-center font-medium text-xs tracking-[0.06px] `}
                                    >
                                      +10.86%
                                    </p>
                                    <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                                      $100.01m
                                    </p>
                                  </div>
                                </div>
                                <div className=" header_bg"></div>
                              </>
                            );
                          })}
                          {/* <div className="flex justify-between items-center  pb-4">
                            <div className="flex items-center gap-[8px]">
                              <Image
                                className="w-[24px]"
                                priority
                                src={Btcicon}
                                alt="Btcicon"
                              />
                              <span className="text-[#fff] pool_font font-medium text-xs tracking-[0.06px]">
                                BTC-PERP
                              </span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                              <p className="pool_font text-[#fff]  text-left font-medium text-xs tracking-[0.06px]">
                                $2,2304.56
                              </p>
                              <p className="pool_font text-[#00CC99] w-[88px] text-center font-medium text-xs tracking-[0.06px] ">
                                +10.86%
                              </p>
                              <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                                $100.01m
                              </p>
                            </div>
                          </div>
                          <div className=" header_bg"></div>
                          <div className="flex justify-between items-center  py-4">
                            <div className="flex items-center gap-[8px]">
                              <Image
                                className="w-[24px]"
                                priority
                                src={Ethicon}
                                alt="Ethicon"
                              />
                              <span className="text-[#fff] pool_font font-medium text-xs tracking-[0.06px]">
                                ETH-PERP
                              </span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                              <p className="pool_font text-[#fff]  text-left font-medium text-xs tracking-[0.06px]">
                                $2,2304.56
                              </p>
                              <p className="pool_font text-[#00CC99] w-[88px] text-center font-medium text-xs tracking-[0.06px]">
                                +10.86%
                              </p>
                              <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                                $100.01m
                              </p>
                            </div>
                          </div>
                          <div className=" header_bg"></div>
                          <div className="flex justify-between items-center  pt-4">
                            <div className="flex items-center gap-[8px]">
                              <Image
                                className="w-[24px]"
                                priority
                                src={Usdcicon}
                                alt="Usdcicon"
                              />
                              <span className="text-[#fff] pool_font font-medium text-xs tracking-[0.06px]">
                                USDC
                              </span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                              <p className="pool_font text-[#fff]  text-left font-medium text-xs tracking-[0.06px]">
                                $2,2304.56
                              </p>
                              <p className="pool_font text-[#D65454] w-[88px] text-center font-medium text-xs tracking-[0.06px]">
                                -1.52%
                              </p>
                              <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                                $100.01m
                              </p>
                            </div>
                          </div> */}
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <div className="w-[1px] py-[30px] bg-[#FFFFFF0D]"> </div>
              </div>
              <div className=" flex items-center lg:gap-[18px] xl:gap-[25px] min-[1380px]:gap-[36px]">
                <div className="flex items-center gap-[12px]">
                  <p className="pool_font text-[#10B981] font-medium  text-base xl:text-lg tracking-[0.09px]">
                    $225.62
                  </p>
                  <p className="pool_font text-[#9CA3AF] font-medium text-sm tracking-[0.07px]">
                    $224.89
                  </p>
                </div>
                <div className="w-[1px] h-[39px] bg-[#FFFFFF0D]"> </div>
                <div className="">
                  <span className="pool_font text-[#9CA3AF] font-light text-xs tracking-[0.06px]">
                    24h change
                  </span>
                  <div className="flex items-center gap-[8px]">
                    <p className="wallet_connected_font text-[#10B981] font-medium text-sm ">
                      +0.81%
                    </p>
                    <p className="wallet_connected_font text-[#10B981] font-medium text-sm ">
                      +1.65
                    </p>
                  </div>
                </div>
                <div className="">
                  <span className="pool_font text-[#9CA3AF] font-light text-xs tracking-[0.06px]">
                    24h volume
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    $24,363,353
                  </p>
                </div>
                <div className="">
                  <span className="pool_font text-[#9CA3AF] font-light text-xs tracking-[0.06px]">
                    Open Interest
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    $228.48
                  </p>
                </div>
                <div className="">
                  <span className="pool_font text-[#9CA3AF] font-light text-xs tracking-[0.06px]">
                    Market Cap
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    $3,044,363,353
                  </p>
                </div>
                <div className="w-[1px] h-[39px] bg-[#FFFFFF0D]"> </div>
                <div className="">
                  <span className="pool_font text-[#9CA3AF] font-light text-xs tracking-[0.06px]">
                    Funding Rate
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    80.47%
                  </p>
                </div>
                <div className="">
                  <span className="pool_font text-[#9CA3AF] font-light text-xs tracking-[0.06px]">
                    Borrowing Rate
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
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
                className={`absolute top-[50px] lg:z-[99] pl-2  right-0 ${isMenuOpen ? "block" : "hidden"
                  }`}
              >
                <div className=" icon-width three_dot p-[24px] icon-height">
                  <span className="pool_font text-[#9CA3AF] mb-1 text-xs font-medium tracking-[0.06px]">
                    Layout
                  </span>
                  <ul className="grid gap-4 grid-cols-2 my-3">
                    <li
                      onClick={() => toggleLayout(false)}
                      className={`cursor-pointer ${!TRADE_LAYOUT ? "right_bg" : "bg-[#171717]"} h-[120px] border-[1px] border-solid ${!TRADE_LAYOUT ? "border-[#40E0D0]" : "border-[#25272A]"}  rounded-[4px]`}>
                      <div className={`${!TRADE_LAYOUT ? " right_bg1" : "bg-[#171717]"} flex rounded-[4px] items-center gap-[4px] h-[90px] justify-center`}>
                        <div className={`w-[20px] h-[39px] ${!TRADE_LAYOUT ? "bg-[#40E0D0]" : "bg-[#4B5563]"}  rounded-[2px]`}></div>
                        <div className={`w-[47px] h-[39px] ${!TRADE_LAYOUT ? "right_bg" : "bg-[#25272A]"}  rounded-[2px]`}></div>
                      </div>
                      <div className=" text-center">
                        <span className={`pool_font ${!TRADE_LAYOUT ? "text-[#40E0D0]" : "text-white"}  text-xs font-medium tracking-[0.06px]`}>
                          Left Panel
                        </span>
                      </div>
                    </li>
                    <li
                      onClick={() => toggleLayout(true)}
                      className={`${TRADE_LAYOUT ? "right_bg" : "bg-[#171717]"} h-[120px] border-[1px] border-solid  ${TRADE_LAYOUT ? "border-[#40E0D0]" : "border-[#25272A]"}  rounded-[4px]`}>
                      <div className={`${TRADE_LAYOUT ? "right_bg1" : "bg-[#171717]"}  flex rounded-[4px] items-center gap-[4px] h-[90px] justify-center`}>
                        <div className={`w-[47px] h-[39px] ${TRADE_LAYOUT ? "right_bg" : "bg-[#25272A]"}  rounded-[2px]`}></div>
                        <div className={`w-[20px] h-[39px] ${TRADE_LAYOUT ? "bg-[#40E0D0]" : "bg-[#4B5563]"}  rounded-[2px]`}></div>
                      </div>
                      <div className=" text-center">
                        <span className={`pool_font ${TRADE_LAYOUT ? "text-[#40E0D0]" : "text-white"}  text-xs font-medium tracking-[0.06px]`}>
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
                        className={`input_field_bg flex w-[40%] items-center gap-3   px-4  h-[38px] ${error
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

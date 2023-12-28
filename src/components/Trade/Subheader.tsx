import React, { useState, useEffect, useRef } from "react";
import Btc from "../../../public/assest/btc.png";

import Link from "next/link";

import Image from "next/image";
import { RiArrowDownSFill } from "react-icons/ri";

import { MdOutlineArrowDropUp, MdInfo } from "react-icons/md";

const Subheader = () => {
  const [showDropNav, setShowDropNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set isScrolled to true when scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLink() {
    setShowDropNav(false);
  }
  return (
    <>
      <div
        className={`navbartop fixed top-[62px] z-[300] bg-[#1B1C1E] max-[1179px]:hidden header_bg lg:px-[24px] px-4 w-full justify-between flex items-center text-white mx-auto  ${
          isScrolled ? "" : "bg-[#1B1C1E]"
        }`}
      >
        <div className="max-[1023px]:container lg:max-w-full lg:w-full mx-auto">
          <div className="flex justify-between text-[#fff] items-center max-[1023px]:hidden gap-[14px]">
            <div className="flex items-center gap-[14px]">
              <div className="flex justify-between items-center gap-[14px]">
                <div className="flex items-center gap-[14px]">
                  <Image className="w-[24px]" priority src={Btc} alt="Btc" />
                  <span className="text-[#fff] nav_font font-semibold text-base w-[138px]">
                    BTC-PERP
                  </span>
                </div>
                <div className="relative ">
                  <RiArrowDownSFill
                    onClick={() => setshowLangDrop(!showLangDrop)}
                    className="text-[#fff] text-base"
                  />

                  {showLangDrop && (
                    <div
                      ref={dropdownRef}
                      className="absolute bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px]  top-8 left-[-191px] w-[440px] px-2   text-left"
                    >
                      <Link href="">
                        <div
                          onClick={() => setshowLangDrop(!showLangDrop)}
                          className="my-5"
                        >
                          <div className="flex justify-between items-center  pb-4">
                            <span className="wallet_connected_font text-[#939191] font-normal text-[10px] tracking-[0.2px]">
                              Token Name
                            </span>
                            <div className="flex items-center gap-[20px]">
                              <p className="wallet_connected_font text-[#939191] font-normal text-[10px] tracking-[0.2px]">
                                Price
                              </p>
                              <p className="wallet_connected_font text-[#939191] font-normal text-[10px] tracking-[0.2px]">
                                Change (24h)
                              </p>
                              <p className="wallet_connected_font text-[#939191] font-normal text-[10px] tracking-[0.2px]">
                                Volume (24h)
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center  pb-4">
                            <div className="flex items-center gap-[14px]">
                              <Image
                                className="w-[24px]"
                                priority
                                src={Btc}
                                alt="Btc"
                              />
                              <span className="text-[#fff] nav_font font-medium text-xs">
                                BTC-PERP
                              </span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                              <p className="pool_font text-[#fff]  text-left font-medium text-xs ">
                                $2,2304.56
                              </p>
                              <p className="pool_font text-[#00CC99] w-[88px] text-center font-medium text-xs ">
                                +10.86%
                              </p>
                              <p className="pool_font text-[#fff] font-medium text-xs">
                                $100.01m
                              </p>
                            </div>
                          </div>
                          <div className=" header_bg"></div>
                          <div className="flex justify-between items-center  py-4">
                            <div className="flex items-center gap-[14px]">
                              <Image
                                className="w-[24px]"
                                priority
                                src={Btc}
                                alt="Btc"
                              />
                              <span className="text-[#fff] nav_font font-medium text-xs">
                                ETH-PERP
                              </span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                              <p className="pool_font text-[#fff]  text-left font-medium text-xs ">
                                $2,2304.56
                              </p>
                              <p className="pool_font text-[#00CC99] w-[88px] text-center font-medium text-xs ">
                                +10.86%
                              </p>
                              <p className="pool_font text-[#fff] font-medium text-xs">
                                $100.01m
                              </p>
                            </div>
                          </div>
                          <div className=" header_bg"></div>
                          <div className="flex justify-between items-center  pt-4">
                            <div className="flex items-center gap-[14px]">
                              <Image
                                className="w-[24px]"
                                priority
                                src={Btc}
                                alt="Btc"
                              />
                              <span className="text-[#fff] nav_font font-medium text-xs">
                                SOL-PERP
                              </span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                              <p className="pool_font text-[#fff]  text-left font-medium text-xs ">
                                $2,2304.56
                              </p>
                              <p className="pool_font text-[#D65454] w-[88px] text-center font-medium text-xs ">
                                -1.52%
                              </p>
                              <p className="pool_font text-[#fff] font-medium text-xs">
                                $100.01m
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <div className="w-[1px] py-[30px] bg-[#FFFFFF0D]"> </div>
              </div>
              <div className=" flex items-center lg:gap-[18px] xl:gap-[25px] min-[1380px]:gap-[43px]">
                <div className="flex items-center gap-[8px]">
                  <span>
                    <MdOutlineArrowDropUp className="text-[#00CC99] text-base" />
                  </span>
                  <p className="pool_font text-[#00CC99] font-medium text-[20px] tracking-[0.1px]">
                    $225.62
                  </p>
                  <p className="pool_font text-[#939191] font-medium text-sm tracking-[0.07px]">
                    $224.89
                  </p>
                </div>
                <div className="">
                  <span className="pool_font text-[#939191] font-light text-xs tracking-[0.06px]">
                    24h change
                  </span>
                  <div className="flex items-center gap-[8px]">
                    <p className="wallet_connected_font text-[#00CC99] font-medium text-sm ">
                      +0.81%
                    </p>
                    <p className="wallet_connected_font text-[#00CC99] font-medium text-sm ">
                      +1.65
                    </p>
                  </div>
                </div>
                <div className="">
                  <span className="pool_font text-[#939191] font-light text-xs tracking-[0.06px]">
                    24h volume
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    $24,363,353
                  </p>
                </div>
                <div className="">
                  <span className="pool_font text-[#939191] font-light text-xs tracking-[0.06px]">
                    Open Interest
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    $228.48
                  </p>
                </div>
                <div className="">
                  <span className="pool_font text-[#939191] font-light text-xs tracking-[0.06px]">
                    Market Cap
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    $3,044,363,353
                  </p>
                </div>
                <div className="w-[1px] h-[39px] bg-[#FFFFFF0D]"> </div>
                <div className="">
                  <span className="pool_font text-[#939191] font-light text-xs tracking-[0.06px]">
                    Funding Rate
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    80.47%
                  </p>
                </div>
                <div className="">
                  <span className="pool_font text-[#939191] font-light text-xs tracking-[0.06px]">
                    Borrowing Rate
                  </span>
                  <p className="pool_font text-[#fff] font-medium text-sm tracking-[0.07px]">
                    80.47%
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[4px] border-[1px] border-solid border-[#313131] bg-[#1B1C1E] w-[32px] h-[32px] flex items-center justify-center">
              <span>
                <MdInfo className="text-[#fff] text-base" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subheader;

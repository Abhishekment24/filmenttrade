import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../public/assest/Logo.png";
import Buttonicons from "../../../public/assest/Tether.png";
import Metamaskicon from "../../../public/assest/metamaskicon.png";
import Metamaskimg from "../../../public/assest/metamsakimgs.png";
import Yellowimg from "../../../public/assest/yellowimg.png";
import Walletimg from "../../../public/assest/walletimg.png";
import Wallecticons from "../../../public/assest/wallecticons.png";
import Coinicons from "../../../public/assest/coinicons.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Line from "../../../public/assest/Line.png";
import COMMON_FUNCTIONS from "@/components/CommonFunctions/CommonFunctions";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { IoMdWarning } from "react-icons/io";
import {
  MdNotifications,
  MdOutlineContentCopy,
  MdOutlineLogout,
} from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong, FaLock } from "react-icons/fa6";
import Image from "next/image";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useSwitchNetwork,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Agreepopup from "./Walletpopup/Agreepopup";
import Connectpopup from "./Walletpopup/Connectpopup";
import Afterconnectpopup from "./Walletpopup/Afterconnectpopup";

const innerLinks = [
  { text: "Help Center", href: "#" },
  { text: "Docs", href: "/docs" },
  { text: "Terms of Use", href: "/terms-of-use" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Report Bug", href: "/report-bug" },
  { text: "Share Feedback", href: "/share-feedback" },
  { text: "Platform Status", href: "/platform-status" },
];

const InjectedChainId = 5;
const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  // --- Wallet Functions
  // const { data, isError, isLoading } = useBalance({

  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  const walletDetails = useAccount();
  console.log(chains, "<<<<thesearechains");
  const { address, isConnected, isConnecting } = useAccount();
  const walletBalance = useBalance({
    address: address,
  });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  //  ---
  const [showDropNav, setShowDropNav] = useState(false);
  const [showWalletSideNav, setWalletSideNav] = useState(false);
  const [showLangDrop, setShowLangDrop] = useState(false);
  const [chainId, setchainId] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnimationOnEarn, setshowAnimationOnEarn] = useState(true);
  const [walletlogout, setWalletlogout] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobiledropdownRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [testnet, setTestnet] = useState(false);
  const [isAgreeOpen, setIsAgreeOpen] = useState(false);
  const handleWalletConnect = () => {
    if (window.ethereum) {
      connect();
      setIsWalletOpen(true);
      setIsAgreeOpen(false);
      setIsPopupOpen(false);
    } else {
      alert("Install metamask");
    }
  };
  const handleWalletlogout = () => {
    setWalletlogout(true);
  };
  const closeWalletlogout = () => {
    setWalletlogout(false);
  };
  const connectWallet = () => {
    setIsPopupOpen(true);
    setIsWalletOpen(false);
    setIsAgreeOpen(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsWalletOpen(false);
    setIsAgreeOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setshowAnimationOnEarn(false);
    }, 3000);
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTestnet(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);
  useEffect(() => {
    const handleClickOutsides = (event: { target: any }) => {
      if (
        mobiledropdownRef.current &&
        !mobiledropdownRef.current.contains(event.target)
      ) {
        setShowLangDrop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsides);
    return () => document.removeEventListener("mousedown", handleClickOutsides);
  }, [mobiledropdownRef]);
  useEffect(() => {
    let isWagmiConnected = localStorage.getItem("wagmi.connected");
    if (isWagmiConnected) {
      connect();
    }
    // handleWalletConnect()
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set isScrolled to true when scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLink() {
    setShowDropNav(false);
  }
  const currentChainId = async () => {
    if (window.hasOwnProperty("ethereum"))
      return Number(await window?.ethereum.request({ method: "eth_chainId" }));
  };
  useEffect(() => {
    (async () => {
      setchainId(await currentChainId());
    })();
  }, [address, walletDetails]);
  const disconnectMetamask = () => {
    disconnect();
    setIsWalletOpen(false);
    setWalletSideNav(false);
    localStorage.clear();
  };

  const handleNetworkChange = () => {
    switchNetwork?.(InjectedChainId);
  };

  const copyIt = async () => {
    try {
      await navigator.clipboard.writeText(`${address}`);
      setIsCopied(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isConnected) {
      setTimeout(() => {
        setIsAgreeOpen(true);
      }, 2000);
    }
  }, [isConnected]);

  return (
    <div>
      <>
        <div
          className={`navbartop fixed top-0 bg-1 z-[400] header_bg max-[1179px]:py-[16px] py-[12px] lg:px-[24px] px-4 w-full justify-between flex items-center text-white mx-auto  ${
            isScrolled ? "bg-1" : ""
          }`}
        >
          <div className="max-[1023px]:container lg:max-w-full lg:w-full mx-auto">
            <div className="flex justify-between text-[rgb(255,255,255)] items-center max-[1179px]:hidden">
              <div className="flex items-center min-[1360px]:gap-8  lg:gap-2">
                <Link href="/" className="flex items-center gap-[8px]">
                  <Image className="w-[20px]" priority src={Logo} alt="logo" />
                  <span className="text-[#40E0D0] logo_font font-medium text-[15px] tracking-{1.2px}">
                    FILAMENT
                  </span>
                </Link>
                {!showDropNav ? (
                  <div
                    className="lg:hidden menu-icon text-3xl"
                    onClick={() => setShowDropNav(!showDropNav)}
                  >
                    <RxHamburgerMenu />
                  </div>
                ) : (
                  <div
                    className="lg:hidden menu-icon text-3xl"
                    onClick={() => setShowDropNav(!showDropNav)}
                  >
                    <RxCross2 />
                  </div>
                )}
                <Link
                  href="/trade"
                  className={`pool_font text-xs p-2 rounded-[4px]  transition-all duration-300 ${
                    activeTab === "trade"
                      ? "font-bold text-[#fff]  "
                      : "text-[#fff] font-medium hover:bg-[#25272A]  active:bg-[#25272A]"
                  }`}
                  onClick={() => handleTabClick("trade")}
                >
                  Trade
                </Link>
                <Link
                  href="/pool"
                  className={`pool_font text-xs p-2 rounded-[4px]  transition-all duration-300 ${
                    activeTab === "pool"
                      ? "font-bold text-[#fff]  "
                      : "text-[#fff] font-medium hover:bg-[#25272A]  active:bg-[#25272A]"
                  }`}
                  onClick={() => handleTabClick("pool")}
                >
                  Pool
                </Link>
                <Link
                  href="/stake"
                  className={`pool_font text-xs p-2 rounded-[4px]  transition-all duration-300 ${
                    activeTab === "stake"
                      ? "font-bold text-[#fff]  "
                      : "text-[#fff] font-medium hover:bg-[#25272A]  active:bg-[#25272A]"
                  }`}
                  onClick={() => handleTabClick("stake")}
                >
                  Stake
                </Link>
                <Link
                  href="/referral"
                  className={`pool_font text-xs p-2 rounded-[4px]  transition-all duration-300 ${
                    activeTab === "referral"
                      ? "font-bold text-[#fff]  "
                      : "text-[#fff] font-medium hover:bg-[#25272A]  active:bg-[#25272A]"
                  }`}
                  onClick={() => handleTabClick("referral")}
                >
                  Referral
                </Link>
                <Link
                  href="/leaderboard"
                  className={`pool_font text-xs p-2 rounded-[4px]  transition-all duration-300 ${
                    activeTab === "leaderboard"
                      ? "font-bold text-[#fff]  "
                      : "text-[#fff] font-medium hover:bg-[#25272A]  active:bg-[#25272A]"
                  }`}
                  onClick={() => handleTabClick("leaderboard")}
                >
                  Leaderboard
                </Link>
                <div className="w-[1px] h-[12px] bg-[#2A2A2A]"> </div>
                <Link
                  href="/portfolio"
                  className={`pool_font text-xs p-2 rounded-[4px]  transition-all duration-300 ${
                    activeTab === "portfolio"
                      ? "font-bold text-[#fff]  "
                      : "text-[#fff] font-medium hover:bg-[#25272A]  active:bg-[#25272A]"
                  }`}
                  onClick={() => handleTabClick("portfolio")}
                >
                  Portfolio
                </Link>
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="flex items-center gap-1"
                    onClick={() => setTestnet(!testnet)}
                  >
                    <Link
                      href=""
                      className={`pool_font text-[#fff] text-xs flex items-center gap-1 transition-all duration-300 ${
                        activeTab === "More"
                          ? "font-bold text-[#fff]  "
                          : "text-[#fff] font-medium "
                      }`}
                      onClick={() => handleTabClick("More")}
                    >
                      More
                    </Link>
                    <RiArrowDownSFill
                      className={` cursor-pointer ${
                        testnet ? "transform rotate-180" : ""
                      } w-4 h-4`}
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    className={`${
                      testnet ? "block" : "hidden"
                    } absolute  mt-4 w-full  min-w-[376px] left-[-36px]`}
                  >
                    <div className="flex">
                      <div className="bg-[#1B1B1B] min-w-[216px] py-4 px-[8px] rounded-l-[8px] border-[1px] border-solid border-[#25272A] ">
                        {innerLinks.map((link, index) => (
                          <Link key={index} href={link.href}>
                            <div
                              onClick={() => setTestnet(!testnet)}
                              className="pool_font text-[#fff] mb-1 text-xs font-normal tracking-[0.06px] hover:bg-[#25272A] rounded-[4px] px-2 py-2 active:bg-[#25272A]"
                            >
                              {link.text}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-[#161818] min-w-[160px] py-4 px-[8px] rounded-r-[8px] border-t-[1px] border-b-[1px] border-r-[1px] border-solid border-[#25272A]">
                        <div onClick={() => setTestnet(!testnet)} className="">
                          <span className="pool_font text-[#6B7280] pl-2  mb-4 text-[10px] font-normal tracking-[0.05px]">
                            Join Community
                          </span>

                          <Link href="#">
                            <div
                              onClick={() => setTestnet(!testnet)}
                              className="flex items-center gap-[12px]  hover:bg-[#25272A] rounded-[4px] px-2 py-2 active:bg-[#25272A]"
                            >
                              <span>
                                <FaDiscord className="text-xl text-[#fff]" />
                              </span>
                              <span className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                                Discord
                              </span>
                            </div>
                          </Link>
                          <Link href="">
                            <div
                              onClick={() => setTestnet(!testnet)}
                              className="flex items-center gap-[12px] hover:bg-[#25272A] rounded-[4px] px-2 py-2 active:bg-[#25272A]"
                            >
                              <span>
                                <FaXTwitter className="text-xl text-[#fff]" />
                              </span>
                              <span className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                                Twitter
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-[22px] w-full">
                  <Link href="/stake">
                    <div
                      className={`flex items-start gap-[8px]  btn py-[10px] px-3 ${
                        showAnimationOnEarn ? "animated-bg" : ""
                      }`}
                    >
                      <Image
                        className="w-[14px]"
                        priority
                        src={Buttonicons}
                        alt="Buttonicons"
                      />
                      <span className="pool_font text-[#40E0D0] font-semibold text-xs tracking-[0.06px]">
                        Earn 62% APR on USDC
                      </span>
                    </div>
                  </Link>
                  <div className="w-[1px] h-[34px] bg-[#272727]"> </div>
                  {!isConnected ? (
                    <button
                      onClick={connectWallet}
                      className="items-center pool_font text-[#1F2937] text-xs font-semibold  btn_one  py-[10px] px-[16px] tracking-[0.06px]"
                    >
                      Connect Wallet
                    </button>
                  ) : chainId == InjectedChainId ? (
                    <>
                      <div
                        onClick={() => setWalletSideNav(!showWalletSideNav)}
                        className="cursor-pointer flex items-center gap-[8px] wallet_coonected  px-[12px] h-[38px]"
                      >
                        <div className="flex flex-col text-right justify-end ">
                          <span className="text-[#939191] wallet_connected_font font-medium text-[10px] tracking-{0.2px} ">
                            Portfolio Value
                          </span>
                          <span className="nav_font text-[#fff] font-medium text-[10px] ">
                            {walletBalance?.data &&
                              `${walletBalance.data.formatted} ${walletBalance.data.symbol}`}
                          </span>
                        </div>
                        <div className="w-[1px] h-[34px] bg-[#272727]"> </div>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col text-right justify-end ">
                            <span className="text-[#939191] wallet_connected_font font-medium text-[10px] tracking-{0.2px} ">
                              Linked Wallet
                            </span>
                            <span className="nav_font text-[#fff] font-medium text-[10px] ">
                              {COMMON_FUNCTIONS.formatMetamaskAddress(address)}
                            </span>
                          </div>

                          <div className="cursor-pointer">
                            <RiArrowDownSFill />
                          </div>
                        </div>
                      </div>
                      <div className="wallet_coonected w-[34px] h-[34px] flex items-center justify-center">
                        <MdNotifications className="text-[#fff] text-base" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-[8px] incorrect_network_bg  px-[12px] h-[38px]">
                        <div className="flex flex-col text-right justify-end ">
                          <span className="text-[#939191] wallet_connected_font font-medium text-[10px] tracking-{0.2px} ">
                            Portfolio Value
                          </span>
                          <span className="nav_font text-[#fff] font-medium text-[10px] ">
                            {walletBalance?.data &&
                              `${walletBalance.data.formatted} ${walletBalance.data.symbol}`}
                          </span>
                        </div>
                        <div className="w-[1px] h-[34px] bg-[#272727]"> </div>
                        <div className="flex items-center gap-3">
                          <span>
                            <IoMdWarning className="text-[#D57501] text-[20px]" />
                          </span>
                          <div className="flex flex-col text-right justify-end ">
                            <span className="text-[#939191] wallet_connected_font font-medium text-[10px] tracking-{0.2px} ">
                              Linked Wallet
                            </span>
                            <span className="nav_font text-[#fff] font-medium text-[10px] ">
                              {COMMON_FUNCTIONS.formatMetamaskAddress(address)}
                            </span>
                          </div>

                          {!showWalletSideNav ? (
                            <div
                              className="cursor-pointer "
                              onClick={() =>
                                setWalletSideNav(!showWalletSideNav)
                              }
                            >
                              <RiArrowDownSFill />
                            </div>
                          ) : (
                            <div
                              className="cursor-pointer"
                              onClick={() =>
                                setWalletSideNav(!showWalletSideNav)
                              }
                            >
                              <RiArrowDownSFill />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="wallet_coonected w-[34px] h-[34px] flex items-center justify-center">
                        <MdNotifications className="text-[#fff] text-base" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-3 nav_moblie_bar">
              <Link href="/" className="flex items-center gap-[8px]">
                <Image className="w-[20px]" priority src={Logo} alt="logo" />
                <span className="text-[#40E0D0] logo_font font-medium text-base tracking-{1.2px}">
                  FILAMENT
                </span>
              </Link>
              {!showDropNav ? (
                <div
                  className=" menu-icon text-3xl"
                  onClick={() => setShowDropNav(!showDropNav)}
                >
                  <RxHamburgerMenu />
                </div>
              ) : (
                <div
                  className=" menu-icon text-3xl"
                  onClick={() => setShowDropNav(!showDropNav)}
                >
                  <RxCross2 />
                </div>
              )}
            </div>
          </div>
        </div>
        {/**-----------------after wallet connected sidebar */}

        {showWalletSideNav && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-60 z-[400]"
              onClick={() => setWalletSideNav(false)}
            ></div>
            <div
              className={`
          sidebar_wallet_menu moblie-nav  px-3  max-[991px]:z-[400] z-[400] fixed lg:w-[360px]  w-full h-[100vh]  top-0 overflow-y-auto overflow-x-hidden  bottom-0 py-5 transition-all
        duration-500 ${showWalletSideNav ? "right-0" : "right-[-100%]"}
        `}
            >
              <div className="flex justify-between items-center">
                <div className="wallet_img_box flex items-center justify-between gap-[8px] pl-[4px] pr-[12px] py-[4px] w-[280px]">
                  <div className="flex items-center gap-[8px]">
                    <Image
                      className="w-[40px]"
                      src={Walletimg}
                      priority
                      alt="Walletimg"
                    />
                    <span className="pool_font text-[#fff] font-medium text-xs truncate ">
                      {COMMON_FUNCTIONS.formatMetamaskAddress(address)}
                    </span>
                  </div>

                  <div className="flex items-center gap-[8px]">
                    <span>
                      <MdOutlineContentCopy
                        className="text-[#fff] text-base cursor-pointer border-none focus:outline-none"
                        data-tooltip-id="my-tooltip-inline"
                        data-tooltip-html={
                          isCopied ? "Copied!" : "Copy wallet address"
                        }
                        onClick={() => {
                          if (!isCopied) {
                            copyIt();
                          }
                        }}
                      />
                      <Tooltip
                        id="my-tooltip-inline"
                        place="bottom"
                        style={{
                          border: "none",
                          color: "#fff",
                          fontSize: "11px",
                        }}
                      />
                    </span>
                    <span>
                      <MdOutlineLogout
                        onClick={handleWalletlogout}
                        className="text-[#fff] cursor-pointer text-base border-none focus:outline-none"
                        data-tooltip-id="my-tooltip-inline"
                        data-tooltip-html="Disconnect Wallet"
                      />
                      <Tooltip
                        id="my-tooltip-inline"
                        place="bottom"
                        style={{
                          border: "none",
                          color: "#fff",
                          fontSize: "11px",
                        }}
                      />
                    </span>
                  </div>
                </div>
                <button
                  className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[48px] h-[48px] flex items-center justify-center"
                  onClick={() => setWalletSideNav(!showWalletSideNav)}
                >
                  <AiOutlineClose className="text-2xl text-white" />
                </button>
              </div>
              {isConnected && chainId != InjectedChainId ? (
                <>
                  <div className="wallet_card_bg py-[12px] px-[16px] my-3">
                    <div className="flex items-start gap-[12px]">
                      <span>
                        <IoMdWarning className="text-[#D57501] text-2xl" />
                      </span>
                      <div>
                        <p className="text-[#D57501] pool_font text-base font-bold">
                          Switch to Injective network
                        </p>
                        <p className="text-[#939191] pool_font text-base font-light">
                          You need to be on Injective network to open & execute
                          orders
                        </p>
                      </div>
                    </div>
                    <div className="my-3 justify-center flex">
                      <button
                        // disabled={!switchNetwork || x.id === chain?.id}
                        className="items-center nav_font w-[384px] text-[#0B2B28] text-sm font-semibold  btn_one  py-[10px] px-[16px]"
                        onClick={handleNetworkChange}
                      >
                        Switch to Injective network
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  onClick={disconnectMetamask}
                  className=" text-center justify-center flex  text-[#ffffff] text-xs font-semibold "
                ></div>
              )}
              <div className="flex justify-between mt-[24px] items-center  pb-3 ">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  Portfolio Value
                </span>
                <p className="pool_font text-[#fff] font-semibold text-[20px] tracking-[0.1px]">
                  $2,430,330
                </p>
              </div>
              <div className="flex justify-between items-center  pb-3">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  PnL (24h)
                </span>
                <p className="pool_font text-[#00CC99] font-medium text-xs tracking-[0.06px]">
                  +$48,600 (2.08%)
                </p>
              </div>
              <div className="my-[16px]">
                <Image className="w-[100%]" priority src={Line} alt="line" />
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  Claimable Rewards
                </span>
                <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  100,000 FLP
                </p>
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  LP Staked
                </span>
                <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  100,000 LP
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  Liquidity Provided
                </span>
                <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  500,000 USDC
                </p>
              </div>
              <div className="my-[16px]">
                <Image className="w-[100%]" priority src={Line} alt="line" />
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#6B7280] font-normal text-xs tracking-[0.06px]">
                  Open Positions
                </span>
                <p className="pool_font text-[#6B7280] font-normal text-xs tracking-[0.06px]">
                  Change (24h)
                </p>
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  ETH-PERP
                </span>
                <p className="pool_font text-[#00CC99] font-medium text-xs tracking-[0.06px]">
                  +$14,350 (2.08%)
                </p>
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  BTC-PERP
                </span>
                <p className="pool_font text-[#D65454] font-medium text-xs tracking-[0.06px]">
                  -$1,228 (0.024%)
                </p>
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  LIM-PERP
                </span>
                <p className="pool_font text-[#00CC99] font-medium text-xs tracking-[0.06px]">
                  +$14,350 (2.08%)
                </p>
              </div>
              <Link href="/portfolio">
                <div className="flex gap-[4px] items-center">
                  <p className="pool_font text-[#40E0D0] font-medium text-xs tracking-[0.06px]">
                    View all
                  </p>
                  <span>
                    <FaArrowRightLong className="text-[#40E0D0] text-xs" />
                  </span>
                </div>
              </Link>
              <div className="my-[16px]">
                <Image className="w-[100%]" priority src={Line} alt="line" />
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#6B7280] font-normal text-xs tracking-[0.06px]">
                  Assets
                </span>
                <div className="flex items-center gap-[8px]">
                  <p className="pool_font text-[#6B7280]  w-[88px] font-normal text-xs tracking-[0.06px]">
                    Amt
                  </p>
                  <p className="pool_font text-[#6B7280]   font-normal text-xs tracking-[0.06px]">
                    Val
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  USDC
                </span>
                <div className="flex items-center gap-[8px]">
                  <p className="pool_font text-[#fff] w-[88px] text-center font-medium text-xs tracking-[0.06px]">
                    24.52
                  </p>
                  <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                    $1,602.24
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  Filament Tokens
                </span>
                <div className="flex items-center gap-[8px]">
                  <p className="pool_font text-[#fff] w-[88px] text-center font-medium text-xs tracking-[0.06px]">
                    1202.77
                  </p>
                  <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                    $1,602.24
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center  pb-4">
                <span className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                  LP Tokens
                </span>
                <div className="flex items-center gap-[8px]">
                  <p className="pool_font text-[#fff] w-[88px] text-center font-medium text-xs tracking-[0.06px]">
                    987.14
                  </p>
                  <p className="pool_font text-[#fff] font-medium text-xs tracking-[0.06px]">
                    $1,602.24
                  </p>
                </div>
              </div>
              <div className="flex gap-[4px] items-center">
                <p className="pool_font text-[#40E0D0] font-medium text-xs tracking-[0.06px]">
                  View all
                </p>
                <span>
                  <FaArrowRightLong className="text-[#40E0D0] text-xs" />
                </span>
              </div>
              <div className="border-[1px] border-solid border-[#FFFFFF1A] my-[16px]"></div>
              <Link href="/portfolio">
                <div className="flex gap-[8px] items-center">
                  <span>
                    <FaLock className="text-[#40E0D0] text-xs" />
                  </span>
                  <p className="pool_font text-[#40E0D0] font-medium text-xs tracking-[0.06px]">
                    View Portfolio
                  </p>
                </div>
              </Link>
            </div>
          </>
        )}
        {/*disconnect wallet popup */}
        {walletlogout && (
          <>
            <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm  bg-black opacity-90"></div>
            <div className="fixed inset-0  flex justify-center items-center z-[9999]  top-[10%] ">
              <div className="  wallet_popup w-full max-w-md transform  p-5 text-left align-middle shadow-xl transition-all ">
                <div className="flex items-center justify-between gap-2 ">
                  <p className="text-[#fff] text-[20px] font-semibold pool_font ">
                    Disconnect
                  </p>
                  <button
                    className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                    onClick={closeWalletlogout}
                  >
                    <AiOutlineClose className="text-2xl text-white" />
                  </button>
                </div>
                <p className="text-sm pool_font text-[#FFFFFF] text-normal tracking-[0.07px] my-6">
                  Are you sure you want to disconnect your account?
                </p>
                <div className="flex items-center gap-4 w-full">
                  <div className="w-[50%]">
                    <button
                      onClick={() => {
                        disconnectMetamask();
                        closeWalletlogout();
                      }}
                      className=" items-center pool_font text-[#fff] w-[100%]  text-sm font-semibold max-border  bg-[#D65454] rounded-[6px]  py-[10px] px-[16px] tracking-[0.075px]"
                    >
                      Disconnect
                    </button>
                  </div>
                  <div className="w-[50%]">
                    <button
                      onClick={closeWalletlogout}
                      className="items-center pool_font text-[#fff] w-[100%] text-sm font-semibold  bg-[#2B2B2B] max-border rounded-[6px]  py-[10px] px-[16px] tracking-[0.075px]"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/*wallet popup  */}
        <Connectpopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          handleWalletConnect={handleWalletConnect}
        />

        {/*wallet popup  */}

        <Afterconnectpopup
          isOpen={isWalletOpen}
          isConnecting={isConnecting}
          InjectedChainId={InjectedChainId}
          chainId={chainId}
          isConnected={isConnected}
          onClose={closePopup}
          handleNetworkChange={handleNetworkChange}
          disconnectMetamask={disconnectMetamask}
        />

        {/*  Agree Popup after connected */}
        <Agreepopup isOpen={isAgreeOpen} onClose={closePopup} />

        {/*mobile viwe side menu  */}
        <div
          className={`
          bg-[#0D0D0D] moblie-nav z-[50] fixed w-full top-0 overflow-y-auto overflow-x-hidden  bottom-0 py-24 
        duration-500 ${showDropNav ? "right-0" : "right-[-100%]"}
        `}
        >
          <div className=" flex items-start px-4 flex-col nav_font text-[#fff] text-base font-medium">
            <div className="">
              <Link href="/trade" onClick={handleLink}>
                Trade
              </Link>
            </div>
            <div className="py-4">
              <Link href="/pool" onClick={handleLink}>
                Pool
              </Link>
            </div>
            <div className="">
              <Link href="/stake" onClick={handleLink}>
                Stake
              </Link>
            </div>
            <div className="py-4">
              <Link href="/referral" onClick={handleLink}>
                Referral
              </Link>
            </div>
            <div className="">
              <Link href="/portfolio" onClick={handleLink}>
                Portfolio
              </Link>
            </div>
            <div className="py-4">
              <div className="relative" ref={mobiledropdownRef}>
                <div
                  className="flex items-center gap-1"
                  onClick={() => setShowLangDrop(!showLangDrop)}
                >
                  <Link href="">More</Link>
                  <RiArrowDownSFill
                    className={` cursor-pointer ${
                      showLangDrop ? "transform rotate-180" : ""
                    } w-4 h-4`}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className={`${
                    showLangDrop ? "block" : "hidden"
                  } absolute  mt-4 w-full z-50  `}
                >
                  <div className="flex">
                    <div className="bg-[#1B1B1B] min-w-[216px] max-[500px]:min-w-[160px] max-[343px]:min-w-[125px] py-4 px-[8px] rounded-l-[8px] border-[1px] border-solid border-[#25272A] ">
                      {innerLinks.map((link, index) => (
                        <Link key={index} href={link.href} onClick={handleLink}>
                          <div
                            onClick={() => setShowLangDrop(!showLangDrop)}
                            className="pool_font text-[#fff] mb-1 text-xs font-normal tracking-[0.06px] hover:bg-[#25272A] rounded-[4px] px-2 py-2 active:bg-[#25272A]"
                          >
                            {link.text}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-[#161818] min-w-[160px] max-[343px]:min-w-[125px] py-4 px-[8px] rounded-r-[8px] border-t-[1px] border-b-[1px] border-r-[1px] border-solid border-[#25272A]">
                      <div
                        onClick={() => setShowLangDrop(!showLangDrop)}
                        className=""
                      >
                        <span className="pool_font text-[#6B7280] pl-2  mb-4 text-[10px] font-normal tracking-[0.05px]">
                          Join Community
                        </span>

                        <Link href="#">
                          <div
                            onClick={() => setShowLangDrop(!showLangDrop)}
                            className="flex items-center gap-[12px]  hover:bg-[#25272A] rounded-[4px] px-2 py-2 active:bg-[#25272A]"
                          >
                            <span>
                              <FaDiscord className="text-xl text-[#fff]" />
                            </span>
                            <span className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                              Discord
                            </span>
                          </div>
                        </Link>
                        <Link href="">
                          <div
                            onClick={() => setShowLangDrop(!showLangDrop)}
                            className="flex items-center gap-[12px] hover:bg-[#25272A] rounded-[4px] px-2 py-2 active:bg-[#25272A]"
                          >
                            <span>
                              <FaXTwitter className="text-xl text-[#fff]" />
                            </span>
                            <span className="pool_font text-[#fff] text-xs font-normal tracking-[0.06px]">
                              Twitter
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Link href="/stake">
                <div className="flex items-center gap-[4px]  btn py-2 px-3 animated-bg">
                  <Image
                    className="w-[16px]"
                    priority
                    src={Buttonicons}
                    alt="Buttonicons"
                  />
                  <span className="nav_font text-[#40CABC] font-semibold text-[16px] ">
                    Earn 62% APR on USDC
                  </span>
                </div>
              </Link>
            </div>

            <div className="py-4">
              {!isConnected ? (
                <button
                  onClick={connectWallet}
                  className="items-center nav_font w-[234px] text-[#0B2B28] text-base font-semibold  btn_one  py-[10px] px-[16px]"
                >
                  Connect Wallet
                </button>
              ) : chainId == InjectedChainId ? (
                <>
                  <div className="flex items-center gap-[8px] wallet_coonected  px-[12px] h-[38px]">
                    <div className="flex flex-col text-right justify-end ">
                      <span className="text-[#939191] wallet_connected_font font-medium text-xs tracking-{0.2px} ">
                        Portfolio Value
                      </span>
                      <span className="nav_font text-[#fff] font-medium text-xs ">
                        {walletBalance?.data &&
                          `${walletBalance.data.formatted} ${walletBalance.data.symbol}`}
                      </span>
                    </div>
                    <div className="w-[1px] h-[34px] bg-[#272727]"> </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col text-right justify-end ">
                        <span className="text-[#939191] wallet_connected_font font-medium text-xs tracking-{0.2px} ">
                          Linked Wallet
                        </span>
                        <span className="nav_font text-[#fff] font-medium text-xs ">
                          {COMMON_FUNCTIONS.formatMetamaskAddress(address)}
                        </span>
                      </div>

                      {!showWalletSideNav ? (
                        <div
                          className="cursor-pointer"
                          onClick={() => setWalletSideNav(!showWalletSideNav)}
                        >
                          <RiArrowDownSFill />
                        </div>
                      ) : (
                        <div
                          className="cursor-pointer"
                          onClick={() => setWalletSideNav(!showWalletSideNav)}
                        >
                          <RiArrowDownSFill />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 wallet_coonected w-[34px] h-[34px] flex items-center justify-center">
                    <MdNotifications className="text-[#fff] text-base" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-[8px] incorrect_network_bg  px-[12px] h-[38px]">
                    <div className="flex flex-col text-right justify-end ">
                      <span className="text-[#939191] wallet_connected_font font-medium text-xs tracking-{0.2px} ">
                        Portfolio Value
                      </span>
                      <span className="nav_font text-[#fff] font-medium text-xs ">
                        {walletBalance?.data &&
                          `${walletBalance.data.formatted} ${walletBalance.data.symbol}`}
                      </span>
                    </div>
                    <div className="w-[1px] h-[34px] bg-[#272727]"> </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <IoMdWarning className="text-[#D57501] text-[18px]" />
                      </span>
                      <div className="flex flex-col text-right justify-end ">
                        <span className="text-[#939191] wallet_connected_font font-medium text-xs tracking-{0.2px} ">
                          Linked Wallet
                        </span>
                        <span className="nav_font text-[#fff] font-medium text-xs ">
                          {COMMON_FUNCTIONS.formatMetamaskAddress(address)}
                        </span>
                      </div>

                      {!showWalletSideNav ? (
                        <div
                          className="cursor-pointer"
                          onClick={() => setWalletSideNav(!showWalletSideNav)}
                        >
                          <RiArrowDownSFill />
                        </div>
                      ) : (
                        <div
                          className="cursor-pointer"
                          onClick={() => setWalletSideNav(!showWalletSideNav)}
                        >
                          <RiArrowDownSFill />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="wallet_coonected w-[34px] h-[34px] flex items-center justify-center">
                    <MdNotifications className="text-[#fff] text-base" />
                  </div>
                </>
              )}
            </div>

            {/*<Link href="#">
              <div className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center">
                <MdNotifications className="text-[#fff] text-base" />
              </div>
            </Link> */}
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;

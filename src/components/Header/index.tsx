import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../public/assest/Logo.png";
import Buttonicons from "../../../public/assest/buttonicons.png";
import Metamaskicon from "../../../public/assest/metamaskicon.png";
import Metamaskimg from "../../../public/assest/metamsakimgs.png";
import Walletimg from "../../../public/assest/walletimg.png";
import Wallecticons from "../../../public/assest/wallecticons.png";
import Coinicons from "../../../public/assest/coinicons.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import COMMON_FUNCTIONS from "@/components/CommonFunctions/CommonFunctions"
import Link from "next/link";

import { MdNotifications, MdOutlineContentCopy, MdOutlineLogout } from "react-icons/md";
import { FaArrowRightLong, FaLock } from "react-icons/fa6";
import Image from "next/image";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useAccount, useBalance, useConnect, useDisconnect, useSwitchNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const innerLinks = [
  { text: "Help Center", href: "/" },
  { text: "Terms of Use", href: "/" },
  { text: "Privacy Policy", href: "/" },
  { text: "Reports Bug", href: "/" },
  { text: "Provide Feedback", href: "/" },
  { text: "Platform Status", href: "/" },
  { text: "Explore Community", href: "/" },
];

const InjectedChainId = 5
const Header = () => {
  // --- Wallet Functions
  // const { data, isError, isLoading } = useBalance({

  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  const walletDetails = useAccount()
  console.log(chains, "<<<<thesearechains")
  const { address, isConnected } = useAccount()
  const walletBalance = useBalance({
    address: address,
  })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  //  ---
  const [showDropNav, setShowDropNav] = useState(false);
  const [showWalletSideNav, setWalletSideNav] = useState(false);
  const [showLangDrop, setshowLangDrop] = useState(false);
  const [chainId, setchainId] = useState<any>(null)
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);



  const handleWalletConnect = () => {
    if (window.ethereum) {
      connect()
      setIsWalletOpen(true);
      setIsPopupOpen(false);
    } else {
      alert("Install metamask")
    }
  };

  const connectWallet = () => {
    setIsPopupOpen(true);
    setIsWalletOpen(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsWalletOpen(false);
  };

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
    let isWagmiConnected = localStorage.getItem("wagmi.connected")
    if (isWagmiConnected) {

      connect()
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
  }
  useEffect(() => {
    (async () => {
      setchainId(await currentChainId())

    })()

  }, [address, walletDetails])
  const disconnectMetamask = () => {
    disconnect()
    setIsWalletOpen(false)
    setWalletSideNav(false)
    localStorage.clear()
  }

  const handleNetworkChange = () => {
    switchNetwork?.(InjectedChainId)
  }

  const copyIt = async () => {
    try {
      await navigator.clipboard.writeText(`${address}`)
    } catch (error) {
      console.log(error)
    }


  };

  return (
    <div>
      <>
        <div
          className={`navbartop fixed top-0 z-[300] header_bg py-[12px] lg:px-[24px] px-4 w-full justify-between flex items-center text-white mx-auto  ${isScrolled ? "bg-1" : ""
            }`}
        >
          <div className="max-[1023px]:container lg:max-w-full lg:w-full mx-auto">
            <div className="flex justify-between text-[#fff] items-center max-[1023px]:hidden">
              <div className="flex items-center gap-10">
                <Link href="/" className="flex items-center gap-[8px]">
                  <Image className="w-[16px]" priority src={Logo} alt="logo" />
                  <span className="text-[#40E0D0] logo_font font-medium text-xs tracking-{0.96px}">
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
                  href=""
                  className="nav_font text-[#fff] text-xs font-medium"
                >
                  Trade
                </Link>
                <Link
                  href="/pool"
                  className="nav_font text-[#fff] text-xs font-medium"
                >
                  Pool
                </Link>
                <Link
                  href="/stake"
                  className="nav_font text-[#fff] text-xs font-medium"
                >
                  Stake
                </Link>
                <Link
                  href="/referral"
                  className="nav_font text-[#fff] text-xs font-medium"
                >
                  Referral
                </Link>
                <div className="w-[1px] h-[12px] bg-[#2A2A2A]"> </div>
                <Link
                  href=""
                  className="nav_font text-[#fff] text-xs font-medium"
                >
                  Portfolio
                </Link>
                <Link
                  href=""
                  className="nav_font text-[#fff] text-xs font-medium flex items-center gap-1"
                >
                  More
                  <div className="relative">
                    <RiArrowDownSFill
                      onClick={() => setshowLangDrop(!showLangDrop)}
                      className="text-[#fff] text-base"
                    />

                    {showLangDrop && (
                      <div
                        ref={dropdownRef}
                        className="absolute bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px]  top-6 right-[-98px] min-w-[150px] px-2 w-full  text-left"
                      >
                        {innerLinks.map((link, index) => (
                          <Link key={index} href={link.href}>
                            <div
                              onClick={() => setshowLangDrop(!showLangDrop)}
                              className="nav_font text-[#fff] my-4 text-xs font-medium"
                            >
                              {link.text}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </div>

              <div>
                <div className="flex items-center gap-[22px] w-full">
                  <div className="flex items-start gap-[4px]  btn py-[10px] px-3">
                    <Image
                      className="w-[16px]"
                      priority
                      src={Buttonicons}
                      alt="Buttonicons"
                    />
                    <span className="nav_font text-[#40CABC] font-semibold text-xs ">
                      Earn 62% APR on USDC
                    </span>
                  </div>
                  <div className="w-[1px] h-[34px] bg-[#272727]"> </div>
                  {!isConnected ? <button
                    onClick={connectWallet}
                    className="items-center nav_font text-[#0B2B28] text-xs font-semibold  btn_one  py-[10px] px-[16px]"
                  >
                    Connect Wallet
                  </button> :
                    <>

                      <div className="flex items-center gap-[8px] wallet_coonected  px-[12px] h-[38px]">
                        <div className="flex flex-col text-right justify-end ">
                          <span className="text-[#939191] wallet_connected_font font-medium text-[10px] tracking-{0.2px} ">
                            Portfolio Value
                          </span>
                          <span className="nav_font text-[#fff] font-medium text-[10px] ">
                            {walletBalance?.data && `${(walletBalance.data).formatted} ${walletBalance.data.symbol}`}
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
                    </>}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-3 lg:hidden">
              <Link href="/" className="flex items-center gap-[8px]">
                <Image className="w-[16px]" priority src={Logo} alt="logo" />
                <span className="text-[#40E0D0] logo_font font-medium text-base tracking-{0.96px}">
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
            </div>
          </div>
        </div>
        {/**-----------------after wallet connected sidebar */}
        <div
          className={`
          sidebar_wallet_menu moblie-nav  px-3  max-[991px]:z-[50] z-[300] fixed lg:w-[360px]  w-full  top-0 overflow-y-auto overflow-x-hidden  bottom-0 pt-5 
        duration-500 ${showWalletSideNav ? "right-0" : "right-[-100%]"}
        `}
        >
          <div className="flex justify-between items-center  pb-3 ">
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
                  <MdOutlineContentCopy onClick={copyIt} className="text-[#fff] text-base cursor-pointer " />
                </span>
                <span>
                  <MdOutlineLogout onClick={disconnectMetamask} className="text-[#fff] cursor-pointer text-base" />
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
          <div className="border-[1px] border-dashed border-[#FFFFFF1A] my-[16px]"></div>
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
          <div className="border-[1px] border-dashed border-[#FFFFFF1A] my-[16px]"></div>
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
          <div className="flex gap-[4px] items-center">
            <p className="pool_font text-[#00CC99] font-medium text-xs tracking-[0.06px]">
              View all
            </p>
            <span>
              <FaArrowRightLong className="text-[#00CC99] text-xs" />
            </span>
          </div>
          <div className="border-[1px] border-dashed border-[#FFFFFF1A] my-[16px]"></div>
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
            <p className="pool_font text-[#00CC99] font-medium text-xs tracking-[0.06px]">
              View all
            </p>
            <span>
              <FaArrowRightLong className="text-[#00CC99] text-xs" />
            </span>
          </div>
          <div className="border-[1px] border-solid border-[#FFFFFF1A] my-[16px]"></div>
          <div className="flex gap-[8px] items-center">
            <span>
              <FaLock className="text-[#00CC99] text-xs" />
            </span>
            <p className="pool_font text-[#00CC99] font-medium text-xs tracking-[0.06px]">
              View Portfolio
            </p>
          </div>
        </div>
        {/*wallet popup  */}
        {isPopupOpen && (
          <>
            <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm  bg-black opacity-90"></div>
            <div className="fixed inset-0  flex justify-center items-center z-[9999]  top-[10%] ">
              <div className="  wallet_popup w-full max-w-[480px] transform  p-5 text-left align-middle shadow-xl transition-all ">
                <div className="flex items-center justify-between gap-2 ">
                  <p className="text-[#fff] text-2xl font-semibold nav_font ">
                    Connect Wallet
                  </p>
                  <button
                    className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                    onClick={closePopup}
                  >
                    <AiOutlineClose className="text-2xl text-white" />
                  </button>
                </div>

                <div className="py-7">
                  <Link
                    href={""}
                    onClick={handleWalletConnect}
                    className="flex items-center gap-3 box_wallet"
                  >
                    <Image
                      className="w-[24px]"
                      src={Metamaskicon}
                      priority
                      alt="Metamaskicon"
                    />
                    <span className="text-base text-[#fff] font-medium nav_font">
                      MetaMask
                    </span>
                  </Link>
                  <Link
                    href={""}
                    className="flex items-center gap-3 box_wallet my-3 "
                  >
                    <Image
                      className="w-[24px]"
                      src={Wallecticons}
                      priority
                      alt="Wallecticons"
                    />
                    <span className="text-base text-[#fff] font-medium nav_font">
                      WalletConnect
                    </span>
                  </Link>
                  {/*  <Link
                    href={""}
                    className="flex items-center gap-3 box_wallet"
                  >
                    <Image
                      className="w-[24px]"
                      src={Coinicons}
                      priority
                      alt="coinicons"
                    />
                    <span className="text-base text-[#fff] font-medium nav_font">
                      Coinbase Wallet
                    </span>
                  </Link> */}
                </div>
                <p className="text-[#939191] text-xs font-medium nav_font ">
                  Can’t connect your wallet?{""}
                  <span className="text-[#40E0D0]"> Get Help</span>
                </p>
                <div className="border-[1px] border-dashed border-[#FFFFFF1A] my-[24px]"></div>
                <p className="text-[#939191]  text-xs font-medium nav_font ">
                  By continuing, you agree to Filament’s Terms of Service &
                  Privacy Policy
                </p>
              </div>
            </div>
          </>
        )}
        {/*wallet popup  */}
        {isWalletOpen && (
          <>
            <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm  bg-black opacity-90"></div>
            <div className="fixed inset-0  flex justify-center items-center z-[9999]  top-[10%] ">
              <div className="  wallet_popup w-full max-w-md transform  p-5 text-left align-middle shadow-xl transition-all ">
                <div className="flex items-center justify-between gap-2 ">
                  <p className="text-[#fff] text-2xl font-semibold nav_font ">
                    Manage Wallet
                  </p>
                  <button
                    className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                    onClick={closePopup}
                  >
                    <AiOutlineClose className="text-2xl text-white" />
                  </button>
                </div>

                <div className="py-7">
                  <div className="flex justify-center">
                    {isConnected ? <Image
                      className="w-[317px]"
                      src={Metamaskimg}  // green metamask
                      priority
                      alt="Metamaskimg"
                    /> : <Image
                      className="w-[317px]"
                      src={Metamaskimg}
                      priority
                      alt="Metamaskimg"
                    />}
                  </div>
                  <Link href={""} className=" ">
                    <p className="text-[20px] text-center text-[#fff] font-semibold nav_font">
                      {isConnected ? "Connected to metamask" : "Connecting to MetaMask"}
                    </p>
                  </Link>
                  {/* Switch to injected Network  */}
                  {isConnected && chainId != InjectedChainId ?
                    <>

                      <div className="flex justify-center">
                        <button
                          // disabled={!switchNetwork || x.id === chain?.id}
                          className="items-center nav_font w-[234px] text-[#0B2B28] text-base font-semibold  btn_one  py-[10px] px-[16px]"

                          onClick={handleNetworkChange}
                        >
                          Switch to injective

                        </button>
                      </div>
                      <div
                        onClick={disconnectMetamask}
                        className="items-center text-center  text-[#ffffff] text-xs font-semibold    py-[10px] px-[16px]"
                      >
                        Disconnect Wallet
                      </div>
                    </>
                    :
                    <div
                      onClick={disconnectMetamask}
                      className="items-center text-center  text-[#ffffff] text-xs font-semibold    py-[10px] px-[16px]"
                    >
                      Metamask Connected
                    </div>
                  }

                </div>
              </div>
            </div>
          </>
        )}
        {/*   Popup after connected */}

        {/*mobile viwe side menu  */}
        <div
          className={`
          bg-[#0D0D0D] moblie-nav z-[50] fixed w-full top-0 overflow-y-auto overflow-x-hidden  bottom-0 py-24 
        duration-500 ${showDropNav ? "right-0" : "right-[-100%]"}
        `}
        >
          <div className=" flex items-start px-4 flex-col nav_font text-[#fff] text-base font-medium">
            <div className="">
              <Link href="#" onClick={handleLink}>
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
              <Link href="" onClick={handleLink}>
                Referral
              </Link>
            </div>
            <div className="">
              <Link href="" onClick={handleLink}>
                Portfolio
              </Link>
            </div>
            <div className="py-4">
              <Link href="" className=" flex items-center gap-1">
                More
                <div className="relative">
                  <RiArrowDownSFill
                    onClick={() => setshowLangDrop(!showLangDrop)}
                    className="text-[#fff] text-base"
                  />

                  {showLangDrop && (
                    <div
                      ref={dropdownRef}
                      className="absolute bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px]  top-6 right-[-98px] min-w-[150px] px-2 w-full  text-left"
                    >
                      {innerLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                          <div
                            onClick={() => setshowLangDrop(!showLangDrop)}
                            className="nav_font text-[#fff] my-4 text-xs font-medium"
                          >
                            {link.text}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </div>
            <div className="">
              <div className="flex items-center gap-[4px]  btn py-2 px-3">
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
            </div>
            <div className="py-4">
              <button
                onClick={connectWallet}
                className="items-center nav_font w-[234px] text-[#0B2B28] text-base font-semibold  btn_one  py-[10px] px-[16px]"
              >
                Connect Wallet
              </button>
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

import React, { useEffect, useReducer, useState } from "react";
import Subheader from "./Subheader";
import Leftsidecomponent from "./Leftsidecomponent";
import Middlesidecomponent from "./Middlesidecomponent";
import Rightsidecomponent from "./Rightsidecomponent";
import { useDispatch } from "react-redux";
import Tablesection from "./Table";
import DepositPupopup from "../Commoncomponent/Despoitpopup";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { LAYOUT_REDUCER_ACTIONS } from "../../../redux/reducers/layoutReducer";
import Errormsg from "../Commoncomponent/Errormsg";
interface Tradesprops {
  //handlePriceClick: any;
  connectWallet: () => void;
  InjectedChainId: number;
  chainId: number;
  handleWalletConnect: () => void;
  handleNetworkChange: () => void;
  disconnectMetamask: () => void;
}
const Trade: React.FC<Tradesprops> = ({
  connectWallet,
  chainId,
  InjectedChainId,
  handleWalletConnect,
  handleNetworkChange,
  disconnectMetamask,
}) => {
  const [isPageLoading, setisPageLoading] = useState(true)
  useEffect(() => {

    setTimeout(() => {
      setisPageLoading(false)
    }, 2000);
  }, [])


  const dispatch = useDispatch();
  const TRADE_LAYOUT = useSelector((state: any) => state.TRADE_LAYOUT);

  const toggleLayout = (value: boolean) => {
    dispatch(LAYOUT_REDUCER_ACTIONS.changeLayout(value));
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isStakeOpen, setIsStakeOpen] = useState(false);
  const [currencyState, setcurrencyState] = useState("BINANCE:ETHUSDT");
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    amount: "100",
  });
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  const handlePriceClick = (price: string) => {
    setSelectedPrice(price);
  };
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (/^\d*$/.test(value) || value === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setIsStakeOpen(false);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const handleDelete = () => {
    setIsPopupOpen(true);
    setIsStakeOpen(false);
  };
  const StakeOpenPopup = () => {
    setIsStakeOpen(true);
    setIsPopupOpen(false);
  };

  return (
    <>
      {error ? (
        <div className=" flex justify-center items-center py-[120px] min-h-screen">
          <Errormsg />
        </div>
      ) : (
        <div className="">
          <Subheader
            isPageLoading={isPageLoading}
            toggleLayout={toggleLayout}
            TRADE_LAYOUT={TRADE_LAYOUT}
            currencyState={currencyState}
            setcurrencyState={setcurrencyState}
          />
          <div
            className={`lg:pt-[123px]  lg:pb-5 py-[100px] lg:grid ${TRADE_LAYOUT ? "grids-width" : "grids-width2"
              } relative max-[1023px]:container max-[1023px]:mx-auto max-[1023px]:px-4`}
          >
            {TRADE_LAYOUT ? (
              <>
                <div className="flex flex-col w-full">
                  <div className="lg:grid grid-width">
                    <div className="">
                      <Leftsidecomponent isPageLoading={isPageLoading} currencyState={currencyState} />
                    </div>
                    <div className="">
                      <Middlesidecomponent isPageLoading={isPageLoading} onPriceClick={handlePriceClick} />
                    </div>
                  </div>
                  <div>
                    <Tablesection
                      isPageLoading={isPageLoading}
                      handleWalletConnect={handleWalletConnect}
                      InjectedChainId={InjectedChainId}
                      chainId={chainId}
                      handleNetworkChange={handleNetworkChange}
                      disconnectMetamask={disconnectMetamask}
                      // isConnected={isConnected}
                      connectWallet={connectWallet}
                    />
                  </div>
                </div>
                <div className="">
                  <Rightsidecomponent
                    isPageLoading={isPageLoading}
                    //  formData={formData}
                    handleWalletConnect={handleWalletConnect}
                    StakeOpenPopup={StakeOpenPopup}
                    InjectedChainId={InjectedChainId}
                    chainId={chainId}
                    handleNetworkChange={handleNetworkChange}
                    disconnectMetamask={disconnectMetamask}
                    selectedPrice={selectedPrice} // isConnected={isConnected}
                    connectWallet={connectWallet}
                  />
                </div>
              </>
            ) : (
              <>
                {/* market-limit */}
                <div className="">
                  <Rightsidecomponent
                    isPageLoading={isPageLoading}
                    connectWallet={connectWallet}
                    InjectedChainId={InjectedChainId}
                    chainId={chainId}
                    //  formData={formData}
                    handleNetworkChange={handleNetworkChange}
                    disconnectMetamask={disconnectMetamask}
                    handleWalletConnect={handleWalletConnect}
                    StakeOpenPopup={StakeOpenPopup}
                    selectedPrice={selectedPrice} // isConnected={isConnected}
                  />
                </div>
                {/* Chart */}
                <div className="flex flex-col w-full">
                  <div className="lg:grid grid-width">
                    <div className="">
                      <Leftsidecomponent isPageLoading={isPageLoading} currencyState={currencyState} />
                    </div>
                    <div className="">
                      <Middlesidecomponent isPageLoading={isPageLoading} onPriceClick={handlePriceClick} />
                    </div>
                  </div>
                  <div>
                    <Tablesection
                      handleWalletConnect={handleWalletConnect}
                      InjectedChainId={InjectedChainId}
                      isPageLoading={isPageLoading}
                      chainId={chainId}
                      handleNetworkChange={handleNetworkChange}
                      disconnectMetamask={disconnectMetamask}
                      // isConnected={isConnected}
                      connectWallet={connectWallet}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {isStakeOpen && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-background/80 backdrop-blur-sm bg-black opacity-90"></div>
          <div className="fixed inset-0 flex justify-center items-center z-[9999] top-[10%] max-[500px]:px-4">
            <div className="pool_wallet_popup w-full max-w-[540px] transform p-5 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[#fff] text-[20px] font-semibold pool_font tracking-[0.1px]">
                  Deposit
                </p>
                <button
                  className="bg-[#1B1B1B] border-[1px] border-solid border-[#323232] rounded-[4px] w-[34px] h-[34px] flex items-center justify-center"
                  onClick={StakeOpenPopup}
                >
                  <AiOutlineClose className="text-2xl text-white" />
                </button>
              </div>
              <div className="my-5">
                <div className="input_field_bg flex items-center gap-3 mt-4 w-full px-4 h-[45px] ">
                  <span className="pool_font text-[#9CA3AF] text-sm font-medium tracking-[0.07px]">
                    Amount
                  </span>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-right h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-white"
                    placeholder="0.0"
                  />
                </div>
                <div className="flex justify-between items-center  my-4 ">
                  <p className="pool_font text-xs font-normal tracking-[0.06px] text-[#9CA3AF]">
                    Available Collateral:{" "}
                    <span className="text-[#D65454]">$500.68</span>
                  </p>
                  <div className="flex items-center gap-[4px]">
                    <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B]">
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        75%
                      </p>
                    </div>
                    <div className="cursor-pointer rounded-[4px] flex justify-center items-center py-[4px] px-[6px] max-border  bg-[#2B2B2B]">
                      <p className="pool_font text-xs font-medium tracking-[0.06px] text-[#FFFFFF]">
                        100%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleDelete}
                  className="items-center w-full nav_font text-[#0B2B28] text-sm font-semibold  btn_one  py-[16px] px-[16px]"
                >
                  Despoit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <DepositPupopup
        formData={formData}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </>
  );
};

export default Trade;

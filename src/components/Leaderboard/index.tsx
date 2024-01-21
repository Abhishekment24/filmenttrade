import React, { useState } from "react";

import Image from "next/image";

import { BiSearch } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { tableleaderData } from "./data";
import Orderplace from "../Commoncomponent/Alertpopup/Orderplace";
import Postionpopup from "../Commoncomponent/Alertpopup/Positioncreatedpopup";
import Failedorder from "../Commoncomponent/Alertpopup/Failedorder";
import Errormsg from "../Commoncomponent/Errormsg";
const Leaderboard = () => {
  const [error, setError] = useState(false);
  const [openpopup, setOpenpopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const closePopup = () => {
    setOpenpopup(false);
  };
  const Opens = () => {
    setOpenpopup(true);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = tableleaderData.filter((data) =>
    data.account.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <section className="py-[120px] pool_bg lg:h-[60px] max-[1023px]:overflow-hidden ">
        <div className="container mx-auto max-[1279px]:px-4">
          <div onClick={Opens} className="">
            <p className="pool_font text-[#fff] text-2xl font-semibold">
              Leaderboard
            </p>
          </div>
          <div className="leader_bg p-[24px] my-[24px]">
            <div className="flex justify-between items-center gap-3">
              <div
                className={`input_field_bg flex items-center gap-3 my-4 w-[240px] px-4 h-[45px] ${
                  error
                    ? "focus-within:border-[#D65454] border-[#D65454]"
                    : isDisabled
                    ? "border-[#40E0D0]"
                    : "focus-within:border-[#40E0D0] border-gray-gray4"
                } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Search Address"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className=" block w-full pool_font text-[#fff] text-[15px] font-medium text-left h-[45px]  bg-transparent border-solid  outline-none focus:ring-0 placeholder-gray-500"
                  disabled={isDisabled}
                />

                <span className="pool_font text-[#9CA3AF] text-[15px] font-medium tracking-[0.075px]">
                  <BiSearch />
                </span>
              </div>

              <div>
                <Dropdown />
              </div>
            </div>
            <div className="py-[24px]">
              {error ? (
                <tbody className="text-center justify-center flex font-medium px-2 py-2">
                  <Errormsg />
                </tbody>
              ) : (
                <div className="flex w-full overflow-auto no-scrollbar border-[1px] border-solid border-[#25272A]">
                  <table className="w-full">
                    <thead>
                      <tr className="pool_font text-xs font-medium border-b-[1px] border-solid border-[#25272A]  text-[#9CA3AF]">
                        <th className="text-left font-medium  px-3 py-2">
                          Rank
                        </th>
                        <th className="text-left font-medium  px-3 py-2">
                          Account
                        </th>
                        <th className="text-right font-medium px-3 py-2">
                          Profit/ Loss(%)
                        </th>
                      </tr>
                    </thead>

                    <tbody className="">
                      {filteredData.length === 0 ? (
                        <tr className="relative w-full">
                          <td className="text-center text-[#9CA3AF] text-sm font-medium px-2 py-2">
                            No Leaderboard
                          </td>
                        </tr>
                      ) : (
                        <>
                          {filteredData.slice(0, 10).map((data, index) => (
                            <tr
                              key={index}
                              className={`pool_font text-sm ${
                                index === 2 ? "table_body" : ""
                              } text-[#E5E7EB] border-b-[1px] border-solid border-[#25272A] tracking-[0.07px]`}
                            >
                              <td className="text-left  font-medium px-3 py-2">
                                <div className="flex items-center gap-[10px]">
                                  <Image
                                    className="w-[18px]"
                                    priority
                                    src={data.rankimg}
                                    alt=""
                                  />
                                  <div>{data.rank}</div>
                                </div>
                              </td>
                              <td className="text-left  font-medium px-3 py-2">
                                {data.account}
                              </td>
                              <td className="text-right text-[#10B981] flex flex-col gap-1 font-medium px-3 py-2">
                                {data.profitloss}
                                <span className="text-[#E5E7EB] text-base font-normal">
                                  {data.profitprice}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
     {/*} <Failedorder
        isOpen={openpopup}
        onClose={closePopup}
        failStatus="placed"
      />*/}
      <Orderplace isOpen={openpopup} onClose={closePopup} orderStatus="placed" />
    </>
  );
};

export default Leaderboard;

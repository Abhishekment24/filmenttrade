import React from "react";
import Charts from "./Charts";
import LoadingGraph from "../../../../public/assest/loadinggraph.svg"
import Image from "next/image";
interface leftInterface {
  currencyState: String;
  isPageLoading: boolean
}

const Leftsidecomponent: React.FC<leftInterface> = ({ currencyState, isPageLoading }) => {
  return (
    <div className="lg:h-[632px] h-[400px]">
      {isPageLoading ? <Image src={LoadingGraph} alt="Loading graph" className="w-full" style={{ objectFit: "cover" }} /> : <Charts currencyState={currencyState} />}

    </div>
  );
};

export default Leftsidecomponent;

import React from "react";
import Charts from "./Charts";

interface leftInterface {
  currencyState: String;
}

const Leftsidecomponent: React.FC<leftInterface> = ({ currencyState }) => {
  return (
    <div className="lg:h-[632px] h-[400px]">
      <Charts currencyState={currencyState} />
    </div>
  );
};

export default Leftsidecomponent;

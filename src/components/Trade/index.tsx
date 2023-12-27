import React from "react";
import Subheader from "./Subheader";
import Leftsidecomponent from "./Leftsidecomponent";
import Middlesidecomponent from "./Middlesidecomponent";
import Rightsidecomponent from "./Rightsidecomponent";

const Trade = () => {
  return (
    <div className="">
      <Subheader />
      <div className="py-[123px] grid grid-width relative first-line:       ">
        <div className="overflow-y-scroll ">
          <Leftsidecomponent />
        </div>
        <Middlesidecomponent />
        <div className="">
          <Rightsidecomponent />
        </div>
      </div>
    </div>
  );
};

export default Trade;

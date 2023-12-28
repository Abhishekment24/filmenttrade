import React from "react";
import Subheader from "./Subheader";
import Leftsidecomponent from "./Leftsidecomponent";
import Middlesidecomponent from "./Middlesidecomponent";
import Rightsidecomponent from "./Rightsidecomponent";
import Tablesection from "./Table";

const Trade = () => {
  return (
    <div className="">
      <Subheader />
      <div className="lg:py-[123px] py-[100px] lg:grid grids-width relative max-[1023px]:container max-[1023px]:mx-auto max-[1023px]:px-4">
        <div className="flex flex-col w-full">
          <div className="flex w-full max-[1023px]:flex-col items-center">
            <div className="lg:w-[70%] xl:w-[78%] w-full">
              <Leftsidecomponent />
            </div>
            <div className="lg:w-[30%] xl:w-[22%] w-full">
              <Middlesidecomponent />
            </div>
          </div>
          <div>
            <Tablesection />
          </div>
        </div>
        <div className="">
          <Rightsidecomponent />
        </div>
      </div>
    </div>
  );
};

export default Trade;

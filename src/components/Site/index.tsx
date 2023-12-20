import React from "react";
import Header from "../Header";

const Sites = ({ children }: any) => {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
};

export default Sites;

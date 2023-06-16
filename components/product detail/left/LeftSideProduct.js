import React from "react";
import Left from "./Left";
import Right from "./Right";

const LeftSideProduct = () => {
  return (
    <div className="w-[60%] relative flex justify-between pb-16 border-b-2">
      <Left />
      <Right />
    </div>
  );
};

export default LeftSideProduct;

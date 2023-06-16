import React from "react";
import LeftSideProduct from "./left/LeftSideProduct";
import RightSideProduct from "./right/RightSideProduct";

const MainProductDetail = () => {
  return (
    <div className="relative grid w-full min-h-screen -mt-5 place-items-center">
      <div className="w-[90%] h-full flex justify-between">
        <LeftSideProduct />
        <RightSideProduct />
      </div>
    </div>
  );
};

export default MainProductDetail;

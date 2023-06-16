import React from "react";

const Right = () => {
  return (
    <div className="w-[85%] flex flex-col gap-5">
      <RightItem />
      <RightItem />
      <RightItem />
      <RightItem />
      <RightItem />
      <RightItem />
    </div>
  );
};

export default Right;

const RightItem = () => {
  return <div className="w-full bg-blue-300 h-[500px]"></div>;
};

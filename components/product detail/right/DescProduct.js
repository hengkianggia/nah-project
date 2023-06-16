import React from "react";

const DescProduct = () => {
  return (
    <div className="flex flex-col w-full">
      <h1>FEEL THE PULSE SANDAL WHITE</h1>
      <div className="flex gap-4">
        <h2 className="text-red-500">RP.120.000</h2>
        <s>RP.140.000</s>
      </div>
      <Size />
      <Quantity />
    </div>
  );
};

export default DescProduct;

const Size = () => {
  return (
    <div className="flex flex-col w-full">
      <h1>Size :</h1>
      <div className="flex gap-4">
        <div className="w-10 h-10 border grid place-items-center cursor-pointer">
          39
        </div>
        <div className="w-10 h-10 border grid place-items-center cursor-pointer">
          40
        </div>
        <div className="w-10 h-10 border grid place-items-center cursor-pointer">
          41
        </div>
        <div className="w-10 h-10 border grid place-items-center cursor-pointer">
          42
        </div>
        <div className="w-10 h-10 border grid place-items-center cursor-pointer">
          43
        </div>
        <div className="w-10 h-10 border grid place-items-center cursor-pointer">
          44
        </div>
      </div>
    </div>
  );
};

const Quantity = () => {
  return <div className="flex flex-col w-full">
    <h1>Quantity :</h1>
    <div className="flex gap-5 p-2 border w-32 text-lg px-5 justify-center">
      <span className="cursor-pointer">-</span>
      <span className="cursor-pointer">10</span>
      <span className="cursor-pointer">+</span>
    </div>
  </div>;
};

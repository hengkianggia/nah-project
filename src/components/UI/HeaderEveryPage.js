import React from "react";

const HeaderEveryPage = ({ title, desc }) => {
  return (
    <>
      <div className="relative w-full h-24 bg-blackgrey mb-10"></div>
      <div className="w-full flex flex-col items-center text-center gap-5">
        <h1 className="text-3xl text-blackgrey uppercase">{title}</h1>
        <p className=" text-blackgrey max-w-lg text-[13px]">{desc}</p>
      </div>
    </>
  );
};

export default HeaderEveryPage;

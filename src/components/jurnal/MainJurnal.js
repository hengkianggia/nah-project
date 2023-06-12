import Image from "next/image";
import React from "react";
import gambar from "../../assets/head_jurnal.webp";
import Button from "../UI/Button";
import JurnalList from "./JurnalList";

const MainJurnal = () => {
  return (
    <div className="w-full px-20 mt-8 space-y-12">
      <HeadMainJurnal image={gambar} />
      <JurnalList />
    </div>
  );
};

export default MainJurnal;

const HeadMainJurnal = ({ image }) => {
  return (
    <div className="w-full relative h-[420px] overflow-hidden">
      <Image
        src={image}
        width={1000}
        height={1000}
        className="w-full h-[420px] object-cover object-center hover:scale-150 transition-all duration-[5s]"
      />

      <span className="absolute flex flex-col items-start gap-5 left-10 bottom-10">
        <h2 className="text-2xl text-white">IMPROVEMENT MAKE BETTER</h2>
        <Button className={"bg-white text-blackgrey"} text={"READ MORE"} />
      </span>
    </div>
  );
};

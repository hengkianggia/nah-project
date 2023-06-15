import Image from "next/image";
import React from "react";
import Button from "../UI/Button";
import gambar from "../../../public/assets/Collection.webp";

const MainCollection = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between w-full min-h-screen px-10 pt-10 gap-y-6">
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
        <Collection
          image={gambar}
          title={"+62 SERIES (PLUS ENAM DUA SERIES)"}
        />
      </div>
    </>
  );
};

export default MainCollection;

const Collection = ({ image, title }) => {
  return (
    <>
      <div className="w-[32%] h-[95vh] relative overflow-hidden">
        <Image
          src={image}
          width={"150px"}
          height={"400px"}
          className="object-cover object-center w-full h-full"
        />
        <span className="absolute bottom-10 left-10 space-y-5 z-[1]">
          <h1 className="text-xl text-white">{title}</h1>
          <Button
            text={"View Products"}
            className={"bg-white text-blackgrey"}
          />
        </span>
      </div>
    </>
  );
};

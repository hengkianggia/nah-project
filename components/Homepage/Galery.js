import Image from "next/image";
import React from "react";
import gambar from "../../public/assets/pulsecheck.webp";
import gambar1 from "../../public/assets/product1.webp";
import Button from "../UI/Button";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const data = [
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
  { image: gambar1 },
];

const Galery = () => {
  return (
    <div className="w-full my-10 space-y-8">
      <span className="relative grid place-items-center">
        <Image src={gambar} width="100%" height="100%" objectFit="cover" />
        <Button
          className={"bg-white text-blackgrey absolute top-[45%] left-[42%]"}
          text={"View All Product"}
        />
      </span>

      <span className="relative flex flex-wrap justify-center w-full">
        {data.map((item, index) => {
          return <IgPost key={index} image={item.image} />;
        })}
      </span>
    </div>
  );
};

export default Galery;

const IgPost = ({ image, link }) => {
  return (
    <div className="w-[25%] relative">
      <Link href={link ? link : ""}>
        <Image src={image} width="100%" height={"100%"} objectFit="cover" />
        <span className="w-full h-full absolute inset-0 opacity-0 hover:opacity-[.4] transition-all z-50 bg-gradient-radial from-transparent to-gray-600 grid place-items-center">
          <div className="text-2xl">
            <BsInstagram />
          </div>
        </span>
      </Link>
    </div>
  );
};

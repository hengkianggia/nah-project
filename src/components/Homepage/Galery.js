import Image from "next/image";
import React from "react";
import gambar from "../../assets/pulsecheck.webp";
import Link from "next/link";

const Galery = () => {
  return (
    <div className="w-full space-y-3 my-10">
      <span className="relative grid place-items-center">
        <Image
          src={gambar}
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <button className="absolute  px-6 py-2 text-blackgrey bg-white">
          <Link href={""}>View All Product</Link>
        </button>
      </span>
    </div>
  );
};

export default Galery;

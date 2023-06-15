import React from "react";
import gambar from "../../public/assets/jurnal_nah.webp";
import Image from "next/image";
import Link from "next/link";

const PresRelease = () => {
  return (
    <div className="w-full flex justify-between px-16">
      <div className="w-[55%]">
        <Image src={gambar} width="100%" height="100%" objectFit="cover" />
      </div>

      <div className="w-[45%] mt-auto mb-20 pr-32 flex flex-col gap-y-4 items-start">
        <h2 className="font-semibold">PRESS RELEASE</h2>
        <h1 className="text-3xl font-semibold">IMPROVEMENTS MAKE BETTER</h1>
        <p className="text-sm">
          Kemunculan awalnya di tahun 2020, Audacity masih menjadi the most
          wanted product hingga saat ini. Perubahan dan inovasinya dari tahun ke
          tahun membuat Audacity ini semakin banyak dicari dan
          ditunggu-tunggu....
        </p>

        <button className="text-gray-400 underline">
          <Link href={""}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default PresRelease;

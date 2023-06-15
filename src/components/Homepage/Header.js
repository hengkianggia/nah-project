import Image from "next/image";
import React from "react";
import header from "../../../public/assets/nah_header.webp";

const Header = () => {
  return (
    <div className="w-full min-h-[100vh] relative">
      <Image src={header} width='100%' height='100%' objectFit="cover"/>
    </div>
  );
};

export default Header;

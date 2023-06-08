import React from "react";
import nahLogo from "../../assets/logo_nah.webp";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-6 flex flex-col border-b-2 bg-blackgrey gap-3">
      <div className="flex w-[52%] items-center self-end justify-between">
        <Image
          src={nahLogo}
          alt=""
          className="w-12 h-12 object-cover object-center"
        />
        <div className="flex text-lg text-white">
          <span>
            <BiUser />
          </span>
          <span>
            <AiOutlineShoppingCart />
          </span>
        </div>
      </div>

      <div className="w-full">
        <ul className="w-full flex justify-center gap-8 text-xl text-white">
          <li>
            <Link href={''}>Footwear</Link>
          </li>
          <li>
            <Link href={''}>Non Footwear</Link>
          </li>
          <li>
            <Link href={''}>Repair Product</Link>
          </li>
          <li>
            <Link href={''}>Journal</Link>
          </li>
          <li>
            <Link href={''}>Sale</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

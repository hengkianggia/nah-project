"use client";
import React, { useState, useEffect } from "react";
import nahLogo from "../../assets/logo_nah.webp";
import nahLogoBlack from "../../assets/logo_nah_black.webp";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full z-[99] px-16 grid place-items-center transition-all duration-200 h-24 fixed inset-0 ${
        isScrolling ? "bg-white" : `bg-transparent`
      }  gap-3 border-b border-white`}
    >
      <div className="flex items-center justify-between w-full">
        <Link href={"/"}>
          <Image
            src={isScrolling ? nahLogoBlack : nahLogo}
            alt=""
            className="object-cover object-center w-12 h-12"
          />
        </Link>

        <span>
          <ul
            className={`flex justify-center w-full gap-8 text-lg font-semibold ${
              isScrolling ? "text-blackgrey" : "text-white"
            } `}
          >
            <li className="transition-all hover:text-yellow-400">
              <Link href={"/collections/footwear"}>Footwear</Link>
            </li>
            <li className="transition-all hover:text-yellow-400">
              <Link href={"/collections/non-footwear"}>Non Footwear</Link>
            </li>
            <li className="transition-all hover:text-yellow-400">
              <Link href={"/collections/repair-product"}>Repair Product</Link>
            </li>
            <li className="transition-all hover:text-yellow-400">
              <Link href={"/blogs/jurnal"}>Journal</Link>
            </li>
            <li className="transition-all hover:text-yellow-400">
              <Link href={"/collections/nah-war"}>Sale</Link>
            </li>
          </ul>
        </span>

        <span
          className={`flex gap-3 text-xl ${
            isScrolling ? "text-blackgrey" : "text-white"
          }`}
        >
          <span className="cursor-pointer">
            <BiUser />
          </span>
          <span className="cursor-pointer">
            <AiOutlineShoppingCart />
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

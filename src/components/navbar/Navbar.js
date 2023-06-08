"use client";
import React, { useState, useEffect } from "react";
import nahLogo from "../../assets/logo_nah.webp";
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
      className={`w-full px-16 grid place-items-center transition-all duration-200 h-24 fixed inset-0 ${
        isScrolling ? "bg-blackgrey" : "bg-transparent"
      }  gap-3`}
    >
      <div className="flex w-full items-center justify-between">
        <Image
          src={nahLogo}
          alt=""
          className="w-12 h-12 object-cover object-center"
        />
        <div className="">
          <ul className="w-full flex justify-center gap-8 text-base text-white">
            <li>
              <Link href={""}>Footwear</Link>
            </li>
            <li>
              <Link href={""}>Non Footwear</Link>
            </li>
            <li>
              <Link href={""}>Repair Product</Link>
            </li>
            <li>
              <Link href={""}>Journal</Link>
            </li>
            <li>
              <Link href={""}>Sale</Link>
            </li>
          </ul>
        </div>
        <div className="flex text-xl text-white gap-3">
          <span>
            <BiUser />
          </span>
          <span>
            <AiOutlineShoppingCart />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

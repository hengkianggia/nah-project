"use client";
import React, { useState, useEffect } from "react";
import nahLogo from "../../assets/logo_nah.webp";
import nahLogoBlack from "../../assets/logo_nah_black.webp";
import { BiUser } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartHandler = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
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
            <span className="cursor-pointer" onClick={cartHandler}>
              <AiOutlineShoppingCart />
            </span>
            <Link href={"/account/login"}>
              <BiUser />
            </Link>
          </span>
        </div>
        {cartOpen && <Cart onClick={cartHandler} />}
      </nav>

      <CustomerService />
    </>
  );
};

export default Navbar;

const Cart = ({ onClick }) => {
  return (
    <div className="w-[28%] h-screen bg-white absolute top-0 right-0 flex flex-col items-center">
      <div className="flex items-center justify-between w-full h-24 px-5 border-b">
        <h1 className="text-lg">SHOPPING CART</h1>
        <span className="text-lg cursor-pointer" onClick={onClick}>
          <AiOutlineClose />
        </span>
      </div>

      <div className="w-[90%] h-[90%] px-5 pt-5 flex flex-col overflow-auto items-center">
        <h1>YOUR CART IS EMPTY</h1>
      </div>
    </div>
  );
};

const CustomerService = () => {
  return (
    <div className="fixed z-10 bottom-5 left-5">
      <div className="flex items-center gap-3">
        <div className="bg-white shadow-md p-2 rounded-md">
          <span className="text-3xl">
            <RiCustomerService2Fill />
          </span>
        </div>

        <div className="p-2 py-1 rounded-md bg-white z-10 shadow-md">
          <p>Perlu bantuan?</p>
        </div>
      </div>
    </div>
  );
};

"use client";
import React, { useState, useEffect } from "react";
import nahLogo from "../../../public/assets/logo_nah.webp";
import nahLogoBlack from "../../../public/assets/logo_nah_black.webp";
import { BiUser } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [nonFootwearChild, setNonFootwearChild] = useState(false);
  const [footwearChild, setFootwearChild] = useState(false);
  const [hoverNav, setHoverNav] = useState(false);
  const [custService, setCustService] = useState(false);

  const handleScroll = () => {
    setIsScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // cart
  const cartHandler = () => {
    setCartOpen(!cartOpen);
  };

  // cust service
  const custServiceHandler = () => {
    setCustService(!custService);
  };

  // footwear
  const showFootwearTogle = () => {
    setFootwearChild(true);
  };
  const closeFootwearTogle = () => {
    setFootwearChild(false);
  };

  // non footwear
  const showNonFootwearTogle = () => {
    setNonFootwearChild(true);
  };
  const closeNonFootwearTogle = () => {
    setNonFootwearChild(false);
  };

  // nav
  const showHoverNav = () => {
    setHoverNav(true);
  };
  const closeHoverNav = () => {
    setHoverNav(close);
  };

  return (
    <>
      <nav
        className={`w-full z-[99] px-16 grid place-items-center transition-all duration-200 h-24 fixed inset-0 
        ${
          isScrolling || hoverNav ? "bg-white" : "bg-transparent"
        }  gap-3 border-b border-white`}
        onMouseEnter={showHoverNav}
        onMouseLeave={closeHoverNav}
      >
        <div className="flex items-center justify-between w-full">
          <Link href={"/"}>
            <Image
              src={isScrolling || hoverNav ? nahLogoBlack : nahLogo}
              alt=""
              className="object-cover object-center w-12 h-12"
            />
          </Link>

          <span>
            <ul
              className={`flex justify-center w-full gap-8 text-lg font-semibold ${
                isScrolling || hoverNav ? "text-blackgrey" : "text-white"
              } `}
            >
              <li
                className="transition-all group hover:text-yellow-400 relative flex flex-col"
                onMouseEnter={showFootwearTogle}
                onMouseLeave={closeFootwearTogle}
              >
                <Link href={"/collections/footwear"}>Footwear</Link>
                {footwearChild && (
                  <ul className="absolute -bottom-[110px] p-3 h-28 flex flex-col justify-end w-44 bg-white group-hover:font-normal text-blackgrey">
                    <li>
                      <Link href={""}>Sneakers</Link>
                    </li>
                    <li>
                      <Link href={""}>All Collections</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="transition-all group hover:text-yellow-400 relative flex flex-col"
                onMouseEnter={showNonFootwearTogle}
                onMouseLeave={closeNonFootwearTogle}
              >
                <Link href={"/collections/non-footwear"}>Non Footwear</Link>
                {nonFootwearChild && (
                  <ul className="absolute -bottom-[140px] p-3 h-36 flex flex-col justify-end w-44 bg-white group-hover:font-normal text-blackgrey">
                    <li>
                      <Link href={""}>Apparels</Link>
                    </li>
                    <li>
                      <Link href={""}>Accessories</Link>
                    </li>
                    <li>
                      <Link href={""}>All Collections</Link>
                    </li>
                  </ul>
                )}
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
              isScrolling || hoverNav ? "text-blackgrey" : "text-white"
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

      <CustomerService
        onClick={custServiceHandler}
        custServiceStatus={custService}
      />
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

const CustomerService = ({ onClick, custServiceStatus }) => {
  return (
    <div className="fixed z-10 bottom-5 left-5 flex flex-col items-start gap-5">
      {custServiceStatus && (
        <div className="relative flex flex-col items-center gap-4 text-3xl">
          <div className="bg-white shadow-md p-2 rounded-md">
            <span className="cursor-pointer">
              <IoMdCall />
            </span>
          </div>
          <div className="bg-white shadow-md p-2 rounded-md">
            <span className="cursor-pointer">
              <BsWhatsapp />
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="bg-white shadow-md p-2 rounded-md" onClick={onClick}>
          {custServiceStatus ? (
            <span className="text-3xl cursor-pointer">
              <AiOutlineClose />
            </span>
          ) : (
            <span className="text-3xl cursor-pointer">
              <RiCustomerService2Fill />
            </span>
          )}
        </div>

        {!custServiceStatus && (
          <div className="p-2 py-1 rounded-md bg-white z-10 shadow-md">
            <p>Perlu bantuan?</p>
          </div>
        )}
      </div>
    </div>
  );
};

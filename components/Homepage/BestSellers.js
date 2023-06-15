"use client";

import React, { useState } from "react";
import Item from "../UI/Item";
import gambar from "../../public/assets/product1.webp";
import Link from "next/link";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import Button from "../UI/Button";

const BestSellers = () => {
  const [slider, setSlider] = useState(false);

  const slideRight = () => {
    const slide = document.getElementById("slide");
    slide.scrollLeft += 300;
  };
  const slideLeft = () => {
    const slide = document.getElementById("slide");
    slide.scrollRight += 300;
  };
  return (
    <div className="w-full flex flex-col items-center py-14 gap-10 my-10">
      <h1 className="text-2xl">BEST SELLERS</h1>
      {/* slider */}
      <div className="w-full flex justify-center items-center gap-5 mb-10">
        <span className="text-3xl cursor-pointer" onClick={slideRight}>
          <AiFillLeftCircle />
        </span>

        <div
          className="w-[80%] h-full overflow-x-hidden scroll flex gap-[23px] transition-all"
          id="slide"
        >
          <Item
            name={"FEEL THE PULSE SANDAL WHITE"}
            priceBeforeDiscount={"140.000"}
            priceAfterDiscount={"120.000"}
            image={gambar}
          />
          <Item
            name={"FEEL THE PULSE SANDAL WHITE"}
            priceBeforeDiscount={"140.000"}
            priceAfterDiscount={"120.000"}
            image={gambar}
          />
          <Item
            name={"FEEL THE PULSE SANDAL WHITE"}
            priceBeforeDiscount={"140.000"}
            priceAfterDiscount={"120.000"}
            image={gambar}
          />
          <Item
            name={"FEEL THE PULSE SANDAL WHITE"}
            priceBeforeDiscount={"140.000"}
            priceAfterDiscount={"120.000"}
            image={gambar}
          />
        </div>

        <span className="text-3xl cursor-pointer" onClick={slideLeft}>
          <AiFillRightCircle />
        </span>
      </div>
      <Button
        className={" bg-blackgrey text-white"}
        text={"View All Product"}
      />
    </div>
  );
};

export default BestSellers;

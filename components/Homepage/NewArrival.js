"use client";

import React, { useState } from "react";
import Item from "../UI/Item";
import gambar from "../../public/assets/product1.webp";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import Button from "../UI/Button";

const data = [
  {
    title: "FEEL THE PULSE SANDAL WHITE",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FEEL THE PULSE SANDAL WHITE",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FEEL THE PULSE SANDAL WHITE",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FEEL THE PULSE SANDAL WHITE",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
];

const NewArrival = () => {
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
    <div className="flex flex-col items-center w-full gap-10 my-10 py-14">
      <h1 className="text-2xl">NEW ARRIVALS</h1>
      {/* slider */}
      <div className="flex items-center justify-center w-full gap-5 mb-10">
        <span className="text-3xl cursor-pointer" onClick={slideRight}>
          <AiFillLeftCircle />
        </span>

        <div
          className="w-[80%] h-full overflow-x-hidden scroll flex gap-[23px] transition-all"
          id="slide"
        >
          {data.map((item, index) => {
            return (
              <Item
                key={index}
                name={item.title}
                priceBeforeDiscount={item.priceBefore}
                priceAfterDiscount={item.priceAfter}
                image={item.image}
                link={`collections/footwear/products/${item.title}`}
              />
            );
          })}
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

export default NewArrival;

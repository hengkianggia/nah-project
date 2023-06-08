import React from "react";
import Item from "../UI/Item";
import gambar from "../../assets/product1.webp";
import Link from "next/link";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const NewArrival = () => {
  return (
    <div className="w-full flex flex-col items-center py-14 gap-10">
      <h1 className="text-2xl">NEW ARRIVALS</h1>
      {/* slider */}
      <div className="w-full flex justify-center items-center gap-5 mb-10">
        <span className="text-3xl cursor-pointer">
          <AiFillLeftCircle />
        </span>
        <div className="w-[80%] overflow-hidden flex justify-between">
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
        <span className="text-3xl cursor-pointer">
          <AiFillRightCircle />
        </span>
      </div>
      <button className="px-6 py-2 bg-blackgrey text-white">
        <Link href={""}>View All Product</Link>
      </button>
    </div>
  );
};

export default NewArrival;

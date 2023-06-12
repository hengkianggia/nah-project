import Image from "next/image";
import Link from "next/link";
import React from "react";

const Item = ({ image, name, priceAfterDiscount, priceBeforeDiscount }) => {
  return (
    <div className="relative w-64">
      <Link href={""}>
        <div className="w-full h-64 mb-4">
          <Image src={image} width="100%" height="100%" objectFit="cover" />
        </div>

        <span>
          <h2 className="text-center uppercase">{name}</h2>
          <div className="flex justify-center gap-3">
            <p className="text-red-500">Rp {priceAfterDiscount}</p>
            <s className="text-gray-700">
              {priceBeforeDiscount ? "Rp " + priceBeforeDiscount : ""}
            </s>
          </div>
        </span>

        <div className="absolute z-10 p-1 text-sm text-gray-500 bg-white top-2 left-2">
          SALE
        </div>
      </Link>
    </div>
  );
};

export default Item;

import React from "react";
import gambar from "../../../../../public/assets/product1.webp";
import HeaderEveryPage from "../../../../../components/UI/HeaderEveryPage";
import Item from "../../../../../components/UI/Item";

const data = [
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL NAVY",
    priceBefore: 140000,
    priceAfter: 120000,
    image: gambar,
  },
];

const page = () => {
  return (
    <div>
      <HeaderEveryPage title={"footwear"} />
      <div className="flex flex-wrap gap-x-[50px] w-full min-h-screen px-24 pt-10 gap-y-12">
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
    </div>
  );
};

export default page;

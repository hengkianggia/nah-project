import React from "react";
import gambar from "../../../../../public/assets/product1.webp";
import HeaderEveryPage from "../../../../../components/UI/HeaderEveryPage";
import Item from "../../../../../components/UI/Item";

const data = [
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
  {
    title: "FLICKER SANDAL OLIVE",
    priceAfter: 140000,
    image: gambar,
  },
];

const page = () => {
  return (
    <div>
      <HeaderEveryPage title={"nah war"} />
      <div className="flex flex-wrap gap-x-[50px] w-full min-h-screen px-24 pt-10 gap-y-12">
        {data.map((item, index) => {
          return (
            <Item
              name={item.title}
              priceAfterDiscount={item.priceAfter}
              image={item.image}
              key={index}
              link={`/collections/nah-war/products/${item.title}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;

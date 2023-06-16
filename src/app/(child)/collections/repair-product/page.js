import React from "react";
import gambar from "../../../../../public/assets/product1.webp";
import HeaderEveryPage from "../../../../../components/UI/HeaderEveryPage";
import Item from "../../../../../components/UI/Item";

const data = [
  {
    title: "REPAIR REGLUE",
    priceBefore: 100000,
    priceAfter: 75000,
    image: gambar,
  },
  {
    title: "REPAIR BROKEN WIRE",
    priceBefore: 75000,
    priceAfter: 50000,
    image: gambar,
  },
  {
    title: "REPAIR RESTITCH (ADDITIONAL STITCH)",
    priceBefore: 140000,
    priceAfter: 100000,
    image: gambar,
  },
];

const page = () => {
  return (
    <div>
      <HeaderEveryPage
        title={"REPAIR PRODUCT"}
        desc={
          "Layanan reparasi untuk memudahkan customer NAH Project memperbaiki sepatunya yang rusak agar bisa digunakan kembali."
        }
      />
      <div className="flex flex-wrap gap-x-[50px] w-full min-h-screen px-24 pt-10 gap-y-12">
        {data.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.title}
              priceBeforeDiscount={item.priceBefore}
              priceAfterDiscount={item.priceAfter}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;

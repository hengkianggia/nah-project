import React from "react";
import gambar from "../../../../../public/assets/product1.webp";
import HeaderEveryPage from "../../../../../components/UI/HeaderEveryPage";
import Item from "../../../../../components/UI/Item";

const page = () => {
  return (
    <div>
      <HeaderEveryPage title={"footwear"} />
      <div className="flex flex-wrap gap-x-[50px] w-full min-h-screen px-24 pt-10 gap-y-12">
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
      </div>
    </div>
  );
};

export default page;

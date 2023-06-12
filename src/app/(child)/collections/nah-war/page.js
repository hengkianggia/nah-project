import HeaderEveryPage from "@/components/UI/HeaderEveryPage";
import Item from "@/components/UI/Item";
import React from "react";
import gambar from "../../../../assets/product1.webp";

const page = () => {
  return (
    <div>
      <HeaderEveryPage title={"nah war"} />
      <div className="flex flex-wrap gap-x-[50px] w-full min-h-screen px-24 pt-10 gap-y-12">
        <Item
          image={gambar}
          name={"FLICKER SANDAL OLIVE"}
          priceAfterDiscount={"140.000"}
        />
        <Item
          image={gambar}
          name={"FLICKER SANDAL OLIVE"}
          priceAfterDiscount={"140.000"}
        />
        <Item
          image={gambar}
          name={"FLICKER SANDAL OLIVE"}
          priceAfterDiscount={"140.000"}
        />
        <Item
          image={gambar}
          name={"FLICKER SANDAL OLIVE"}
          priceAfterDiscount={"140.000"}
        />
        <Item
          image={gambar}
          name={"FLICKER SANDAL OLIVE"}
          priceAfterDiscount={"140.000"}
        />
        <Item
          image={gambar}
          name={"FLICKER SANDAL OLIVE"}
          priceAfterDiscount={"140.000"}
        />
        <Item
          image={gambar}
          name={"FLICKER SANDAL OLIVE"}
          priceAfterDiscount={"140.000"}
        />
      </div>
    </div>
  );
};

export default page;

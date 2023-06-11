import HeaderEveryPage from "@/components/UI/HeaderEveryPage";
import MainCollection from "@/components/collections/MainCollection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderEveryPage title={"all collections"} />
      <MainCollection />
    </div>
  );
};

export default page;

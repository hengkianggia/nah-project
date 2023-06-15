import React from "react";
import HeaderEveryPage from "../../../../../components/UI/HeaderEveryPage";
import MainCollection from "../../../../components/collections/MainCollection";

const page = () => {
  return (
    <div>
      <HeaderEveryPage title={"all collections"} />
      <MainCollection />
    </div>
  );
};

export default page;

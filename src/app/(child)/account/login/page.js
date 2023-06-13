import HeaderEveryPage from "@/components/UI/HeaderEveryPage";
import MainLogin from "@/components/login/MainLogin";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderEveryPage title={'login'}/>
      <MainLogin />
    </>
  );
};

export default page;

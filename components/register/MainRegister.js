import React from "react";
import Button from "../UI/Button";
import Link from "next/link";

const MainRegister = () => {
  return (
    <div className="w-full grid place-items-center min-h-[40vh] pb-14">
      <div className="space-y-6 text-center w-[35%]">
        <p>Please fill in the information below:</p>
        <form
          action="submit"
          className="flex flex-col text-center w-full gap-4"
        >
          <input
            type="text"
            placeholder="First Name"
            className="p-3 border border-gray-300"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 border border-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300"
            required
          />
          <Button
            text={"CREATE MY ACCOUNT"}
            className={"bg-blackgrey text-white"}
          />
        </form>
        <span className="text-gray-500 flex justify-center gap-2">
          <p>Already have account?</p>{" "}
          <Link href={"/account/login"}>
            <p className="text-blackgrey">Click here</p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default MainRegister;

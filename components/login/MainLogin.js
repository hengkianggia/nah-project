import React from "react";
import Button from "../UI/Button";
import Link from "next/link";

const MainLogin = () => {
  return (
    <div className="w-full grid place-items-center min-h-[40vh] pb-28">
      <div className="space-y-6 text-center w-[35%]">
        <p>Please enter your e-mail and password:</p>
        <form
          action="submit"
          className="flex flex-col text-center w-full gap-4"
        >
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
          <p className="cursor-pointer">Forgot Password ?</p>
          <Button text={"LOGIN"} className={"bg-blackgrey text-white"} />
          <span className="text-gray-500 flex justify-center gap-2">
            <p>Don't have an account?</p>{" "}
            <Link href={"/account/register"}>
              <p className="text-blackgrey">Create one</p>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default MainLogin;

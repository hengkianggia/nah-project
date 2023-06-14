"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [homeChild, setHomeChild] = useState(false);

  const showHomeTogle = () => {
    setHomeChild(!homeChild);
  };
  return (
    <>
      <div className="w-full h-20 bg-orange-400 my-56">
        <ul className="flex justify-center gap-10 items-center w-full h-full text-lg">
          <li
            onMouseEnter={showHomeTogle}
            onMouseLeave={showHomeTogle}
            className="relative flex flex-col"
          >
            <Link href={""}>home</Link>
            {homeChild && (
              <ul className="absolute -bottom-20 w-32 bg-red-400">
                <li>
                  <Link href={""}>home child</Link>
                </li>
                <li>
                  <Link href={""}>home child</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href={""}>home</Link>
          </li>
          <li>
            <Link href={""}>home</Link>
          </li>
          <li>
            <Link href={""}>home</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;

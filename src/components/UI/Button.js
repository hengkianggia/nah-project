import Link from "next/link";
import React from "react";

const Button = ({ className, text, link, onClick }) => {
  return (
    <button className={`px-6 py-2 ${className}`} onClick={onClick ? onClick : ''}>
      <Link href={link ? link : ""}>{text}</Link>
    </button>
  );
};

export default Button;

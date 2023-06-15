import Link from "next/link";
import React from "react";

const Button = ({ className, text, link, onClick }) => {
  return (
    <div className="group">
      <button
        className={`px-6 py-2 group-hover:animate-bounce transition-all ${className}`}
        onClick={onClick ? onClick : ""}
      >
        <Link href={link ? link : ""}>{text}</Link>
      </button>
    </div>
  );
};

export default Button;

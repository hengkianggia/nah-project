import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-20 py-14 bg-blackgrey flex justify-between text-white">
      {/* left */}
      <div className="w-[35%]">
        <h1 className="font-semibold">ABOUT US</h1>
        <p className="text-sm">
          In NAH Project, we aim to disrupt the billion dollar sneakers industry
          by being transparent, giving you the reasonable price using direct to
          consumer model, and bringing back the passion and creativity by being
          courageous to explore. <br /> <br /> Get to know us better by
          following our social media handles!
        </p>
        <span></span>
      </div>

      {/* center */}
      <div>
        <h1 className="font-semibold">COMPANY</h1>
        <ul className="text-sm">
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={""}>FAQ</Link>
          </li>
          <li>
            <Link href={""}>Return Policy</Link>
          </li>
          <li>
            <Link href={""}>Journal</Link>
          </li>
          <li>
            <Link href={""}>Pulse Check</Link>
          </li>
        </ul>
      </div>

      {/* right */}
      <div className="w-[25%]">
        <h1 className="font-semibold">NEWSLETTER</h1>
        <p className="text-sm">
          Sign up to our newsletter and get 10% off your next purchase, as well
          as early access to coming collections.
        </p>
        <form action="submit">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="p-3"
          />
          <button>Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-transparent flex justify-between items-center mx-14 text-textColor text-sm">
      <Link to={"/"}>
        <div className="logo w-10 absolute h-10 rounded-full  bg-fuchsia-600 blur-md"></div>
        <div className="logo w-8 h-8 rounded-full bg-transparent border-4"></div>
      </Link>

      <ul className="flex gap-10 font-semibold">
        <li className="hover:text-red-500 cursor-pointer">About</li>
        <li className="hover:text-red-500 cursor-pointer">Integrations</li>
        <li className="hover:text-red-500 cursor-pointer">Pricing</li>
        <li className="hover:text-red-500 cursor-pointer">Customers</li>
        <li className="hover:text-red-500 cursor-pointer">Changelog</li>
      </ul>
      <div className="button flex gap-5">
        <button className="cursor-pointer hover:underline underline-offset-8">
          Sign In
        </button>
        <button className="border-0 px-2 rounded-2xl hover:underline underline-offset-8">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

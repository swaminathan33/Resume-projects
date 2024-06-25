import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-transparent sticky top-0 z-30 pt-5 flex justify-between items-center mx-14 text-textColor text-sm">
      <Link to={"/"}>
        <div className="logo w-10 absolute h-10 rounded-full  bg-fuchsia-600 blur-md"></div>
        <div className="logo w-8 h-8 rounded-full bg-transparent border-4"></div>
      </Link>

      <ul className="flex gap-20 font-semibold">
        <Link to={"/about"}>
          <li className="hover:text-red-500 cursor-pointer">About</li>
        </Link>
        <Link to={"/product"}>
          <li className="hover:text-red-500 cursor-pointer">Product</li>
        </Link>
        <Link to={"/services"}>
          <li className="hover:text-red-500 cursor-pointer">Services</li>
        </Link>
        <Link to={"/blogs"}>
          <li className="hover:text-red-500 cursor-pointer">Blogs</li>
        </Link>
        <Link to={"/training"}>
          <li className="hover:text-red-500 cursor-pointer">Training</li>
        </Link>
        <Link to={"/contact"}>
          <li className="hover:text-red-500 cursor-pointer">Contact</li>
        </Link>
      </ul>

      {/* <div className="button flex gap-5">
        <button className="cursor-pointer hover:underline underline-offset-8">
          Sign In
        </button>
        <button className="border-0 px-2 rounded-2xl hover:underline underline-offset-8">
          Sign Up
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;

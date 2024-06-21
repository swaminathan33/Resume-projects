import React from "react";
import { ImSearch } from "react-icons/im";
import { TbMessage } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import profile from "../Assets/profile.svg";

const Navbar = () => {
  return (
    <div className=" flex justify-between mt-4 mb-4 mr-4 ml-3">
      <div>
        <h1 className="text-3xl font-medium text-gray-700">Dashboard</h1>
        <p className="mt-3 text-md text-gray-600">
          Welcome to Geex Modern Admin Dashboard
        </p>
      </div>
      <div className="flex gap-10 justify-center align-middle">
        <button className="text-gray-700 text-md bg-customise-btn hover:bg-violet-500 hover:text-white my-5 py-2 rounded-xl px-5">
          Customizer
        </button>
        <ImSearch fontSize={"18px"} className="h-full text-gray-700" />
        <TbMessage fontSize={"18px"} className="h-full text-gray-700" />
        <FaRegBell fontSize={"18px"} className="h-full text-gray-700" />
        <img src={profile} alt="" className="w-11 h-13" />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { ImSearch } from "react-icons/im";
import { TbMessage } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import profile from "../Assets/profile.svg";

const Navbar = () => {
  return (
    <div className=" flex justify-between my-8 mr-4">
      <div>
        <h1 className="text-4xl font-bold text-gray-700">Dashboard</h1>
        <p className="mt-3 text-lg text-gray-600">
          Welcome to Geex Modern Admin Dashboard
        </p>
      </div>
      <div className="flex gap-10 justify-center align-middle">
        <button className="text-gray-700 text-lg bg-customise-btn hover:bg-violet-500 hover:text-white my-5 py-3 rounded-2xl px-7">
          Customizer
        </button>
        <ImSearch fontSize={"24px"} className="h-full text-gray-700" />
        <TbMessage fontSize={"24px"} className="h-full text-gray-700" />
        <FaRegBell fontSize={"24px"} className="h-full text-gray-700" />
        <img src={profile} alt="" className="w-14 h-16 mt-2" />
      </div>
    </div>
  );
};

export default Navbar;

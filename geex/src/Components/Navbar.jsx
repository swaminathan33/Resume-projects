import React from "react";
import { ImSearch } from "react-icons/im";
import { TbMessage } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import profile from "../Assets/profile.svg";
import { BsPencil } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";

const Navbar = ({ page }) => {
  return (
    <div className="flex justify-between mt-4 mb-4 mr-4 ml-3 ">
      <div className="max-sm:hidden">
        <h1 className="text-3xl font-medium text-gray-700">{page}</h1>
        <p className="mt-3 text-md text-gray-600">
          Welcome to Geex Modern Admin Dashboard
        </p>
      </div>

      <div className="flex gap-10 justify-center align-middle items-center max-sm:gap-5">
        <div className="hidden max-sm:flex gap-6 max-sm:mr-8">
          <button className="">
            <IoIosMenu fontSize={"18px"} />
          </button>
          <button>
            <BsPencil fontSize={"15px"} />
          </button>
        </div>

        <button className="text-gray-700 text-md bg-customise-btn hover:bg-violet-500 hover:text-white my-5 py-2 rounded-xl px-5 max-sm:hidden">
          Customizer
        </button>
        <ImSearch
          fontSize={"18px"}
          className="h-full text-gray-700 max-sm:w-6 max-sm:h-6"
        />
        <TbMessage
          fontSize={"18px"}
          className="h-full text-gray-700 max-sm:w-7 max-sm:h-8"
        />
        <FaRegBell
          fontSize={"18px"}
          className="h-full text-gray-700 max-sm:w-6 max-sm:h-6"
        />
        <img src={profile} alt="" className="w-11 h-13 max-sm:w-8 max-sm:h-8" />
      </div>
    </div>
  );
};

export default Navbar;

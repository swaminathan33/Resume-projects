import React from "react";
import { LuMenu } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from "../Assets/yt-logo.png";
import { FaMicrophone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-4 px-5">
      <div className="flex justify-between items-center gap-4">
        <div className="hover:border-[1px] p-2 hover:bg-gray-200 border-none rounded-full">
          <LuMenu fontSize={"22"} />
        </div>
        <div>
          <img src={logo} height={"90"} width={"90"} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="searchbar border-[1px] border-slate-300 rounded-full px-4 p-2 flex justify-center items-center">
          <input
            type="text"
            className="w-[35rem] outline-none"
            placeholder="Search"
          />
          <div>
            <CiSearch fontSize={"25px"} className="" />
          </div>
        </div>
        <div className="mic border-[1px] p-2 rounded-full bg-gray-100 hover:bg-gray-300">
          <FaMicrophone fontSize={"20px"} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <BsThreeDotsVertical fontSize={"20px"} />
        <div className="signIn border-[1px] rounded-full p-2 px-3 hover:bg-blue-100">
          <button className="text-blue-600 font-medium flex justify-center items-center gap-1">
            <RiAccountCircleLine fontSize={"20px"} />
            <div className="text-sm">Sign in</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

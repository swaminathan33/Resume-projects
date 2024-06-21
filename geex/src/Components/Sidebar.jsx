import React from "react";
import logo from "../Assets/logo.svg";
import { AiOutlineHome } from "react-icons/ai";
import { LuLayout } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { IoLayersOutline } from "react-icons/io5";
import { BsWindow } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="col-span-2">
      <div className="bg-nav-bg shadow-sm m-4 pl-7 rounded-3xl">
        <div className="logo pt-10 w-4/6">
          <img src={logo} alt="" />
        </div>
        <div className="pages text-xl pt-10">
          <ul className="">
            <li className="mt-6 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <AiOutlineHome fontSize={"28px"} className="text-gray-400 " />
              <div className="text-gray-700 text-lg">Demo</div>
            </li>
            <li className="mt-6 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <LuLayout fontSize={"28px"} className="text-gray-400" />
              <div className="text-gray-700 text-lg">Layout</div>
            </li>
            <li className="mt-8 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <LuLayoutGrid fontSize={"28px"} className="text-gray-400" />
              <div className="text-gray-700 text-lg">App</div>
            </li>
            <li className="mt-8 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <IoLayersOutline fontSize={"28px"} className="text-gray-400" />
              <div className="text-gray-700 text-lg">Features</div>
            </li>
            <li className="mt-8 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <BsWindow fontSize={"25px"} className="text-gray-400" />
              <div className="text-gray-700 text-lg">Pages</div>
            </li>
          </ul>
        </div>
        <div className="footer pt-7 pb-5">
          <b className="text-gray-700 text-sm">
            {" "}
            Geex Modern Dashboard <br />
          </b>
          <div className="text-gray-600 text-xs pt-2">
            ©️ 2024 All Rights Reserverd <br />
            Made with ❤️ by Demo Themes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

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
      <div className="bg-nav-bg shadow-sm m-8 pl-10 rounded-3xl">
        <div className="logo pt-2">
          <img src={logo} alt="" />
        </div>
        <div className="pages text-xl py-16">
          <ul className="">
            <li className="mt-8 py-1 pl-8 flex gap-4 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <AiOutlineHome fontSize={"35px"} className="text-gray-400 " />
              <div className="text-gray-700 pt-1">Demo</div>
            </li>
            <li className="mt-8 py-1 pl-8 flex gap-4 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <LuLayout fontSize={"35px"} className="text-gray-400" />
              <div className="text-gray-700 pt-1">Layout</div>
            </li>
            <li className="mt-8 py-1 pl-8 flex gap-4 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <LuLayoutGrid fontSize={"35px"} className="text-gray-400" />
              <div className="text-gray-700 pt-1">App</div>
            </li>
            <li className="mt-8 py-1 pl-8 flex gap-4 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <IoLayersOutline fontSize={"35px"} className="text-gray-400" />
              <div className="text-gray-700 pt-1">Features</div>
            </li>
            <li className="mt-8 py-1 pl-8 flex gap-4 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <BsWindow fontSize={"35px"} className="text-gray-400" />
              <div className="text-gray-700 pt-1">Pages</div>
            </li>
          </ul>
        </div>
        <div className="footer pt-7 pb-5">
          <b className="text-gray-700">
            {" "}
            Geex Modern Dashboard <br />
          </b>
          <div className="text-gray-600">
            ©️ 2024 All Rights Reserverd <br />
            Made with ❤️ by Demo Themes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import { AiOutlineHome } from "react-icons/ai";
import { LuLayout } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { IoLayersOutline } from "react-icons/io5";
import { BsWindow } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import { useGlobalContentContext } from "./context/ContentContext";

const Sidebar = ({ lScreen }) => {
  const { sidebarOpen, setSidebarOpen } = useGlobalContentContext();
  return (
    <div
      className={`col-span-2 z-30 h-screen sticky top-0 max-sm:w-4/6 max-sm:${lScreen}`}
    >
      <div className="bg-nav-bg shadow-sm m-4 pl-7 rounded-3xl">
        <div className="logo pt-10 w-4/6 max-sm:flex gap-6">
          <img src={logo} alt="" />
          <button
            className="hidden max-sm:block mb-10"
            onClick={() => setSidebarOpen(false)}
          >
            <IoClose fontSize={"20px"} color="red" />
          </button>
        </div>
        <div className="pages text-xl pt-10">
          <ul className="">
            <Link to={"/"}>
              <li className="mt-6 py-1 pl-8 flex gap-2 border-2  border-white border-solid cursor-pointer hover:border-2  hover:border-violet-400 rounded-2xl w-5/6">
                <AiOutlineHome fontSize={"28px"} className="text-gray-400 " />
                <div className="text-gray-700 text-lg">
                  <Link to={"/"}>Demo</Link>
                </div>
              </li>
            </Link>
            {/* <li className="mt-6 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <LuLayout fontSize={"28px"} className="text-gray-400" />
              <div className="text-gray-700 text-lg">Layout</div>
            </li> */}
            <Link to={"/todo"}>
              <li className="mt-8 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
                <LuLayoutGrid fontSize={"28px"} className="text-gray-400" />
                <div className="text-gray-700 text-lg">
                  <div>Todo</div>
                </div>
              </li>
            </Link>
            {/* 
            <li className="bg-slate-white shadow-xl mt-8 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 rounded-2xl w-5/6">
              <div>
                <ul>
                  <li>asdf</li>
                </ul>
              </div>
            </li> */}

            <li className="mt-8 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 hover:opacity-15 rounded-2xl w-5/6">
              <IoLayersOutline fontSize={"28px"} className="text-gray-400" />
              <div className="text-gray-700 text-lg">Features</div>
            </li>
            <li className="mt-8 py-1 pl-8 flex gap-2 border-2 border-white cursor-pointer hover:border-2 hover:border-violet-400 hover:opacity-15 rounded-2xl w-5/6">
              <BsWindow fontSize={"25px"} className="text-gray-400" />
              <div className="text-gray-700 text-lg">Pages</div>
            </li>
          </ul>
        </div>
        <div className="footer pt-20 pb-5">
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

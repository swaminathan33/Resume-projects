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
        <div className="pages text-xl pl-8 py-16">
          <ul className="">
            <li className="pt-8 flex gap-4">
              <AiOutlineHome fontSize={"35px"} />
              <div className="">Demo</div>
            </li>
            <li className="pt-8 flex gap-4">
              <LuLayout fontSize={"35px"} />
              Layout
            </li>
            <li className="pt-8 flex gap-4">
              <LuLayoutGrid fontSize={"35px"} />
              App
            </li>
            <li className="pt-8 flex gap-4">
              <IoLayersOutline fontSize={"35px"} />
              Features
            </li>
            <li className="pt-8 flex gap-4">
              <BsWindow fontSize={"35px"} /> Pages
            </li>
          </ul>
        </div>
        <div className="footer pt-7 pb-5">
          <b>
            {" "}
            Geex Modern Dashboard <br />
          </b>
          ©️ 2024 All Rights Reserverd <br />
          Made with ❤️ by Demo Themes
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

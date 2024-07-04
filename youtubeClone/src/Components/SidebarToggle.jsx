import React from "react";
import { LuMenu } from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import logo from "../Assets/yt-logo.png";
import whiteLogo from "../Assets/yt-logo-white.png";

const SidebarToggle = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="sidebar layer absolute bg-black bg-opacity-35 top-0 left-0 -bottom-100 right-0">
      <div className="sidebar bg-white dark:bg-black w-52 h-screen">
        <div className="flex justify-between p-5 items-center">
          <div
            className="hover:border-[1px] p-4 dark:hover:bg-gray-800 hover:bg-gray-200 border-none rounded-full max-sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <LuMenu fontSize={"22"} />
          </div>
          <div>
            <Link to={"/"}>
              <img
                src={logo}
                className="dark:hidden block"
                height={"90"}
                width={"90"}
                alt=""
              />
              <img
                src={whiteLogo}
                className="dark:block hidden"
                height={"90"}
                width={"90"}
                alt=""
              />
            </Link>
          </div>
        </div>
        <ul className="flex flex-col w-full gap-10 justify-center items-start pl-10">
          <Link to={"/"}>
            <li className="flex justify-center items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-lg cursor-pointer">
              <div>
                <MdHomeFilled fontSize={"24px"} />
              </div>
              <div className="text-sm">Home</div>
            </li>
          </Link>
          <li className="flex justify-center items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-lg cursor-pointer">
            <SiYoutubeshorts fontSize={"24px"} />
            <div className="text-sm">Shorts</div>
          </li>
          <li className="flex justify-center items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-lg cursor-pointer">
            <MdOutlineSubscriptions fontSize={"24px"} />
            <div className="text-sm">Subscriptions</div>
          </li>
          <li className="flex justify-center items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-lg cursor-pointer">
            <PiDownloadSimple fontSize={"24px"} />
            <div className="text-sm">Downloads</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarToggle;

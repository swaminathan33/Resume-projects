import React from "react";
import { LuMenu } from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

const SidebarToggle = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="sidebar layer absolute bg-black bg-opacity-15 top-0 left-0 bottom-0 right-0">
      <div className="sidebar bg-white w-40 h-screen">
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <LuMenu />
        </div>
        <ul className="flex flex-col w-16">
          <Link to={"/"}>
            <li className="flex flex-col justify-center items-center hover:bg-gray-200 py-4 rounded-xl cursor-pointer">
              <MdHomeFilled fontSize={"22px"} />
              <div className="text-[10px] mt-2">Home</div>
            </li>
          </Link>
          <li className="flex flex-col justify-center items-center hover:bg-gray-200 py-4 rounded-xl cursor-pointer">
            <SiYoutubeshorts fontSize={"22px"} />
            <div className="text-[10px] mt-2">Shorts</div>
          </li>
          <li className="flex flex-col justify-center items-center hover:bg-gray-200 py-4 rounded-xl cursor-pointer">
            <MdOutlineSubscriptions fontSize={"22px"} />
            <div className="text-[10px] mt-2">Subscriptions</div>
          </li>
          <li className="flex flex-col justify-center items-center hover:bg-gray-200 py-4 rounded-xl cursor-pointer">
            <PiDownloadSimple fontSize={"22px"} />
            <div className="text-[10px] mt-2">Downloads</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarToggle;

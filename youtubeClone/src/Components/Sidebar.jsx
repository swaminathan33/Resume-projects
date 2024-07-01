import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="">
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
  );
};

export default Sidebar;

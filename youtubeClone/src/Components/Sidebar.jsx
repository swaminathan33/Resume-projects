import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="">
      <ul className="flex flex-col w-16  max-sm:flex-row max-sm:justify-between max-sm:w-screen max-sm:px-4 max-sm:fixed max-sm:bg-white bottom-0 mt-12 max-sm:mt-0">
        <Link to={"/"}>
          <li className="flex flex-col justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-800 py-4 max-sm:py-2 rounded-xl cursor-pointer">
            <MdHomeFilled fontSize={"22px"} />
            <div className="text-[10px] mt-2">Home</div>
          </li>
        </Link>
        <li className="flex flex-col justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-800 py-4 max-sm:py-2 rounded-xl cursor-pointer">
          <SiYoutubeshorts fontSize={"22px"} />
          <div className="text-[10px] mt-2">Shorts</div>
        </li>
        <li className="flex flex-col justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-800 py-4 max-sm:py-2 rounded-xl cursor-pointer">
          <MdOutlineSubscriptions fontSize={"22px"} />
          <div className="text-[10px] mt-2">Subscriptions</div>
        </li>
        <li className="flex flex-col justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-800 py-4 max-sm:py-2 rounded-xl cursor-pointer">
          <PiDownloadSimple fontSize={"22px"} />
          <div className="text-[10px] mt-2">Downloads</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

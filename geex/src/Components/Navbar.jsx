import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { TbMessage } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import profileImg from "../Assets/profile.svg";
import { BsPencil } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { useGlobalContentContext } from "./context/ContentContext";
import SearchBox from "./SearchBox";
import Notifications from "./Notifications";
import BellNotifications from "./BellNotifications";
import Profile from "./Profile";

const Navbar = ({ page }) => {
  const { sidebarOpen, setSidebarOpen } = useGlobalContentContext();
  const [searchBox, setSearchBox] = useState(false);
  const [notifiesBox, setNotifiesBox] = useState(false);
  const [msgBox, setMsgBox] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <div className="flex justify-between mt-4 mb-4 mr-4 ml-3 ">
      <div className="max-sm:hidden">
        <h1 className="text-3xl font-medium text-gray-700">{page}</h1>
        <p className="mt-3 text-md text-gray-600">
          Welcome to Geex Modern Admin Dashboard
        </p>
      </div>

      <div className="flex gap-10 justify-center align-middle items-center max-sm:gap-8">
        <div className="hidden max-sm:flex gap-6 max-sm:mr-8">
          <button className="">
            <IoIosMenu onClick={() => setSidebarOpen(true)} fontSize={"24px"} />
          </button>
          <button>
            <BsPencil fontSize={"18px"} />
          </button>
        </div>

        <button className="text-gray-700 text-md bg-customise-btn hover:bg-violet-500 hover:text-white my-5 py-2 rounded-xl px-5 max-sm:hidden">
          Customizer
        </button>
        <div className="relative">
          <ImSearch
            fontSize={"18px"}
            className="h-full text-gray-700 max-sm:w-5 max-sm:h-7 cursor-pointer"
            onClick={() => setSearchBox(!searchBox)}
          />
          <SearchBox searchBox={searchBox} />
        </div>
        <div
          className={`chats  absolute z-20 bg-yellow-400 rounded-lg right-[142px] top-9 border-2 border-white font-medium text-xs px-1 text-white max-sm:right-[125px] max-sm:top-8`}
        >
          <div>10</div>
        </div>
        <div className="relative ">
          <TbMessage
            fontSize={"20px"}
            className="h-full text-gray-700 max-sm:w-6 max-sm:h-9 cursor-pointer "
            onClick={() => setMsgBox(!msgBox)}
          />
          <Notifications msgBox={msgBox} />
        </div>
        <div className="chats  absolute z-20 bg-sky-600 rounded-lg right-[82px] top-9 border-2 border-white font-medium text-xs px-1 text-white max-sm:right-[75px] max-sm:top-8">
          <div>10</div>
        </div>
        <div className="relative">
          <FaRegBell
            fontSize={"18px"}
            className="h-full text-gray-700 max-sm:w-5 max-sm:h-6 cursor-pointer"
            onClick={() => setNotifiesBox(!notifiesBox)}
          />
          <BellNotifications notifiesBox={notifiesBox} />
        </div>
        <div className="relative">
          <img
            src={profileImg}
            alt=""
            className="w-11 h-13 max-sm:w-10 max-sm:h-10 cursor-pointer"
            onClick={() => setProfile(!profile)}
          />
          <Profile profile={profile} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Css/SideBarLeft.css";
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";

const SideBarLeft = () => {
  return (
    <div className="sidebarleft">
      <ul>
        <li>
          <MdRssFeed />
          <p>Feed</p>
        </li>
        <li>
          <BsChatSquareTextFill />
          <p>Chats</p>
        </li>
        <li>
          <BiSolidVideos />
          <p>Videos</p>
        </li>
        <li>
          <MdGroups />
          <p>Groups</p>
        </li>
        <li>
          <IoBookmarkSharp />
          <p>Bookmarks</p>
        </li>
        <li>
          <BsFillQuestionSquareFill />
          <p>Questions</p>
        </li>
        <li>
          <FaSuitcase />
          <p>Jobs</p>
        </li>
        <li>
          <BsCalendar2DateFill />
          <p>Events</p>
        </li>
        <li>
          <IoSchool />
          <p>Courses</p>
        </li>
        <li>
          <div className="show_more">
          <button>Show More</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBarLeft;

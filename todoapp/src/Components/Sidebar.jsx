import React from "react";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import avatar from "../Assets/avatar-emoji.png";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-screen p-4 text-zinc-600 flex flex-col gap-7 pt-8 sticky top-0">
      <div className="top flex">
        <img width={30} height={30} src={avatar} alt="" />
        Emir's Space
      </div>
      <ul className="flex flex-col gap-3">
        <p className="text-zinc-500 text-sm">General</p>
        <Link to={"/"}>
          <li className="flex items-center gap-3 pl-4 border-2 border-gray-200 link:border-indigo-700">
            <LuListTodo /> <div>Todo</div>
          </li>
        </Link>
        <li className="flex items-center gap-3 pl-4">
          <MdOutlineForwardToInbox />
          Inbox
        </li>
        <li className="flex items-center gap-3 pl-4">
          <FaRegCalendarAlt />
          Calendar
        </li>
        <li className="flex items-center gap-3 pl-4">
          <FaRegTrashAlt />
          Trash
        </li>
      </ul>
      <p className="text-zinc-500 text-sm">Task Progress</p>
      <ul className="flex flex-col gap-2">
        <li>My Work Task</li>
        <li>Trip Plan 2024</li>
      </ul>
    </div>
  );
};

export default Sidebar;

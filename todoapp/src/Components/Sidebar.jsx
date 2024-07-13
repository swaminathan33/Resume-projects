import React, { useState } from "react";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import avatar from "../Assets/avatar-emoji.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiProgress2Line, RiProgress5Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { boxVariant, listVariant } from "./constants/constants";
import { IoClose } from "react-icons/io5";
import { sidebarshow } from "./Slices/TodoDetail";

const Sidebar = () => {
  const user = useSelector(({ authdetails }) => authdetails.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/login");
  };
  return (
    <div className="bg-gray-200 h-screen p-4 text-zinc-600 flex flex-col gap-7 pt-8 sticky top-0 dark:bg-gray-800 shadow-xl dark:text-slate-300">
      <div className="top flex items-center max-sm:justify-between">
        <img
          width={30}
          height={30}
          src={avatar}
          alt=""
          className="max-sm:hidden"
        />
        <div className="text-sm">{user ? user?.name : "user323"}</div>
        <IoClose
          className="text-xl hidden max-sm:block"
          onClick={() => dispatch(sidebarshow(false))}
        />
      </div>
      <motion.ul
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        className="flex flex-col gap-3"
      >
        <p className="text-zinc-400 text-sm">General</p>
        <Link to={"/"}>
          <motion.li
            whileHover={{ scale: 1.02 }}
            variants={listVariant}
            className="flex items-center gap-3 pl-4  hover:bg-white p-2 rounded-lg "
          >
            <LuListTodo /> <div className="">Todo</div>
          </motion.li>
        </Link>
        <motion.li
          variants={listVariant}
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 pl-4 hover:bg-white p-2 rounded-lg "
        >
          <MdOutlineForwardToInbox />
          Inbox
        </motion.li>
        <motion.li
          variants={listVariant}
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 pl-4 hover:bg-white p-2 rounded-lg "
        >
          <FaRegCalendarAlt />
          Calendar
        </motion.li>
        <motion.li
          variants={listVariant}
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 pl-4 hover:bg-white p-2 rounded-lg "
        >
          <FaRegTrashAlt />
          Trash
        </motion.li>
      </motion.ul>
      <p className="text-zinc-400 text-sm">Task Progress</p>
      <ul className="flex flex-col gap-2 pl-4">
        <li className="flex items-center gap-4">
          Debugging <RiProgress5Line />
        </li>
        <li className="flex items-center gap-4">
          Geex Website <RiProgress2Line />
        </li>
      </ul>
      <button
        onClick={handleLogout}
        className="bg-red-400 text-center text-white font-bold rounded-lg cursor-pointer py-1"
      >
        LogOut
      </button>
    </div>
  );
};

export default Sidebar;

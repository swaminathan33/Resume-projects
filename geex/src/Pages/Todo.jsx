import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import TodoCard from "../Components/TodoCard";
import { MdOutlineInfo } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";
import { FiTag } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Todo = () => {
  const dummy_todos = [
    {
      id: 0,
      date: "January 24th, 2021 04:25 PM",
      todo: "Create custom floating action buttton in Geex Mobile",
    },
    {
      id: 1,
      date: "January 24th, 2021 04:25 PM",
      todo: "Revision 1 : Remove background in main banner Geex Website",
    },
    {
      id: 2,
      date: "January 24th, 2021 04:25 PM",
      todo: "Fix login & register form design",
    },
    {
      id: 3,
      date: "January 24th, 2021 04:25 PM",
      todo: "Add “cart icon” at Geex Ecommerce Page",
    },
    {
      id: 4,
      date: "January 24th, 2021 04:25 PM",
      todo: "Attend weekly meeting Geex Design Team",
    },
  ];
  return (
    <div className="grid grid-cols-8">
      <Sidebar />
      <div className="col-span-6">
        <Navbar page={"Todo"} />

        <div className="Dashboard mr-6 grid grid-cols-4">
          <div className="todo_sidebar col-span-1 rounded-xl ml-3 bg-white p-4">
            <button className="text-center bg-btn-strong text-white py-2 px-12 rounded-xl cursor-pointer">
              + New Task
            </button>
            <div>
              <ul className="pl-4 flex flex-col gap-4 my-4 text-gray-700">
                <li className="flex gap-2  hover:text-btn-strong">
                  <div className="text-gray-500 ">
                    <MdOutlineInfo fontSize={"22px"} />
                  </div>
                  Important
                </li>
                <li className="flex gap-2 hover:text-btn-strong">
                  <div className="text-gray-500 ">
                    <IoCheckmarkDoneSharp fontSize={"22px"} />
                  </div>
                  Completed
                </li>
                <li className="flex gap-2 hover:text-btn-strong">
                  <div className="text-gray-500">
                    <RiDeleteBin5Line fontSize={"22px"} />
                  </div>
                  Removed
                </li>
                <li className="flex gap-2 hover:text-btn-strong">
                  <div className="text-gray-500">
                    <BsThreeDots fontSize={"22px"} />
                  </div>
                  Due Soon
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex justify-between">
                <li>Label</li>
                <li>
                  <BsThreeDots />
                </li>
              </ul>
            </div>
            <div>
              <ul className="pl-4 flex flex-col gap-4 my-4 text-gray-600">
                <li className="flex gap-2">
                  <div className="mt-0.5">
                    <FiTag fontSize={"20px"} color="violet" />
                  </div>
                  Team
                </li>

                <li className="flex gap-2">
                  <div className="mt-0.5">
                    <FiTag fontSize={"20px"} color="green" />
                  </div>
                  Low
                </li>
                <li className="flex gap-2">
                  <div className="mt-0.5">
                    <FiTag fontSize={"20px"} color="orange" />
                  </div>
                  Medium
                </li>
                <li className="flex gap-2">
                  <div className="mt-0.5">
                    <FiTag fontSize={"20px"} color="blue" />
                  </div>
                  High
                </li>
                <li className="flex gap-2">
                  <div className="mt-0.5">
                    <LuPlusCircle fontSize={"20px"} />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Label"
                    className="border-0 outline-0"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="todos col-span-3 ml-8">
            <div className="top flex justify-between">
              <div className="title text-2xl text-gray-600">Important Task</div>
              <div>
                <button className="bg-btn-light px-4 flex gap-2 text-gray-500 rounded-xl py-2">
                  Newest
                  <div className="mt-1 text-btn-strong">
                    <IoIosArrowDown />
                  </div>
                </button>
              </div>
            </div>

            <div>
              {dummy_todos.map((i, index) => {
                return <TodoCard key={index} todo={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

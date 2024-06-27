import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const AddTodo = ({ openTodo, setOpenTodo, setDummyTodos }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    setOpenTodo(false);
    setDummyTodos((todos) => {
      return [
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          date: new Date().toLocaleString(),
          todo: title,
          completed: false,
          tags: "important",
        },
      ];
    });
    setTitle("");
  };

  return (
    <div
      className={` bg-black bg-opacity-20 absolute z-20 flex justify-center items-center border-2 border-black w-full h-full ${
        openTodo ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-5 rounded-lg w-96 max-sm:w-72">
        <div className="flex justify-between">
          <h2 className="text-gray-700">Add New Task</h2>
          <h2>
            <IoClose fontSize={"20px"} onClick={() => setOpenTodo(false)} />
          </h2>
        </div>
        <div className="">
          <div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="w-full py-2 mt-4 mb-4 outline-none"
              type="text"
              value={title}
              placeholder="Title"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full py-2 mb-4 outline-none"
              placeholder="Description"
            />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-gray-700">Due Date</h2>
          <ul className="text-gray-600">
            <li className="text-sm flex gap-2 items-center">
              <MdCheckBoxOutlineBlank />
              Team
            </li>
            <li className="text-sm flex gap-2 items-center">
              <MdCheckBoxOutlineBlank />
              Important
            </li>
            <li className="text-sm flex gap-2 items-center">
              <MdCheckBoxOutlineBlank />
              High
            </li>
            <li className="text-sm flex gap-2 items-center">
              <MdCheckBoxOutlineBlank />
              Medium
            </li>
            <li className="text-sm flex gap-2 items-center">
              <MdCheckBoxOutlineBlank />
              Low
            </li>
          </ul>
          <button
            onClick={() => handleAddTodo()}
            className="bg-violet-50 px-6 text-gray-600 py-1 hover:bg-fuchsia-600 hover:text-white rounded-md mt-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;

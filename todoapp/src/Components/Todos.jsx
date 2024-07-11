import React, { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { FaRegComments, FaTrashCan } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { taskdetailid } from "./Slices/TodoDetail";

const Todos = ({ text }) => {
  const dispatch = useDispatch();
  // const [completed, setCompleted] = useState(false);
  return (
    <div
      className="border-[2px] flex flex-col gap-3 p-4 rounded-xl hover:bg-indigo-400 hover:text-white cursor-pointer"
      onClick={() => dispatch(taskdetailid(text.id))}
    >
      <div className="top flex gap-3 items-center">
        <div>
          <MdOutlineCheckBoxOutlineBlank />
          {/* <MdOutlineCheckBox /> */}
        </div>
        <div className="title text-md">{text.todo.todo}</div>
      </div>
      <div className="flex gap-4 ml-7">
        <IoMdLink /> {}
        <FaRegComments />
        <div className="flex items-center gap-2 ">
          <FaRegCalendarAlt /> <span className="text-xs">{text.todo.date}</span>
        </div>
        <FaTrashCan onClick={() => deleteDoc(doc(db, "todos", text.id))} />
      </div>
    </div>
  );
};

export default Todos;

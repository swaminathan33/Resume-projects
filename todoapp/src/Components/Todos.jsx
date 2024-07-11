import React from "react";
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
  return (
    <div
      className="border-2 flex flex-col p-4 rounded-xl hover:bg-blue-200 cursor-pointer"
      onClick={() => dispatch(taskdetailid(text.id))}
    >
      <div className="top flex">
        <div>
          <MdOutlineCheckBoxOutlineBlank />
        </div>
        <div className="title text-sm">{text.todo.todo}</div>
      </div>
      <div className="flex gap-4">
        <IoMdLink />
        <FaRegComments />
        <FaRegCalendarAlt />
        <FaTrashCan onClick={() => deleteDoc(doc(db, "todos", text.id))} />
      </div>
    </div>
  );
};

export default Todos;

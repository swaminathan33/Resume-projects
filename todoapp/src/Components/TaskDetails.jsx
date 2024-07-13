import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { FaRegComments } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { PiArrowSquareDownFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { completedtodo, taskshow } from "./Slices/TodoDetail";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { motion } from "framer-motion";
import { boxVariant, listVariant } from "./constants/constants";

const TaskDetails = () => {
  const dispatch = useDispatch();
  // const [selectedTodo, setSelectedTodo] = useState([]);
  const completedtodovar = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.completedtodo
  );
  const taskshowvar = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.taskshow
  );
  const taskId = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.taskDetailId
  );
  const selectedtodo = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.selectedtodo
  );
  const [task, setTask] = useState({});
  // const [completed, setCompleted] = useState(task.completed);

  // console.log(task);

  const getTodo = async (id) => {
    try {
      let t = await getDoc(doc(db, "todos", id));
      // setSelectedTodo(k.data);
      setTask(t.data());
      console.log("showing", task);
    } catch (err) {}
  };

  useEffect(() => {
    try {
      const colRef = collection(db, "todos");
      const todoRef = doc(colRef, selectedtodo);
      updateDoc(todoRef, {
        completed: !task.completed,
      });
    } catch (err) {
      console.log(err);
    }
  }, [completedtodovar]);

  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      let k = snapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data(),
      }));
      getTodo(k[0].id);
    });
    console.log(task);
  }, []);

  useEffect(() => {
    getTodo(taskId);
  }, [taskId]);

  return (
    <div
      className={`m-2 dark:bg-gray-800 fixed top-8 bg-white max-sm:${
        taskshowvar ? "" : "hidden"
      }`}
    >
      <div className="text-indigo-800 dark:text-white  font-semibold text-xl max-sm:flex justify-between max-sm:mx-5">
        <span>Task Details</span>
        <IoClose
          className="text-xl hidden max-sm:block"
          onClick={() => dispatch(taskshow(false))}
        />
      </div>
      <div className="border-2 p-3 rounded-xl text-indigo-900 dark:text-white font-semibold mt-3 shadow-xl ">
        <p className="text-sm text-gray-500 flex justify-between">
          <span>My Work Task</span>
          <div
            className=""
            onClick={() => dispatch(completedtodo(!completedtodovar))}
          >
            {task.completed != undefined && task.completed ? (
              <MdOutlineCheckBox />
            ) : (
              <MdOutlineCheckBoxOutlineBlank />
            )}
          </div>
        </p>
        <div className="text-lg my-2 font-medium dark:text-white">
          {task?.todo}
        </div>
        <p className="text-xs">{task?.description}</p>
        <motion.ul
          variants={boxVariant}
          animate="visible"
          initial="hidden"
          className="flex flex-col mt-4 gap-3"
        >
          <motion.li variants={listVariant} className="flex gap-5 ">
            <div className="text-sm text-gray-500">Timeline</div>
            <div className="text-sm">{task?.date}</div>
          </motion.li>
          <motion.li variants={listVariant} className="flex gap-11 ">
            <div className="text-sm text-gray-500">Time</div>
            <div className="text-sm">{task?.time}</div>
          </motion.li>
          <motion.li variants={listVariant} className="flex gap-4 ">
            <div className="text-sm text-gray-500">Assignee</div>
            <div className="text-sm">{task?.assignee}</div>
          </motion.li>
          <motion.li variants={listVariant} className="flex gap-12 ">
            <div className="text-sm text-gray-500">Type</div>
            <div className="text-sm">Daily Task</div>
          </motion.li>
        </motion.ul>
        <div className="attachment mt-4 ">
          <div className="mb-3">Attachment</div>
          <ul className="flex gap-4 ">
            <li className="text-sm border-2 p-3 rounded-xl">
              <div className="text-black dark:text-white">Ragazo.xml</div>
              <div className="text-xs text-gray-400">19 April 2002</div>
            </li>
            <li className="text-sm border-2 p-3 rounded-xl">
              <div className="text-black dark:text-white">Ragazo.xml</div>
              <div className="text-xs text-gray-400">19 April 2002</div>
            </li>
            <li className="text-sm border-2 p-3 rounded-xl">
              <div className="text-black dark:text-white">Ragazo.xml</div>
              <div className="text-xs text-gray-600">19 April 2002</div>
            </li>
          </ul>
        </div>
        <div className="comments">
          <div className="flex items-center gap-2 ">
            <FaRegComments />
            <h2 className="dark:text-white">Comments</h2>
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;

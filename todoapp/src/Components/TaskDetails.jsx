import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { FaRegComments } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { PiArrowSquareDownFill } from "react-icons/pi";

const TaskDetails = () => {
  const taskId = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.taskDetailId
  );
  const [task, setTask] = useState({});

  const getTodo = async (id) => {
    try {
      const t = await getDoc(doc(db, "todos", id));
      setTask(t.data());
    } catch (err) {}
  };

  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      let k = snapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data(),
      }));
      getTodo(k[0].id);
    });
  }, []);

  useEffect(() => {
    getTodo(taskId);
  }, [taskId]);

  return (
    <div className="m-2 fixed top-8">
      <div className="text-indigo-800 font-semibold text-xl">Task Details</div>
      <div className="border-2 p-3 rounded-xl text-indigo-900 font-semibold mt-3">
        <p className="text-xs text-gray-500">My Work Task</p>
        <div className="text-lg my-2 font-medium">{task?.todo}</div>
        <p className="text-xs">{task?.description}</p>
        <ul className="flex flex-col mt-4 gap-3">
          <li className="flex gap-5 ">
            <div className="text-sm text-gray-500">Timeline</div>
            <div className="text-sm">{task?.date}</div>
          </li>
          <li className="flex gap-11 ">
            <div className="text-sm text-gray-500">Time</div>
            <div className="text-sm">{task?.time}</div>
          </li>
          <li className="flex gap-4 ">
            <div className="text-sm text-gray-500">Assignee</div>
            <div className="text-sm">{task?.assignee}</div>
          </li>
          <li className="flex gap-12 ">
            <div className="text-sm text-gray-500">Type</div>
            <div className="text-sm">Daily Task</div>
          </li>
        </ul>
        <div className="attachment mt-4">
          <div className="mb-3">Attachment</div>
          <ul className="flex gap-4">
            <li className="text-sm border-2 p-3 rounded-xl">
              <div className="text-black">Ragazo.xml</div>
              <div className="text-xs text-gray-400">19 April 2002</div>
            </li>
            <li className="text-sm border-2 p-3 rounded-xl">
              <div className="text-black">Ragazo.xml</div>
              <div className="text-xs text-gray-400">19 April 2002</div>
            </li>
            <li className="text-sm border-2 p-3 rounded-xl">
              <div className="text-black">Ragazo.xml</div>
              <div className="text-xs text-gray-400">19 April 2002</div>
            </li>
          </ul>
        </div>
        <div className="comments">
          <div className="flex items-center gap-2">
            <FaRegComments />
            <h2>Comments</h2>
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;

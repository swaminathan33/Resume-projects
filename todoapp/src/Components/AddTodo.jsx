import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addtodoshow } from "./Slices/TodoDetail";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const AddTodo = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ authdetails }) => authdetails.user);
  const newtask = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.newtaskshow
  );
  const [input, setInput] = useState({
    todo: "",
    description: "",
    date: "",
    time: "",
    assignee: "",
    file: "",
  });

  const [inputDescription, setInputDescription] = useState("");
  // const [input, setInput] =
  const handleSubmit = () => {
    addDoc(collection(db, "todos"), {
      todo: input.todo,
      description: input.description,
      timestamp: serverTimestamp(),
      date: input.date,
      time: input.time,
      uid: user.uid,
      assignee: input.assignee,
      completed: false,
    });
    dispatch(addtodoshow(false));
    setInput("");
  };

  return (
    <div className={`max-sm:`}>
      <div className="m-2 fixed top-8 w-[25rem] max-sm:w-[22rem] bg-white dark:bg-gray-800 max-sm:pb-20 ">
        <div className="text-indigo-800 font-semibold text-xl max-sm:flex justify-between dark:text-slate-300">
          <span>New Task</span>
          {/* <IoClose /> */}
        </div>
        <div className="border-2 p-3 rounded-xl text-indigo-900 font-semibold mt-3 dark:text-slate-300">
          <button
            onClick={() => dispatch(addtodoshow(false))}
            className="flex justify-end w-full text-xl"
          >
            <IoClose />
          </button>
          <div className="flex flex-col items-start mb-3">
            <p>Title</p>
            <input
              // value={input.todo}
              name="todo"
              onChange={(e) =>
                setInput((t) => ({ ...t, [e.target.name]: e.target.value }))
              }
              className="bg-gray-200 dark:bg-zinc-600 rounded-md mt-1 h-8 w-5/6 outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col items-start mb-3">
            <p>Description</p>
            <textarea
              value={input.description}
              name="description"
              onChange={(e) =>
                setInput((t) => ({ ...t, [e.target.name]: e.target.value }))
              }
              className="bg-gray-200 dark:bg-zinc-600 rounded-md mt-1 h-14 text-sm w-5/6 outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col items-start mb-3">
            <p>Date</p>
            <input
              value={input.date}
              name="date"
              onChange={(e) =>
                setInput((t) => ({ ...t, [e.target.name]: e.target.value }))
              }
              className="bg-gray-200 dark:bg-zinc-600 rounded-md mt-1 h-8 w-5/6 outline-none"
              type="date"
            />
          </div>

          <div className="flex flex-col items-start mb-3">
            <p>Time</p>
            <input
              value={input.time}
              name="time"
              onChange={(e) =>
                setInput((t) => ({ ...t, [e.target.name]: e.target.value }))
              }
              className="bg-gray-200 dark:bg-zinc-600 rounded-md mt-1 h-8 w-5/6 outline-none"
              type="time"
            />
          </div>

          <div className="flex flex-col items-start mb-3">
            <p>Assignee</p>
            <input
              value={input.assignee}
              name="assignee"
              onChange={(e) =>
                setInput((t) => ({ ...t, [e.target.name]: e.target.value }))
              }
              className="bg-gray-200 dark:bg-zinc-600 rounded-md mt-1 h-8 w-5/6 outline-none"
              type="text"
            />
          </div>

          {/* <div className="flex flex-col items-start mb-3">
            <p>Attachment</p>
            <input
              value={input.attachment}
              name="attachment"
              onChange={(e) =>
                setInput((t) => ({ ...t, [e.target.name]: e.target.value }))
              }
              className="bg-gray-200 rounded-md mt-1 h-8 w-5/6 outline-none"
              type="file"
            />
          </div> */}

          <div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-blue-700 p-1 rounded-lg mt-2 text-white"
              onClick={handleSubmit}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;

{
  /* <div className="bg-black absolute top-0 right-0 left-0 bottom-0 bg-opacity-20 flex justify-center items-center">
      <div className="">
        <button onClick={() => dispatch(addtodoshow(false))}>❌</button>
        <input
          value={input}
          placeholder="todo"
          onChange={(e) => setInput(e.target.value)}
          className="border-2"
          type="text"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div> */
}

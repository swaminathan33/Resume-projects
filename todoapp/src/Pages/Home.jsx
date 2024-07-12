import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Layout/MainLayout";
import Todos from "../Components/Todos";
import useAuthentication from "../Components/hooks/useAuthentication";
import AddTodo from "../Components/AddTodo";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addtodoshow, getfirsttodo } from "../Components/Slices/TodoDetail";
import { motion } from "framer-motion";
import { boxVariant, listVariant } from "../Components/constants/constants";

const Home = () => {
  const { logout } = useAuthentication();
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const user = useSelector(({ authdetails }) => authdetails.user);
  const showTodo = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.showTodo
  );
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(user));
    async function fetchData() {
      onSnapshot(collection(db, "todos"), (snapshot) => {
        const user_data = snapshot.docs.filter((doc) => {
          return doc.data()?.uid == user.uid;
        });

        setTodos(
          user_data.map((i) => ({
            id: i.id,
            todo: i.data(),
          }))
        );
        // setTodos(
        //   snapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     todo: doc.data(),
        //   }))
        // );
      });
      dispatch(getfirsttodo(todos));
    }
    fetchData();
  }, []);

  const getDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    setCurrentDate(currentDate);
  };
  useEffect(() => {
    getDate();
  }, []);
  return (
    <MainLayout>
      <div className="text-indigo-800 font-semibold pt-10 mx-5 overflow-hidden h-screen">
        <h2 className="text-2xl">Todo</h2>
        <div className="date mt-6 font-bold">
          Today, {currentDate && currentDate}
        </div>
        <div className="flex justify-between my-2">
          <ul className="flex mt-2 gap-4 text-gray-400">
            <li>List</li>
            <li>Board</li>
            <li>Completed</li>
          </ul>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="bg-indigo-500 text-white p-1 rounded-lg px-2"
          >
            <motion.button onClick={() => dispatch(addtodoshow(true))}>
              New Task
            </motion.button>
          </motion.div>
        </div>
        <motion.div className="flex flex-col gap-4 overflow-auto h-[25rem] no-scrollbar">
          {todos?.map((i, index) => {
            return <Todos text={i} key={index} />;
          })}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Home;

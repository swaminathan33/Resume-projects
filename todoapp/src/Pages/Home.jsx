import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Layout/MainLayout";
import Todos from "../Components/Todos";
import useAuthentication from "../Components/hooks/useAuthentication";
import AddTodo from "../Components/AddTodo";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addtodoshow, getfirsttodo } from "../Components/Slices/TodoDetail";
const Home = () => {
  const { logout } = useAuthentication();
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const user = useSelector(({ authdetails }) => authdetails.user);
  const showTodo = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.showTodo
  );
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

  return (
    <MainLayout>
      <div className="text-indigo-800 font-semibold mt-10 mx-5">
        <h2 className="text-2xl">Todo</h2>
        <div className="date mt-6">Today, 22 April</div>
        <div className="flex justify-between my-2">
          <ul className="flex mt-2 gap-4 text-gray-400">
            <li>List</li>
            <li>Board</li>
            <li>Completed</li>
          </ul>
          <div className="bg-indigo-500 text-white p-1 rounded-xl px-2">
            <button onClick={() => dispatch(addtodoshow(true))}>
              New Task
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {todos?.map((i, index) => {
            return <Todos text={i} key={index} />;
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

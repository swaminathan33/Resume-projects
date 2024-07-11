import React from "react";
import Sidebar from "../Sidebar";
import TaskDetails from "../TaskDetails";
import { useSelector } from "react-redux";
import AddTodo from "../AddTodo";

const MainLayout = ({ children }) => {
  const showTodo = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.showTodo
  );

  return (
    <div className="flex">
      <div className="w-[15rem]">
        <Sidebar />
      </div>
      <div className="w-[40rem]">{children}</div>
      <div className="w-2/6 mt-6">
        {showTodo ? <AddTodo /> : <TaskDetails />}
      </div>
    </div>
  );
};

export default MainLayout;

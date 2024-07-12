import React from "react";
import Sidebar from "../Sidebar";
import TaskDetails from "../TaskDetails";
import { useSelector } from "react-redux";
import AddTodo from "../AddTodo";

const MainLayout = ({ children }) => {
  const showTodo = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.showTodo
  );
  const sidebar = useSelector(
    ({ todoDetail }) => todoDetail.todoDetail.sidebarshow
  );

  return (
    <div className="flex">
      <div
        className={`w-[15rem] max-sm:${
          sidebar ? "block" : "hidden"
        } max-sm:absolute`}
      >
        <Sidebar />
      </div>
      <div className="w-[40rem]">{children}</div>
      <div className="w-2/6 mt-6 max-sm:absolute">
        {showTodo ? <AddTodo /> : <TaskDetails />}
      </div>
    </div>
  );
};

export default MainLayout;

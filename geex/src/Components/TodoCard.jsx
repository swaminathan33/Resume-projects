import React, { useEffect } from "react";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import profile from "../Assets/profile.svg";

const TodoCard = ({ todo, dummyTodos, setDummyTodos, setNewTodo }) => {
  const handleTodo = (id) => {
    const newDummyTodo = dummyTodos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setDummyTodos(newDummyTodo);
    console.log(newDummyTodo.slice(1));
  };

  useEffect(() => {
    setNewTodo(dummyTodos);
  }, [dummyTodos]);

  return (
    <div className="bg-white my-4 rounded-xl p-4 flex flex-col gap-2 border-2 max-sm:w-80">
      <div className="text-gray-500">
        {todo.completed ? (
          <MdOutlineCheckBox
            className="text-xl"
            onClick={() => handleTodo(todo.id)}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            className="text-xl"
            onClick={() => handleTodo(todo.id)}
          />
        )}
      </div>
      <div className="text-gray-500 text-sm">{todo.date}</div>
      <div className={`${todo.completed ? "line-through" : ""}`}>
        {todo.todo}
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col justify-center">
          <button className="bg-btn-light px-5 py-1 text-btn-strong rounded-xl">
            Team
          </button>
        </div>
        <img src={profile} alt="" className="w-12" />
      </div>
    </div>
  );
};

export default TodoCard;

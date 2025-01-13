import React, { useContext } from "react";
import { useState } from "react";
import uniqid from "uniqid";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuDelete } from "react-icons/lu";

import { dataContext } from "../context/Context";

function Todo() {
  const [title, setTitle] = useState("");

  const [task, setTasks] = useContext(dataContext);

  // const [tasks, setTasks] = useState([]);

  JSON.parse(localStorage.getItem("tasks")) || [];

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Please enter a task");
    let newTasks = {
      id: uniqid(),
      title: title,
    };

    let updatedTasks = [...tasks, newTasks];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTitle("");
  };

  function deleteHandler(i) {
    let updatedTasks = [...tasks];
    updatedTasks.splice(i, 1);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <div className="todo flex flex-col justify-center items-center">
      <h2 className="py-3 text-5xl font-bold mb-4">Todo App</h2>

      <form
        action="#"
        className=" w-[300px] mb-4 flex "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="mt-4 p-3 rounded-tl-md rounded-bl-md h-[3rem] w-[80%] text-2xl text-black "
          placeholder="Enter your task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className=" mt-4 p-3 border-white rounded-tr-md rounded-br-md h-[3rem] text-3xl flex justify-center items-center border-2">
          <IoIosAddCircleOutline />
        </button>
      </form>

      <div className="output flex w-[50%] m-auto">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="py-2 px-4 bg-[#ccc] text-black text-[1.3rem] font-bold rounded border-gray-200 text-xl inline-flex m-3"
            >
              <span>{task.title}</span>

              <LuDelete onClick={() => deleteHandler(task.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

import React, { useState } from "react";
import uniqid from "uniqid";
import TimeComp from "./TimeComp";
import ListsTaskcom from "./ListsTaskcom";
import ClearBtn from "./ClearBtn";
import HeadCom from "./HeadCom";
import AddTask from "./AddTask";


function Todo() {
  const [inital, setInital] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className=" todo w-full h-[100vh] bg-[#242424] text-white">
        <HeadCom />
        <TimeComp />

        <AddTask
          inital={inital}
          setInital={setInital}
          tasks={tasks}
          setTasks={setTasks}
        />

        <ListsTaskcom tasks={tasks} setTasks={setTasks} />

        <ClearBtn tasks={tasks} setInital={setInital} setTasks={setTasks} />
      </div>
    </>
  );
}

export default Todo;

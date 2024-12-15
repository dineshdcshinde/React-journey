import React from 'react'
import uniqid from "uniqid";

const AddTask = ({inital, setInital, tasks, setTasks}) => {
  // handle submit
  let handleSubmit = (e) => {
    e.preventDefault();

    // Check if vaue is empty
    if (!inital) return alert("Please enter task");

    // Check for duplicates
    let isTasksExists = tasks.some(
      (task) => task.title.toLowerCase() === inital.trim().toLocaleLowerCase()
    );
    if (isTasksExists) {
      alert("Already added");
      return setInital("");
    }


    // Adding new Tasks
    const newTasks = {
      id: uniqid(),
      title: inital.toLowerCase(),
      checked:false
    };

    setTasks([...tasks, newTasks]);
    setInital("");
  };
  // Adding the tasks to the local storage
  localStorage.setItem("routine", JSON.stringify(tasks))

  return (
    <form
    action="#"
    className="flex justify-center items-center w-[80%] m-auto h-[10vh] mt-4"
    onSubmit={handleSubmit}
  >
    <input
      type="text"
      placeholder="Enter your task ..."
      className="p-4 rounded-tl-[3rem] rounded-bl-[3rem] text-[1.4rem] text-black"
      value={inital}
      onChange={(e) => setInital(e.target.value)}
    />
    <button
      type="submit"
      className="p-[0.89rem] rounded-tr-[3rem] rounded-br-[3rem] text-[1.4rem] border-[2px] font-bold bg-[#268dd3] transition ease-in hover:bg-[#2280bf]"
    >
      Add Task
    </button>
  </form>
  )
}

export default AddTask
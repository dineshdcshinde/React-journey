import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { RiDeleteBin6Line } from 'react-icons/ri'

function ListsTaskcom({tasks, setTasks}) {

  let handleDeleteTodo = (title) => {
    let newTasks = tasks.filter((task) => task.title !== title);
    setTasks([...newTasks]);
  };

  

  return (
    <ul className="task-container  w-[50%]  m-auto mt-8 flex flex-col flex-wrap items-stretch">
          {tasks.map((task) => (
            <li
              className="bg-[#ccc] w-[80%] list-none text-black text-[1.7rem] font-medium 
              px-3 py-[0.7rem] rounded-xl flex justify-between items-center mb-4 flex-grow m-auto"
              key={task.id}
            >
              {task.title}
              <button className="check-btn bg-[#238cd3] rounded-3xl text-white p-2">
                <FaCheck />
              </button>
              <button
                className="del-btn check-btn bg-[#ef2c36] rounded-3xl text-white p-2"
                onClick={() => handleDeleteTodo(task.title)}
              >
                <RiDeleteBin6Line />
              </button>
            </li>
          ))}
        </ul>
  )
}

export default ListsTaskcom

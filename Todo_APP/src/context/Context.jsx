import React, { createContext, useState } from "react";

// 2. created context
export const dataContext = createContext(null);

const Context = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div>
        <dataContext.Provider value={[tasks, setTasks]}>
          {props.children}
        </dataContext.Provider>
      </div>
    </>
  );
};

export default Context;

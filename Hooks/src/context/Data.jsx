import React, { createContext, useState } from "react";

// creation of context
export const DataContext = createContext(null);

export const Data = (props) => {
  const [data, setData] = useState("React Js ❤️");

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};

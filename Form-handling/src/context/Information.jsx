import React, { createContext, useState } from "react";
import App from "../App.jsx";

// 2. Create context and export it outside the function
export const dataContext = createContext(null);

function Information(props) {
  // Creation of the data that u want to circulate
  const [data, setData] = useState("Bahut important data");

  return (
    <div className="bg-[#2a2a2a] w-full h-[100vh] text-white">
      {/* wrap the childrent with the dataContext.provider */}
      <dataContext.Provider value={[data, setData]}>{props.children}</dataContext.Provider>
    </div>
  );
}

export default Information;

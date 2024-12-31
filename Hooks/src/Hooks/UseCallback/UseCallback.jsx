import React, { useState } from "react";
import BtnCompo from "./BtnCompo";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper min-h-screen w-full bg-[#3c3c3c] text-white flex flex-col items-center justify-center">
      <p className="text-white text-3xl font-bold">{count}</p>
      <BtnCompo setCount={setCount} />
    </div>
  );
};

export default UseCallback;

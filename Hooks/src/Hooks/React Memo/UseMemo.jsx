import { useState } from "react";
import { RenderChild } from "./RenderChild";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const bioData = {
    name: "John Doe",
    age: 30,
  };

  return (
    <>
      <div className="wrapper w-full h-screen bg-[#3c3c3c] flex justify-center items-center flex-col  gap-4 text-[#ccc] text-2xl">
        <p>Current Count value : {count}</p>

        <button
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <RenderChild />
        {/* <RenderChild data={bioData} /> */}
        {/*
            If we pass the object in the "React.memo" hook, then that will be cause
            issue as that will re-render the componenet to avoid that we are using 
            the "useMemo" hook. That hook, has the power to avoid rendering. 
        */}
      </div>
    </>
  );
};

export default UseMemo;

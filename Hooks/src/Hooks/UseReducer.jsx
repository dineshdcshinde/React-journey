import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
    if (action.type === "RESET") {
      return (state = 0);
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="min-h-screen flex flex-col  justify-center items-center w-full bg-[#3c3c3c] text-white">
      <p className="text-4xl font-bold mb-3">{count}</p>

      <div className="btns flex gap-4">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="bg-blue-600 text-white text-[1.25rem] font-bold p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="bg-red-600 text-white text-[1.25rem] font-bold p-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 "
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="bg-gray-600 text-white text-[1.25rem] font-bold p-5 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducer;

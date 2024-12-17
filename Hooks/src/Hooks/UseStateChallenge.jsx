import React, { useState } from "react";

function UseStateChallenge() {
  const [count, setCount] = useState(1);
  const [steps, setSteps] = useState(1);

  let handleIncrement = () => {
    return setCount(count + steps);
  };

  let handleDecrement = () => {
    return setCount(count - steps);
  };

  let handleReset = () => {
    setCount(0);
    setSteps(0);
  };

  return (
    <div className="w-full h-[100vh] bg-[#2a2a2a] text-[#ccc]">
      <div className="practice">
        <h1 className="text-center text-3xl font-bold">useState Hook</h1>

        <div className="useState-practice flex flex-col justify-center items-center h-[80vh]   ">
          <p className="text-5xl mb-5">Count: {count}</p>
          <label
            className="block text-[1.5rem] font-medium text-white mb-2"
            htmlFor="number"
          >
            Steps:
          </label>
          <input
            type="number"
            id="number"
            className=" py-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 appearance-none"
            placeholder="Enter steps to count"
            value={steps}
            onChange={(e) => setSteps(+e.target.value)}
          />
          <div className="btn mt-6">
            <button
              className={`px-7 py-4 text-[1.5rem] bg-gradient-to-r from-blue-500 to-purple-600
               text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 
               hover:to-blue-500 focus:ring-4 focus:ring-purple-300 
              transition duration-300 ${count >= 100 && "opacity-30"}`}
              onClick={handleIncrement}
              disabled={count >= 100}
            >
              Increment
            </button>
            <button
              className={`px-4 py-4 text-[1.5rem] bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 focus:ring-4 focus:ring-teal-300 transition duration-300 mx-2 ${
                count <= 0 ? "opacity-30":""
              }  `}
              onClick={handleDecrement}
              disabled={count <= 0}
            >
              Decrement
            </button>
            <button
              className="px-9 py-4 text-[1.5rem] bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-red-500 focus:ring-4 focus:ring-pink-300 transition duration-300"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseStateChallenge;

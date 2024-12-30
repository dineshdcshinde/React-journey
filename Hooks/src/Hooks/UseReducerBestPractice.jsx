import React, { useReducer } from "react";

const UseReducerBestPractice = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return {
          ...state,
          count: state.count + state.inc > 20 ? 20 : state.count + state.inc,
        };

      case "Decrement":
        return {
          ...state,
          count: state.count - state.dec < 0 ? 0 : state.count - state.dec,
        };
      case "Reset":
        return initialState;
      default:
        return state;
    }
  };

  /*

  As useRedcer is the updated version of the useState, or we can say that the useReducer replaces the 
  useState hooks, and it provides a powerful way to manage state and side effects.

  The useReducer hook takes a reducer function and an initial state as arguments. The reducer function takes the current state and an action object as arguments, and returns the new state.

const [state, dispatch] = useReducer(reducer, initialState);
const [state, function(send the data to reducer)] = useReducer(function(state, action), initailState);


*/

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="min-h-screen flex flex-col  justify-center items-center w-full bg-[#3c3c3c] text-white">
        <p className="text-4xl font-bold mb-3">{state.count}</p>

        <div className="btns flex gap-4">
          <button
            onClick={() => dispatch({ type: "Increment" })}
            className="bg-blue-600 text-white text-[1.25rem] font-bold p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "Decrement" })}
            className="bg-red-600 text-white text-[1.25rem] font-bold p-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 "
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "Reset" })}
            className="bg-gray-600 text-white text-[1.25rem] font-bold p-5 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducerBestPractice;

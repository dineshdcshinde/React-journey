import React, { useState, useMemo } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);

  //   Use useMemo to avoid recalculating unnecessarily
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    let sum = 0;
    for (let i = 1; i <= 10000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <>
      <p className="text-2xl mb-3">
        The expensive calculation is here:{expensiveCalculation}
      </p>

      <button
        className="bg-blue-600 text-white text-[1.3rem] p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <p className="text-2xl mt-5">Current Count: {count}</p>
    </>
  );
};

export default ExpensiveComponent;

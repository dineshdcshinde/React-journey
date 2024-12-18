import React, { useEffect, useState } from "react";

const Challenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);
  /* 
    1. In this challenge, u want to create a count and the name state and increment the count by 1, 
    and also display the current count on the screen and also on the title . 

    2. make console.log for the name that is coming from the input that value should be display in the console window  with the help of the useEffect hook 
*/

  return (
    <>
      <div className="wrapper min-h-screen w-full bg-[#2a2a2a] text-white flex flex-col justify-center items-center gap-4">
        <p className="text-3xl text-white font-bold mb-2">{count}</p>

        <p className="text-3xl text-white font-bold mb-2">{name}</p>
        <input
          type="text"
          className="p-2 rounded-md text-[1.3rem] text-black mb-2"
          placeholder="Enter something"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-[#1e62d7] text-[1.5rem] font-bold"
          type="submit"
          onClick={(e) => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Challenge;

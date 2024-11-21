import React, { useState } from "react";
import "./Clock.css";
const clock = () => {
  const [Time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <div
        id="wrapper"
        className="h-[100vh] w-[100vw]
      flex justify-center items-center
     "
      >
        <div className="clock flex flex-wrap flex-col gap-2 items-center">
          <h1 className=" font-medium  text-5xl font-sans italic text-black cursor-pointer">
            Digital Clock{" "}
          </h1>
          <p className="py-4 text-[2.5rem] italic font-medium  text-black z-20 cursor-pointer">
            {Time}
          </p>
        </div>
      </div>
    </>
  );
};

export default clock;

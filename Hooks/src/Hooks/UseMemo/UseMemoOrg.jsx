import React from "react";
import ExpensiveComponent from "./ExpensiveComponent ";

const UseMemoOrg = () => {
  return (
    <>
      <div className="wrapper min-h-screen bg-[#3c3c3c] text-white w-full flex flex-col justify-center items-center">
        <ExpensiveComponent   />
      </div>
    </>
  );
};

export default UseMemoOrg;

import React from "react";

function ClearBtn({ tasks, setTasks, setInital }) {
  // clear Functionality

  let handleClearBtn = () => {
    setTasks([]);
    setInital("");
  };
  

  return (
    <section className="clearBtn flex justify-center items-center">
      <button
        className="border-2 border-blue-50 p-4 py-2 bg-[#cb2a2a] font-[700] hover:bg-[#ad2727]  rounded-full text-[1.5rem]"
        onClick={handleClearBtn}
      >
        Clear All
      </button>
    </section>
  );
}

export default ClearBtn;

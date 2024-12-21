import React, { useRef } from "react";

function Useref() {

const username = useRef(null)
const password = useRef(null)

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username.current.value);
    console.log('Password:', password.current.value);
}


  return (
    <div className="wrapper min-h-screen w-full bg-[#2a2a2a] text-white flex justify-center items-center">
    <form action="#" className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg w-[90%] max-w-md" onSubmit={handleSubmit}>

      <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your username"
          className="bg-[#333] text-white p-3 rounded-md outline-none w-full"
          ref={username}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-[#333] text-white p-3 rounded-md outline-none w-full"
          ref={password}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Log in
      </button>
    </form>
  </div>
  );
}

export default Useref;

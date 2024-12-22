import React, { useRef } from "react";
import { forwardRef } from "react";

const Forwardref = () => {
  const username = useRef(null);
  const password = useRef(null);

  // const InputLoginInfo = forwardRef((props, ref) => {
  //   return (
  //     <input type={props.type} placeholder={props.placeholder} ref={ref} className={props.className} />
  //   );
  // });
  const InputLoginInfo = (props) => {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        ref={props.ref}
        className={props.className}
      />
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username.current.value);
    console.log("Password:", password.current.value);
  };

  return (
    <div className="wrapper min-h-screen w-full bg-[#2a2a2a] text-white flex justify-center items-center">
      <form
        action="#"
        onSubmit={handleSubmit}
        className="bg-[#1a1a1a] p-7 rounded shadow-lg   flex flex-col gap-4"
      >
        <InputLoginInfo
          type="text"
          className="border  p-[0.7rem]    rounded-md shadow-sm focus:outline-none focus:ring-2 
          focus:ring-blue-500 text-black "
          placeholder="Enter your username"
          ref={username}
        />
        <InputLoginInfo
          type="password"
          className="border p-[0.7rem] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black "
          placeholder="Enter your username"
          ref={password}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Forwardref;

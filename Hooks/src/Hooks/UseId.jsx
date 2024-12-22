import React, { useId } from "react";

const UseId = () => {
  //     const usernameId = useId();
  //     const passwordId = useId();
  //     const emailId = useId();
  /*
    We can do this but if there were too much of the input data so there will be too mess in that so 
    we don't use the useId in this way. 

    **Note** : Don't use the useId in the key. 

*/

  //   return (
  //     <div className="wrapper bg-[#2a2a2a] text-white min-h-screen flex items-center justify-center w-full">
  //       <form
  //         action="#"
  //         className="bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-md"
  //       >
  //         <input
  //         name="username"
  //   id={usernameId}
  //           type="text"
  //           className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full"
  //           placeholder="Enter your username"
  //         />

  //         <input
  //         name="email"
  //   id={emailId}
  //           type="email"
  //           className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full"
  //           placeholder="Enter your email address"
  //         />

  //         <input
  //            name="password"
  //            id={passwordId}
  //            type="password"
  //            className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none               focus:ring-2 focus:ring-blue-500 text-black w-full"
  //           placeholder="Enter your password"
  //         />

  //         <button
  //           type="submit"
  //           className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  //         >
  //           Login
  //         </button>
  //       </form>
  //     </div>
  //   );

  // use in this way by only generation only one id and with the help of the concatination loop it where the id needs.

  const id = useId();

  return (
    <div className="wrapper bg-[#2a2a2a] text-white min-h-screen flex items-center justify-center w-full">
      <form
        action="#"
        className="bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-md"
      >
        <input
          name="username"
          id={id + "username"}
          type="text"
          className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full"
          placeholder="Enter your username"
        />

        <input
          name="email"
          id={id + "email"}
          type="email"
          className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full"
          placeholder="Enter your email address"
        />

        <input
          name="password"
          id={id + "password"}
          type="password"
          className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default UseId;

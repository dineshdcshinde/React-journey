// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [fname, setfname] = useState("");
//   const [username, setusername] = useState("");
//   const submitHandler = (e) => {
//     e.preventDefault();

//     // const { fname, userName } = e.target;
//     // console.log(fname.value, userName.value);

//     const data = {
//       fname,
//       username,
//     };
//     console.log(data);
//   };

//   return (
//     <>
//       <h1 className="text-center text-3xl bg-zinc-400 text-white">
//         For Handling
//       </h1>

//       <form onSubmit={submitHandler} className="bg-slate-300 h-[200px]">

//         <input
//           type="text"
//           placeholder="Enter name"
//           className="p-[0.5rem] rounded-sm  border mr-3 "
//           // name="fname"
//           onChange={(e) => setfname(e.target.value)}
//           value={fname}
//         />

//         <input

//           type="text"
//           placeholder="Enter username"
//           className="p-[0.5rem] rounded-sm  border mr-3 "
//           onChange={(e) => setusername(e.target.value)}
//           value={username}
//           // name="userName"
//         />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;

import React from "react";
import User from "./components/User";

function App() {
  return (
    <div>
      <p>Hi there!</p>

      <User />
    </div>
  );
}


export default App;

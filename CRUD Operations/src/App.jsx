import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getPost } from "./utility/PostAPI";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <div className="wrapper bg-[#3c3c3c] text-[#ccc] w-full min-h-screen ">
        <Posts />
      </div>
    </>
  );
}

export default App;

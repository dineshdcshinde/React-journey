import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getPost } from "./utility/PostAPI";
import Posts from "./components/Posts";
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper bg-[#3c3c3c] text-[#ccc] w-full min-h-screen ">
        {/* <Posts /> */}

        <Routes>
          <Route path="/" element={<Posts />} />
          {/* <Route path="/create" element={<Form />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;

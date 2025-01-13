import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Create from "./pages/Create";
// import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:id" element={<SingleProduct />} />
        {/* <Route path="/edit/:id" element={<Edit/>} /> */}
        <Route path="/create" element= {<Create/>} />
      </Routes>
    </>
  );
}

export default App;
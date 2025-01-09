import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import PhotoDetails from "./components/PhotoDetails";

const App = () => {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home/>}/>
<Route  path="/v1/photos/:id" element={<PhotoDetails/>}/>



  </Routes>



    </>
  );
};

export default App;

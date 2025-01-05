import React from "react";
import Navbar from "../components/Navbar";
import CardContainer from "../components/CardContainer";

const Home = () => {
  return (
    <>
      <div className="wrapper min-h-screen w-full bg-[#3c3c3c] text-[#ccc] flex ">
        {/* NavBar */}
        <Navbar />
        {/* Card Container */}
        <CardContainer />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import CardContainer from "../components/CardContainer";
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
  const { search, pathname } = useLocation();

  return (
    <>
      <div className="wrapper min-h-screen w-full bg-[#3c3c3c] text-[#ccc] flex ">
        {pathname != "/" ||
          (search.length > 0 && (
            <NavLink
              to={"/"}
              className=" text-bold absolute left-[22%] pt-2 font-bold text-2xl text-[#e62525] "
            >
              Home
            </NavLink>
          ))}

        {/* NavBar */}
        <Navbar />
        {/* Card Container */}
        <CardContainer />
      </div>
    </>
  );
};

export default Home;

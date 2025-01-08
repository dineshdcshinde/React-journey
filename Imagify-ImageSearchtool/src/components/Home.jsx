import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="wrapper bg-[#3c3c3c] min-h-screen w-full">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              <NavLink to="/">Imagify</NavLink>
            </div>
            <div className="hidden md:flex space-x-4">
              <NavLink
                to="/"
                className="text-white  text-[2vw] hover:text-gray-400"
              >
                Home
              </NavLink>
              <NavLink
                to="/price"
                className=" text-[2vw] text-white hover:text-gray-400"
              >
                Price
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white text-[2vw] hover:text-gray-400"
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className="text-white text-[2vw] hover:text-gray-400"
              >
                About Us
              </NavLink>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-2">
              <NavLink
                to="/"
                className="block  text-[4vw]   text-white hover:text-gray-400 p-2"
              >
                Home
              </NavLink>
              <NavLink
                to="/price"
                className="block text-[4vw] text-white hover:text-gray-400 p-2"
              >
                Price
              </NavLink>
              <NavLink
                to="/contact"
                className="block text-[4vw]   text-white hover:text-gray-400 p-2"
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className="block  text-[4vw]  text-white hover:text-gray-400 p-2"
              >
                About Us
              </NavLink>
            </div>
          )}
        </nav>
        <div className="container mx-auto p-4"></div>
      </div>
    </>
  );
};

export default Home;

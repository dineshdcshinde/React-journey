import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ImageCard from "./ImageCard";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("india");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`wrapper bg-[#3c3c3c] min-h-screen w-full
        ${
          isDarkMode
            ? "bg-gray-900 text-gray-100  transition-all"
            : "bg-gray-200 text-gray-900 transition-all"
        }

        `}
      >
        <nav
          className={`p-4
            ${
              isDarkMode
                ? "bg-gray-800 text-white transition-colors"
                : "bg-white transition-colors "
            }
          `}
        >
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
              <NavLink to="/">Imagify</NavLink>
            </div>
            <div className="hidden md:flex space-x-4">
              <NavLink
                to="/"
                className={`
                  text-[1.8vw] font-semibold
                  ${
                    isDarkMode
                      ? "text-gray-100 hover:text-gray-400 transition-colors"
                      : "text-gray-900 hover:text-gray-600 transition-colors"
                  }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/price"
                className={`
                  text-[1.8vw] font-semibold
                  ${
                    isDarkMode
                      ? "text-gray-100 hover:text-gray-400 transition-colors"
                      : "text-gray-900 hover:text-gray-600 transition-colors"
                  }`}
              >
                Price
              </NavLink>
              <NavLink
                to="/contact"
                className={`
                  text-[1.8vw] font-semibold
                  ${
                    isDarkMode
                      ? "text-gray-100 hover:text-gray-400 transition-colors"
                      : "text-gray-900 hover:text-gray-600 transition-colors"
                  }`}
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className={`
                  text-[1.8vw] font-semibold
                  ${
                    isDarkMode
                      ? "text-gray-100 hover:text-gray-400 transition-colors"
                      : "text-gray-900 hover:text-gray-600 transition-colors"
                  }`}
              >
                About Us
              </NavLink>

              <button onClick={toggleDarkMode} className={`text-[1.8vw]  `}>
                {isDarkMode ? "🌙" : "☀️"}
              </button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleMenu}
                className={`
                  ${
                    isDarkMode
                      ? "bg-gray-800 text-white transition-colors"
                      : "bg-white transition-colors "
                  }
                  `}
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

              <button onClick={toggleDarkMode} className={`text-[3.3vw]  `}>
                {isDarkMode ? "🌙" : "☀️"}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div
              className={`md:hidden mt-2
             ${
               isDarkMode
                 ? "bg-gray-800 text-white transition-colors"
                 : "bg-white transition-colors "
             }
            `}
            >
              <NavLink
                to="/"
                className={`block  text-[4vw] font-semibold p-2 w-full
                    ${
                      isDarkMode
                        ? "text-gray-100 hover:text-gray-400 transition-colors  "
                        : "text-gray-800  hover:text-gray-900 hover:bg-gray-300  transition-colors "
                    }
                  `}
              >
                Home
              </NavLink>
              <NavLink
                to="/price"
                className={`block  text-[4vw] font-semibold p-2 w-full
                    ${
                      isDarkMode
                        ? "text-gray-100 hover:text-gray-400 transition-colors  "
                        : "text-gray-800  hover:text-gray-900 hover:bg-gray-300  transition-colors "
                    }
                  `}
              >
                Price
              </NavLink>
              <NavLink
                to="/contact"
                className={`block  text-[4vw] font-semibold p-2 w-full
                    ${
                      isDarkMode
                        ? "text-gray-100 hover:text-gray-400 transition-colors  "
                        : "text-gray-800  hover:text-gray-900 hover:bg-gray-300  transition-colors "
                    }
                  `}
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className={`block  text-[4vw] font-semibold p-2 w-full
                    ${
                      isDarkMode
                        ? "text-gray-100 hover:text-gray-400 transition-colors  "
                        : "text-gray-800  hover:text-gray-900 hover:bg-gray-300  transition-colors "
                    }
                  `}
              >
                About Us
              </NavLink>
            </div>
          )}
        </nav>

        <div className="container w-full m-auto ">
          <div className="seach-section w-full flex  justify-end mt-4 pr-10">
            <form action="#" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search image"
                className="rounded p-2 mr-4 text-[1.5vw] placeholder-black font-semibold bg-[#ccc] text-black"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white text-[1.5vw] px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </form>
          </div>

          <div className="imageSections flex flex-wrap justify-center gap-4 items-center mt-5 w-full">
            <ImageCard query={query} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

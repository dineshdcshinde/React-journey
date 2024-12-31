import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all" : "font-bold"
        }
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all" : "font-bold"
        }
        to="/movie"
      >
        Movie
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all" : "font-bold"
        }
        to="/service"
      >
        Service
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all" : "font-bold"
        }
        to="/About"
      >
        About
      </NavLink>
    </div>
  );
};

export default Header;

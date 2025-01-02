import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar flex gap-4 ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all font-medium" : "font-medium"
        }
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all font-medium" : "font-bold"
        }
        to="/movie"
      >
        Movie
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all font-medium" : "font-bold"
        }
        to="/service"
      >
        Service
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all font-medium" : "font-bold"
        }
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-400 transition-all font-medium" : "font-bold"
        }
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Header;

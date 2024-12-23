import React from "react";
import viteLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={`flex items-center justify-between pt-5 pl-4 pr-4`}>
      <img src={viteLogo} className="h-12 animate-bounce  " alt="logo" />

      <div className="nav-items flex gap-[3rem]">
        <NavLink
          className={(e) =>
            e.isActive
              ? "text-[#f1912bea] text-[1.25rem] font-bold "
              : "text-[1.25rem] font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "text-[#f1912bea] text-[1.25rem] font-bold"
              : "text-[1.25rem] font-bold"
          }
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={(e) =>
            e.isActive
              ? "text-[#f1912bea] text-[1.25rem] font-bold"
              : "text-[1.25rem] font-bold"
          }
          to="/services"
        >
          Services
        </NavLink>

        <NavLink
          className={(e) =>
            e.isActive
              ? "text-[#f1912bea] text-[1.25rem] font-bold"
              : "text-[1.25rem] font-bold"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

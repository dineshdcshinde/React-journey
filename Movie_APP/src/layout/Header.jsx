import { NavLink } from "react-router-dom";
import React from "react";
const Header = () => {
  // const getNavLinkStyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "green" : "black",
  //   };
  // };

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>Moviefy</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="/">HOME</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about">ABOUT</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/movies">Movies</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

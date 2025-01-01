import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        <br />
        <NavLink
          to="/"
          className="p-3 bg-slate-800 text-white font-[1.3rem] rounded-md"
        >
          Go Back To HomePage
        </NavLink>
        <br /> <br />
        <button
          className="p-3 bg-slate-800 text-white font-[1rem] rounded-md"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </section>
    </>
  );
};

export default ErrorPage;

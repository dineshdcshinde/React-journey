import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Movie = () => {
  // https://www.omdbapi.com/?s=Batman&apikey=b7c584b3

  const moviesData = useLoaderData(); // Retrieves data from the loader

  return (
    <>
      <ul>
        {moviesData.Search?.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <br />
            <p>{movie.Year}</p>
            <br />

            <NavLink to={`/movie/${movie.imdbID}`}>
              <button>Watch Now</button>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movie;

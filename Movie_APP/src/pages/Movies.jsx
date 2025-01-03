import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

const Movies = () => {
  const moviesData = useLoaderData();
  return (
    <>
      <ul className="container grid grid-four--cols">
        {moviesData?.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
      </ul>
    </>
  );
};

export default Movies;

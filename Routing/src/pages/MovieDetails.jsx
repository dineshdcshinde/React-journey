import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  //   const {moviesID} = useParams();
  const moviesDetails = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>{moviesDetails.Title}</h1>
        <img src={moviesDetails.Poster} alt={moviesDetails.Title} />
        <hr />
        <button
          className="p-3 mb-5 bg-blue-500 text-white text-3xl"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <br />
      </div>
    </>
  );
};

export default MovieDetails;

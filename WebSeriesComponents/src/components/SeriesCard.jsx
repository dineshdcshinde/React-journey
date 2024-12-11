import React from "react";

function SeriesCard({ data }) {
  let { name, id, img_url, rating, description, cast, genre, watch_url } = data;
  return (
    <li>
      <img src={img_url} alt="" />
      <h2>{name}</h2>
      <p>
        <strong>Rating: {rating}</strong>
      </p>
      <p>Descrition: {description}</p>
      <p>Cast:{cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
}

export default SeriesCard;

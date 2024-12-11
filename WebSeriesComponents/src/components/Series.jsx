import React from "react";
import SeriesData from "../api/Seriesdata.json";
import SeriesCard from "./SeriesCard";

function Series() {
  return (
    <ul>
      {SeriesData.map((prevCard) => (
        <SeriesCard key={prevCard.id} data = {prevCard} />
      ))}
    </ul>
  );
}

export default Series;

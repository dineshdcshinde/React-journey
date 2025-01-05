import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <>
      <div className="card-container  w-[80%] p-4 flex flex-wrap m-auto justify-between">
        <Card/>
      </div>
    </>
  );
};

export default CardContainer;

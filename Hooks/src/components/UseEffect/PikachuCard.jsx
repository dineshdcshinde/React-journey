import React, { useEffect, useState } from "react";

function PikachuCard() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err));
  }, []);

  if (apiData) {
    return (
      <div className="min-h-screen w-full bg-[#2a2a2a] text-white flex justify-center items-center">
        <div className="card bg-[#c7c7c7] p-2 rounded-md">
          <img
            src={apiData.sprites.other.dream_world.front_default}
            className="h-[300px] w-[300px] object-cover object-center"
            alt={apiData.name}
          />
          <h3 className="text-black text-[2rem] text-center font-bold">
            Hi there!
          </h3>
        </div>
      </div>
    );
  }
}

export default PikachuCard;

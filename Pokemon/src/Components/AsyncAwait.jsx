import React, { useEffect, useState } from "react";

function AsyncAwait() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let api = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = async () => {
    try {
      let res = await fetch(api);
      let data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <h1 className="text-center text-[2rem] pt-4">Loading...</h1>;
  }

  if (error) {
    return (
      <h1 className="text-center text-[2rem] pt-4 text-red-600">
        Error: {error.message}
      </h1>
    );
  }

  return (
    <>
      <div className="wrapper min-h-screen w-full bg-[#2a2a2a] text-white flex justify-center items-center">
        <div className="card bg-[#bfbcbc] p-4 rounded-lg">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            className="h-[300px] w-[300px] object-cover object-center rounded-md"
            alt=""
          />
          <h3 className="text-black text-[2rem] pr-2 font-bold text-center uppercase">
            {pokemon.name}
          </h3>
        </div>
      </div>
    </>
  );
}

export default AsyncAwait;

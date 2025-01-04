import React, { useEffect, useState } from "react";
import PokemondCards from "./PokemondCards";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  let api = "https://pokeapi.co/api/v2/pokemon?limit=130";
  const fetchPokemon = async () => {
    try {
      let res = await fetch(api);
      let data = await res.json();

      // calling the api to get the detailed information of each pokemon with the maping
      let detailedPokemon = data.results.map(async (currPokemon) => {
        let res = await fetch(currPokemon.url);
        let data = await res.json();
        setLoading(false);
        return data;
      });

      // getting the detailed information by passing it to the Promise.all
      let detailedPokemonResponse = await Promise.all(detailedPokemon);
      setPokemon(detailedPokemonResponse);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Search Functionality
  const searchPokemon = pokemon.filter((currPokemon) => {
    return currPokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  // const searchPokemon = pokemon.filter((currPokemon) => {
  //   return currPokemon.name.toLowerCase().includes(search.toLowerCase());
  // });

  if (loading)
    return <h1 className="font-bold text-2xl text-center pt-4 ">Loading...</h1>;

  if (error)
    return (
      <h1 className="font-bold text-red-500 text-2xl text-center pt-4 ">
        {error.message}
      </h1>
    );

  return (
    <>
      <div className="wrapper w-full bg-[#3e3e3e] h-[100%] overflow-hidden">
        <h1 className="text-4xl text-center text-white font-bold pt-4">
          Pokemon Card's
        </h1>

        <div className="searchContainer flex justify-center items-center mt-[1.5rem]">
          <input
            placeholder="Search Pokemon"
            className="p-[0.9rem] w-[25%] bg-transparent border-b-4 rounded-lg text-white
          border-white text-[1.4rem] outline-none "
            type="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="pokemon-container flex  flex-wrap w-[100%] justify-between gap-4 bg-[#3e3e3e] pt-4 scroll-smooth">
          {/* {pokemon.map((currPokemon, index) => { */}
          {/* it is just render all the things firstly then when we search on the at that time it will only
              pick that and just serve that pokemon card that u searched
          */}
          {searchPokemon.map((currPokemon, index) => {
            return <PokemondCards key={index} data={currPokemon} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Pokemon;

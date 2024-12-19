import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let api = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <>
        <h1 className="text-center  pt-4 text-[2rem] font-bold">Loading...</h1>
      </>
    );
  }

  if (error) {
    return (
      <h1 className="text-center  pt-4 text-[2rem] text-red-600 font-bold">
        An error occurred: {error.message}
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

export default App;

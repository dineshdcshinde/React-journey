const PokemondCards = ({ key, data }) => {
  return (
    <div className="pokemon-card bg-gray-200 rounded-lg shadow-lg m-1">
      <li
        key={key}
        className="list-none z-[111] absolute flex flex-col items-center h-[100%] w-[100%] "
      >
        <div className="">
          <img
            className=" object-cover object-center  w-[150px] h-[150px]"
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
          />
          <h1 className="text-2xl text-center">{data.name}</h1>
        </div>
      </li>
    </div>
  );
};

export default PokemondCards;

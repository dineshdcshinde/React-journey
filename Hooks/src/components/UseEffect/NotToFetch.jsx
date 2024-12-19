import React, { useState } from "react";

function NotToFetch() {
  const [apiData, setApiData] = useState([]);

  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((err) => console.log(err.message));

  return (
    <>
      <div className="wrapper min-h-screen w-full bg-[#2a2a2a] text-white">
        <h1 className="mb-3 px-3 text-3xl font-bold py-2" >Not to Fetch</h1>
        <p className="mb-3 px-3">
          In this example, we are fetching data from an API, but we are not
          using useEffect to fetch data. Instead, we are using a simple fetch
          request. This might not be the best practice for large applications,
          but it is a good example to show how to fetch data without using
          useEffect.
        </p>
      

        <p className="mb-3 px-3">
          As we are calling it with the help of the fetch api and storing it to
          the apiData in the useState but it is not working because it is just
          ongoing calling to api due to this there is showing that apiData.map
          is not a function.
          <br />
          To avoid this, we want to use the useEffect hooks.
        </p>
        <ul>
          {apiData.map((curr) => {
            return <li key={curr[id]}>curr[name]</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default NotToFetch;

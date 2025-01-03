export const GetMovies = async () => {
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?s=Batman&apikey=${import.meta.env.VITE_API_KEY}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


// export const GetMovies = async () => {
//   try {
//     let res = await fetch(
//       `https://www.omdbapi.com/?s=Batman&apikey=${import.meta.env.VITE_API_KEY}`
//     );
//     let data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };




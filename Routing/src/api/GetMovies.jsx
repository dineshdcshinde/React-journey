export const GetMovies = async () => {
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?s=Batman&apikey=${import.meta.env.VITE_API_KEY}`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

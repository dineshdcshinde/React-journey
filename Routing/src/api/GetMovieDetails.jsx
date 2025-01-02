export const GetMovieDetails = async ({ params }) => {

  try {
    let response = await fetch(
      `https://www.omdbapi.com/?i=${params.moviesID}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

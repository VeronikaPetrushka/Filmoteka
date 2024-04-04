import axios from "axios";

const fetchMoviePoster = async (movieId) => {
  const configUrl = "https://api.themoviedb.org/3/configuration";
  const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTk5MGM1YzQyMmMwMGQxN2Q5MDZhODhkNjMzNDE0MSIsInN1YiI6IjY2MGM0YmJmOWM5N2JkMDE3Y2E1NmRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bXJ9mlkM8Efx7ifVc3IaoDag-JcX5gUYWCXk_47yW70",
      accept: "application/json",
    },
  };

  try {
    const configResponse = await axios.get(configUrl, options);
    const { base_url, poster_sizes } = configResponse.data.images;

    const movieResponse = await axios.get(movieUrl, options);
    const { poster_path } = movieResponse.data;

    const posterSize = poster_sizes.find((size) => size === "w500");
    const imageUrl = `${base_url}${posterSize}${poster_path}`;

    return imageUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchMoviePoster;

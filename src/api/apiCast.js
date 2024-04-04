import axios from "axios";

const fetchMovieCast = (movieId, setCast) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTk5MGM1YzQyMmMwMGQxN2Q5MDZhODhkNjMzNDE0MSIsInN1YiI6IjY2MGM0YmJmOWM5N2JkMDE3Y2E1NmRjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bXJ9mlkM8Efx7ifVc3IaoDag-JcX5gUYWCXk_47yW70",
      accept: "application/json",
    },
  };

  axios
    .get(url, options)
    .then((response) => {
      const cast = response.data.cast;
      setCast(cast);
    })
    .catch((err) => console.error(err));
};

export default fetchMovieCast;

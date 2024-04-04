import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBox from "../../components/SearchBox/SearchBox";
import getMovies from "../../api/apiSearch";
import Navigation from "../../components/Navigation/Navigation";

export default function Movies() {
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";

  useEffect(() => {
    getMovies(movieName, setMovie);
  }, [movieName]);

  const visibleMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(movieName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <Navigation />

      <main>
        <SearchBox value={movieName} onChange={updateQueryString} />
        <MovieList movies={visibleMovies} />
      </main>
    </div>
  );
}


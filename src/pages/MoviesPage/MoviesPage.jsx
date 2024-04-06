import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBox from "../../components/SearchBox/SearchBox";
import getMovies from "../../api/apiSearch";
import Navigation from "../../components/Navigation/Navigation";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Toaster } from "react-hot-toast";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies(movieName);
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    }

    fetchMovies();
  }, [movieName]);

  const visibleMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(movieName.toLowerCase())
  );

  const handleSearch = async (word) => {
    setMovies([]);
    setError(false);
    setSearchParams({ name: word });
  };

  return (
    <div>
      <Navigation />

      <main>
        <SearchBox value={movieName} onSearch={handleSearch} />
        <Toaster position="top-right"/>
        <MovieList movies={visibleMovies} />
        {error && <NotFoundPage />}
      </main>
    </div>
  );
}

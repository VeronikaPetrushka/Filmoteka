import { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import fetchMovies from "../../api/apiHome";
import { RiMovieFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(setMovies);
  }, []);

  return (
    <main>
      <h1 className={css.homeTitle}>Trending today</h1>
      <ul className={css.homeList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} className={css.homeItemLink}>
              <RiMovieFill color="blue" size="30" className={css.iconItem} />
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

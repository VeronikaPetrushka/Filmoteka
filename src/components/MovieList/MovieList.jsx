import css from './MovieList.module.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className={css.movieContainer}>
      <ul className={css.movieSearchList}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieCardWrapper}>
            <div className={css.movieImgBox}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
                alt={movie.original_title}
                className={css.movieImg}
              />
            </div>
            <Link to={`/movie/${movie.id}`} className={css.movieName}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module'

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      {movies.map((movie) => (
        <div key={movie.id} className={css.cardWrapper}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <img src="" alt="" />
            <h3 className={css.movieName}>{movie.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

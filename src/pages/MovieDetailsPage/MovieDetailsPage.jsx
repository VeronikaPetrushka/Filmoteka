import { useEffect, useState, useRef } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import fetchMovieDetails from "../../api/apiDetails";
import fetchMoviePoster from "../../api/apiPoster";
import css from './MovieDetailsPage.module.css'

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [posterUrl, setPosterUrl] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    fetchMovieDetails(movieId, setMovieDetails);
    fetchMoviePoster(movieId).then((url) => setPosterUrl(url));
  }, [movieId]);

  if (!movieDetails) {
    return <div className={css.MDLoading}>Loading...</div>;
  }

  return (
    <div>

      <Link to={backLinkHref.current} className={css.movieDetailsBack}>Back to movies</Link>
          
      <h2 className={css.movieDetailsName}>{movieDetails.title}</h2>
      
      <div className={css.movieDetailsContainer}>
        
        <div className={css.moviePosterBox}>
            {posterUrl && <img src={posterUrl} alt={movieDetails.title} className={css.moviePoster} />}
        </div>
        
        <div className={css.MDBox}>
              
            <p className={css.movieDetailTitle}>
                Release Year:
                <span className={css.movieDetail}>
                    {movieDetails.release_date}
                </span>
            </p>
          
            <p className={css.movieDetailTitle}>
                Overview:
                <span className={css.movieDetail}>
                    {movieDetails.overview}
                </span>
            </p>

            <p className={css.movieDetailTitle}>
                Genre:
                <span className={css.movieDetail}>
                    {movieDetails.genres.map((genre) => genre.name).join(", ")}
                </span>
            </p>
              
        </div>

      </div>
      
      <div className={css.movieMoreBox}>
        <ul className={css.movieMoreList}>
            <li key={movieId}>
              <Link to={`cast`} className={css.movieMoreItem}>Cast</Link>
            </li>
            <li key={movieId}>
              <Link to={`reviews`} className={css.movieMoreItem}>Reviews</Link>
            </li>
        </ul>
        <Outlet />
      </div>
          
    </div>
  );
}

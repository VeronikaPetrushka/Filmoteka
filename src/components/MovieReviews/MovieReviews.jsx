import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieReviews from "../../api/apiReviews";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
    
  useEffect(() => {
    fetchMovieReviews(movieId, setReviews)
  }, [movieId]);

  return;
};

export default MovieReviews;
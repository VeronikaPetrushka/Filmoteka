import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieReviews from "../../api/apiReviews";
import css from './MovieReviews.module.css'

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
    
  useEffect(() => {
    fetchMovieReviews(movieId, setReviews)
  }, [movieId]);

  if (!reviews) {
    return <div className={css.noReviews}>Sorry, no reviews for this movie yet...</div>;
  }

    const updatedReviews = reviews.map((review) => {
        const { id, author, content } = review;
        return {
            id,
            author,
            content,
        };
    });

  return (
    <div>
      <ul className={css.reviewsList}>
          {updatedReviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <h3 className={css.reviewAuthor}>{review.author}</h3>
              <p className={css.reviewContentBox}>Review:
                <span className={css.reviewContent}>
                  {review.content}
                </span>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
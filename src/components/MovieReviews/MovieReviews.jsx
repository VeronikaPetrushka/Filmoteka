import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieReviews from "../../api/apiReviews";
import css from './MovieReviews.module.css'

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [visibleReviews, setVisibleReviews] = useState(2);
    
  useEffect(() => {
    fetchMovieReviews(movieId, setReviews)
  }, [movieId]);

  if (!reviews) {
    return <div className={css.noReviews}>Sorry, no reviews for this movie yet...</div>;
  }

  const updatedReviews = reviews.slice(0, visibleReviews).map((review) => {
    const { id, author, content } = review;
    return {
      id,
      author,
      content,
    };
  });

  const loadMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 2);
  };

  return (
    <div className={css.reviewsContentContainer}>
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
      {visibleReviews < reviews.length && (
        <button onClick={loadMoreReviews} className={css.seeMoreReviewsBtn}>
          See more
        </button>
      )}
    </div>
  );
};

export default MovieReviews;
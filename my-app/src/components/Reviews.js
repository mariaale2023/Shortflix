import { useEffect, useState } from "react";
import "./Reviews.css";
// import axios from "axios";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const movieId = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    (movieId) => {
      const fetchReviews = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/movies/${movieId}/reviews`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch reviews");
          }

          const data = await response.json();
          const filteredReviews = data.filter(
            (review) => review.movieId === movieId
          );
          setReviews(filteredReviews);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchReviews();
    },
    [movieId]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="section-reviews">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews for this movies</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.movieId}>
              <p>User: {review.userName} </p>
              <p>Rating: {review.rating}</p>
              <p>Content: {review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;

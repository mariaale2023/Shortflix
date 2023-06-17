const formatReview = (review) => {
  if (!review) {
    return null; //
  }
  return {
    id: review.id,
    userId: review.userId,
    userName: review.userName,
    movieId: review.movieId,
    rating: review.rating,
    content: review.content,
  };
};

module.exports = formatReview;

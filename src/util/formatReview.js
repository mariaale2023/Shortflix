const formatReview = (review) => {
  if (!review) {
    return null; //
  }
  return {
    userId: review.userId,
    userName: review.userName,
    id: review.id,
    movieId: review.movieId,
  };
};

module.exports = formatReview;

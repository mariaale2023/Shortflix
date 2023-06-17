const formatMovie = (movie) => {
  if (!movie) {
    return null; // Or handle the case in an appropriate way
  }
  return {
    // id: movie._id.toString(),
    id: movie.id,
    title: movie.title,
    director: movie.director,
    actors: movie.actors,
    image: movie.image,
    url: movie.url,
    genres: movie.genres,
    country: movie.country,
    releaseYear: movie.releaseYear,
    synopsis: movie.synopsis,
    likes: movie.likes,
    dislikes: movie.dislikes,
    duration: movie.duration,
    reviews: movie.reviews,
    host: movie.host,
    type: movie.type,
    userCreator: movie.userCreator,
  };
};

module.exports = formatMovie;

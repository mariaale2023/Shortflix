const formatMovie = (movie) => {
  if (!movie) {
    return null; // Or handle the case in an appropriate way
  }
  return {
    id: movie._id,
    title: movie.title,
    director: movie.director,
    actors: movie.actors,
    imagen: movie.imagen,
    url: movie.url,
    genres: movie.genres,
    country: movie.country,
    year: movie.year,
    synopsis: movie.synopsis,
  };
};

module.exports = formatMovie;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
// import BackButton from "./BackButton";
import HeaderMoviePage from "./HeaderMoviePage";
import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = await fetch(`http://localhost:5001/movies/${id}`);
      // FIXME: Make a fetch request and call setmovie with the response body

      if (fetchUrl.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await fetchUrl.json();
      setMovie(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isNotFound) {
    return (
      <>
        <p className="error">Sorry! We can't find that movie</p>
        {/* <BackButton /> */}
      </>
    );
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HeaderMoviePage />
      <ul className="movie-list">
        <li className="movie" key={movie.id}>
          <ReactPlayer url={movie.url} />
          <div className="mov-text-box">
            <h2 className="mov-name">{movie.title}</h2>
            <p className="mov-description">Director: {movie.director}</p>
            <p className="mov-description">Durantion: {movie.durantion} sec</p>
            <p className="mov-description">Genres: {movie.genres}</p>
            <p className="mov-description">Country: {movie.country}</p>
            <p className="mov-description">Release Year: {movie.releaseYear}</p>
            <p className="mov-description">Cast: {movie.actors}</p>
            <p className="mov-description">{movie.synopsis}</p>
            <p className="mov-description">Likes: {movie.likes}</p>
            <p className="mov-description">Dislikes: {movie.dislike}</p>
          </div>
        </li>
      </ul>
      {/* <CreateReservation movieName={movie.name} /> */}
    </>
  );
};

export default Movie;

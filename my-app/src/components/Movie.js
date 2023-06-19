import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import BackButton from "./BackButton";

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
      <ul className="movie-list">
        <li className="movie" key={movie.id}>
          <img className="movie-img" src={movie.image} alt={movie.title} />
          <div className="movie-text-box">
            <h2 className="movie-name">{movie.title}</h2>
            <p className="movie-description">{movie.synopsis}</p>
          </div>
        </li>
      </ul>
      {/* <CreateReservation movieName={movie.name} /> */}
    </>
  );
};

export default Movie;

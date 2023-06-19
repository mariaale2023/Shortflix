import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./movieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/movies");
      const data = await response.json();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <ul className="movie-list">
        {movies.map((movie) => {
          return (
            <li className="movies" key={movie.id}>
              <img className="movie-img" src={movie.image} alt={movie.title} />
              {/* <div className="movie-text-box"> */}
              {/* <h2 className="movie-name">{movie.title}</h2> */}
              {/* <p className="movie-description">{movie.synopsis}</p> */}
              {/* <Link className="btn" to={`/movies/${movie.id}`}>
                  Reserve now
                </Link> */}
              {/* </div> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;

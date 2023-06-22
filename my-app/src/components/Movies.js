import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/movies");
      const data = await response.json();
      // setMovies(data);

      const reversedData = data.reverse().slice(0, 5); // Reverse the array of movies
      setMovies(reversedData);
    };
    fetchData();
  }, []);

  return (
    <section className="section-all-movies container">
      <h1 className="title-section-movies">Last Release</h1>
      <ul className="movies-list">
        {movies.map((movie) => {
          return (
            <li className="movies" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  className="movie-img"
                  src={movie.image}
                  alt={movie.title}
                />
              </Link>
              {/* <img className="movie-img" src={movie.image} alt={movie.title} /> */}

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
    </section>
  );
};

export default MovieList;

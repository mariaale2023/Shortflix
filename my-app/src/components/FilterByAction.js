import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FilterByBox.css";

const ActionMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/movies`);
      const data = await response.json();
      setMovies(data);
    };
    fetchData();
  }, []);

  const filteredMovies = movies
    .filter((movie) => movie.genres.includes("Action"))
    .slice(0, 2);
  console.log(filteredMovies);

  return (
    <>
      <h1 className="title-filter-genres">ACTION</h1>
      <div className="filter-by-genres">
        {filteredMovies.map((movie) => (
          <div className="movie-filter" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img className="img-filter" src={movie.image} alt={movie.title} />
            </Link>
            <h2 className="movie-name-filter">{movie.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActionMovies;

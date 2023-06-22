import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FilterByBox.css";

const SciFiMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/movies");
      const data = await response.json();
      setMovies(data);
    };
    fetchData();
  }, []);

  const filteredMovies = movies
    .filter((movie) => movie.genres.includes("Sci-Fi"))
    .slice(0, 2);
  console.log(filteredMovies);

  return (
    <>
      <h1 className="title-filter-genres">Sci-Fi</h1>
      <div className="filter-by-genres">
        {filteredMovies.map((movie) => (
          <div className="movie-filter" key={movie.id}>
            <Link classsName="img-wrapped" to={`/movies/${movie.id}`}>
              <img className="img-filter" src={movie.image} alt={movie.title} />
            </Link>
            <h2 className="movie-name-filter">{movie.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default SciFiMovies;

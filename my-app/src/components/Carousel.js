import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

const CarouselComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the movies data from the database
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5001/movies"); // Replace with your API endpoint
        const data = await response.json();
        const lastFourMovies = data.slice(-4); // Get the last 4 movies from the array
        setMovies(lastFourMovies);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              className="d-block w-100"
              src={movie.image}
              alt={movie.title}
            />
          </Link>

          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Collapse } from "react-bootstrap";
import HeaderMoviePage from "./HeaderMoviePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = await fetch(`http://localhost:5001/movies/${id}`);

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
      </>
    );
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // const toggleSynopsis = () => {
  //   setIsSynopsisOpen(!isSynopsisOpen);
  //   setIsInfoOpen(!isInfoOpen);
  // };

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const toggleSynopsis = () => {
    setIsSynopsisOpen(!isSynopsisOpen);
  };

  return (
    <>
      <HeaderMoviePage />
      <ul className="movie-list">
        <li className="movie" key={movie.id}>
          <ReactPlayer url={movie.url} />
          <div className="mov-text-box">
            <h2 className="mov-name">{movie.title}</h2>
            <div className="likes-wrapped">
              <div className="likes-wrapped">
                <FontAwesomeIcon icon={faThumbsUp} className="like-icon" />
                <p className="num-likes">{movie.likes}</p>
              </div>
              <div className="likes-wrapped">
                <FontAwesomeIcon icon={faThumbsDown} className="like-icon" />
                <p className="num-likes">{movie.dislikes}</p>
              </div>
            </div>

            <div className="mov-buttons">
              <button
                className={`btn btn-link ${isInfoOpen ? "fixed-button" : ""}`}
                onClick={toggleInfo}
                aria-expanded={isInfoOpen}
                aria-controls="movieInfoCollapse"
              >
                {isInfoOpen ? "Info" : "Info"}
              </button>
              <button
                className={`btn btn-link ${
                  isSynopsisOpen ? "fixed-button" : ""
                }`}
                onClick={toggleSynopsis}
                aria-expanded={isSynopsisOpen}
                aria-controls="movieSynopsisCollapse"
              >
                {isSynopsisOpen ? "Synopsis" : "Synopsis"}
              </button>
            </div>

            <div className="mov-info-wrapped">
              <Collapse in={isInfoOpen}>
                <div>
                  <p className="mov-description">Director: {movie.director}</p>
                  <p className="mov-description">
                    Duration: {movie.duration} sec
                  </p>
                  <p className="mov-description">Genres: {movie.genres}</p>
                  <p className="mov-description">Country: {movie.country}</p>
                  <p className="mov-description">
                    Release Year: {movie.releaseYear}
                  </p>
                  <p className="mov-description">Cast: {movie.actors}</p>
                </div>
              </Collapse>
            </div>

            <div className="mov-synopsis">
              <Collapse in={isSynopsisOpen}>
                <div>
                  <h3 className="mov-title-h3">Synopsis</h3>
                  <p className="mov-description">{movie.synopsis}</p>
                </div>
              </Collapse>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Movie;

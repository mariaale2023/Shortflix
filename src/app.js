const express = require("express");
const cors = require("cors");
const app = express();
const movieSchema = require("./schema/movieSchema");
// const userSchema = require("./schema/userSchema");
// const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const formatMovie = (movie) => {
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

app.get("/movies", async (req, res) => {
  const movies = await movieSchema.find({});
  return res.status(200).send(movies.map(formatMovie));
});
module.exports = app;

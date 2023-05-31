const express = require("express");
const cors = require("cors");
const app = express();
const movieSchema = require("./schema/movieSchema");
const userSchema = require("./schema/useSchema");
const formatMovie = require("./util/formatMovie");
const formatUser = require("./util/formatUser");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const validId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

// READ
app.get("/movies", async (req, res) => {
  const movies = await movieSchema.find({});
  return res.status(200).send(movies.map(formatMovie));
});

app.get("/movies/:id", async (req, res) => {
  const id = req.params.id;
  const isValidId = validId(id);

  // Check if id is valid
  if (!isValidId) {
    return res.status(400).send({ message: "INVALID ID" });
  }

  const singleMovie = await movieSchema.findById(id);
  const formatedMovie = formatMovie(singleMovie);
  // If the reservation is not found
  if (!formatedMovie) {
    return res.status(404).send({ message: "Movie not found" });
  }
  // Retunr the Single movie
  res.status(200).send(formatedMovie);
});

app.get("/users", async (req, res) => {
  const users = await userSchema.find({});
  return res.status(200).send(users.map(formatUser));
});

// CREATE

module.exports = app;

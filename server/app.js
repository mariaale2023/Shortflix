const express = require("express");
const cors = require("cors");
const app = express();
const movieSchema = require("./schema/movieSchema");
const reviewSchema = require("./schema/reviewSchema");
const userSchema = require("./schema/useSchema");
const formatMovieId = require("./util/formatMovie");
const formatUser = require("./util/formatUser");
const formatReviewId = require("./util/formatReview");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const validId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

// ____ MOVIES REQUEST_____

app.get("/movies", async (req, res) => {
  const movies = await movieSchema.find({});
  return res.status(200).send(movies.map(formatMovieId));
});

app.get("/movies/:id", async (req, res) => {
  const id = req.params.id;
  const isValidId = validId(id);

  // Check if id is valid
  if (!isValidId) {
    return res.status(400).send({ message: "INVALID ID" });
  }

  const singleMovie = await movieSchema.findById(id);
  const formatedMovie = formatMovieId(singleMovie);
  // If the reservation is not found
  if (!formatedMovie) {
    return res.status(404).send({ message: "Movie not found" });
  }
  // Retunr the Single movie
  res.status(200).send(formatedMovie);
});

// Create new movie
app.post("/movies", async (req, res) => {
  const newMovie = new movieSchema({
    title: req.body.title,
    director: req.body.director,
    actors: req.body.actors,
    imagen: req.body.imagen,
    url: req.body.url,
    genres: req.body.genres,
    country: req.body.country,
    year: req.body.year,
    synopsis: req.body.synopsis,
  });

  await newMovie.save();
  res.status(201).json(formatMovieId(newMovie));
});

// ____ USERS REQUEST _____
app.get("/users", async (req, res) => {
  const users = await userSchema.find({});
  return res.status(200).send(users.map(formatUser));
});

// ____ REVIEWS REQUEST____
app.get("/reviews", async (req, res) => {
  const reviews = await reviewSchema.find({});
  if (reviews.length === 0) {
    return { message: "No reviews for this movie" };
  }
  return res.status(200).send(reviews.map(formatReviewId));
});
app.get("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  const isValidId = validId(id);

  // Check if id is valid
  if (!isValidId) {
    return res.status(400).send({ message: "INVALID ID" });
  }

  const singleReview = await reviewSchema.findById(id);
  const formatedReview = formatReviewId(singleReview);
  // If the reservation is not found
  if (!formatedReview) {
    return res.status(404).send({ message: "Review not found" });
  }
  // Retunr the Single movie
  res.status(200).send(formatedReview);
});

// Reviews for a single movie
app.get("/movies/:movieId/reviews", async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const reviews = await reviewSchema.find({ movieId });

    if (reviews.length === 0) {
      return res.json({ message: "'There are no reviews for this movie'" });
    }
    res.json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the reviews." });
  }
});
module.exports = app;

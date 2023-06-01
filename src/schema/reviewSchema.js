const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  userId: String,
  userName: String,
  id: String,
  movieId: String,
  rating: Number,
  content: String,
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;

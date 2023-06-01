const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  userId: String,
  userName: String,
  id: String,
  movieId: String,
});

const User = mongoose.model("User", reviewSchema);
module.exports = Idr;

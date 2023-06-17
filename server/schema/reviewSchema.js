const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    userId: String,
    userName: String,
    // id: String,
    movieId: String,
    rating: Number,
    content: String,
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;

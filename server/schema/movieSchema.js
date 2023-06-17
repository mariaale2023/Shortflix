const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    actors: [String],
    director: String,
    duration: String,
    genres: [String],
    host: String,
    image: String,
    synopsis: String,
    title: String,
    type: String,
    url: String,
    country: String,
    // reviews: [
    //   {
    //     reviewId: String,
    //     userId: String,
    //     rating: Number,
    //     content: String,
    //     timestamp: String,
    //   },
    // ],
    userCreator: {
      userName: String,
      userId: String,
    },
    // releaseYear: String,
    // likes: Number,
    // dislikes: Number,
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

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;

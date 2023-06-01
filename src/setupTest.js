const mongoose = require("mongoose");
const movies = require("../data/movies.json");
const movieSchema = require("./schema/movieSchema");

const { MongoMemoryServer } = require("mongodb-memory-server");

let instance;

beforeAll(async () => {
  instance = await MongoMemoryServer.create();
  await mongoose.connect(instance.getUri());

  // mongoose does not support the "$oid" syntax in the JSON
  // so replace it with a mongoose ObjectId
  const moviesWithObjectId = movies.map((movie) => {
    return {
      ...movie,
      _id: new mongoose.Types.ObjectId(movie.id),
      // createdDate: movie.createdDate.$date,
    };
  });

  await movieSchema.collection.insertMany(moviesWithObjectId);
});

afterAll(async () => {
  await mongoose.disconnect();
  await instance.stop();
});

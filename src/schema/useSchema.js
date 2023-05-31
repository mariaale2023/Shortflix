const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  id: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;

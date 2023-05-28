const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const app = require("./app");

// connect Mongoose
mongoose.connect("mongodb://localhost:27017/mongo");

// Liste APP
app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});

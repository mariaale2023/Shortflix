const mongoose = require("mongoose");
const port = process.env.PORT || 5001;
const app = require("./app");

// connect Mongoose

const mongoDbUri = process.env.MONGO_URI || "mongodb://localhost:27017/mongo";

mongoose.connect(mongoDbUri);

// Liste APP
app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});

// Why does nodemon go into a loop when starting the server with 'npm start' command?

// How to troubleshoot nodemon loop issue while starting the server with 'npm start'?

// How to resolve 'sh: nodemon: command not found' error while starting the server with 'npm start'?

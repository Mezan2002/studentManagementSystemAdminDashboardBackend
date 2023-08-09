// * require start
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;
// * require end

// * middlewares start
app.use(cors());
app.use(express.json());
// * middlewares end

// * connect mongoDB start
// ? mongoDB uri and client here start
// ? mongoDB uri and client here end
// * connect mongoDB end

// * run function start
const run = async () => {
  try {
    // * API will start here
    // * API will end here
  } finally {
    console.log();
  }
};

run().catch((err) => console.log(err));

// * run function end

// * initial configurations for express start
app.get("/", (req, res) => {
  res.send("Server is Running Hurrah!");
});
app.listen(port, () => {
  console.log(`Server in Port ${port}`);
});

// * initial configurations for express end

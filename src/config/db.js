require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

const connectDb = () => {
  return mongoose.connect(
    DATABASE_URL,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
        console.error("Connection to database has failed.");
      } else {
        console.log("Connection to database has been successful.");
      }
    }
  );
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;

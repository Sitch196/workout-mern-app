const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const app = express();

// //middlewares
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(express.json());

app.use("/api/workouts", workoutRoutes);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connection to DB was successfull");
  } catch (err) {
    console.log(err);
  }
};
connectDB();
app.listen(process.env.PORT, () => {
  console.log("Listening on Port 4000");
});

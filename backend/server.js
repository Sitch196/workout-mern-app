const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

const cors = require("cors");
const app = express();

// //middlewares
app.use(cors());

app.use(express.json());

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

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

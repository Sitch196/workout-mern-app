const requireAuth = require("../middleware/requireAuth.jsx");
const express = require("express");
// const Workout = require('../models/workoutModel')
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkouts,
} = require("../controllers/workoutController");

const router = express.Router();

//check if user is authorized
router.use(requireAuth);

//get all workouts
router.get("/", getWorkouts);

//get specific workout
router.get("/:id", getWorkout);

//create a workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);
// update a workout
router.patch("/:id", updateWorkouts);

module.exports = router;

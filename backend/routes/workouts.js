const express = require('express')
const router = express.Router()
// const Workout = require('../models/workoutModel')
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkouts } = require('../controllers/workoutController')


//get all workouts
router.get('/',getWorkouts)

//get specific workout
router.get('/:id',getWorkout)


//create a workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',deleteWorkout)
// update a workout
router.patch('/:id',updateWorkouts)

module.exports = router
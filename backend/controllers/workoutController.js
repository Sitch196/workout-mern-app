const Workout = require('../models/workoutModel')


 exports.getWorkouts = async (req,res)=>{
    const workouts = await Workout.find({})
    res.status(200).json(workouts)
    
}
exports.getWorkout = async (req,res) => {
    try{
        const workouts = await Workout.findById(req.params.id)
        res.status(200).json({
            status:'Success',
            data:workouts
        })
    }catch(err){
        res.status(404).json({
            message:'No such workout'
        })
    }

}
//create a new Workout
 exports.createWorkout = async (req,res)=>{

    const workout = await Workout.create(req.body)
    res.status(200).json({
        status:'Success',
        data:workout
    })
}
//update a workout 
exports.deleteWorkout = async (req,res)=>{
    try{
        await Workout.findByIdAndDelete(req.params.id)
        
        
        res.status(200).json({
            message:'Workout deleted'
        })
    }catch(err){
        res.json({
            status:'failed',
            message:'WORKOUT NOT FOUND'
        })
    }
}
exports.updateWorkouts = async (req,res)=>{
    try{
         const workout = await Workout.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status:'Success',
            data:workout

        })
    }catch(err){
        res.json({
            status:'failed',
            message:'Invalid Update Request'
        })
    }
}
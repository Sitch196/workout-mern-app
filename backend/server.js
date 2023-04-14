const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const cors = require('cors')
const app = express()

// //middleware
app.use(cors())
app.use(express.json())


app.use('/api/workouts',workoutRoutes)
    const connectDB = async()=>{
        try{
            await mongoose.connect(process.env.DATABASE)
            console.log('Connection to DB was successfull')
        }catch(err){
            console.log(err)
        }
    }
connectDB()
app.listen(process.env.PORT,()=>{
    console.log('Listening on Port 4000')
})
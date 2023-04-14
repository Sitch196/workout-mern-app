import React from "react";

function WorkoutDetails({ workout }) {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>LOAD(kg):{workout.load}</p>
      <p>REPS:{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  );
}

export default WorkoutDetails;

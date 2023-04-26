import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
function WorkoutDetails({ workout, onDelete }) {
  const handleClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/workouts/${workout._id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        onDelete(workout._id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>LOAD (kg) : {workout.load}</p>
      <p>REPS : {workout.reps}</p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), {
          addSufffix: true,
        })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
}

export default WorkoutDetails;

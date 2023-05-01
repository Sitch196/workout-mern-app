import React, { useContext } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { AuthContext } from "../../Context/AuthContext";

function WorkoutDetails({ workout, onDelete }) {
  const { user } = useContext(AuthContext);
  const handleClick = async () => {
    try {
      if (!user) return;
      const response = await fetch(
        `https://workout-app-mern-test-start.onrender.com/api/workouts/${workout._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
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

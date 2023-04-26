import React, { useEffect, useState } from "react";
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";

function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };
  const handleDelete = (deleteWorkoutId) => {
    const updatedWorkouts = workouts.filter(
      (workout) => workout._id !== deleteWorkoutId
    );
    setWorkouts(updatedWorkouts);
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data);
        setError(false);
        console.log(data);
      }
      if (!response.ok) {
        setError(true);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      {!error && (
        <div className="workouts">
          {workouts.length > 0 &&
            workouts.map((workout) => {
              return (
                <WorkoutDetails
                  key={workout._id}
                  workout={workout}
                  onDelete={handleDelete}
                />
              );
            })}
          {error && <h1>Failed to Fetch</h1>}
        </div>
      )}
      <WorkoutForm onAddWorkout={addWorkout} />
    </div>
  );
}

export default Home;

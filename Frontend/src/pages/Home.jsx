import React, { useContext, useEffect, useState } from "react";
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";
import { AuthContext } from "../../Context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

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
    const storedWorkouts = localStorage.getItem("workouts");
    if (storedWorkouts) {
      setWorkouts(JSON.parse(storedWorkouts));
    }
    const fetchWorkouts = async () => {
      const response = await fetch(
        "https://workout-app-mern-test-start.onrender.com/api/workouts",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data);
        setError(false);
        localStorage.setItem("workouts", JSON.stringify(data));

        console.log(data);
      } else {
        setError(true);
      }
    };
    if (user) {
      fetchWorkouts();
    }
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

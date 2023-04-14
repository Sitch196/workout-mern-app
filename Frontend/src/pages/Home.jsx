import React, { useEffect, useState } from "react";
import WorkoutDetails from "../Components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data);
        console.log(data);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((workout) => {
          return <WorkoutDetails key={workout._id} workout={workout} />;
        })}
      </div>
    </div>
  );
}

export default Home;

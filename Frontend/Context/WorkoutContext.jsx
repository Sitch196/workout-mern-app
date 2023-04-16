// import { createContext, useState } from "react";

// export const WorkoutsContext = createContext({
//   workouts: null,
//   setWorkouts: () => {},
//   createWorkout: () => {},
// });

// export const WorkoutsProvider = ({ children }) => {
//   const [workouts, setWorkouts] = useState(null);

//   const createWorkout = (newWorkout) => {
//     setWorkouts([newWorkout, ...workouts]);
//   };

//   return (
//     <WorkoutsContext.Provider value={{ workouts, setWorkouts, createWorkout }}>
//       {children}
//     </WorkoutsContext.Provider>
//   );
// };

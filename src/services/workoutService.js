const workout = require("../databases/workout")
const { v4: uuid } = require('uuid');

const getAllWorkouts = () =>{
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkouts = () =>{
    return;
};


// ... Crea una copia del obj y lo guarda en el obj
const createNewWorkout = (newWorkout) =>{
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(), 
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC"})  
    }

    const createdWorkout = workout.createNewWorkout(workoutToInsert)
    return createdWorkout;
};

const updateOneWorkout = () =>{
    return;
};

const deleteOneWorkout = () =>{
    return;
};


module.exports = {
    getAllWorkouts,
    getOneWorkouts,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
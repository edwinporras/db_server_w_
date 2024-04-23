const workout = require("../databases/workout")

const getAllWorkouts = () =>{
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkouts = () =>{
    return;
};

const createNewWorkout = () =>{
    return;
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
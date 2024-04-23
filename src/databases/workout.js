const DB = require('./db.json');
const { saveToDB } = require("./utils")

const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = 
    DB.workouts.findIndex(
        (workouts) => workouts.name === newWorkout.name)> -1

    if (isAlreadyAdded) {
        return
    }

    DB.workouts.push(newWorkout)
    saveToDB(DB)
    return newWorkout;
}

module.exports = {
    getAllWorkouts,
    createNewWorkout
}
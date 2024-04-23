const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: 200, data: allWorkouts})
}

const getOneWorkouts = (req, res) => {
    const workouts = workoutService.getOneWorkouts(req.params.workoutId);
    res.send(`Obteniendo workout ${req.params.workoutId}`)
}

const createNewWorkout = (req, res) => {
    const createWorkouts = workoutService.createNewWorkout(req.params.workoutId);
    res.send(`Creando workout ${req.params.workoutId}`)
}

const updateOneWorkout = (req, res) => {
    const updateWorkouts = workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Acualizando workout ${req.params.workoutId}`)
}

const deleteOneWorkout = (req, res) => {
    const deleteWorkouts = workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Eliminando workout ${req.params.workoutId}`)
}

module.exports = {
    getAllWorkouts, 
    getOneWorkouts,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
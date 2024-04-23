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
    const { body } = req;
    
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return;
    }

    const createWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }
    const createWorkouts = workoutService.createNewWorkout(createWorkout);
    res.status(201).send({status: "OK", data: createWorkouts});
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
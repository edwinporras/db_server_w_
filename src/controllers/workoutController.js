const getAllWorkouts = (req, res) => {
    res.send("Obteniendo todos los workouts")
}

const getOneWorkouts = (req, res) => {
    res.send(`Obteniendo workout ${req.params.workoutId}`)
}

const createNewWorkout = (req, res) => {
    res.send(`Creando workout ${req.params.workoutId}`)
}

const updateOneWorkout = (req, res) => {
    res.send(`Acualizando workout ${req.params.workoutId}`)
}

const deleteOneWorkout = (req, res) => {
    res.send(`Eliminando workout ${req.params.workoutId}`)
}

module.exports = {
    getAllWorkouts, 
    getOneWorkouts,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
const router = require('express').Router();
const Workout = require('../models/workout');


// Add a new workout 
// Workout is a date with an array of exercises
router.post('/api/workouts', (req, res) =>{
    Workout.create({})
        .then(dbworkout =>{
            res.json(dbworkout);
        })
        .catch(err =>{
            res.json(err);
        });
});

// ADD exercises to a work out put route /api/wourkouts/:id


// DELETE workout /api/workouts


// GET all workouts /api/workouts


// GET specific workout (get the last 7 workouts) /api/workouts/range


module.exports = router;

// Routes are already defined in public folder

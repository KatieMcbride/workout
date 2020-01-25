const router = require('express').Router();
const Workout = require('../models/workout');


// Add a new workout 
// Workout is a date with an array of exercises
router.post('/api/workouts', (req, res) =>{
    Workout.create({})
        .then(dbWorkout =>{
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.json(err);
        });
});

// ADD exercises to a work out put route /api/wourkouts/:id
router.put('/api/workouts/:id', (req, res) =>{
    Workout.update(
    {
        _id: req.params.id
      },
    {$set:
            {'type': req.body.type,
             'name': req.body.name,
             'distance': req.body.distance,
             'duration': req.body.duration,
            }},(err, result) => {
                if(err) {
                throw err;
            }
        res.send(result);
      });
});

// DELETE workout /api/workouts


// GET all workouts /api/workouts
router.get("/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


// GET specific workout (get the last 7 workouts) /api/workouts/range


module.exports = router;

// Routes are already defined in public folder

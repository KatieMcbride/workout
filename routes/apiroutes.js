const router = require('express').Router();
const mongojs = require("mongojs");
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
    console.log(req.body);

    Workout.updateOne(
    {
        _id: mongojs.ObjectId(req.params.id)
      },
    {$push:
            {
                exercises: {type: req.body.type,
                    name: req.body.name,
                    distance: req.body.distance,
                    duration: req.body.duration,
                    weight: req.body.weight,
                    sets: req.body.sets,
                    reps: req.body.reps,
            }}},(err, result) => {
                if(err) {
                throw err;
            }
        res.send(result);
      });
});



// GET all workouts /api/workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


// GET specific workout (get the last 7 workouts) /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
     .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("workout range");
    }).catch(err => {
        res.json(err);
        console.log("workout error");
      });
    
  });

module.exports = router;



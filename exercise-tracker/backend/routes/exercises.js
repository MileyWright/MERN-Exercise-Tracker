const router = require('express').Router();
const Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercise => {
        res.status(200).json(exercise)
    })
    .catch(err => {
        res.status(400).json('Error: ', err)
    })
});

router.route('/add').post((req, res) =>{ 
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise ({
        username,
        description,
        duration,
        date
    })
    newExercise.save()
    .then(add => {
        res.status(201).json(add)
    })
    .catch(err => {
        res.status(400).json('Error: ', err)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Exercise.findById(id)
    .then(id => {
        res.status(200).json(id)
    })
    .catch(err => {
        res.status(400).json(`Error: `, err);
    })
})

module.exports = router;
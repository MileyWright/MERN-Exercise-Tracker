const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(user =>{ 
        res.status(200).json(user)
    })
    .catch(err => 
        res.status(400).json('Error: ', err)
    )
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    User.save()
    .then(added => {
        res.status(201).json(added)
    })
    .catch(err => {
        res.status(400).json('Error: ', err)
    })
});

module.exports = router;
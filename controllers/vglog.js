//Imports

const express = require('express');
const router = express.Router();
const Game = require('../models/vg')
const Review = require('../models/review')

//ROUTES

//Show All Games
router.get('/', (req, res) =>{
    Game.find({})
        .then( games => {
            res.json(games)
        })
})

//Game Detail Route
router.get('/:id', (req, res) =>{
    Game.findById(req.params.id)
        .then(game => {
            res.json(game)
        })
})

//Exports
module.exports = router
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
            res.render('home',  {games})
        })
})

//Game Detail Route
router.get('/:id', (req, res) =>{
    Game.findById(req.params.id)
    .populate('reviews')
    .then(game => {
            console.log(game.reviews[0].title)
            res.render('index', {game})
            // res.json(game.reviews)
        })
})

//Edit Route
router.get('/:id/edit', (req, res) =>{
    Game.findById(req.params.id)
        .then(game => {
            res.json(game)
        })
})

//Update Route
//Updating single game record for testing
router.put('/:id', (req, res) => {
    console.log(req.body)
    Game.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(game => res.json(game))

})

//Exports
module.exports = router
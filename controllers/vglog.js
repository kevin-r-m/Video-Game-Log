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
//Currently rendering game and reviews
router.get('/:id', (req, res) =>{
    Game.findById(req.params.id)
    .populate('reviews')
    .then(game => {
            res.render('index', {game})
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

//new game
router.post('/', (req, res) =>{
    console.log(req.body);
    Game.create(req.body)
        .then(game => {
            res.redirect('/')
        })
})

//delete review

//delete game and reviews
router.delete('/:id', (req, res) =>{
    const routeID = req.params.id
    Review.remove({game: routeID})
    Game.findByIdAndDelete(routeID)
        .then(res.redirect('/'))
})

//Exports
module.exports = router
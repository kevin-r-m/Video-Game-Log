//Imports

const express = require('express');
const router = express.Router();
const Game = require('../models/vg')
const Review = require('../models/review')

const ejsLayouts = require('express-ejs-layouts')
router.use(ejsLayouts)

//ROUTES

//Show Route
router.get('/', (req, res) =>{
    Game.find({})
        .then( games => {
            res.render('home',  {games})
        })
})

//New Route
router.get('/new', (req, res) =>{
    res.render('new')
})

//Create game route
router.post('/', (req, res) =>{
    console.log(req.body);
    Game.create(req.body)
        .then(game => {
            res.redirect('/games')
        })
})

//New review route
router.get('/:id/review', (req, res) =>{
    const routeId = req.params.id
    res.render('review', {routeId})
})

//Create review route
router.post('/:id', (req, res) => {
    Review.create(req.body)
        .then((review) =>{
              return Game.findByIdAndUpdate(req.params.id, {$push: {reviews: review._id}})
        })
        .then((game) => {
            return Review.findOneAndUpdate({title: req.body.title}, {$set: {game: game._id}})
        })
        .then(res.redirect(`/games`))
})

//Index Route
router.get('/:id', (req, res) =>{
    Game.findById(req.params.id)
    .populate('reviews')
    .then(game => {
            res.render('index', {game})
        })
})

//Game Edit Route
router.get('/:id/edit', (req, res) =>{
    Game.findById(req.params.id)
        .then(game => {
            res.render('edit', {game})
        })
})

//Game Update Route
router.put('/:id', (req, res) => {
    console.log(req.body)
    Game.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(game => res.render('index', game))
        .catch(console.log)
})

//delete game and reviews
router.delete('/:id', (req, res) =>{
    const routeID = req.params.id
    Review.remove({game: routeID})
    Game.findByIdAndDelete(routeID)
        .then(res.redirect('/'))
})

//Exports
module.exports = router
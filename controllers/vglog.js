//Imports

const express = require('express');
const router = express.Router();
const Game = require('../models/vg')
const Review = require('../models/review')

const ejsLayouts = require('express-ejs-layouts')
router.use(ejsLayouts)

//ROUTES

router.get('/', (req, res) => {
    Game.find({})
        .populate('reviews')
        .then(games => res.json(games))
})

//Create game route
router.post('/', (req, res) =>{
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
        .then(res.redirect(`/games/${req.params.id}`))
})

//Review Edit Route
router.get('/edit/review/:id', (req, res) => {
    Review.findById(req.params.id)
    .then(review =>{
        res.render('rEdit', {review})
    })
})

//Review Update Route
router.put('/edit/review/:id', (req, res) =>{
    Review.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(review => res.redirect('/games'))
})

//Game Edit Route
router.get('/edit/:id', (req, res) =>{
    Game.findById(req.params.id)
    .populate('reviews')
        .then(game => {
            res.render('edit', {game})
        })
})

//Game Update Route
router.put('/edit/:id', (req, res) => {
    Game.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .populate('reviews')
        .then(game => res.render('index', {game:game}))
        .catch(console.log)
})

//Index Route
router.get('/:id', (req, res) =>{
    Game.findById(req.params.id)
    .populate('reviews')
    .then(game => res.json(game))
})

//delete game and reviews
router.delete('/:id', (req, res) =>{
    const routeID = req.params.id
    Review.remove({game: routeID})
    Game.findByIdAndDelete(routeID)
        .then(res.redirect('/games'))
})

//Exports
module.exports = router
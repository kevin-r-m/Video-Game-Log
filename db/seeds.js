const seedData = require('./games-seeds.json')
const Game = require('../models/vg.js')
const Review = require('../models/review.js')

// Review.deleteMany({})
//   .then(() => {
//     // Insert the dummy data and return it
//     // so we can log it in the next .then
//     return Review.insertMany(seedData);
//   })
//   // If the insert was successful, we'll see the
//   // results in the terminal
//   .then(console.log)
//   // Log the error if the insert didn't work
//   .catch(console.error)
//   // Whether it was successful or not, we need to 
//   // exit the database.
//   .finally(() => {
//     // Close the connection to Mongo
//     process.exit();
//   });

  Game.deleteMany({})
    .then(() => {
        Review.deleteMany({})
    })
    .then(() =>{
        return Review.create(
          {
            title: "Wow, what a game",
            body: "It is a good game, I would recommend it to anyone who can get a PS5",
            score: "10"
          }
        )
    })
    .then((review) => {
        return seedData.map((game) => {
            return ({...game, reviews: review._id})
        })
    })
    .then((games) => Game.insertMany(games))
    .then(console.log)
    .catch(console.error)
    .finally(() =>{
        process.exit()
    })
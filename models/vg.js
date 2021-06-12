const mongoose = require('../db/connections.js')

const GameSchema = mongoose.Schema (
    {
        title:{
            type: String, 
            required: true
        },
        description: String, 
        rating: String, 
        userScores: Number, 
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'review'
            }
        ],
        img: String
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('Game', GameSchema)
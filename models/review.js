const mongoose = require('../db/connections.js')

const ReviewSchema = mongoose.Schema (
    {
        title: {
            type: String, 
            required: true
        }, 
        body: {
            type: String, 
            required: true
        }, 
        score: {
            type: Number, 
            required: true
        },
        reviewer: {
            type: String, 
            required: true
        },
        game: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'game'
        }
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('review', ReviewSchema)
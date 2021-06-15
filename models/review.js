const mongoose = require('../db/connections.js')

const ReviewSchema = mongoose.Schema (
    {
        title: {
            type: String, 
            default: 'Untitled'
        }, 
        body: {
            type: String, 
            required: true
        }, 
        score: {
            type: Number, 
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
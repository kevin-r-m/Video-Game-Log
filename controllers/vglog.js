//Imports

const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) =>{
    res.send('You are on the home route')
})

//Exports
module.exports = router
//Imports
const express = require('express');

//Configurations
const app = express();

//Routes
app.get('/', (req, res) =>{
    res.send('You are on the home route')
})

//Ports
app.listen(4000, () => console.log('Spinning on port: 4000'))
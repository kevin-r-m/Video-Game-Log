//Imports
const express = require('express');
const VGLogController = require('./controllers/vglog')

//Configurations
const app = express();
app.use('/games', VGLogController);

//Ports
app.listen(4000, () => console.log('Spinning on port: 4000'))
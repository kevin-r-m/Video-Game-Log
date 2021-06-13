//Imports
const express = require('express');
const VGLogController = require('./controllers/vglog')
const ejsLayouts = require('express-ejs-layouts')

//Configurations
const app = express();
app.use('/games', VGLogController);
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//Ports
app.listen(4000, () => console.log('Spinning on port: 4000'))
//Imports
const express = require('express');
const app = express();
const VGLogController = require('./controllers/vglog')
const methodOverride = require('method-override');

//Configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/games', VGLogController);
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"))

//Ports
app.listen(4000, () => console.log('Spinning on port: 4000'))
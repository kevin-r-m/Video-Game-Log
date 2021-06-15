//Imports
const express = require('express');
const app = express();
const VGLogController = require('./controllers/vglog')
const ejsLayouts = require('express-ejs-layouts')

//Configurations

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/games', VGLogController);
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//Ports
app.listen(4000, () => console.log('Spinning on port: 4000'))
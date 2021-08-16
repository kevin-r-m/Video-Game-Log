//Imports
const express = require('express');
const app = express();
const VGLogController = require('./controllers/vglog')
const methodOverride = require('method-override');
const cors = require('cors')

//Configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));
app.use(cors())
app.use(express.static(__dirname + "/public"))
app.use('/games', VGLogController);
app.set("port", process.env.PORT || 4000)

app.get('/', (req, res) => {
    res.redirect('/games')
})

//Ports
app.listen(app.get('port'), () => console.log(`Spinning on port: ${app.get('port')}`))
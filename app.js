const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


app.use(bodyParser.json());
app.use(cors())

//ROUTES
const configuratorsRoutes = require('./routes/configurators');

app.use('/configurators', configuratorsRoutes);

app.get('/', (req, res) => {
    res.send(('Home page'));
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to db');
});

app.listen(3000);
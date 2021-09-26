const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());

//ROUTES
const configuratorsRoutes = require('./routes/configurators');

app.use('/configurators', configuratorsRoutes);

app.get('/', (req, res) => {
    res.send(('Cel mai dragut iubirici este iubiciul meu'));
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to db');
});

app.listen(3000);
require('dotenv').config();

const express = require('express');
const app = express();

const pies = require('./controllers/piecontroller');

app.use('/pies', pies);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

// app.use(express.static(__dirname + '/public'));

// app.get('/', (req,res) => res.render('index'));

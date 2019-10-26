require('dotenv').config();
//Express
const express = require('express');
const app = express();

// Import Controllers
const user = require('./controllers/userController');
const trails = require('./controllers/trailsController');
const userTrails = require('./controllers/userTrailsController');

// Database
const sequelize = require('./db');
sequelize.sync();
app.use(require('./middleware/headers'));
app.use(express.json());
//Routes
app.use('/auth', user); //user

app.use('/trails', trails); //all trails
app.use(require('./middleware/validatesession'))
app.use('/userTrails', userTrails);//trails user adds

app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`));
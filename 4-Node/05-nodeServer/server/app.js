// Env
require('dotenv').config();
// Modules
const express = require('express'); //1
const app = express(); //2
const testPage = require('./controllers/testcontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');

sequelize.sync();

app.use(express.json());

app.use(require('./middleware/headers'));

app.use('/test', testPage);

app.use('/api/user', user);

app.listen(3000, () => console.log("App is listening on PORT 3000."));






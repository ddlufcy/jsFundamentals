// Env
require('dotenv').config();
// Modules
const express = require('express'); //1
const app = express(); //2
const testPage = require('./controllers/testcontroller');
const authTest = require('./controllers/authtestcontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');

sequelize.sync();

app.use(express.json());

app.use(require('./middleware/headers'));
// exposed routes
app.use('/test', testPage);
app.use('/api/user', user);

// protected routes
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.listen(3000, () => console.log("App is listening on PORT 3000."));






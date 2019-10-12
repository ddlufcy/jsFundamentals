require('dotenv').config();

const express = require('express');
const app = express();

const user = require('./controllers/usercontroller');
const log = require('./controllers/logcontroller')



const sequelize = require('./db');
sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));


app.use('/auth', user);
app.use('/log', log);

app.listen(process.env.PORT, () => {console.log(`app is listening on ${process.env.PORT}`)});

app.use('/api/test', function(req, res){
    res.send("got the data");
})
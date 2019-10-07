const express = require('express'); //1
const app = express(); //2
const testPage = require('./controllers/testcontroller');

app.listen(3000, () => console.log("App is listening on PORT 3000."));

app.use('/test', testPage);

app.get('test/about');

app.get('test/contact');

app.get('test/myContacts');





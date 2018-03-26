const express = require('express');
const app = express();
const router = require('./routes/router.js');

var userData = require('./models/db.js');
// set the view engine to ejs
app.set('view engine', 'ejs')
// use res.render to load up an ejs view file


app.get('/bye', router);
app.get('/ejstest', router);
app.get('/', router);

//displays all users
app.get('/users', router);

//displays user with specific id using req.params
app.get('/users/:id', router);

app.listen(3000, function(){
console.log('Express serving at port 3000');
});

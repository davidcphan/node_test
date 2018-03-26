const express = require('express');
const app = express();
const router = require('./routes/router.js');

var userData = require('./models/db.js');
// set the view engine to ejs
app.set('view engine', 'ejs')
// use res.render to load up an ejs view file
app.get('/ejstest', function(req,res){
  res.render('user_data.ejs', {userData});
});

app.get('/bye', router);


app.get('/', function(req,res){
res.send("Hello World");
});


app.get('/david', function(req, res){
res.send("Hey mate, you've successfuly created a route for /david");
});

//displays all users
app.get('/users', function(req, res){
  var response;
  var temp_string='';
  for(i=0; i<userData.length; i++){
    temp_string+="Name: " + userData[i].name + " Email: " + userData[i].email + "ID: "+ userData[i].id;
  }
  response = temp_string;
  res.send(response);
});


//displays user with specific id using req.params
app.get('/users/:id', function(req, res){
  var searchID = req.params.id;
  var userFound = false;
  for(i=0; i<userData.length; i++){
      if(userData[i].id==searchID){
        res.send(userData[i]);
        userFound = true;
        break;
      }
  }
  if(!userFound){
    res.send('User not found in database');
  }

});

app.listen(3000, function(){
console.log('Express serving at port 3000');
});

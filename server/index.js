// create app
var express = require('express');
var app = express();


// run middleware
require('./middleware')(app);

// run passport strategy middleware
require('./passport')();

// run routes
require('./routes')(app);
var mongoose = require('mongoose');
mongoose
.connect('mongodb://babar:shahzad78@ds129540.mlab.com:29540/babar')
.then(()=> console.log('connecction successfull'))
.catch(err=> console.error(err));

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Running on port ', port);
});




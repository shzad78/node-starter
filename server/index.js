// create app
var express = require('express');
var app = express();

// run middleware
require('./middleware')(app);

// run passport strategy middleware
require('./passport')();

// run routes
require('./routes')(app);

// run mongoose;
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose
  .connect(
    'mongodb://shzad78:shahzad78@ds161315.mlab.com:61315/shzad78'
  )
  .then(() => console.log('connection successful'))
  .catch(err => console.error(err));

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Running on port ', port);
});


// create app
var express = require('express');
var app = express();

// run middleware
require('./middleware')(app);

// run passport strategy middleware
require('./passport')();

// run routes
require('./routes')(app);

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Running on port ', port);
});

//create app
var express = require('express');
var app = express();

// run middleware

require('./middleware')(app);

//run passport stretegay middleware
require('./passport')();

// run routes

require('./routes')(app)

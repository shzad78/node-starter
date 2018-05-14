var express = require('express');
var app = express();

// run middleware
require('./middleware')(app);

// run routes
require('./routes')(app);

// run webserver
app.listen(3000, () => {
  console.log('listening on port 3000');
});


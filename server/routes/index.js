var getStudentsHandler = require('../handlers/getStudentsHandler');
var submitFormHandler = require('../handlers/submitFormHandler');
var fallbackHandler = require('../handlers/fallbackHandler');
var postCategoryHandler = require('../handlers/postCategoryHandler');
var getAllData = require('../handlers/getAllData');

var passport = require('passport');

require('../passport')();

module.exports = app => {
  app.get(
    '/getStudents',
    passport.authenticate('jwt', { session: false }),
    getStudentsHandler
  );

  app.post('/student', submitFormHandler);

  app.post('/category', postCategoryHandler);

  app.get ('/categories/:id', getAllData);

  // app.use('/student/:studentname', submitFormHandler);

  // Fallback routes

  app.get('/form', fallbackHandler);
  app.get('/students', fallbackHandler);
};

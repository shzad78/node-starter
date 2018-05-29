var getStudentsHandler = require('../handlers/getStudentsHandler');
var submitFormHandler = require('../handlers/submitFormHandler');
var fallbackHandler = require('../handlers/fallbackHandler');
var passport = require('passport');

require('../passport')();

module.exports = app => {
  app.get(
    '/getStudents',
    passport.authenticate('jwt', { session: false }),
    getStudentsHandler
  );

  app.post('/student', submitFormHandler);

  // app.use('/student/:studentname', submitFormHandler);

  // Fallback routes

  app.get('/form', fallbackHandler);
};

var getStudentsHandler = require('../handlers/getStudentsHandler');

module.exports = app => {
  app.get('/students', getStudentsHandler);
};

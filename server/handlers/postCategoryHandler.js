const Category = require('../models/Category');

module.exports = function(req, res, next) {
  console.log('body is ', req.body);
  // const id = req.body.id;
  const name = req.body.name;
  const imgUrl = req.body.imgUrl;
  const subCategorys = req.body.subCategorys;

  var category = new Category({
    name,
    imgUrl,
    subCategorys
  });

  category.save((err, category) => {
    if (err) {
      console.log(err);
    } else {
      console.log('data going to db is ', category);
      res.status(201).send(category);
    }
  });
};

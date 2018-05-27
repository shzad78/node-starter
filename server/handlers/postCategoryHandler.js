const Category = require('../models/Category');
var mongoose = require('mongoose');
module.exports = function(req, res, next) {
  console.log('body is ', req.body);
  // const id = req.body.id;
  const name = req.body.name;
  const imgUrl = req.body.imgUrl;
  const subCategorys = req.body.subCategorys;
  const id = mongoose.Types.ObjectId();
  const categoryId = 'c1'

  var category = new Category({
    _id: categoryId,
    name,
    imgUrl,
    subCategorys
  });
  //Category.collection.dropIndexes({name:1})
  category.save((err, category) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).send(category);
    }
  });
};

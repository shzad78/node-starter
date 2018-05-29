var mongoose = require('mongoose');

var CategorysSchema = new mongoose.Schema({
  name: {
    type: String,
    /* unique: true,
    required: true */
  },
  imgUrl: {
    type: String
  },
  subCategorys: {
    type: [String]
  },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorysSchema);



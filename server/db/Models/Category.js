const bookshelf = require('./bookshelf');

class Category extends bookshelf.Model {
  get tableName() { return "categories"; }
  get hasTimestamps() { return false; }
}

module.exports = bookshelf.model('Category', Category);
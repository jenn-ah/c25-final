const bookshelf = require('./bookshelf');
require('./Post');

class Category extends bookshelf.Model {
  get tableName() { return "categories"; }
  get hasTimestamps() { return false; }
}

module.exports = bookshelf.model('Category', Category);
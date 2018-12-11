const bookshelf = require('./bookshelf');

class Customer extends bookshelf.Model {
  get tableName() { return "customers"; }
  get hasTimestamps() { return true; }
}

module.exports = bookshelf.model('Customer', Customer);
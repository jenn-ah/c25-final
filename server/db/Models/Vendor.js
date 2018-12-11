const bookshelf = require('./bookshelf');

class Vendor extends bookshelf.Model {
  get tableName() { return 'vendors'; }
  get hasTimestamps() { return true; }
}

module.exports = bookshelf.model('Vendor', Vendor);
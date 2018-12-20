const bookshelf = require('./bookshelf');

class Vendor extends bookshelf.Model {
  get tableName() { return 'vendors'; }
  get hasTimestamps() { return true; }

  postId() {
    return this.belongsTo('Post', 'vendor_id', 'id')
  }
}

module.exports = bookshelf.model('Vendor', Vendor);
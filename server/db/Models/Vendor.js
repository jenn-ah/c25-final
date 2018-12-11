const bookshelf = require('./bookshelf');

class Vendor extends bookshelf.Model {
  get tableName() { return 'vendors'; }
  get hasTimestamps() { return true; }

  post_id(){
    return this.hasMany('Post', 'id')
  }
}

module.exports = bookshelf.model('Vendor', Vendor);
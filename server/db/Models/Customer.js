const bookshelf = require('./bookshelf');

class Customer extends bookshelf.Model {
  get tableName() { return "customers"; }
  get hasTimestamps() { return true; }

post_id(){
  return this.hasMany('Post', 'id')
}
}

module.exports = bookshelf.model('Customer', Customer);
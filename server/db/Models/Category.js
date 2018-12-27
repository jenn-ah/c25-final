const bookshelf = require('./bookshelf');

class Category extends bookshelf.Model {
  get tableName() { return "categories"; }
  get hasTimestamps() { return false; }

  postId() {
    return this.hasMany('Post', 'category_id','id')
  }
}

module.exports = bookshelf.model('Category', Category);
const bookshelf = require('./bookshelf');


class Post extends bookshelf.Model {
  get tableName() { return "posts"; }
  get hasTimestamps() { return true; }

  customerId() {
    return this.belongsTo('Customer', 'customer_id', 'id')
  }

  categoryId() {
    return this.hasOne('Category', 'id');
  }

  postStatusId() {
    return this.hasOne('PostStatus', 'id');
  }

  postPriorityId() {
    return this.hasOne('PostPriority', 'id');
  }
}

module.exports = bookshelf.model('Post', Post);